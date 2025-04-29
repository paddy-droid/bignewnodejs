import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Basic validation (can be expanded)
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Placeholder for sending email (replace with actual mailer logic)
    console.log('Received contact form submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // In a real application, you would call a mailer function here, e.g.:
    // await sendMail({ to: 'info@fensterservice.at', subject: 'New Contact Form Submission', body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}