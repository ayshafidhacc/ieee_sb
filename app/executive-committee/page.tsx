import React from 'react';

export default function ExecutiveCommittee() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Executive Committee</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="glass-card text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Chair</h2>
          <p>Leads the branch and oversees all activities.</p>
        </div>
        <div className="glass-card text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Vice Chair</h2>
          <p>Supports the chair and manages operations.</p>
        </div>
        <div className="glass-card text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Secretary</h2>
          <p>Handles documentation and communication.</p>
        </div>
        <div className="glass-card text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Treasurer</h2>
          <p>Manages finances and budgeting.</p>
        </div>
        <div className="glass-card text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Other Roles</h2>
          <p>Additional core team members.</p>
        </div>
      </div>
    </section>
  );
}
