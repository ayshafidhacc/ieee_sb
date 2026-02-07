// ...existing code for original homepage...
import Link from "next/link";
import React from "react";
import Image from 'next/image';


export default function Home() {
	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden  to-blue-100">
			
			<div className="container mx-auto px-6 py-20 flex flex-col items-center relative z-10">
				<img src="/ieee_sb/SB Logo.png" alt="IEEE Student Branch Logo" className="h-28 mb-6 drop-shadow-xl" />
				<h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">IEEE Student Branch</h1>
				<p className="text-xl md:text-2xl text-blue-700 mb-8 text-center max-w-2xl">
					Empowering students through technology, leadership, and innovation.<br />
					<span className="text-blue-900 font-semibold">Join a global community dedicated to advancing engineering and science for the benefit of humanity.</span>
				</p>
				<Link href="/membership" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-800 transition mb-12 text-lg">Become a Member</Link>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 w-full">
					<div className="glass-card p-8 flex flex-col items-center shadow-lg hover:scale-105 transition">
						<svg className="w-12 h-12 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
						<h2 className="text-2xl font-bold text-blue-700 mb-2">Global Network</h2>
						<p className="text-center text-white">Connect with professionals, students, and leaders worldwide through IEEE’s vast network.</p>
					</div>
					<div className="glass-card p-8 flex flex-col items-center shadow-lg hover:scale-105 transition">
						<svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
						<h2 className="text-2xl font-bold text-blue-700 mb-2">Events & Activities</h2>
						<p className="text-center text-white">Participate in workshops, seminars, competitions, and social events that foster growth and collaboration.</p>
					</div>
					<div className="glass-card p-8 flex flex-col items-center shadow-lg hover:scale-105 transition">
						<svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.16 3.24 1.18-6.88-5-4.87 6.91-1 3.07-6.22 3.07 6.22 6.91 1-5 4.87 1.18 6.88z" /></svg>
						<h2 className="text-2xl font-bold text-blue-700 mb-2">Leadership & Recognition</h2>
						<p className="text-center text-white">Develop leadership skills and earn recognition through active involvement and achievements.</p>
					</div>
				</div>
				{/* Highlight section */}
				<div className="mt-16 w-full flex flex-col items-center">
					<h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why IEEE?</h3>
					<div className="flex flex-col md:flex-row gap-8 w-full justify-center">
						<div className="glass-card p-6 flex-1 flex flex-col items-center">
							<h4 className="text-xl font-semibold text-blue-700 mb-2">Cutting-edge Research</h4>
							<p className="text-blue-900 text-center">Access to world-class journals, publications, and standards.</p>
						</div>
						<div className="glass-card p-6 flex-1 flex flex-col items-center">
							<h4 className="text-xl font-semibold text-blue-700 mb-2">Professional Growth</h4>
							<p className="text-blue-900 text-center">Opportunities for networking, mentorship, and career development.</p>
						</div>
						<div className="glass-card p-6 flex-1 flex flex-col items-center">
							<h4 className="text-xl font-semibold text-blue-700 mb-2">Community Impact</h4>
							<p className="text-blue-900 text-center">Engage in outreach, volunteering, and social responsibility initiatives.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
