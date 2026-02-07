import React from 'react';

export default function Achievements() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Awards</h2>
          <p>Recognizing outstanding contributions and excellence.</p>
        </div>
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Recognitions</h2>
          <p>Celebrating achievements and milestones of our members.</p>
        </div>
      </div>
    </section>
  );
}
