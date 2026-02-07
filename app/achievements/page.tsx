import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      icon: (
        <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.16 3.24 1.18-6.88-5-4.87 6.91-1 3.07-6.22 3.07 6.22 6.91 1-5 4.87 1.18 6.88z" /></svg>
      ),
      title: "Best Student Branch Award",
      description: "Awarded for outstanding performance in student activities."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
      ),
      title: "Innovation Challenge Winner",
      description: "Secured first place in the regional innovation challenge."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" /><circle cx="12" cy="12" r="10" /></svg>
      ),
      title: "Community Outreach Recognition",
      description: "Recognized for impactful community service and outreach."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
      ),
      title: "Technical Paper Publication",
      description: "Published technical papers in IEEE conferences."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
      ),
      title: "Hackathon Finalist",
      description: "Reached the finals in a national-level hackathon."
    },
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {achievements.map((ach, idx) => (
          <div key={idx} className="glass-card flex flex-col items-center text-center p-6">
            {ach.icon}
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{ach.title}</h2>
            <p className="text-blue-900 mb-2">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
