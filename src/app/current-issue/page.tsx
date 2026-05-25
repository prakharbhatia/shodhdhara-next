import type { Metadata } from "next";
import { issues, type Issue } from "@/data/issues";

export const metadata: Metadata = {
  title: {
    absolute: "Latest Issues | Shodh Dhara — Quarterly Research Journal Archive",
  },
  description:
    "Browse and download all issued of Shodh Dhara Research Journal. Access peer-reviewed research papers in Arts & Humanities. ISSN: 0975-3664.",
  alternates: { canonical: "https://shodhdhara.com/current-issue/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shodh Dhara",
    title: "Current Issues — Shodh Dhara Quarterly Research Journal",
    description:
      "Browse all issues of Shodh Dhara Research Journal. Access peer-reviewed research papers in Arts & Humanities. ISSN: 0975-3664.",
    images: [
      {
        url: "https://shodhdhara.com/logo.png",
        width: 512,
        height: 512,
        alt: "Shodh Dhara - Current Issues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Issues — Shodh Dhara Research Journal",
    description:
      "Browse all issues of Shodh Dhara Research Journal. ISSN: 0975-3664.",
    images: ["https://shodhdhara.com/logo.png"],
  },
};

function IssueCard({ issue }: { issue: Issue }) {
  const hasPdf = issue.pdfUrl && issue.pdfUrl.trim().length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
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

      <div className="p-6">
        <p className="text-xl font-bold text-primary mb-2">
          Issue #{issue.number}
          {issue.year && (
            <span className="text-base font-normal text-slate ml-2">
              ({issue.year})
            </span>
          )}
        </p>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m4 4V4" />
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

      <h2 className="text-3xl font-bold text-primary mb-8 text-center mx-auto">Issues Archive</h2>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {issues.map((issue) => (
              <IssueCard key={issue.number} issue={issue} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
