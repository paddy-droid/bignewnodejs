import sgMail from '@sendgrid/mail';

// This is a placeholder mailer function.
// Replace with actual email sending logic (e.g., using Nodemailer, SendGrid, etc.)

interface MailOptions {
  to: string;
  subject: string;
  body: string;
}

export const sendMail = async (options: MailOptions): Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string); // Use environment variable for API key

  const msg = {
    to: options.to,
    from: 'no-reply@fensterservice.at', // Replace with your verified sender email
    subject: options.subject,
    text: options.body,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>', // Optional: HTML body
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email via SendGrid:', error.message);
    } else if (typeof error === 'object' && error !== null && 'response' in error && typeof (error as any).response?.body === 'string') {
       console.error('Error sending email via SendGrid:', (error as any).response.body);
    }
    throw error; // Re-throw or handle as needed
  }
};