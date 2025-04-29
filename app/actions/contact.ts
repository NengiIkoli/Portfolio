"use server"

import { z } from "zod"
import { sendContactEmail } from "@/lib/email"

// Define the schema for form validation
const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  phone: z.string().optional(),
})

export type ContactFormData = z.infer<typeof FormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = FormSchema.safeParse(formData)

    // If validation fails, return the errors
    if (!validatedData.success) {
      const errors: Record<string, string> = {}

      validatedData.error.issues.forEach((issue) => {
        const path = issue.path[0] as string
        errors[path] = issue.message
      })

      return {
        success: false,
        message: "Please check the form for errors.",
        errors,
      }
    }

    // Log the form data for debugging
    console.log("Form submission received:", {
      name: validatedData.data.name,
      email: validatedData.data.email,
      subject: validatedData.data.subject,
      messageLength: validatedData.data.message.length,
    })

    // Send the email
    const emailSent = await sendContactEmail(validatedData.data)

    if (!emailSent) {
      return {
        success: false,
        message: "There was an error sending your message. Please try again later.",
      }
    }

    // Return success response
    return {
      success: true,
      message: "Your message has been received! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Form submission error:", error)

    // Return generic error message
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}
