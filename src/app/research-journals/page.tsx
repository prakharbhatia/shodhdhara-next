import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Research Journals",
  description:
    "Learn about the importance and role of research journals in academic and scholarly communication.",
};

export default function AboutResearchJournals() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Research Journals
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            शोध पत्रिकाओं के बारे में
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-cream rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Role of Research Journals in Academia
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full mb-8" />

            <div className="space-y-6 text-primary-light leading-relaxed">
              <p>
                <strong className="text-primary">Research journals</strong> play a vital
                role in the dissemination of knowledge and the advancement of academic
                disciplines. They serve as primary channels through which scholars,
                researchers, and academicians share their findings, theories, and
                innovations with the global academic community.
              </p>

              <p className="hindi text-lg">
                <strong className="text-primary">शोध पत्रिकाएं</strong> ज्ञान के प्रसार
                एवं शैक्षणिक विषयों की प्रगति में एक महत्वपूर्ण भूमिका निभाती हैं। ये
                विद्वानों, शोधकर्ताओं एवं अकादमicians के लिए प्राथमिक माध्यम का कार्य
                करती हैं जिनके माध्यम से वे अपने निष्कर्ष, सिद्धांत एवं नवाचारों को
                वैश्विक शैक्षणिक समुदाय के साथ साझा करते हैं।
              </p>
            </div>
          </div>

          {/* Key Aspects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Peer Review Process
              </h3>
              <p className="text-slate-dark leading-relaxed">
                Research journals follow a rigorous peer review process where submitted
                manuscripts are evaluated by experts in the field. This ensures the
                quality, validity, and originality of published research.
              </p>
              <p className="hindi text-slate-dark leading-relaxed mt-3">
                शोध पत्रिकाएं एक कठोर पीयर-रिव्यू प्रक्रिया का पालन करती हैं जहाँ
                प्रस्तुत पांडुलिपियों का क्षेत्र के विशेषज्ञों द्वारा मूल्यांकन किया
                जाता है। यह प्रकाशित शोध की गुणवत्ता, वैधता और मौलिकता सुनिश्चित
                करती है।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Knowledge Preservation
              </h3>
              <p className="text-slate-dark leading-relaxed">
                Journals serve as permanent records of scholarly work, preserving
                knowledge for future generations and building upon the foundation of
                existing research.
              </p>
              <p className="hindi text-slate-dark leading-relaxed mt-3">
                पत्रिकाएं विद्वतापूर्ण कार्य के स्थायी रिकॉर्ड के रूप में कार्य
                करती हैं, भविष्य की पीढ़ियों के लिए ज्ञान का संरक्षण करती हैं और
                मौजूदा शोध की नींव पर आगे बढ़ती हैं।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Academic Community Building
              </h3>
              <p className="text-slate-dark leading-relaxed">
                Research journals foster collaboration and dialogue among scholars
                worldwide, creating networks of researchers who advance their fields
                collectively.
              </p>
              <p className="hindi text-slate-dark leading-relaxed mt-3">
                शोध पत्रिकाएं विश्वभर के विद्वानों के बीच सहयोग एवं संवाद को
                बढ़ावा देती हैं, शोधकर्ताओं के नेटवर्क का निर्माण करती हैं जो
                सामूहिक रूप से अपने क्षेत्रों को आगे बढ़ाते हैं।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Innovation & Discovery
              </h3>
              <p className="text-slate-dark leading-relaxed">
                By publishing cutting-edge research, journals drive innovation and
                discovery, pushing the boundaries of human knowledge and understanding.
              </p>
              <p className="hindi text-slate-dark leading-relaxed mt-3">
                अत्याधुनिक शोध को प्रकाशित करके, पत्रिकाएं नवाचार एवं खोज को
                प्रोत्साहित करती हैं, मानव ज्ञान एवं समझ की सीमाओं को आगे बढ़ाती हैं।
              </p>
            </div>
          </div>

          {/* Why Shodh Dhara */}
          <div className="bg-brand-gradient rounded-2xl p-8 sm:p-12 text-black">
            <h3 className="text-2xl font-bold mb-6">
              Why Publish in Shodh Dhara?
            </h3>
            <div className="w-20 h-1 bg-gold rounded-full mb-8" />

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { en: "UGC Care Listed Journal", hi: "यूजीसी केयर सूचीबद्ध पत्रिका" },
                { en: "Peer Reviewed & Referred", hi: "पीयर-रिव्यूड एवं रेफर्ड" },
                { en: "Bi-Lingual Publication", hi: "द्विभाषी प्रकाशन" },
                { en: "Open Access to All Issues", hi: "सभी अंकों की खुली पहुंच" },
                { en: "Quick Publication Process", hi: "त्वरित प्रकाशन प्रक्रिया" },
                { en: "Wide Academic Reach", hi: "व्यापक शैक्षणिक पहुंच" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">{item.en}</p>
                    <p className="hindi text-slate-light">{item.hi}</p>
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
