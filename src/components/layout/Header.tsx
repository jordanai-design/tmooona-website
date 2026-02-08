"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-brand-dark hover:text-brand-green"
            aria-label="פתח תפריט"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-heading font-bold text-brand-dark tracking-wider">
              TMOOONA
            </span>
          </Link>

          {/* Desktop nav */}
          <Navigation />

          {/* Spacer for mobile alignment */}
          <div className="w-10 lg:hidden" />
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
