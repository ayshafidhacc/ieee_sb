import React from 'react';

export default function Membership() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card flex flex-col items-center p-8">
          <svg className="w-10 h-10 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Benefits</h2>
          <ul className="list-disc ml-6 text-blue-900 mb-2">
            <li>Professional networking with global experts and peers</li>
            <li>Access to IEEE Xplore digital library and technical resources</li>
            <li>Discounts on conferences, workshops, and certifications</li>
            <li>Career development, mentorship, and leadership opportunities</li>
            <li>Exclusive member newsletters and publications</li>
          </ul>
          <p className="text-blue-900 text-center">IEEE membership opens doors to a world of knowledge, collaboration, and professional growth.</p>
        </div>
        <div className="glass-card flex flex-col items-center p-8">
          <svg className="w-10 h-10 text-green-600 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">How to Join IEEE</h2>
          <p className="text-blue-900 mb-2">Visit the <a href="https://www.ieee.org/membership/join/index.html" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">official IEEE membership page</a> or contact our branch for personalized guidance.</p>
          <ul className="list-disc ml-6 text-blue-900">
            <li>Choose your membership type (Student, Professional, etc.)</li>
            <li>Fill out the online application form</li>
            <li>Submit payment and receive your IEEE member ID</li>
            <li>Start exploring member benefits and opportunities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
