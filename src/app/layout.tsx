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
    template: "%s | Shodh Dhara Journal",
  },
  description:
    "A UGC Care Listed Research Journal (ISSN: 0975-3664). Published by Shakshik Avam Anusandhan Sansthan, Orai (Jalaun), U.P. A Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities since 2005.",
  keywords: [
    "Shodh Dhara",
    "शोध धारा",
    "Research Journal",
    "UGC Care Listed",
    "UGC CARE",
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
    "Hindi Research",
    "Humanities Research",
    "Scholarly Publication",
    "Peer Review Journal",
    "Open Access Journal",
    "UGC Recognized Journal",
  ],
  authors: [{ name: "Shodh Dhara" }],
  creator: "Shodh Dhara",
  publisher: "Shakshik Avam Anusandhan Sansthan Orai (Jalaun) U.P.",
  metadataBase: new URL("https://shodhdhara.com"),
  alternates: {
    canonical: "https://shodhdhara.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shodhdhara.com",
    siteName: "Shodh Dhara",
    title: "Shodh Dhara - Quarterly Peer Reviewed Research Journal",
    description:
      "UGC Care Listed Research Journal ISSN 0975-3664. A Quarterly Peer Reviewed, Referred, Bi-Lingual Research Journal of Arts & Humanities since 2005.",
    images: [
      {
        url: "https://shodhdhara.com/logo.png",
        width: 512,
        height: 512,
        alt: "Shodh Dhara - Quarterly Peer Reviewed Research Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shodhdhara",
    creator: "@shodhdhara",
    title: "Shodh Dhara - Quarterly Peer Reviewed Research Journal",
    description:
      "UGC Care Listed Research Journal ISSN 0975-3664. Arts & Humanities since 2005.",
    images: ["https://shodhdhara.com/logo.png"],
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
  category: "Education",
  classification: "Research Journal, Academic Publication",
  other: {
    "linkedin:owner": "shodhdhara",
    "fb:pages": "shodhdhara",
  },
};

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
        text: "Dr. (Smt.) Neelam Mukesh is the Chief Editor of Shodh Dhara. Dr. Rajesh Chandra Pandey serves as the Editor, and Dr. Shravan Kumar Tripathi serves as the Co-Editor.",
      },
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shodh Dhara",
  alternateName: "शोध धारा",
  url: "https://shodhdhara.com",
  logo: "https://shodhdhara.com/logo.png",
  description:
    "A Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9415592698",
    contactType: "Editorial Office",
    email: "shodhdharajournal2005@gmail.com",
    areaServed: "IN",
    availableLanguage: ["Hindi", "English"],
  },
};

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

// BreadcrumbList Schema for site structure
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElements: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shodhdhara.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://shodhdhara.com/about-us/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Latest Issues",
      item: "https://shodhdhara.com/current-issue/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Guidelines",
      item: "https://shodhdhara.com/guidelines/",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Board Members",
      item: "https://shodhdhara.com/board-members/",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Research Journals",
      item: "https://shodhdhara.com/research-journals/",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Frequency of Publication",
      item: "https://shodhdhara.com/frequency-of-publication/",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Contact Us",
      item: "https://shodhdhara.com/contact-us/",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {/* Security Headers meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="generator" content="Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#1E3A8A" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
