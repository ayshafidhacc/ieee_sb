// ...existing code for original homepage...
import React from "react";

export default function Home() {
	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
			<div className="container mx-auto px-6 py-16 flex flex-col items-center">
				<img src="/ieee_student_branch_logo.svg" alt="IEEE Student Branch Logo" className="h-24 mb-6" />
				<h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 text-center">IEEE Student Branch</h1>
				<p className="text-lg md:text-xl text-blue-700 mb-8 text-center max-w-2xl">
					Empowering students through technology, leadership, and innovation. Join a global community dedicated to advancing engineering and science for the benefit of humanity.
				</p>
				<a href="/membership" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition mb-10">Become a Member</a>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
					<div className="glass-card p-6 flex flex-col items-center">
						<h2 className="text-xl font-bold text-blue-700 mb-2">Global Network</h2>
						<p className="text-gray-700 text-center">Connect with professionals, students, and leaders worldwide through IEEE’s vast network.</p>
					</div>
					<div className="glass-card p-6 flex flex-col items-center">
						<h2 className="text-xl font-bold text-blue-700 mb-2">Events & Activities</h2>
						<p className="text-gray-700 text-center">Participate in workshops, seminars, competitions, and social events that foster growth and collaboration.</p>
					</div>
					<div className="glass-card p-6 flex flex-col items-center">
						<h2 className="text-xl font-bold text-blue-700 mb-2">Leadership & Recognition</h2>
						<p className="text-gray-700 text-center">Develop leadership skills and earn recognition through active involvement and achievements.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
