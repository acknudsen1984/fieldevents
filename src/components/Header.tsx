"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/app-icon.png"
            alt="Field Day"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-field-navy">Field Day</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-sm font-medium text-field-muted hover:text-field-blue transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-sm font-medium text-field-muted hover:text-field-blue transition-colors"
          >
            Support
          </Link>
          <a
            href="https://apps.apple.com/app/field-day"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-field-blue px-4 py-2 text-sm font-semibold text-white hover:bg-field-blue-dark transition-colors"
          >
            Download App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-field-navy"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
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
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link
            href="/privacy"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-field-muted hover:text-field-blue"
          >
            Privacy Policy
          </Link>
          <Link
            href="/support"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-field-muted hover:text-field-blue"
          >
            Support
          </Link>
          <a
            href="https://apps.apple.com/app/field-day"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full bg-field-blue px-4 py-2 text-sm font-semibold text-white text-center hover:bg-field-blue-dark transition-colors"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
