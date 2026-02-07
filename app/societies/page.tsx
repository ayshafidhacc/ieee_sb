import React from 'react';

export default function Societies() {
  return (
    <section className="container mx-auto py-16 px-6 ">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Societies & Affinity Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Computer Society (CS)</h2>
          <p>Promotes computing and technology innovation.</p>
        </div>
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Women in Engineering (WIE)</h2>
          <p>Empowers women in engineering and technology fields.</p>
        </div>
        <div className="glass-card">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Power & Energy Society (PES)</h2>
          <p>Focuses on power and energy advancements.</p>
        </div>
      </div>
    </section>
  );
}
