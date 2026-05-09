import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import BrandGradientSection from "@/components/BrandGradientSection";
import { issues } from "@/data/issues";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shodh Dhara - A Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English) Research Journal of Arts & Humanities. ISSN: 0975-3664",
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
];

export default function Home() {
  return (
    <div className="min-h-screen">
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

      {/* Journal Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Journal Information
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Publication Details
              </h3>
              <dl className="space-y-4">
                {journalDetailsLeft.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <dt className="text-slate font-medium">{item.label}</dt>
                    <dd className="text-primary font-semibold text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right Column */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Publisher & Editorial
              </h3>
              <dl className="space-y-4">
                {journalDetailsRight.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <dt className="text-slate font-medium">{item.label}</dt>
                    <dd className="text-primary font-semibold text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
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
                  {/* Cover */}
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

                  {/* Content */}
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
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download PDF
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center justify-center w-full gap-2 bg-gray-300 text-gray-500 px-4 py-3 rounded-lg font-medium cursor-not-allowed"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
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

      {/* Contact & Editors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Contact Us</h2>
              <div className="w-20 h-1 bg-gold rounded-full mb-8" />
              <ContactForm />
            </div>

            {/* Editor Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Editorial Team</h2>
              <div className="w-20 h-1 bg-gold rounded-full mb-8" />

              {/* Chief Editor */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Chief Editor</h3>
                    <p className="text-lg font-semibold text-primary-light mb-2">
                      Dr. (Smt.) Neelam Mukesh
                    </p>
                    <p className="text-base text-slate leading-relaxed">
                      Chief Editor, Shodh-Dhara
                      <br />
                      1075, Bank Colony, Jalaun Road
                      <br />
                      Orai (Jalaun) 285001, U.P.
                    </p>
                    <a
                      href="https://sites.google.com/view/drneelammukeshorai/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-3 hover:text-gold-dark transition-colors"
                    >
                      View Detailed Profile
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Editor */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Editor</h3>
                    <p className="text-lg font-semibold text-primary-light mb-2">
                      Dr. Rajesh Chandra Pandey
                    </p>
                    <p className="text-base text-slate leading-relaxed">
                      Editor, Shodh-Dhara
                      <br />
                      262, Pathakpura, Orai (Jalaun) 285001, U.P.
                      <br />
                      Mobile: 9415592698
                      <br />
                      Email: shodhdharajournal2005@gmail.com
                    </p>
                    <a
                      href="https://sites.google.com/view/drrajeshchandrapandeyorai/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-3 hover:text-gold-dark transition-colors"
                    >
                      View Detailed Profile
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-white">
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
