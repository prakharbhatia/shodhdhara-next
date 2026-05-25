import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shodh Dhara Editorial Office",
  "description": "Editorial office of Shodh Dhara — UGC Care Listed Research Journal (ISSN: 0975-3664). Arts & Humanities, Bi-Lingual, Quarterly, Est. 2005.",
  "url": "https://shodhdhara.com",
  "logo": "https://shodhdhara.com/logo.png",
  "telephone": "+91-9415592698",
  "email": "shodhdharajournal2005@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1075, Bank Colony, Jalaun Road",
    "addressLocality": "Orai",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "285001",
    "addressCountry": "IN",
  },
  "founder": {
    "@type": "Person",
    "name": "Dr. (Smt.) Neelam Mukesh",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9415592698",
    "contactType": "editorial",
    "email": "shodhdharajournal2005@gmail.com",
    "availableLanguage": ["Hindi", "English"],
  },
};

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Shodh Dhara — Editorial Office & Editorial Team",
  },
  description:
    "Contact Shodh Dhara Research Journal ISSN 0975-3664. Editorial team: Dr. (Smt.) Neelam Mukesh, Dr. Rajesh Chandra Pandey, Dr. Shravan Kumar Tripathi. Email: shodhdharajournal2005@gmail.com | Phone: +91-9415592698.",
  alternates: { canonical: "https://shodhdhara.com/contact-us/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shodh Dhara",
    title: "Contact Us | Shodh Dhara Research Journal",
    description:
      "Reach the Shodh Dhara editorial team. Submit research papers, query about publication, or contact our editorial office. ISSN: 0975-3664.",
    images: [
      {
        url: "https://shodhdhara.com/logo.png",
        width: 512,
        height: 512,
        alt: "Shodh Dhara Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Shodh Dhara Research Journal",
    description:
      "Contact Shodh Dhara editorial office. Email: shodhdharajournal2005@gmail.com | Phone: +91-9415592698.",
    images: ["https://shodhdhara.com/logo.png"],
  },
};

const contactMethods = [
  {
    title: "Call Us",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    links: [
      { label: "+91-9415592698", sublabel: "Chief Editor", href: "tel:+919415592698" },
      { label: "+91-9450109471", sublabel: "Editor", href: "tel:+919450109471" },
      { label: "+91-8840259163", sublabel: "Co-Editor", href: "tel:+918840259163" },
    ],
  },
  {
    title: "Email Us",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    links: [
      { label: "shodhdharajournal2005@gmail.com", href: "mailto:shodhdharajournal2005@gmail.com" },
    ],
  },
  {
    title: "Website",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    links: [
      { label: "www.shodhdhara.com", href: "https://shodhdhara.com" },
    ],
  },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen">
        <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

      <section className="bg-brand-gradient text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-xl text-black mt-4 max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us through any of the following channels.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-cream rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-gold">
                  {method.icon}
                </div>
                <h2 className="text-xl font-semibold text-black mb-4">
                  {method.title}
                </h2>
                <div className="space-y-2">
                  {method.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-base text-black hover:text-black transition-colors font-medium"
                    >
                      {link.label}
                      {"sublabel" in link && link.sublabel && (
                        <span className="block text-sm font-normal text-slate">
                          {link.sublabel}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Editorial Team</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/editors/neelam.jpeg"
                  alt="Dr. (Smt.) Neelam Mukesh"
                  width={72}
                  height={72}
                  className="rounded-2xl object-cover w-18 h-18 border-2 border-gold flex-shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-primary">Chief Editor</h3>
                  <p className="text-sm font-semibold text-primary-light">
                    Dr. (Smt.) Neelam Mukesh
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                1075, Bank Colony, Jalaun Road
                <br />
                Orai (Jalaun) 285001, U.P.
              </p>
              <a
                href="https://sites.google.com/view/drneelammukeshorai/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 hover:text-gold-dark transition-colors"
              >
                View Profile
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/editors/rajesh.jpeg"
                  alt="Dr. Rajesh Chandra Pandey"
                  width={72}
                  height={72}
                  className="rounded-2xl object-cover w-18 h-18 border-2 border-gold flex-shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-primary">Editor</h3>
                  <p className="text-sm font-semibold text-primary-light">
                    Dr. Rajesh Chandra Pandey
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                262, Pathakpura, Orai (Jalaun) 285001, U.P.
                <br />
                Mob: <a href="tel:+919415592698" className="hover:text-primary">9415592698</a>
                <br />
                <a href="mailto:shodhdharajournal2005@gmail.com" className="hover:text-primary break-all">shodhdharajournal2005@gmail.com</a>
              </p>
              <a
                href="https://sites.google.com/view/drrajeshchandrapandeyorai/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 hover:text-gold-dark transition-colors"
              >
                View Profile
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/editors/shravan.jpeg"
                  alt="Dr. Shravan Kumar Tripathi"
                  width={72}
                  height={72}
                  className="rounded-2xl object-cover w-18 h-18 border-2 border-gold flex-shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-primary">Co-Editor</h3>
                  <p className="text-sm font-semibold text-primary-light">
                    Dr. Shravan Kumar Tripathi
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                Mob: <a href="tel:+918840259163" className="hover:text-primary">8840259163</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Location Map</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1793.260636510209!2d79.44416465802665!3d25.983736406972785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU5JzAxLjQiTiA3OcKwMjYnNDIuOSJF!5e0!3m2!1sen!2sin!4v1494458512499"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shodh Dhara Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
