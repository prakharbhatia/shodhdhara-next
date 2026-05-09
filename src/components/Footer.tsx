import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/guidelines/", label: "Guidelines" },
  { href: "/current-issue/", label: "Latest Issues" },
  { href: "/contact-us/", label: "Contact Us" },
];

const importantLinks = [
  { href: "/declaration-form/", label: "Declaration Form" },
  { href: "/membership-form/", label: "Membership Form" },
  { href: "/board-members/", label: "Board Members" },
  { href: "/frequency-of-publication/", label: "Frequency of Publication" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-gradient text-black">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Shodh Dhara</h3>
            <p className="text-base text-black leading-relaxed">
              A Quarterly Peer Reviewed, Referred, Bi-Lingual (Hindi & English)
              Research Journal of Arts & Humanities.
            </p>
            <div className="mt-4 space-y-1 text-base text-black">
              <p>
                <span className="text-black font-semibold">ISSN:</span>{" "}
                0975-3664
              </p>
              <p>
                <span className="text-black font-semibold">RNI:</span>{" "}
                U.P.BIL/2012/43696
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-black hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">
              Important Links
            </h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-black hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">
              Contact Us
            </h4>
            <div className="space-y-3 text-base text-black">
              <p>
                <strong className="text-black">Chief Editor:</strong>
                <br />
                Dr. (Smt.) Neelam Mukesh
                <br />
                1075, Bank Colony, Jalaun Road
                <br />
                Orai (Jalaun) 285001, U.P.
              </p>
              <p>
                <strong className="text-black">Editor:</strong>
                <br />
                Dr. Rajesh Chandra Pandey
                <br />
                262, Pathakpura, Orai (Jalaun) 285001, U.P.
              </p>
              <p>
                <span className="text-black">Phone:</span>{" "}
                <a
                  href="tel:+919415592698"
                  className="hover:text-black transition-colors"
                >
                  +91-9415592698
                </a>
              </p>
              <p>
                <span className="text-black">Email:</span>{" "}
                <a
                  href="mailto:shodhdharajournal2005@gmail.com"
                  className="hover:text-black transition-colors"
                >
                  shodhdharajournal2005@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-base text-black">
            <p>
              &copy; {new Date().getFullYear()} Shodh Dhara. All Rights
              Reserved.
            </p>
            <p>
              Published by{" "}
              <span className="text-black">
                Shakshik Avam Anusandhan Sansthan
              </span>
            </p>
            <p>
              Website by{" "}
              <a
                href="https://www.nandann.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:underline"
              >
                Nandann Creative Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
