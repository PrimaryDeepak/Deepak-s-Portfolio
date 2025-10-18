# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in your portfolio.

## Prerequisites
- EmailJS account (free at https://www.emailjs.com/)
- Email service (Gmail, Outlook, etc.)

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/ and create a free account
2. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (e.g., Gmail, Outlook)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with the following variables:
   - `{{name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name (recipient)

Example template:
```
Subject: New Contact from {{name}} - {{subject}}

You have received a new message from your portfolio contact form:

From: {{name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent through your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Replace the placeholder values in `.env`:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

### 6. Test the Setup
1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Security Notes
- Never commit your `.env` file to version control
- The public key is safe to use in client-side code
- For production, set environment variables in your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting

### Common Issues:
1. **Email not received**: Check spam folder, verify template variables
2. **CORS errors**: Ensure your domain is added to EmailJS settings
3. **Form submission fails**: Check console for error messages, verify all IDs are correct

### Rate Limits:
- Free EmailJS accounts have a limit of 200 emails per month
- Consider upgrading for higher limits in production

## Production Deployment

### Vercel
Add environment variables in your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with the same names as in your `.env` file

### Netlify
Add environment variables in Netlify:
1. Go to Site Settings > Environment Variables
2. Add each variable with the same names as in your `.env` file

The contact form is now fully functional and will send real emails to your configured email address!