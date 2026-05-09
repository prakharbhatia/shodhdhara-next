"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const primaryNavItems = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/current-issue/", label: "Latest Issues" },
  { href: "/guidelines/", label: "Guidelines" },
  { href: "/declaration-form/", label: "Declaration Form" },
  { href: "/membership-form/", label: "Membership Form" },
  { href: "/contact-us/", label: "Contact Us" },
];

const utilityNavItems = [
  { href: "/research-journals/", label: "Research Journals" },
  { href: "/frequency-of-publication/", label: "Frequency of Publication" },
  { href: "/board-members/", label: "Board Members" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        {/* Top bar with journal info and utility links */}
        <div className="bg-slate-900 text-white py-1.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
              <div className="flex items-center gap-4 text-amber-100">
                <span className="hidden sm:inline text-xs sm:text-sm">
                  <span className="text-gold font-semibold">ISSN:</span>{" "}
                  0975-3664
                </span>
                <span className="hidden md:inline text-xs sm:text-sm">
                  <span className="text-gold font-semibold">RNI:</span>{" "}
                  U.P.BIL/2012/43696
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
                {utilityNavItems.map((item) => {
                  const isActive =
                    pathname === item.href || pathname === item.href.slice(0, -1);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-2 py-1 rounded text-[11px] xl:text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-gold text-slate-900"
                          : "text-amber-100 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="text-amber-100 text-xs sm:text-sm font-medium lg:hidden">
                A UGC Care Listed Research Journal
              </div>
              <div className="hidden lg:block text-white text-xs sm:text-sm font-medium">
                A UGC Care Listed Research Journal
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3">
            {/* Logo — image only, no text */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Shodh Dhara"
                width={180}
                height={66}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center">
              <ul className="flex flex-wrap items-center gap-0.5">
                {primaryNavItems.map((item) => {
                  const isActive =
                    pathname === item.href || pathname === item.href.slice(0, -1);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`px-2.5 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-dark hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 xl:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menu Panel */}
          <div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl xl:hidden overflow-y-auto"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <Image
                src="/logo.png"
                alt="Shodh Dhara"
                width={140}
                height={52}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-1">
                {primaryNavItems.map((item) => {
                  const isActive =
                    pathname === item.href || pathname === item.href.slice(0, -1);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-dark hover:bg-primary/5 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide text-slate">
                  More Links
                </p>
                <ul className="space-y-1">
                  {utilityNavItems.map((item) => {
                    const isActive =
                      pathname === item.href || pathname === item.href.slice(0, -1);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                            isActive
                              ? "bg-primary text-white shadow-sm"
                              : "text-slate-dark hover:bg-primary/5 hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
            <div className="p-4 border-t border-gray-100">
              <p className="text-sm text-slate">
                <span className="font-semibold text-primary">ISSN:</span>{" "}
                0975-3664
              </p>
              <p className="text-sm text-slate mt-1">
                <span className="font-semibold text-primary">RNI:</span>{" "}
                U.P.BIL/2012/43696
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
