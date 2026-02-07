
"use client";
import React from "react";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <header className="w-full bg-white text-blue-700 shadow-md border-b border-blue-100">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center gap-2">
              <img src="/ieee_sb/SB Logo.png" alt="IEEE Logo" className="h-8 w-auto mr-2" />
              {/* <span className="font-bold text-xl tracking-wide">IEEE Student Branch</span> */}
            </div>
            <button
              className="lg:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul className="hidden lg:flex gap-6 font-medium">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about-ieee" className="hover:underline">About IEEE</Link></li>
              <li><Link href="/about-sb" className="hover:underline">About SB</Link></li>
              <li><Link href="/societies" className="hover:underline">Societies</Link></li>
              <li><Link href="/executive-committee" className="hover:underline">Executive Committee</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/achievements" className="hover:underline">Achievements</Link></li>
              <li><Link href="/membership" className="hover:underline">Membership</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden bg-white border-t border-blue-100 px-6 py-4">
              <ul className="flex flex-col gap-4 font-medium">
                <li><Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link href="/about-ieee" className="hover:underline" onClick={() => setMenuOpen(false)}>About IEEE</Link></li>
                <li><Link href="/about-sb" className="hover:underline" onClick={() => setMenuOpen(false)}>About SB</Link></li>
                <li><Link href="/societies" className="hover:underline" onClick={() => setMenuOpen(false)}>Societies</Link></li>
                <li><Link href="/executive-committee" className="hover:underline" onClick={() => setMenuOpen(false)}>Executive Committee</Link></li>
                <li><Link href="/events" className="hover:underline" onClick={() => setMenuOpen(false)}>Events</Link></li>
                <li><Link href="/achievements" className="hover:underline" onClick={() => setMenuOpen(false)}>Achievements</Link></li>
                <li><Link href="/membership" className="hover:underline" onClick={() => setMenuOpen(false)}>Membership</Link></li>
                <li><Link href="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              </ul>
            </div>
          )}
        </header>
        <main className="min-h-screen bg-background text-foreground to-blue-100">
          {children}
        </main>
        <footer className="w-full bg-white text-blue-700 py-4 mt-8 text-center border-t border-blue-100">
          <span>&copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved.</span>
        </footer>
      </body>
    </html>
  );
}
