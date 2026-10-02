"use client";

import { useState, useCallback } from "react";
import type { Issue } from "@/data/issues";

function ErrorPopup({
  issueNumber,
  onClose,
}: {
  issueNumber: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Red error icon */}
        <div
          className="mx-auto mb-4 flex items-center justify-center rounded-full"
          style={{ width: 64, height: 64, backgroundColor: "#FEE2E2" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#DC2626"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-red-600 mb-2">
          Error Downloading PDF
        </h3>
        <p className="text-slate text-sm leading-relaxed mb-1">
          Issue #{issueNumber} could not be fetched.
        </p>
        <p className="text-slate text-sm leading-relaxed mb-6">
          The file may not be available yet. Please try again later or contact us if the issue persists.
        </p>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function IssueCard({
  issue,
  buttonOnly = false,
}: {
  issue: Issue;
  buttonOnly?: boolean;
}) {
  const hasPdf = issue.pdfUrl && issue.pdfUrl.trim().length > 0;
  const [showError, setShowError] = useState(false);

  const handleNoPdfClick = useCallback(() => setShowError(true), []);
  const handleClose = useCallback(() => setShowError(false), []);

  // Label for combined issues e.g. "78/79"
  const issueLabel = issue.notes?.startsWith("Combined issue")
    ? issue.notes.replace("Combined issue ", "")
    : `#${issue.number}`;

  const downloadButton = hasPdf ? null : (
    <>
      {showError && (
        <ErrorPopup issueNumber={issue.number} onClose={handleClose} />
      )}
      <button
        onClick={handleNoPdfClick}
        className="inline-flex items-center justify-center w-full gap-2 bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download PDF
      </button>
    </>
  );

  if (buttonOnly) return downloadButton;

  return (
    <>
      {showError && (
        <ErrorPopup issueNumber={issue.number} onClose={handleClose} />
      )}

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
                  alt={`Issue ${issueLabel} Cover`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  loading="lazy"
                />
              </a>
            ) : (
              <button
                className="w-full h-full cursor-pointer border-0 bg-transparent p-0"
                onClick={handleNoPdfClick}
                aria-label={`Issue ${issueLabel} — PDF coming soon`}
              >
                <img
                  src={issue.coverUrl}
                  alt={`Issue ${issueLabel} Cover`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
              </button>
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
            Issue {issueLabel}
            {issue.year && (
              <span className="text-base font-normal text-slate ml-2">
                ({issue.year})
              </span>
            )}
          </p>
          <p className="text-slate mb-4 hindi">शोध धारा अंक {issueLabel}</p>
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
              onClick={handleNoPdfClick}
              className="inline-flex items-center justify-center w-full gap-2 bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors cursor-pointer"
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
            </button>
          )}
        </div>
      </div>
    </>
  );
}
