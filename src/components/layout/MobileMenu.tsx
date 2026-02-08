"use client";

import Link from "next/link";
import { useState } from "react";
import { getAllCategories } from "@/lib/categories";

const categories = getAllCategories();

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [shopExpanded, setShopExpanded] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 end-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 text-brand-dark hover:text-brand-green"
            aria-label="סגור תפריט"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6">
          <Link
            href="/"
            onClick={onClose}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors"
          >
            בית
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors"
          >
            מי אנחנו
          </Link>
          <Link
            href="/customers"
            onClick={onClose}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors"
          >
            לקוחותינו
          </Link>
          <Link
            href="/shop?category=new-in"
            onClick={onClose}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors"
          >
            New In
          </Link>

          {/* Shop accordion */}
          <button
            onClick={() => setShopExpanded(!shopExpanded)}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors flex items-center justify-between w-full"
          >
            <span>חנות</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-4 h-4 transition-transform ${
                shopExpanded ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {shopExpanded && (
            <div className="flex flex-col ps-4">
              <Link
                href="/shop"
                onClick={onClose}
                className="py-2 text-sm text-brand-gray hover:text-brand-green transition-colors"
              >
                כל המוצרים
              </Link>
              {categories
                .filter((c) => c.slug !== "new-in")
                .map((category) => (
                  <Link
                    key={category.slug}
                    href={`/shop?category=${category.slug}`}
                    onClick={onClose}
                    className="py-2 text-sm text-brand-gray hover:text-brand-green transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
            </div>
          )}

          <Link
            href="/gallery"
            onClick={onClose}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors"
          >
            הבתים שלכם
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="py-3 text-brand-dark hover:text-brand-green border-b border-brand-border transition-colors"
          >
            צור קשר
          </Link>
        </nav>
      </div>
    </>
  );
}
