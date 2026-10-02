import type { Metadata } from "next";
import { issues } from "@/data/issues";
import { IssueCard } from "./IssueCard";

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

export default function LatestIssues() {
  // Deduplicate combined issues (e.g. 78/79 share the same notes + coverUrl)
  const seenCoverNotes = new Set<string>();
  const dedupedIssues = issues
    .filter((issue) => issue.number >= 65)
    .filter((issue) => {
      if (!issue.notes) return true;
      const key = `${issue.notes}|${issue.coverUrl}`;
      if (seenCoverNotes.has(key)) return false;
      seenCoverNotes.add(key);
      return true;
    });

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
            {dedupedIssues.map((issue) => (
              <IssueCard key={issue.number} issue={issue} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
