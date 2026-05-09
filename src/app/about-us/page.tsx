import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Shodh Dhara - A Quarterly Peer Reviewed Research Journal of Arts & Humanities published since 2005-06.",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            शोध धारा के बारे में
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-cream rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              About Shodh Dhara
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full mb-8" />

            <div className="space-y-6 text-black leading-relaxed">
              <p>
                <strong className="text-primary">Shodh Dhara (शोध धारा)</strong> is a
                prestigious Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi &
                English) Research Journal dedicated to the field of Arts & Humanities.
                Established in the year <strong>2005-06</strong>, the journal has been
                consistently contributing to the academic and research community for
                nearly two decades.
              </p>

              <p className="hindi text-lg">
                <strong className="text-primary">शोध धारा</strong> कला एवं मानविकी
                क्षेत्र की एक प्रतिष्ठित त्रैमासिक पीयर-रिव्यूड, रेफर्ड, द्विभाषी
                (हिंदी व अंग्रेजी) शोध पत्रिका है। वर्ष <strong>2005-06</strong> में
                स्थापित यह पत्रिका लगभग दो दशकों से निरंतर रूप से शैक्षणिक एवं
                शोध समुदाय का योगदान दे रही है।
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-gradient rounded-2xl p-8 text-black">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-black leading-relaxed">
                To provide a high-quality platform for researchers, scholars, and
                academicians to publish their original research work in the fields of
                Arts & Humanities, fostering academic excellence and intellectual growth.
              </p>
              <p className="hindi text-black leading-relaxed mt-4">
                शोधकर्ताओं, विद्वानों एवं अकादमicians को कला एवं मानविकी के क्षेत्र में
                उनके मूल शोध कार्य को प्रकाशित करने के लिए एक उच्च-गुणवत्ता का मंच
                प्रदान करना, शैक्षणिक उत्कृष्टता एवं बौद्धिक विकास को बढ़ावा देना।
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-slate-dark leading-relaxed">
                To become a leading research journal globally recognized for its
                contribution to Arts & Humanities, promoting interdisciplinary research
                and preserving India's rich cultural and literary heritage.
              </p>
              <p className="hindi text-slate-dark leading-relaxed mt-4">
                कला एवं मानविकी में अपने योगदान के लिए विश्व स्तर पर मान्यता प्राप्त
                एक अग्रणी शोध पत्रिका बनना, अंतःविषयक शोध को बढ़ावा देना एवं भारत की
                समृद्ध सांस्कृतिक और साहित्यिक विरासत को संजोए रखना।
              </p>
            </div>
          </div>

          {/* Journal Details */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Journal At a Glance
            </h3>
            <div className="w-20 h-1 bg-gold rounded-full mb-8" />

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Journal Title", value: "Shodh Dhara (शोध धारा)" },
                { label: "Frequency", value: "Quarterly (त्रैमासिक)" },
                { label: "Language", value: "Bi-Lingual (Hindi & English)" },
                { label: "ISSN", value: "0975-3664" },
                { label: "RNI", value: "U.P.BIL/2012/43696" },
                { label: "Year of Start", value: "2005-06" },
                { label: "Subject", value: "Arts & Humanities" },
                { label: "Place of Publication", value: "Orai (Jalaun), Uttar Pradesh" },
                { label: "Publisher", value: "Shaikshik Avam Anusandhan Sansthan, Orai (Jalaun) UP" },
                { label: "UGC Care Listed", value: "Yes" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-cream rounded-xl"
                >
                  <div className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <dt className="text-base font-medium text-slate">{item.label}</dt>
                    <dd className="text-lg font-semibold text-primary">{item.value}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
