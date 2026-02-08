"use client";

import Link from "next/link";
import { useState } from "react";
import { getAllCategories } from "@/lib/categories";

const categories = getAllCategories();

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/about", label: "מי אנחנו" },
  { href: "/customers", label: "לקוחותינו" },
  { href: "/shop?category=new-in", label: "New In" },
  { href: "/shop", label: "חנות", hasDropdown: true },
  { href: "/gallery", label: "הבתים שלכם" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navigation() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) =>
        link.hasDropdown ? (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link
              href={link.href}
              className="text-sm font-medium text-brand-dark hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
            {shopOpen && (
              <div className="absolute top-full start-0 pt-2 z-50">
                <div className="bg-white shadow-lg border border-brand-border rounded-md py-2 min-w-48">
                  {categories
                    .filter((c) => c.slug !== "new-in")
                    .map((category) => (
                      <Link
                        key={category.slug}
                        href={`/shop?category=${category.slug}`}
                        className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-light hover:text-brand-green transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-brand-dark hover:text-brand-green transition-colors"
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
