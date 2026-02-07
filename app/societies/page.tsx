import React from 'react';

export default function Societies() {
  return (
    <section className="container mx-auto py-16 px-6 ">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Societies & Affinity Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card flex flex-col items-center">
          <svg className="w-12 h-12 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Computer Society (CS)</h2>
          <p>Promotes computing and technology innovation.</p>
        </div>
        <div className="glass-card flex flex-col items-center">
          <svg className="w-12 h-12 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Women in Engineering (WIE)</h2>
          <p>Empowers women in engineering and technology fields.</p>
        </div>
        <div className="glass-card flex flex-col items-center">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1v-2h4v2h-1v4z" /><circle cx="12" cy="12" r="10" /></svg>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Power & Energy Society (PES)</h2>
          <p>Focuses on power and energy advancements.</p>
        </div>
      </div>
    </section>
  );
}
