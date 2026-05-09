import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shodh Dhara | Quarterly Peer Reviewed Research Journal",
    template: "%s | Shodh Dhara",
  },
  description:
    "A UGC Care Listed Research Journal. Published by Shakshik Avam Anusandhan Sansthan Orai (Jalaun) U.P. ISSN: 0975-3664 | RNI: U.P.BIL/2012/43696. A Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities.",
  keywords: [
    "Shodh Dhara",
    "शोध धारा",
    "Research Journal",
    "UGC Care",
    "Hindi Journal",
    "English Journal",
    "Arts and Humanities",
    "Peer Reviewed",
    "Referred Journal",
    "Orai",
    "Jalaun",
    "Uttar Pradesh",
    "ISSN 0975-3664",
    "RNI U.P.BIL/2012/43696",
    "Academic Journal",
    "Quarterly Journal",
    "Bi-Lingual Journal",
    "Research Publication",
    "Scholarly Journal",
    "Indian Research Journal",
  ],
  authors: [{ name: "Shodh Dhara" }],
  creator: "Shodh Dhara",
  publisher: "Shakshik Avam Anusandhan Sansthan Orai (Jalaun) U.P.",
  metadataBase: new URL("https://shodhdhara.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shodhdhara.com",
    siteName: "Shodh Dhara",
    title: "Shodh Dhara - Quarterly Peer Reviewed Research Journal",
    description:
      "A UGC Care Listed Research Journal. Published by Shakshik Avam Anusandhan Sansthan Orai (Jalaun) U.P. ISSN: 0975-3664",
    images: [
      {
        url: "https://shodhdhara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shodh Dhara - Research Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shodhdhara",
    creator: "@shodhdhara",
    title: "Shodh Dhara - Quarterly Peer Reviewed Research Journal",
    description:
      "A UGC Care Listed Research Journal. ISSN: 0975-3664 | RNI: U.P.BIL/2012/43696",
    images: ["https://shodhdhara.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Education",
  classification: "Research Journal, Academic Publication",
  other: {
    "linkedin:owner": "shodhdhara",
    "fb:pages": "shodhdhara",
  },
};

// JSON-LD FAQ Schema for SEO (not visible on pages)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Shodh Dhara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shodh Dhara (शोध धारा) is a prestigious Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal dedicated to the field of Arts & Humanities. Established in 2005-06, it is a UGC Care Listed Research Journal with ISSN: 0975-3664.",
      },
    },
    {
      "@type": "Question",
      name: "How can I submit my research paper to Shodh Dhara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit your research paper via email to shodhdharajournal2005@gmail.com. Please follow the Author Guidelines available on our website. Include a filled Declaration Form and ensure your paper follows the prescribed format.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ISSN and RNI number of Shodh Dhara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ISSN number of Shodh Dhara is 0975-3664 and the RNI number is U.P.BIL/2012/43696.",
      },
    },
    {
      "@type": "Question",
      name: "Is Shodh Dhara a UGC Care Listed Journal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Shodh Dhara is a UGC Care Listed Research Journal, making it eligible for academic credit and recognition under the UGC CARE framework.",
      },
    },
    {
      "@type": "Question",
      name: "In which languages can I submit papers to Shodh Dhara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shodh Dhara accepts research papers in both Hindi and English languages. It is a Bi-Lingual (Hindi & English) Research Journal.",
      },
    },
    {
      "@type": "Question",
      name: "What is the publication frequency of Shodh Dhara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shodh Dhara is a quarterly research journal published four times a year: January-March, April-June, July-September, and October-December.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the Chief Editor of Shodh Dhara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. (Smt.) Neelam Mukesh is the Chief Editor of Shodh Dhara. Dr. Rajesh Chandra Pandey serves as the Editor.",
      },
    },
  ],
};

// Organization JSON-LD
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shodh Dhara",
  alternateName: "शोध धारा",
  url: "https://shodhdhara.com",
  logo: "https://shodhdhara.com/logo.png",
  description:
    "A Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities",
  sameAs: [
    "https://shodhdhara.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9415592698",
    contactType: "Editorial Office",
    email: "shodhdharajournal2005@gmail.com",
    areaServed: "IN",
    availableLanguage: ["Hindi", "English"],
  },
};

// Periodical JSON-LD
const periodicalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Periodical",
  name: "Shodh Dhara",
  issn: "0975-3664",
  publisher: {
    "@type": "Organization",
    name: "Shakshik Avam Anusandhan Sansthan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orai",
      addressRegion: "Jalaun",
      postalCode: "285001",
      addressCountry: "IN",
    },
  },
  inLanguage: ["hi", "en"],
  about: "Arts & Humanities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(periodicalJsonLd) }}
        />
        {/* Security Headers meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
