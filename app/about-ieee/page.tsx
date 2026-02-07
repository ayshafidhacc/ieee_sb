
import React from "react";

export default function AboutIEEE() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">About IEEE</h1>
        <p className="text-lg text-blue-700 mb-8 text-center max-w-2xl mx-auto">
          IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 flex flex-col items-center">
            <svg className="w-12 h-12 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Mission</h2>
            <p className="text-center text-white">IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center">
            <svg className="w-12 h-12 text-green-600 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Vision</h2>
            <p className="text-center text-white">IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
          </div>
        </div>
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Who We Are</h2>
          <p className="text-blue-900 text-center mb-2">
            IEEE is a trusted voice for engineering, computing, and technology information around the globe. With more than 400,000 members in over 160 countries, IEEE is a leading authority in a wide variety of areas ranging from aerospace systems, computers, and telecommunications to biomedical engineering, electric power, and consumer electronics.
          </p>
          <p className="text-blue-900 text-center">
            IEEE produces over 30% of the world’s literature in electrical engineering, computer science, and electronics, and publishes more than 200 journals and magazines. IEEE also sponsors more than 1,900 conferences and events worldwide each year.
          </p>
        </div>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">What We Do</h2>
          <ul className="list-disc ml-6 text-blue-900 text-left">
            <li>Publishes highly cited journals, magazines, and conference proceedings</li>
            <li>Develops global standards in a broad range of industries</li>
            <li>Hosts conferences and events for knowledge sharing and networking</li>
            <li>Provides educational and professional development resources</li>
            <li>Supports communities and societies for specialized interests</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
