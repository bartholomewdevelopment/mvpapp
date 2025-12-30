#!/bin/bash

# MVP Applications - Firebase Setup Script
# Run this script in your project root directory

echo "🚀 MVP Applications - Firebase Setup Script"
echo "============================================"
echo ""

# Create image directories
echo "📁 Creating image directories..."
mkdir -p public/images/testimonials
mkdir -p public/images/portfolio

echo "📥 Downloading images from CloudFront..."

# Main images
echo "  - Downloading main images..."
curl -s -o public/images/joseph-bartholomew.jpg "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750781225423_cabf3619.jpg"
curl -s -o public/images/bartholomew-dev-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1751435804797_1eccae4d.png"
curl -s -o public/images/mvp-applications-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1752810698242_af3afd62.png"

# Portfolio images
echo "  - Downloading portfolio images..."
curl -s -o public/images/portfolio/overtime-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750782896833_0c0a436b.png"
curl -s -o public/images/portfolio/overtime-logo.jpg "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791298456_fb2626bf.jpg"

# Testimonial images
echo "  - Downloading testimonial images..."
curl -s -o public/images/testimonials/influence-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790352506_5b30fc41.png"
curl -s -o public/images/testimonials/influence-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272686_7ed9240a.png"
curl -s -o public/images/testimonials/homecoming-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790676485_0ea79565.png"
curl -s -o public/images/testimonials/homecoming-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272075_891b41b6.png"
curl -s -o public/images/testimonials/farms-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790209936_f42d1016.png"
curl -s -o public/images/testimonials/farms-logo.jpg "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791271659_c3cdd1d5.jpg"
curl -s -o public/images/testimonials/hollowlog-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750782895862_2c917b36.png"
curl -s -o public/images/testimonials/hollowlog-logo.webp "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272512_8422ab29.webp"

echo "✅ Images downloaded successfully!"
echo ""

# Check if firebase CLI is installed
if command -v firebase &> /dev/null; then
    echo "✅ Firebase CLI is installed"
else
    echo "⚠️  Firebase CLI not found. Install it with:"
    echo "   npm install -g firebase-tools"
    echo ""
fi

# Check if logged in to Firebase
echo ""
echo "📋 Next steps:"
echo "1. Run 'firebase login' if you haven't already"
echo "2. Update .firebaserc with your Firebase project ID"
echo "3. Update src/lib/emailService.ts with your EmailJS credentials"
echo "4. Run 'npm install' to install dependencies"
echo "5. Run 'npm run build' to build the project"
echo "6. Run 'firebase deploy' to deploy to Firebase Hosting"
echo ""
echo "🌐 To connect your domain (mvpapp.org):"
echo "   1. Go to Firebase Console > Hosting"
echo "   2. Click 'Add custom domain'"
echo "   3. Follow the DNS configuration steps"
echo ""
echo "Done! 🎉"
