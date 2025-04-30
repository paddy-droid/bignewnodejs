# Contact Form Implementation Plan

This plan outlines the steps to implement a contact form with Name, Phone Number, and Message fields, integrate Google reCAPTCHA v3, and configure email sending using a service like SendGrid on the contact page (`fensterservice/src/app/kontakt/page.tsx`).

## Plan Steps:

1.  **Create a dedicated Contact Form component:** Create a new React component, likely in `fensterservice/src/components/`, to encapsulate the form logic and UI. This component will include input fields for Name, Phone Number, and Message.
2.  **Integrate reCAPTCHA v3 Script:** Add the Google reCAPTCHA v3 script to your application. This is typically done in the main layout file (`fensterservice/src/app/layout.tsx`) to ensure the script is available globally.
3.  **Implement Client-Side reCAPTCHA:** Within the new Contact Form component, use the reCAPTCHA v3 API to generate a token when the user attempts to submit the form.
4.  **Add Contact Form to Kontakt Page:** Import the new Contact Form component into `fensterservice/src/app/kontakt/page.tsx` and place it in the appropriate section, replacing the current placeholder.
5.  **Modify API Route for Submission:** Modify the existing API route at `fensterservice/src/app/api/contact/route.ts` to handle the form submission. This route will receive the form data and the reCAPTCHA token from the client.
6.  **Server-Side reCAPTCHA Verification:** In the API route, send the reCAPTCHA token and your secret key to Google's reCAPTCHA verification API to confirm the user's legitimacy.
7.  **Implement Email Sending using SendGrid (or similar):** If the reCAPTCHA verification is successful, the API route will use the `fensterservice/lib/mailer.ts` function (which will be updated to use a service like SendGrid) to send an email containing the form data to `info@fensterservice-rowo.at`.
8.  **Configure Email Sending with API Key:** Update the `fensterservice/lib/mailer.ts` file to use the chosen email service's library (e.g., SendGrid's Node.js library) and configure it using an API key stored in environment variables.
9.  **Handle Response:** The API route will send a response back to the client indicating whether the submission was successful or if there were errors (including reCAPTCHA verification or email sending failure).
10. **Display Feedback:** The Contact Form component on the client side will display appropriate feedback to the user based on the API response.
11. **Environment Variables:** Ensure that your reCAPTCHA site key and secret key, as well as the email service API key, are securely stored and accessed using environment variables.

## Visual Representation:

```mermaid
graph TD
    A[User visits Kontakt page] --> B[Page loads with Contact Form and reCAPTCHA script];
    B --> C[User fills out form fields];
    C --> D[User clicks Submit];
    D --> E[Contact Form component requests reCAPTCHA v3 token];
    E --> F[Google reCAPTCHA API returns token];
    F --> G[Contact Form component sends form data and token to /api/contact];
    G --> H[API Route receives data and token];
    H --> I[API Route sends token and secret key to Google for verification];
    I --> J{Google Verification Result};
    J -- Success --> K[API Route processes form data e.g., sends email];
    J -- Failure --> L[API Route returns verification error];
    K --> M[API Route returns success response];
    L --> N[Contact Form displays error message];
    M --> O[Contact Form displays success message];
    N --> P[User sees result];
    O --> P;