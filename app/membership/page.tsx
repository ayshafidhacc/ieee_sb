import React from 'react';

export default function Membership() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Benefits</h2>
          <ul className="list-disc ml-6">
            <li>Professional networking</li>
            <li>Access to resources</li>
            <li>Career development</li>
          </ul>
        </div>
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">How to Join IEEE</h2>
          <p>Visit the official IEEE website or contact our branch for membership details.</p>
        </div>
      </div>
    </section>
  );
}
