import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publication Policy & Author Guidelines",
  description:
    "Author guidelines and publication policy for Shodh Dhara Research Journal. Learn how to submit your research paper.",
};

const guidelines = [
  {
    title: "Eligibility",
    hi: "पात्रता",
    points: [
      "Researchers, scholars, and academicians working in the field of Arts & Humanities are eligible to submit their papers.",
      "शोधकर्ता, विद्वान और अकादमicians जो कला एवं मानविकी के क्षेत्र में कार्यरत हैं, अपने पेपर प्रस्तुत करने के पात्र हैं।",
    ],
  },
  {
    title: "Language",
    hi: "भाषा",
    points: [
      "Papers can be submitted in Hindi or English language.",
      "पेपर हिंदी या अंग्रेजी भाषा में प्रस्तुत किए जा सकते हैं।",
    ],
  },
  {
    title: "Format Requirements",
    hi: "प्रारूप आवश्यकताएं",
    points: [
      "The paper should be typed in MS Word with 1.5 line spacing.",
      "Font: Times New Roman (English) or Kruti Dev (Hindi), Size 12.",
      "Paper should not exceed 3000-5000 words including references.",
      "पेपर एमएस वर्ड में 1.5 लाइन स्पेसिंग के साथ टाइप किया जाना चाहिए।",
      "फॉन्ट: टाइम्स न्यू रोमन (अंग्रेजी) या कृतिदेव (हिंदी), आकार 12।",
      "पेपर में संदर्भ सहित 3000-5000 शब्दों से अधिक नहीं होना चाहिए।",
    ],
  },
  {
    title: "Structure of Paper",
    hi: "पेपर की संरचना",
    points: [
      "Title, Author's Name, Affiliation, Abstract (150-200 words), Keywords, Introduction, Main Content, Conclusion, and References.",
      "शीर्षक, लेखक का नाम, संबद्धता, सारांश (150-200 शब्द), कीवर्ड, परिचय, मुख्य विषयवस्तु, निष्कर्ष और संदर्भ।",
    ],
  },
  {
    title: "Submission Process",
    hi: "प्रस्तुतिकरण प्रक्रिया",
    points: [
      "Submit your paper via email to shodhdharajournal2005@gmail.com.",
      "Include a declaration form stating the paper is original and not published elsewhere.",
      "अपना पेपर ईमेल के माध्यम से shodhdharajournal2005@gmail.com पर भेजें।",
      "एक घोषणा पत्र शामिल करें जिसमें यह बताया गया हो कि पेपर मौलिक है और कहीं और प्रकाशित नहीं हुआ है।",
    ],
  },
  {
    title: "Review Process",
    hi: "समीक्षा प्रक्रिया",
    points: [
      "All submitted papers undergo a double-blind peer review process.",
      "The review process typically takes 4-6 weeks.",
      "Authors will be notified of acceptance, rejection, or required revisions.",
      "सभी प्रस्तुत पेपर डबल-ब्लाइंड पीयर रिव्यू प्रक्रिया से गुजरते हैं।",
      "समीक्षा प्रक्रिया में आमतौर पर 4-6 सप्ताह लगते हैं।",
      "लेखकों को स्वीकृति, अस्वीकृति या आवश्यक संशोधनों की सूचना दी जाएगी।",
    ],
  },
  {
    title: "Publication Fee",
    hi: "प्रकाशन शुल्क",
    points: [
      "A nominal publication fee is charged after the paper is accepted for publication.",
      "Details regarding the fee structure will be communicated upon acceptance.",
      "प्रकाशन के लिए पेपर स्वीकार किए जाने के बाद एक नाममात्र प्रकाशन शुल्क लिया जाता है।",
      "शुल्क संरचना के बारे में विवरण स्वीकृति पर संप्रेषित किया जाएगा।",
    ],
  },
  {
    title: "Copyright",
    hi: "कॉपीराइट",
    points: [
      "Once published, the copyright of the article rests with Shodh Dhara.",
      "Authors will receive a complimentary copy of the published issue.",
      "प्रकाशित होने के बाद, लेख का कॉपीराइट शोध धारा के पास रहता है।",
      "लेखकों को प्रकाशित अंक की एक निःशुल्क प्रति प्राप्त होगी।",
    ],
  },
];

export default function Guidelines() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Publication Policy & Author Guidelines
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            प्रकाशन नीति एवं लेखक दिशानिर्देश
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-cream rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <p className="text-primary-light leading-relaxed mb-4">
              We welcome original research papers from scholars and researchers in the
              field of Arts & Humanities. Please follow the guidelines below to ensure
              your submission meets our requirements.
            </p>
            <p className="hindi text-primary-light leading-relaxed">
              हम कला एवं मानविकी के क्षेत्र में विद्वानों और शोधकर्ताओं से मूल
              शोध पेपर का स्वागत करते हैं। कृपया सुनिश्चित करें कि आपकी प्रस्तुति
              हमारी आवश्यकताओं को पूरा करे, इसके लिए नीचे दिए गए दिशानिर्देशों का
              पालन करें।
            </p>
          </div>

          {/* Guidelines List */}
          <div className="space-y-8">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{guideline.title}</h3>
                    <p className="hindi text-slate font-medium">{guideline.hi}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {guideline.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className={`flex items-start gap-3 ${
                        point.match(/[\u0900-\u097F]/) ? "hindi" : ""
                      }`}
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-primary-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-12 bg-brand-gradient rounded-2xl p-8 text-black">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Important Note / महत्वपूर्ण सूचना</h3>
                <p className="text-black leading-relaxed">
                  Authors must ensure that their submitted work is original and has not
                  been published elsewhere. Plagiarism in any form will not be tolerated
                  and will lead to immediate rejection of the manuscript.
                </p>
                <p className="hindi text-black leading-relaxed mt-3">
                  लेखकों को यह सुनिश्चित करना चाहिए कि उनका प्रस्तुत कार्य मौलिक है और
                  कहीं और प्रकाशित नहीं हुआ है। किसी भी रूप में साहित्यिक चोरी बर्दाश्त
                  नहीं की जाएगी और इसके परिणामस्वरूप पांडुलिपि की तत्काल अस्वीकृति होगी।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
