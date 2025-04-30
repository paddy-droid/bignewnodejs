import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer'; // Import the sendMail function

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, message, recaptchaToken } = data;

    // Basic validation
    if (!name || !phone || !message || !recaptchaToken) {
      return NextResponse.json({ success: false, error: 'Missing required fields or reCAPTCHA token' }, { status: 400 });
    }

    // Server-side reCAPTCHA verification
    const secretKey = '6LdeGSorAAAAAFUlvFD0YGIbLa_VSPjfAJWNpPGn'; // Replaced with your actual secret key

    if (!secretKey) {
        console.error('RECAPTCHA_SECRET_KEY is not set');
        return NextResponse.json({ success: false, error: 'Server configuration error: reCAPTCHA secret key not set.' }, { status: 500 });
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${recaptchaToken}`,
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success || verificationResult.score < 0.5) { // Adjust score threshold as needed
      console.error('reCAPTCHA verification failed:', verificationResult);
      return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // reCAPTCHA verification successful, proceed with processing the form data

    // Construct email body
    const emailBody = `
      Name: ${name}
      Telefonnummer: ${phone}
      Nachricht:
      ${message}
    `;

    // Send email
    await sendMail({
      to: 'info@fensterservice-rowo.at', // Recipient email address
      subject: 'Neue Kontaktformular-Nachricht',
      body: emailBody,
    });

    console.log('Contact form submission processed and email sent.');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}