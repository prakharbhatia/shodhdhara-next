import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership Form",
  description:
    "Download the Membership Form for Shodh Dhara Research Journal. Become a member of our academic community.",
};

export default function MembershipForm() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Membership Form</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            सदस्यता पत्र
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-4">
              Download Membership Form
            </h2>
            <p className="text-xl text-slate mb-2 hindi">
              सदस्यता पत्र डाउनलोड करें
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-8" />

            <p className="text-primary-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Become a member of Shodh Dhara and stay connected with our academic
              community. Members receive regular updates about new issues, calls for
              papers, and other important announcements.
            </p>
            <p className="hindi text-slate leading-relaxed mb-8 max-w-2xl mx-auto">
              शोध धारा के सदस्य बनें और हमारे शैक्षणिक समुदाय से जुड़े रहें। सदस्यों
              को नए अंकों, पेपर कॉल और अन्य महत्वपूर्ण घोषणाओं के बारे में नियमित
              अपडेट प्राप्त होते हैं।
            </p>

            <a
              href="/files/Membership-Form.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors shadow-lg"
            >
              <svg
                className="w-6 h-6"
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
              Download Membership Form
            </a>

            <p className="text-sm text-slate mt-6">
              Note: Please fill in all required details and submit the form via email.
            </p>
            <p className="text-sm text-slate hindi">
              नोट: कृपया सभी आवश्यक विवरण भरें और ईमेल के माध्यम से फॉर्म जमा करें।
            </p>
          </div>

          {/* Membership Benefits */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Membership Benefits
            </h3>
            <div className="w-16 h-1 bg-gold rounded-full mb-6" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  en: "Receive all four issues of the journal annually",
                  hi: "वार्षिक रूप से पत्रिका के सभी चार अंक प्राप्त करें",
                },
                {
                  en: "Priority consideration for paper submissions",
                  hi: "पेपर प्रस्तुतिकरण के लिए प्राथमिकता विचार",
                },
                {
                  en: "Regular updates on upcoming issues and events",
                  hi: "आगामी अंकों और कार्यक्रमों पर नियमित अपडेट",
                },
                {
                  en: "Access to the journal's digital archive",
                  hi: "पत्रिका के डिजिटल अभिलेख तक पहुंच",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-cream rounded-xl"
                >
                  <svg
                    className="w-6 h-6 text-gold flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="text-primary-light">{benefit.en}</p>
                    <p className="hindi text-slate text-sm">{benefit.hi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold-dark transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact us for more details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
