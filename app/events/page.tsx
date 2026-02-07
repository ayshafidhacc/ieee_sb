// ...existing code for old events page layout...
import React from "react";

export default function Events() {
	return (
		<section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
			<div className="container mx-auto px-6">
				<h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">Events & Activities</h1>
				<p className="text-lg text-blue-700 mb-12 text-center max-w-2xl mx-auto">
					Explore our past, ongoing, and upcoming events that foster learning, networking, and innovation within the IEEE Student Branch.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg shadow p-6">
						<h2 className="text-xl font-bold text-blue-700 mb-2">Past Events</h2>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Technical Workshop: AI & Robotics</li>
							<li>IEEE Day Celebration</li>
							<li>Leadership Bootcamp</li>
						</ul>
					</div>
					<div className="bg-white rounded-lg shadow p-6">
						<h2 className="text-xl font-bold text-blue-700 mb-2">Upcoming Events</h2>
						<ul className="list-disc ml-6 text-gray-700">
							<li>Annual Symposium 2026</li>
							<li>Hackathon: Tech for Good</li>
							<li>Industry Networking Night</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
