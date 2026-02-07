
import React from "react";

export default function AboutSB() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">About IEEE Student Branch</h1>
        <p className="text-lg text-blue-700 mb-12 text-center max-w-2xl mx-auto">
          Our IEEE Student Branch fosters technical growth, leadership, and community engagement among students, guided by IEEE values and a dedicated counselor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Student Branch Details</h2>
            <p className="text-gray-700 text-center">We provide opportunities for students to participate in technical activities, leadership roles, and community service.</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Counselor</h2>
            <p className="text-gray-700 text-center">Our branch is guided by a dedicated counselor who supports student initiatives and professional development.</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Objectives</h2>
            <ul className="list-disc ml-6 text-gray-700 text-left">
              <li>Promote IEEE values</li>
              <li>Encourage innovation</li>
              <li>Support academic excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
