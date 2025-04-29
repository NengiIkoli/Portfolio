# Nengi Ikoli Portfolio

This is the source code for Nengi Ikoli's personal portfolio website.

## Environment Variables

To enable the contact form functionality, you need to set up the following environment variables in a `.env.local` file at the root of the project:

\`\`\`
# Email Configuration
EMAIL_TO=ikolinengi1@gmail.com
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

### Setting up Resend for email delivery

This project uses [Resend](https://resend.com/) for reliable email delivery in serverless environments:

1. Sign up for a free Resend account at https://resend.com/
2. Create an API key
3. Add the API key to your environment variables as `RESEND_API_KEY`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
