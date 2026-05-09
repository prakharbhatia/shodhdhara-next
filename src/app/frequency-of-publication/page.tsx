import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequency of Publication and Submission",
  description:
    "Learn about the publication schedule and submission deadlines for Shodh Dhara Research Journal.",
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
      {/* Page Header */}
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

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
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
                प्रस्तुति समय-सीमा से काफी पहले अपने पेपर भेजें।
              </p>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Quarter
                      <span className="block text-base font-normal text-slate-light hindi">त्रैमासिक</span>
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Issue
                      <span className="block text-base font-normal text-slate-light hindi">अंक</span>
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Submission Deadline
                      <span className="block text-base font-normal text-slate-light hindi">प्रस्तुति अंतिम तिथि</span>
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Publication Month
                      <span className="block text-base font-normal text-slate-light hindi">प्रकाशन माह</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-cream/50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-cream/30"
                      }`}
                    >
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.quarter}</span>
                        <span className="block text-primary-dark hindi">{item.hi}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.issue}</span>
                        <span className="block text-primary-dark hindi">{item.hiIssue}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.submissionDeadline}</span>
                        <span className="block text-primary-dark hindi">{item.hiDeadline}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-primary">{item.publication}</span>
                        <span className="block text-primary-dark hindi">{item.hiPublication}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Submission Instructions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-gradient rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-4">
                How to Submit
              </h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <ul className="space-y-4">
                {[
                  "Prepare your manuscript as per the Author Guidelines",
                  "Fill the Declaration Form (available on our website)",
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
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <ul className="space-y-4">
                {[
                  "लेखक दिशानिर्देशों के अनुसार अपनी पांडुलिपि तैयार करें",
                  "घोषणा पत्र भरें (हमारी वेबसाइट पर उपलब्ध)",
                  "अपना पेपर ईमेल करें: shodhdharajournal2005@gmail.com",
                  "अपने पूर्ण संपर्क विवरण और संबद्धता शामिल करें",
                  "समीक्षा प्रक्रिया की प्रतीक्षा करें (4-6 सप्ताह)",
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

          {/* Contact for Queries */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              For Any Queries / किसी भी प्रश्न के लिए
            </h3>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-primary-light mb-4">
              Please feel free to contact us for any questions regarding submission or publication.
            </p>
            <p className="hindi text-slate mb-6">
              प्रस्तुति या प्रकाशन के संबंध में किसी भी प्रश्न के लिए कृपया बेझिझक हमसे संपर्क करें।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:shodhdharajournal2005@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+919415592698"
                className="inline-flex items-center gap-2 bg-cream text-primary px-6 py-3 rounded-lg font-medium border border-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
