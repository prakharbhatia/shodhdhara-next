# Shodh Dhara — Next.js Website

A modern, elegant Next.js website for **Shodh Dhara** — A UGC Care Listed Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities.

## Tech Stack

- **Next.js 16.2.4** (Latest Stable) with App Router
- **React 19.2.4**
- **Tailwind CSS 4** with custom theme
- **TypeScript**
- **Static Export** for optimal performance

## Project Structure

```
shodhdhara-next/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page (/)
│   │   ├── contact-us/         # Contact Us page (/contact-us/)
│   │   ├── about-us/           # About Us page (/about-us/)
│   │   ├── research-journals/  # About Research Journals (/research-journals/)
│   │   ├── guidelines/         # Author Guidelines (/guidelines/)
│   │   ├── frequency-of-publication/  # Publication Schedule (/frequency-of-publication/)
│   │   ├── board-members/      # Board Members (/board-members/)
│   │   ├── declaration-form/   # Declaration Form Download (/declaration-form/)
│   │   ├── membership-form/    # Membership Form Download (/membership-form/)
│   │   ├── current-issue/      # Latest Issues Grid (/current-issue/)
│   │   ├── layout.tsx          # Root layout with Header & Footer
│   │   └── globals.css         # Global styles & Tailwind theme
│   └── components/
│       ├── Header.tsx          # Navigation header with mobile menu
│       ├── Footer.tsx          # Site footer
│       └── ContactForm.tsx     # Reusable contact form
├── public/
│   ├── files/                  # PDF forms (Declaration, Membership)
│   └── covers/                 # Journal issue cover images
├── dist/                       # Static export output
└── next.config.ts              # Next.js configuration
```

## Navigation Menu Order (Compliance)

The navigation menu follows the exact order required for compliance:

1. **Home** (`/`)
2. **Contact Us** (`/contact-us/`)
3. **About Us** (`/about-us/`)
4. **About Research Journals** (`/research-journals/`)
5. **Guidelines** (`/guidelines/`)
6. **Frequency of Publication** (`/frequency-of-publication/`)
7. **Board Members** (`/board-members/`)
8. **Declaration Form** (`/declaration-form/`)
9. **Membership Form** (`/membership-form/`)
10. **Latest Issues** (`/current-issue/`)

## Design Features

- **Minimum font size: 19px** throughout the site
- **Hindi Unicode text** (Noto Sans Devanagari font) for all Hindi content
- **Responsive design** — works beautifully on mobile, tablet, and desktop
- **Navy blue (#012146) & Gold (#FFD700)** color scheme, elegantly modernized
- **Sticky header** with mobile hamburger menu
- **Smooth scroll** and elegant hover transitions
- **SEO optimized** with proper metadata for each page
- **Accessibility features** — focus-visible outlines, semantic HTML

## Pages & Content

| Page | Slug | Content |
|------|------|---------|
| Home | `/` | Journal info, contact form, editor details, map |
| Contact Us | `/contact-us/` | Contact methods, form, editor info, map |
| About Us | `/about-us/` | About journal, mission & vision, journal details (Hindi + English) |
| About Research Journals | `/research-journals/` | Role of journals, peer review, knowledge preservation (Hindi + English) |
| Guidelines | `/guidelines/` | Author guidelines — eligibility, format, submission, review (Hindi + English) |
| Frequency of Publication | `/frequency-of-publication/` | Quarterly schedule, submission deadlines (Hindi + English) |
| Board Members | `/board-members/` | Patron, Editorial Advisory, Referee boards |
| Declaration Form | `/declaration-form/` | PDF download link + instructions |
| Membership Form | `/membership-form/` | PDF download link + benefits |
| Latest Issues | `/current-issue/` | Grid of all issues (41–66) with download links |

## File Hosting Recommendations for PDFs

### The Problem
Journal issue PDFs can become very large (often 10–100+ MB each). You asked about GitHub limits — here's the breakdown:

**GitHub Limits:**
- Individual file limit: **100 MB** (hard limit via Git LFS)
- Regular push limit: **25 MB** per file recommended
- GitHub Pages total repo size: **1 GB** soft limit
- GitHub Releases: **2 GB** per file (better option)

### Recommended Solutions (Best to Good)

#### 1. **Google Drive** (Recommended — Free & Easy)
- **Free tier:** 15 GB shared across Google services
- Upload PDFs to Google Drive
- Set sharing to "Anyone with the link can view"
- Use direct download links in the website
- **Pros:** Free, reliable, easy to manage
- **Cons:** 15 GB limit, needs manual link generation
- **Best for:** Getting started quickly with moderate file sizes

#### 2. **Cloudflare R2** (Recommended — Best Value)
- **Free tier:** 10 GB storage + 10 million reads/month
- Very cheap after free tier (~$0.015/GB/month)
- S3-compatible API
- No egress fees (unlike AWS S3)
- **Pros:** Extremely cheap, fast global CDN, no egress costs
- **Cons:** Requires technical setup
- **Best for:** Long-term, cost-effective hosting

#### 3. **AWS S3 + CloudFront** (Enterprise-Grade)
- **Free tier:** 5 GB storage + 2,000 PUT requests + 20,000 GET requests for 12 months
- After free tier: ~$0.023/GB storage + CloudFront costs
- **Pros:** Industry standard, highly reliable, fast global CDN
- **Cons:** Egress fees can add up, more complex setup
- **Best for:** Enterprise needs, very large archives

#### 4. **Vercel Blob** (Next.js Native)
- **Free tier:** 250 MB storage + 100 MB uploads
- Paid plans start at ~$0.50/GB/month
- Native integration with Next.js
- **Pros:** Easy integration with Next.js, fast
- **Cons:** Expensive for large storage needs
- **Best for:** Small files, if already deploying on Vercel

#### 5. **GitHub Releases**
- Attach PDFs to GitHub releases
- **Limit:** 2 GB per file
- **Pros:** Free, version-controlled, direct download links
- **Cons:** Manual process for each release, not a CDN
- **Best for:** Occasional large file distribution

### Our Recommendation

**For Shodh Dhara, we recommend:**

1. **Short-term (immediate):** Use **Google Drive** with shared links. Upload your PDFs, set them to "Anyone with the link can view," and update the `pdfUrl` values in `src/app/current-issue/page.tsx`.

2. **Long-term:** Migrate to **Cloudflare R2** for cost-effective, fast, scalable hosting. The free tier of 10 GB is more than enough for 25+ journal issues.

### How to Update PDF Links

Edit `src/app/current-issue/page.tsx` and update the `pdfUrl` field for each issue:

```typescript
{
  number: 66,
  pdfUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
  coverUrl: "/covers/66-cover.jpg",
  year: "2023",
},
```

For Google Drive direct download links, use: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# The static files will be in the `dist/` directory
```

## Deployment

The site is configured for static export. The `dist/` folder contains all static HTML, CSS, and JS files ready for deployment to any static hosting service:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any web server** (Apache, Nginx, etc.)

## Customization

### Colors
Edit `src/app/globals.css` — the custom color theme uses CSS variables:
- `--color-navy: #012146` — Primary brand color
- `--color-gold: #FFD700` — Accent color
- `--color-cream: #FAFBFC` — Background color

### Hindi Text
All Hindi content uses the `.hindi` CSS class with the Noto Sans Devanagari font. Verify spellings in the respective page files.

## Contact

For questions about the website, contact:
- **Email:** shodhdharajournal2005@gmail.com
- **Phone:** +91-9415592698
