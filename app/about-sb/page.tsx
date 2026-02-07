
import React from "react";

export default function AboutSB() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">About IEEE Student Branch</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="glass-card p-8 flex-1 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Active members</h2>
            <p className="text-white text-3xl font-bold">30+</p>
          </div>
          <div className="glass-card p-8 flex-1 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Events organised</h2>
            <p className="text-white text-3xl font-bold">17</p>
          </div>
        </div>
        <div className="glass-card p-8 mb-8">
          <p className="text-white mb-4">
            The IEEE Student Branch at St. Thomas College of Engineering and Technology, Kannur (IEEE SB STM), established in December 2023, is a vibrant student-led community driven by innovation, learning, and impact. Guided by our Branch Counsellor, Dr. Sreekesh Namboodiri T, the branch creates opportunities for students to explore technology beyond classrooms.<br /><br />
            IEEE SB STM empowers students through hands-on workshops, tech talks, hackathons, competitions, and collaborative projects that focus on real-world problem solving. We encourage curiosity, creativity, and collaboration while helping members build technical expertise, leadership skills, and a strong professional network.<br /><br />
            Rooted in IEEE’s core values of integrity, inclusiveness, global outlook, and service to humanity, IEEE SB STM strives to nurture future-ready engineers who innovate responsibly and contribute meaningfully to society and the global engineering community.
          </p>
        </div>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Links</h2>
          <ul className="text-white list-disc ml-6">
            <li>Instagram: <a href="https://www.instagram.com/ieeesbstm/" className="underline" target="_blank" rel="noopener noreferrer">https://www.instagram.com/ieeesbstm/</a></li>
            <li>IEEE: <a href="https://www.ieee.org/" className="underline" target="_blank" rel="noopener noreferrer">https://www.ieee.org/</a></li>
            <li>Xplore: <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="underline" target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/Xplore/home.jsp</a></li>
            <li>Collabratec: <a href="https://ieee-collabratec.ieee.org/" className="underline" target="_blank" rel="noopener noreferrer">https://ieee-collabratec.ieee.org/</a></li>
            <li>Spectrum: <a href="https://spectrum.ieee.org/" className="underline" target="_blank" rel="noopener noreferrer">https://spectrum.ieee.org/</a></li>
            <li>IEEE Kerala Section: <a href="https://ieeekerala.org/" className="underline" target="_blank" rel="noopener noreferrer">https://ieeekerala.org/</a></li>
            <li>Asia Pacific Region: <a href="https://www.ieeer10.org/" className="underline" target="_blank" rel="noopener noreferrer">https://www.ieeer10.org/</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
