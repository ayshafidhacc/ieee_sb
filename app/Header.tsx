"use client";
import React from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="w-full bg-white text-blue-700 shadow-md border-b border-blue-100">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <img src="/ieee_student_branch_logo.svg" alt="IEEE Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-xl tracking-wide">IEEE Student Branch</span>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about-ieee" className="hover:underline">About IEEE</a></li>
          <li><a href="/about-sb" className="hover:underline">About SB</a></li>
          <li><a href="/societies" className="hover:underline">Societies</a></li>
          <li><a href="/executive-committee" className="hover:underline">Executive Committee</a></li>
          <li><a href="/events" className="hover:underline">Events</a></li>
          <li><a href="/achievements" className="hover:underline">Achievements</a></li>
          <li><a href="/membership" className="hover:underline">Membership</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li><a href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about-ieee" className="hover:underline" onClick={() => setMenuOpen(false)}>About IEEE</a></li>
            <li><a href="/about-sb" className="hover:underline" onClick={() => setMenuOpen(false)}>About SB</a></li>
            <li><a href="/societies" className="hover:underline" onClick={() => setMenuOpen(false)}>Societies</a></li>
            <li><a href="/executive-committee" className="hover:underline" onClick={() => setMenuOpen(false)}>Executive Committee</a></li>
            <li><a href="/events" className="hover:underline" onClick={() => setMenuOpen(false)}>Events</a></li>
            <li><a href="/achievements" className="hover:underline" onClick={() => setMenuOpen(false)}>Achievements</a></li>
            <li><a href="/membership" className="hover:underline" onClick={() => setMenuOpen(false)}>Membership</a></li>
            <li><a href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
