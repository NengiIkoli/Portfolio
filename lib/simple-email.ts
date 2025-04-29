import type { ContactFormData } from "@/app/actions/contact"

export async function storeContactSubmission(data: ContactFormData) {
  // In a real application, you would store this in a database
  // For now, we'll just log it to the console
  console.log("Contact form submission stored:", {
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    subject: data.subject,
    message: data.message,
    timestamp: new Date().toISOString(),
  })

  return true
}
