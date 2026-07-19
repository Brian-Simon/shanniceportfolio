# EmailJS Setup Guide

This portfolio uses **EmailJS** to send contact form submissions directly to your email without needing a backend server.

## Quick Setup

### Step 1: Create EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy your **Service ID** (e.g., `service_xxxxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Name the template: "Portfolio Contact Form"
Subject: {{subject}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

---

Message:
{{message}}

---

This email was sent via your portfolio contact form.
```

4. Click **Test It** to verify
5. Copy your **Template ID** (e.g., `template_xxxxxxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** settings
2. Scroll to **API Keys**
3. Copy your **Public Key**

### Step 5: Add Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 6: Enable EmailJS in Browser
Add this to your `app/layout.tsx` before the closing `</head>` tag:

```html
<script
  type="module"
  dangerouslySetInnerHTML={{
    __html: `
      import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/index.min.js';
      emailjs.init('${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}');
      window.emailjs = emailjs;
    `,
  }}
/>
```

Or install it via npm:
```bash
npm install @emailjs/browser
```

Then import in your component:
```typescript
import emailjs from '@emailjs/browser';

// Initialize once
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
```

## Testing

1. Run your local dev server
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email inbox

## Troubleshooting

### "EmailJS library not loaded"
- Ensure you've added the script to `layout.tsx`
- Or ensure you've imported and initialized the npm package

### Emails not being sent
- Check that Service ID and Template ID are correct
- Verify your email service is properly connected in EmailJS dashboard
- Check browser console for error messages
- Ensure `.env.local` variables are set correctly

### Emails going to spam
- Add your domain to EmailJS whitelist if available
- Customize email template to include proper headers
- Test with different email providers

## Security Notes

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` is **public** - this is safe
- Never commit `.env.local` to git
- Add `.env.local` to `.gitignore`
- Consider rate limiting on your form submission if needed

## Cost

EmailJS free tier includes:
- Up to 200 emails/month
- Unlimited templates and services
- Unlimited emails from your own domain

For higher volumes, upgrade to a paid plan.

## Support

- EmailJS docs: https://www.emailjs.com/docs/
- Contact form validation: Check `lib/validation.ts`
- Form component: `components/sections/Contact.tsx`
