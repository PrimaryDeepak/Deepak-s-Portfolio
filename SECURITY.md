# 🔒 SECURITY NOTICE

## Environment Variables Security

This project uses environment variables to store sensitive configuration data like EmailJS credentials. 

### ⚠️ NEVER commit these files to Git:
- `.env` - Contains actual production credentials
- Any file with real API keys, passwords, or sensitive data

### ✅ Safe to commit:
- `.env.example` - Template with placeholder values
- Code that uses `process.env.VARIABLE_NAME`

## 🔧 Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your actual values in `.env`:**
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

3. **For deployment (Vercel/Netlify):**
   - Add these environment variables in your hosting platform's dashboard
   - Never hardcode credentials in your source code

## 🛡️ Security Best Practices

- **Development**: Use `.env` file (gitignored)
- **Production**: Set environment variables in hosting platform
- **Never**: Hardcode credentials in source code
- **Always**: Use `process.env.VARIABLE_NAME` in code