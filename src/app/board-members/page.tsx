import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Board Members | Shodh Dhara — Patron, Advisory & Referee Boards",
  },
  description:
    "Meet the Patron Board, Editorial Advisory Board, and Referee Board of Shodh Dhara Research Journal. Distinguished academicians from V.B.S. Purvanchal University, BHU, Delhi University and more.",
  alternates: { canonical: "https://shodhdhara.com/board-members/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shodh Dhara",
    title: "Board Members | Shodh Dhara Research Journal",
    description:
      "Meet the editorial board of Shodh Dhara Research Journal. Patron, advisory, and referee members from V.B.S. Purvanchal University, BHU, Delhi University.",
    images: [
      {
        url: "https://shodhdhara.com/logo.png",
        width: 512,
        height: 512,
        alt: "Shodh Dhara Board Members",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Board Members | Shodh Dhara Research Journal",
    description:
      "Meet the editorial board of Shodh Dhara ISSN 0975-3664. Patron, advisory & referee boards.",
    images: ["https://shodhdhara.com/logo.png"],
  },
};

const patronBoard = [
  "Prof. Vishva Nath Prasad Tiwari, Ex President, Sahitya Akadami, New Delhi",
  "Dr. Suresh Chandra Pandey, Ex Dean, Faculty of Arts, V.B.S. Purvanchal University, Jaunpur, U.P.",
  "Dr. Shashi Bhushan 'Prashant', Ex Head D.A.V. College, Azamgarh, UP",
  "Dr. Ram Sudhar Singh, Ex H.D.A.V. College, Varanasi, UP",
];

const editorialAdvisoryBoard = [
  "Dr. Pawan Putra Badal, Member, I.C.C.R., New Delhi",
  "Prof. Narendra Mishra, University of Jodhpur, Rajasthan",
  "Prof. Sushil Kumar Sharma, Central University, Mizoram",
  "Prof. Surya Kant Tripathi, Tezpur University, Assam",
  "Prof. Kedar Singh, Vinoba Bhave University, Hazaribagh, Jharkhand",
  "Dr. Vikas Kumar, Hazaribagh, Jharkhand",
  "Dr. Nitish Dubey, Kanpur, Uttar Pradesh",
  "Prof. B.K. Sharma, Maharani Laxmibai Arts & Commerce College of Excellence, Gwalior, M.P.",
];

const refereeBoard = [
  "Prof. Surya Prasad Dixit, President Rajbhasha Prachar Samiti, Vardha & President Hindi Sahitya Sammelan Prayagraj, UP",
  "Prof. Pooran Chandra Tandon, Department of Hindi, Delhi University, Delhi",
  "Prof. Pawan Agrawal, Department of Hindi, Lucknow University Lucknow, UP",
  "Prof. Ranjan Kumar Tripathi, Department of Sanskrit, Delhi University, Delhi",
  "Prof. O.P. Budholia, Prof. & Head Department of English, Sanchi University, Barla (Raisen) M.P.",
  "Dr. Shiv Govind Puri, Asso. Prof., University of Lucknow, U.P.",
  "Prof. Srikrishna Tripathi, Vedic Darshan Vibhag, Banaras Hindu University, Varanasi, UP",
  "Prof. Rakesh Kumar Upadhayay, Chair Professor, Bharat Adhyayan Kendra, Banaras Hindu University, Varanasi, U.P.",
];

function BoardSection({
  title,
  members,
}: {
  title: string;
  members: string[];
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>
      <div className="w-16 h-1 bg-gold rounded-full mb-6" />
      <ol className="space-y-3">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3 bg-cream rounded-xl"
          >
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm mt-0.5">
              {index + 1}
            </span>
            <span className="text-primary-dark leading-relaxed pt-1">
              {member}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function BoardMembers() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Board Members</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            पत्रिका के पदाधिकारी
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <BoardSection
              title="A. Patron Board"
              members={patronBoard}
            />

            <BoardSection
              title="B. Editorial Advisory Board"
              members={editorialAdvisoryBoard}
            />

            <BoardSection
              title="C. Referee Board"
              members={refereeBoard}
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            <div className="bg-brand-gradient rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-2">Chief Editor</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4" />
              <p className="text-xl font-semibold">Dr. (Smt.) Neelam Mukesh</p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-gray-100 text-black">
              <h3 className="text-2xl font-bold mb-2">Editor</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4" />
              <p className="text-xl font-semibold">
                Dr. Rajesh Chandra Pandey
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-gray-100 text-black">
              <h3 className="text-2xl font-bold mb-2">Co-Editor</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4" />
              <p className="text-xl font-semibold">
                Dr. Shravan Kumar Tripathi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
