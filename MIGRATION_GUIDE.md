# MVP Applications - Firebase Migration Guide

## Overview
This guide covers migrating your site from Famous.ai hosting to Firebase Hosting with the domain mvpapp.org.

---

## 🔍 Issues Found in Current Codebase

### 1. **Famous.ai Badge Removal Code** (index.html)
The code to remove the Famous.ai badge is already in place - this is fine to keep as a safety measure.

### 2. **Supabase Integration** (emailService.ts)
Your site uses Supabase for storing form responses:
```
https://rydzuvdycnipgpgbfzgy.supabase.co/functions/v1/c8006416-b74e-4c1a-aa80-e30609c84e8b
```
**Action Required:** This endpoint may be tied to Famous.ai's Supabase project. You'll need to either:
- Create your own Supabase project and update this URL
- Or remove Supabase integration if not needed

### 3. **EmailJS Configuration** (emailService.ts)
The EmailJS credentials are placeholder values:
```javascript
'service_your_service_id'
'template_initial_id' / 'template_complete_id'
'your_public_key'
```
**Action Required:** Replace with your actual EmailJS credentials.

### 4. **External CDN Images**
Your site uses CloudFront URLs for images:
- `https://d64gsuwffb70l.cloudfront.net/...`
These may be tied to Famous.ai's CDN. Consider:
- Downloading these images and hosting them locally in `/public`
- Or using Firebase Storage

### 5. **Google Analytics** (index.html)
GA tracking ID is already configured: `G-VDJFT2K614`
Verify this is YOUR GA property.

### 6. **PrivacyPolicy.tsx Issue**
The component tries to render `AppLayout` as a wrapper with children, but `AppLayout` doesn't accept children props - it renders its own layout. This needs to be fixed.

---

## 📁 Files to Create for Firebase

### 1. firebase.json (Firebase Hosting Configuration)
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
```

### 2. .firebaserc (Firebase Project Configuration)
```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}
```

---

## 🚀 Step-by-Step Migration Instructions

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Create a Firebase Project (if you don't have one)
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it something like "mvp-applications"
4. Enable/disable Google Analytics as desired
5. Wait for project creation

### Step 4: Initialize Firebase in Your Project
```bash
cd your-project-folder
firebase init hosting
```
- Select your project
- Set public directory to: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

### Step 5: Update Files That Need Changes

#### A. Fix emailService.ts
Replace placeholder EmailJS credentials with your actual ones:
1. Sign up at https://www.emailjs.com/
2. Create a service (Gmail, Outlook, etc.)
3. Create email templates
4. Get your public key
5. Update the file with real values

#### B. Fix or Remove Supabase Integration
Option 1 - Create your own Supabase project:
1. Go to https://supabase.com/
2. Create a new project
3. Create an Edge Function for form storage
4. Update the URL in emailService.ts

Option 2 - Remove Supabase (simpler):
Just rely on EmailJS for form submissions and remove the Supabase fetch call.

#### C. Download and Host Images Locally
Download all images from CloudFront and place in `/public`:
- headshot.jpg (already have this)
- logo images
- portfolio screenshots
- testimonial images

Then update the image URLs in your components.

### Step 6: Build Your Project
```bash
npm install
npm run build
```

### Step 7: Deploy to Firebase
```bash
firebase deploy --only hosting
```

### Step 8: Connect Your Custom Domain (mvpapp.org)

1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Enter: `mvpapp.org`
4. Also add: `www.mvpapp.org`
5. Firebase will provide DNS records to add

#### DNS Records to Add at Your Domain Registrar:
For `mvpapp.org` (apex domain):
- Type: A
- Host: @
- Value: Firebase will provide (usually 151.101.1.195 and 151.101.65.195)

For `www.mvpapp.org`:
- Type: CNAME
- Host: www
- Value: `your-project-id.web.app`

### Step 9: Wait for SSL Provisioning
Firebase automatically provisions SSL certificates. This can take 24-48 hours.

---

## 📋 Checklist Before Going Live

- [ ] EmailJS configured with real credentials
- [ ] Supabase configured or removed
- [ ] All CloudFront images replaced with local versions
- [ ] Google Analytics property verified as yours
- [ ] Privacy Policy page fixed
- [ ] Build succeeds without errors
- [ ] Test all forms and modals
- [ ] Test mobile responsiveness
- [ ] DNS records configured
- [ ] SSL certificate active

---

## 🔧 Optional Improvements

1. **Environment Variables**: Create a `.env` file for sensitive configs:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_INITIAL=your_template_id
   VITE_EMAILJS_TEMPLATE_COMPLETE=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_SUPABASE_URL=your_supabase_url
   ```

2. **Firebase Analytics**: Replace Google Analytics with Firebase Analytics for unified platform.

3. **Firebase Functions**: Use Firebase Functions instead of Supabase for form handling.

---

## Need Help?

If you get stuck on any step, feel free to ask for more detailed guidance on that specific part.
