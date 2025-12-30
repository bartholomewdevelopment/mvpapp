# External Images to Download and Host Locally

## CloudFront Images Used in Your Site

These images are currently hosted on Famous.ai's CloudFront CDN. You should download them
and place them in your `/public/images/` folder, then update the URLs in your components.

### Images to Download:

1. **Joseph Bartholomew Headshot** (About.tsx)
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750781225423_cabf3619.jpg
   - Save as: `/public/images/joseph-bartholomew.jpg`

2. **Bartholomew Development Logo** (Footer.tsx)
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1751435804797_1eccae4d.png
   - Save as: `/public/images/bartholomew-dev-logo.png`

3. **MVP Applications Logo** (Navigation.tsx)
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1752810698242_af3afd62.png
   - Save as: `/public/images/mvp-applications-logo.png`

4. **Overtime Athletic Management Screenshot** (Portfolio.tsx)
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750782896833_0c0a436b.png
   - Save as: `/public/images/portfolio/overtime-screenshot.png`

5. **Overtime AM Logo** (Portfolio.tsx)
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791298456_fb2626bf.jpg
   - Save as: `/public/images/portfolio/overtime-logo.jpg`

### Testimonial Images (Testimonials.tsx):

6. **Influence on Purpose Screenshot**
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790352506_5b30fc41.png
   - Save as: `/public/images/testimonials/influence-screenshot.png`

7. **Influence on Purpose Logo**
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272686_7ed9240a.png
   - Save as: `/public/images/testimonials/influence-logo.png`

8. **Homecoming Ranch Screenshot**
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790676485_0ea79565.png
   - Save as: `/public/images/testimonials/homecoming-screenshot.png`

9. **Homecoming Ranch Logo**
   - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272075_891b41b6.png
   - Save as: `/public/images/testimonials/homecoming-logo.png`

10. **FARMS Screenshot**
    - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790209936_f42d1016.png
    - Save as: `/public/images/testimonials/farms-screenshot.png`

11. **FARMS Logo**
    - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791271659_c3cdd1d5.jpg
    - Save as: `/public/images/testimonials/farms-logo.jpg`

12. **Hollow Log Studios Screenshot**
    - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750782895862_2c917b36.png
    - Save as: `/public/images/testimonials/hollowlog-screenshot.png`

13. **Hollow Log Studios Logo**
    - URL: https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272512_8422ab29.webp
    - Save as: `/public/images/testimonials/hollowlog-logo.webp`

---

## How to Download

### Option 1: Manual Download
Right-click each URL above and "Save As" to your computer, then place in the appropriate folder.

### Option 2: Using curl (Linux/Mac)
```bash
mkdir -p public/images/testimonials public/images/portfolio

# Main images
curl -o public/images/joseph-bartholomew.jpg "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750781225423_cabf3619.jpg"
curl -o public/images/bartholomew-dev-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1751435804797_1eccae4d.png"
curl -o public/images/mvp-applications-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1752810698242_af3afd62.png"

# Portfolio
curl -o public/images/portfolio/overtime-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750782896833_0c0a436b.png"
curl -o public/images/portfolio/overtime-logo.jpg "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791298456_fb2626bf.jpg"

# Testimonials
curl -o public/images/testimonials/influence-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790352506_5b30fc41.png"
curl -o public/images/testimonials/influence-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272686_7ed9240a.png"
curl -o public/images/testimonials/homecoming-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790676485_0ea79565.png"
curl -o public/images/testimonials/homecoming-logo.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272075_891b41b6.png"
curl -o public/images/testimonials/farms-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750790209936_f42d1016.png"
curl -o public/images/testimonials/farms-logo.jpg "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791271659_c3cdd1d5.jpg"
curl -o public/images/testimonials/hollowlog-screenshot.png "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750782895862_2c917b36.png"
curl -o public/images/testimonials/hollowlog-logo.webp "https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1750791272512_8422ab29.webp"
```

---

## After Downloading: Update Component URLs

Once you've downloaded the images, update these files:

1. **About.tsx** - Line ~93: Change to `/images/joseph-bartholomew.jpg`
2. **Footer.tsx** - Line ~60: Change to `/images/bartholomew-dev-logo.png`
3. **Navigation.tsx** - Line ~33: Change to `/images/mvp-applications-logo.png`
4. **Portfolio.tsx** - Lines ~32, ~50: Update portfolio image paths
5. **Testimonials.tsx** - Lines ~12-52: Update all testimonial image paths
