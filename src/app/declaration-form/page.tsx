import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Declaration Form",
  description:
    "Download the Declaration Form for Shodh Dhara Research Journal. Authors must submit this form along with their research paper.",
};

export default function DeclarationForm() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Declaration Form</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            घोषणा पत्र
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
              Download Declaration Form
            </h2>
            <p className="text-xl text-slate mb-2 hindi">
              घोषणा पत्र डाउनलोड करें
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-8" />

            <p className="text-primary-light leading-relaxed mb-8 max-w-2xl mx-auto">
              All authors must submit a signed declaration form along with their
              research paper. This form certifies that the submitted work is original,
              has not been published elsewhere, and is not under consideration by any
              other publication.
            </p>
            <p className="hindi text-slate leading-relaxed mb-8 max-w-2xl mx-auto">
              सभी लेखकों को अपने शोध पत्र के साथ एक हस्ताक्षरित घोषणा पत्र प्रस्तुत
              करना अनिवार्य है। यह पत्र प्रमाणित करता है कि प्रस्तुत कार्य मौलिक है,
              कहीं और प्रकाशित नहीं हुआ है, और किसी अन्य प्रकाशन द्वारा विचाराधीन नहीं
              है।
            </p>

            <a
              href="/files/Declaration-Form.pdf"
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
              Download Declaration Form
            </a>

            <p className="text-sm text-slate mt-6">
              Note: Please print, sign, and scan the form before submitting with your
              paper.
            </p>
            <p className="text-sm text-slate hindi">
              नोट: कृपया पेपर के साथ प्रस्तुत करने से पहले फॉर्म को प्रिंट, हस्ताक्षर
              और स्कैन करें।
            </p>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">
              How to Fill the Declaration Form
            </h3>
            <div className="w-16 h-1 bg-gold rounded-full mb-6" />
            <ol className="space-y-4">
              {[
                "Download the declaration form using the button above.",
                "Fill in all the required details including your name, affiliation, and paper title.",
                "Read the declaration statement carefully and sign the form.",
                "Scan the signed form and save it as a PDF file.",
                "Attach the scanned form along with your research paper submission.",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-primary-light pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guidelines"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Author Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
