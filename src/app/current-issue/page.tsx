import type { Metadata } from "next";
import { issues, type Issue } from "@/data/issues";

export const metadata: Metadata = {
  title: "Latest Issues",
  description:
    "Download the latest and archived issues of Shodh Dhara Research Journal. Access all published volumes and issues.",
};

function IssueCard({ issue }: { issue: Issue }) {
  const hasPdf = issue.pdfUrl && issue.pdfUrl.trim().length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Cover Image or Placeholder */}
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
            <span className="text-sm text-slate">Issue #{issue.number}</span>
            {issue.year && (
              <span className="block text-xs text-slate-light mt-1">
                {issue.year}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">
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
}

export default function LatestIssues() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Latest Issues</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mt-4 hindi hindi-heading-match">
            शोध धारा के नवीनतम अंक
          </p>
          <p className="text-base text-black mt-2 max-w-2xl mx-auto">
            Download all published issues of Shodh Dhara Research Journal. Click on
            any issue to download the PDF.
          </p>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {issues.map((issue) => (
              <IssueCard key={issue.number} issue={issue} />
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Note for Authors / लेखकों के लिए सूचना
            </h3>
            <p className="text-primary-light leading-relaxed mb-4">
              Volume 65 March 2022 and subsequent issues will be updated on the
              website as per their own schedule.
            </p>
            <p className="hindi text-slate">
              वॉल्यूम 65 मार्च 2022 और बाद के अंक उनके अपने कार्यक्रम के अनुसार
              वेबसाइट पर अपडेट किए जाएंगे।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
