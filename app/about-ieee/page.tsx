
import React from "react";

export default function AboutIEEE() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">About IEEE</h1>
        <p className="text-lg text-blue-700 mb-12 text-center max-w-2xl mx-auto">
          IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE inspires innovation, fosters collaboration, and empowers professionals and students globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            </span>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Vision & Mission</h2>
            <p className="text-gray-700 text-center">Advancing technology for humanity, IEEE’s mission is to foster innovation and excellence in engineering, science, and technology.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-700"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" /></svg>
            </span>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Global Presence</h2>
            <p className="text-gray-700 text-center">IEEE has members in over 160 countries, connecting professionals, societies, and affinity groups worldwide.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0M12 3v4m0 0a4 4 0 00-4 4v1a4 4 0 004 4v0a4 4 0 004-4v-1a4 4 0 00-4-4z" /></svg>
            </span>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Benefits</h2>
            <ul className="list-disc ml-6 text-gray-700 text-left">
              <li>Access to cutting-edge research and publications</li>
              <li>Networking opportunities</li>
              <li>Professional development</li>
              <li>Conferences and events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
