import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BrandGradientSection from "@/components/BrandGradientSection";
import { issues } from "@/data/issues";

export const metadata: Metadata = {
  title: {
    absolute: "Shodh Dhara — UGC Care Listed Quarterly Research Journal | ISSN 0975-3664",
  },
  description:
    "Shodh Dhara (शोध धारा) is a UGC Care Listed, Quarterly Peer Reviewed, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities. ISSN: 0975-3664 | Est. 2005.",
  alternates: { canonical: "https://shodhdhara.com/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shodh Dhara",
    title: "Shodh Dhara — UGC Care Listed Quarterly Research Journal",
    description:
      "UGC Care Listed Research Journal ISSN 0975-3664. A Quarterly Peer Reviewed, Referred, Bi-Lingual Research Journal of Arts & Humanities since 2005.",
    images: [
      {
        url: "https://shodhdhara.com/logo.png",
        width: 512,
        height: 512,
        alt: "Shodh Dhara Logo — Quarterly Research Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shodh Dhara — UGC Care Listed Quarterly Research Journal",
    description:
      "UGC Care Listed Research Journal ISSN 0975-3664. Arts & Humanities since 2005.",
    images: ["https://shodhdhara.com/logo.png"],
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
  ],
};

const journalDetailsLeft = [
  { label: "RNI No.", value: "U.P. BIL/2012/43696" },
  { label: "ISSN No.", value: "0975-3664" },
  { label: "Year of Start", value: "2005-06" },
  { label: "Place of Publication", value: "ORAI (Jalaun) UP" },
  { label: "Country", value: "India" },
  { label: "Subject", value: "Arts & Humanities" },
];

const journalDetailsRight = [
  { label: "Publisher", value: "Shaikshik Avam Anusandhan Sansthan Orai (Jalaun) UP" },
  { label: "Printer", value: "Customer Gallery, Mauni Mandir, Orai (Jalaun) UP" },
  { label: "District", value: "Orai (Jalaun) 285001" },
  { label: "Place of Publication", value: "ORAI (Jalaun) UP" },
  { label: "Chief Editor", value: "Dr. (Smt.) Neelam Mukesh" },
  { label: "Editor", value: "Dr. Rajesh Chandra Pandey" },
  { label: "Co-Editor", value: "Dr. Shravan Kumar Tripathi" },
];

const editors = [
  {
    role: "Chief Editor",
    name: "Dr. (Smt.) Neelam Mukesh",
    image: "/editors/neelam.jpeg",
    profileUrl: "https://sites.google.com/view/drneelammukeshorai/home",
  },
  {
    role: "Editor",
    name: "Dr. Rajesh Chandra Pandey",
    image: "/editors/rajesh.jpeg",
    profileUrl: "https://sites.google.com/view/drrajeshchandrapandeyorai/home",
  },
  {
    role: "Co-Editor",
    name: "Dr. Shravan Kumar Tripathi",
    image: "/editors/shravan.jpeg",
    profileUrl: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* FAQPage JSON-LD */}
      <Script
        id="faq-jsonld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <BrandGradientSection className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/25 text-black px-4 py-2 rounded-full text-base font-medium mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              UGC Care Listed Research Journal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Quarterly Peer Reviewed, Referred,{" "}
              <span className="text-black">Bi-Lingual</span> (Hindi & English)
              Research Journal of Arts & Humanities
            </h1>
            <p className="font-bold leading-tight text-black mb-8 hindi hindi-heading-match">
              त्रैमासिक पीयर-रिव्यूड, रेफर्ड, द्विभाषी (हिंदी व अंग्रेजी) कला
              एवं मानविकी की शोध पत्रिका
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/current-issue"
                className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors shadow-lg"
              >
                Browse Latest Issues
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guidelines"
                className="inline-flex items-center gap-2 bg-white/20 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors"
              >
                Author Guidelines
              </Link>
            </div>
          </div>
        </div>
      </BrandGradientSection>

      {/* Editorial Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Editorial Team
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-slate mt-4 max-w-2xl mx-auto">
              Meet the editors guiding the academic excellence of Shodh Dhara.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {editors.map((editor) => (
              <div
                key={editor.name}
                className="bg-cream rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="relative mb-5">
                  <Image
                    src={editor.image}
                    alt={editor.name}
                    width={112}
                    height={112}
                    className="rounded-2xl object-cover w-28 h-28 border-4 border-gold shadow-md"
                  />
                </div>
                <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {editor.role}
                </span>
                <h3 className="text-lg font-bold text-primary leading-snug mb-3">
                  {editor.name}
                </h3>
                {editor.profileUrl && (
                  <a
                    href={editor.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-gold-dark transition-colors"
                  >
                    View Profile
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Issues Preview */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Latest Issues
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-slate mt-4 max-w-2xl mx-auto">
              Download the most recent published issues of Shodh Dhara Research Journal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {issues.slice(0, 3).map((issue) => {
              const hasPdf = issue.pdfUrl && issue.pdfUrl.trim().length > 0;
              return (
                <div
                  key={issue.number}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[3/4] bg-cream relative flex items-center justify-center overflow-hidden">
                    {issue.coverUrl ? (
                      hasPdf ? (
                        <a
                          href={issue.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full"
                        >
                          <img
                            src={issue.coverUrl}
                            alt={`Issue #${issue.number} Cover`}
                            className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <img
                          src={issue.coverUrl}
                          alt={`Issue #${issue.number} Cover`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )
                    ) : (
                      <div className="text-center p-6">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl font-bold text-primary">
                            {issue.number}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      Issue #{issue.number}
                      {issue.year && (
                        <span className="text-base font-normal text-slate ml-2">
                          ({issue.year})
                        </span>
                      )}
                    </h3>
                    <p className="text-slate mb-4 hindi">
                      शोध धारा अंक {issue.number}
                    </p>
                    {hasPdf ? (
                      <a
                        href={issue.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center justify-center w-full gap-2 bg-gray-300 text-gray-500 px-4 py-3 rounded-lg font-medium cursor-not-allowed"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        PDF Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/current-issue"
              className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors shadow-lg"
            >
              View All Issues
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Journal Details */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-bold text-primary mb-5">
            Journal Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="bg-cream rounded-xl px-5 py-4 border border-gray-100">
              <dl className="divide-y divide-gray-200">
                {journalDetailsLeft.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-1.5 text-xs">
                    <dt className="text-slate font-medium">{item.label}</dt>
                    <dd className="text-primary font-semibold text-right ml-4">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-cream rounded-xl px-5 py-4 border border-gray-100">
              <dl className="divide-y divide-gray-200">
                {journalDetailsRight.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-1.5 text-xs">
                    <dt className="text-slate font-medium">{item.label}</dt>
                    <dd className="text-primary font-semibold text-right ml-4">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Our Location</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1793.260636510209!2d79.44416465802665!3d25.983736406972785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU5JzAxLjQiTiA3OcKwMjYnNDIuOSJF!5e0!3m2!1sen!2sin!4v1494458512499"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shodh Dhara Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
