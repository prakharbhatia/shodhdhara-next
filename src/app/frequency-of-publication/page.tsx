import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Publication Schedule | Shodh Dhara — Quarterly Submission Deadlines",
  },
  description:
    "Publication schedule and submission deadlines for Shodh Dhara Quarterly Journal ISSN 0975-3664. Published 4 quarters: Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec. Submit papers 1 month in advance.",
  alternates: { canonical: "https://shodhdhara.com/frequency-of-publication/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shodh Dhara",
    title: "Publication Schedule | Shodh Dhara Quarterly Journal",
    description:
      "Publication schedule for Shodh Dhara ISSN 0975-3664. 4 quarterly issues: Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec. Submit papers 1 month in advance for timely publication.",
    images: [
      {
        url: "https://shodhdhara.com/logo.png",
        width: 512,
        height: 512,
        alt: "Shodh Dhara Publication Schedule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publication Schedule | Shodh Dhara Quarterly Journal",
    description:
      "Shodh Dhara is published quarterly: Jan-Mar, Apr-Jun, Jul-Sep, Oct-Dec. ISSN 0975-3664.",
    images: ["https://shodhdhara.com/logo.png"],
  },
};

const schedule = [
  {
    quarter: "January – March",
    hi: "जनवरी – मार्च",
    issue: "Issue 1",
    hiIssue: "अंक 1",
    submissionDeadline: "31st October",
    hiDeadline: "31 अक्टूबर",
    publication: "March",
    hiPublication: "मार्च",
  },
  {
    quarter: "April – June",
    hi: "अप्रैल – जून",
    issue: "Issue 2",
    hiIssue: "अंक 2",
    submissionDeadline: "31st January",
    hiDeadline: "31 जनवरी",
    publication: "June",
    hiPublication: "जून",
  },
  {
    quarter: "July – September",
    hi: "जुलाई – सितंबर",
    issue: "Issue 3",
    hiIssue: "अंक 3",
    submissionDeadline: "30th April",
    hiDeadline: "30 अप्रैल",
    publication: "September",
    hiPublication: "सितंबर",
  },
  {
    quarter: "October – December",
    hi: "अक्टूबर – दिसंबर",
    issue: "Issue 4",
    hiIssue: "अंक 4",
    submissionDeadline: "31st July",
    hiDeadline: "31 जुलाई",
    publication: "December",
    hiPublication: "दिसंबर",
  },
];

export default function FrequencyOfPublication() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequency of Publication and Submission of Research Papers
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            प्रकाशन आवृत्ति एवं शोध पत्रों की प्रस्तुति
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Publication Schedule
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full mb-8" />

            <div className="space-y-6 text-primary-dark leading-relaxed">
              <p>
                <strong className="text-primary">Shodh Dhara</strong> is a quarterly
                research journal published four times a year. Researchers and scholars
                are encouraged to submit their papers well in advance of the submission
                deadlines to ensure timely publication.
              </p>

              <p className="hindi text-lg">
                <strong className="text-primary">शोध धारा</strong> एक त्रैमासिक शोध
                पत्रिका है जो वर्ष में चार बार प्रकाशित होती है। शोधकर्ताओं और
                विद्वानों से अनुरोध है कि वे समय पर प्रकाशन सुनिश्चित करने के लिए
                प्रस्तुति समय-सीमा।
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Quarter
                      <span className="block text-base font-normal text-slate-light">
                        त्रैमासिक
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Issue
                      <span className="block text-base font-normal text-slate-light">
                        अंक
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Submission Deadline
                      <span className="block text-base font-normal text-slate-light">
                        प्रस्तुति अंतिम तिथि
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Publication Month
                      <span className="block text-base font-normal text-slate-light">
                        प्रकाशन माह
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-cream/50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-cream/30"}`}
                    >
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.quarter}</span>
                        <span className="block text-primary-dark">{item.hi}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.issue}</span>
                        <span className="block text-primary-dark">{item.hiIssue}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.submissionDeadline}</span>
                        <span className="block text-primary-dark">{item.hiDeadline}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.publication}</span>
                        <span className="block text-primary-dark">{item.hiPublication}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-gradient rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-4">
                How to Submit
              </h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <ul className="space-y-4">
                {["Prepare your manuscript as per the Author Guidelines", "Fill the Declaration Form",
                  "Email your paper to: shodhdharajournal2005@gmail.com",
                  "Include your full contact details and affiliation",
                  "Wait for the review process (4-6 weeks)",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-sm font-bold">{index + 1}</span>
                    </span>
                    <span className="text-black">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4 hindi">
                प्रस्तुति कैसे करें
              </h3>
              <ul className="space-y-4">
                {["लेखक दिशानिर्देशों के अनुसार अपनी पांडुलिपि तैय", "घोषणा पत्र",
                  "अपना पेपर ईमेल करें: shodhdharajournal2005@gmail.com",
                  "अपने संपर्क विवरण",
                  "समीक्षा प्रक्रिया",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3 hindi">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">{index + 1}</span>
                    </span>
                    <span className="text-primary-dark">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
