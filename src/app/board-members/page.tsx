import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board Members",
  description:
    "Meet the Patron Board, Editorial Advisory Board, and Referee Board members of Shodh Dhara Research Journal.",
};

const patronBoard = [
  "Prof. Vishva Nath Prasad Tiwari, Ex President, Sahitya Akadami, New Delhi",
  "Dr. Suresh Chandra Pandey, Ex Dean, Faculty of Arts, V.B.S. Purvanchal University, Jaunpur, U.P.",
  "Dr. Shashi Bhushan 'Prashant', Ex Head of Department Hindi, D.A.V. College, Azamgarh, UP",
  "Dr. Ram Sudhar Singh, Ex Head of Department Hindi, U.P. College, Varanasi, UP",
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
  "Prof. O.P. Budholia, Prof. & Head Department of English and Dean (Academics) Sanchi University of Buddhist Indic Studies, Barla (Raisen) M.P.",
  "Dr. Shiv Govind Puri, Asso. Prof., Department of English, University of Lucknow, U.P.",
  "Prof. Srikrishna Tripathi, Vedic Darshan Vibhag, (Sankrit Vidya Dharm Vigyan) Banaras Hindu University, Varanasi, UP",
  "Prof. Rakesh Kumar Upadhayay, Chair Professor, Bharat Adhyayan Kendra, Faculty of Arts, Banaras Hindu University, Varanasi, U.P.",
  "Prof. Mrigendra Kumar Singh, Department of Philosophy, H.N.B. Garhwal University, Srinagar, Garhwal, Uttrakhand",
  "Prof. Sudhir Kumar Singh, Department of History, Rajiv Gandhi Central University Doimukh, Itanagar, Arunachal Pradesh.",
  "Prof. Prashant Srivastava, Department of Ancient Indian History & Archealogy, University of Lucknow, U.P.",
  "Prof. R.A. Sharma, Department of Ancient Indian History, Culture & Archeology, Jiwaji University, Gwalior, M.P.",
  "Prof. Shivakant Dwivedi, Department of Ancient History & Archeology and Head of the Regional Study Centre for Culture and Heritage, Jiwaji University Gwalior, M.P.",
  "Prof. Sharmila Tailor, Performing Arts, Banasthali Vidyapith, Banasthali, Rajasthan",
];

function BoardSection({
  title,
  members,
  icon,
}: {
  title: string;
  members: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
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
            <span className="text-primary-light leading-relaxed pt-1">
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
      {/* Page Header */}
      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Board Members</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-4xl sm:text-5xl font-bold text-black mt-4 hindi hindi-heading-match">
            पत्रिका के पदाधिकारी
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <BoardSection
              title="A. Patron Board"
              members={patronBoard}
              icon={
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              }
            />

            <BoardSection
              title="B. Editorial Advisory Board"
              members={editorialAdvisoryBoard}
              icon={
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              }
            />

            <BoardSection
              title="C. Referee (Review) Board"
              members={refereeBoard}
              icon={
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              }
            />
          </div>

          {/* Editors */}
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            <div className="bg-brand-gradient rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-2">Chief Editor</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4" />
              <p className="text-xl font-semibold">Dr. (Smt.) Neelam Mukesh</p>
              <p className="text-black mt-2 hindi">
                मुख्य संपादक
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-2">Editor</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4" />
              <p className="text-xl font-semibold text-primary">
                Dr. Rajesh Chandra Pandey
              </p>
              <p className="text-slate mt-2 hindi">संपादक</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
