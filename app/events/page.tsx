// ...existing code for old events page layout...
import React from "react";

export default function Events() {
	return (
		<section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
			<div className="container mx-auto px-6">
								<h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">Events & Activities 2024-25</h1>
								<p className="text-lg text-blue-700 mb-12 text-center max-w-2xl mx-auto">
										Explore the major technical, creative, and research-focused events organized by IEEE SB STM during 2024-25, fostering innovation, collaboration, and professional growth.
								</p>
								<div className="space-y-8">
									{/* Workshop on UI/UX */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Workshop on UI/UX</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 11-13 September 2024 | <span className="font-semibold">Venue:</span> Seminar Hall 1, STM | <span className="font-semibold">Participants:</span> 220</p>
										<p className="text-white">A hands-on workshop led by Mr. Navaneeth Narayanan and Ms. Krishnendhu S Nair, introducing first-year students to UI/UX design principles and practical skills using Figma. The sessions covered user research, wireframing, prototyping, and interactive design, providing a strong foundation in modern design practices.</p>
									</div>
									{/* Design Pulse - Poster Designing Competition */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>Design Pulse - Poster Designing Competition</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 24 January 2025 | <span className="font-semibold">Venue:</span> Programming Lab 1, STM | <span className="font-semibold">Participants:</span> 13</p>
										<p className="text-white">A creative competition encouraging students to showcase their graphic design skills. Participants designed posters within 45 minutes based on a theme, applying principles of color theory, typography, and composition. The event fostered creativity, technical skill, and effective visual communication.</p>
									</div>
									{/* Workshop on Product Design */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>Workshop on Product Design</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 22 February 2025 | <span className="font-semibold">Venue:</span> Seminar Hall 1, STM | <span className="font-semibold">Participants:</span> 31</p>
										<p className="text-white">A one-day workshop led by Mr. Abhinav Rajeev, Director of Bumblebee Instruments Pvt. Ltd., focusing on the fundamentals of product design, design thinking, and prototyping. The event included an idea pitching competition, encouraging collaboration and entrepreneurial thinking among students.</p>
									</div>
									{/* Expert Talk on AI for Smart IoT Applications */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>Expert Talk: Addressing Research Challenges in AI for Smart IoT Applications</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 8 September 2025 | <span className="font-semibold">Venue:</span> Seminar Hall 1, STM | <span className="font-semibold">Participants:</span> 70</p>
										<p className="text-white">A session by Dr. Sobin C C (SRM University, Andhra Pradesh) on the intersection of AI and IoT, covering research challenges, data privacy, security, and ethical implications. The talk encouraged critical thinking and inspired students to pursue research in emerging technologies.</p>
									</div>
									{/* Online Workshop on Blockchain */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.16 3.24 1.18-6.88-5-4.87 6.91-1 3.07-6.22 3.07 6.22 6.91 1-5 4.87 1.18 6.88z" /></svg>Online Workshop: Fundamentals of Blockchain and its Future Applications</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 13 September 2025 | <span className="font-semibold">Venue:</span> Google Meet | <span className="font-semibold">Participants:</span> 97</p>
										<p className="text-white">An online workshop for S3, S5, and S7 students, coordinated by the Department of CSE (Geekzone) and IEEE SB STM. The session covered blockchain fundamentals, real-world applications, smart contracts, and included a live demonstration, enhancing participants’ technical awareness and research interest in blockchain technology.</p>
									</div>
								</div>
								<div className="glass-card p-6 mt-8">
										<h2 className="text-xl font-bold text-blue-700 mb-4">2024-25 Highlights</h2>
										<ul className="list-disc ml-6 text-white">
												<li>5+ major events and workshops conducted</li>
												<li>Focus on design, innovation, and emerging technologies</li>
												<li>Collaboration with industry experts and academic departments</li>
												<li>Hands-on learning and research-driven activities</li>
										</ul>
								</div>

								{/* 2023-24 Events Section */}
								<h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 mt-16 text-center">Events & Activities 2023-24</h1>
								<p className="text-lg text-blue-700 mb-12 text-center max-w-2xl mx-auto">
										A detailed look at the impactful events and initiatives organized by IEEE SB STM during 2023-24, promoting technical excellence, leadership, and community engagement.
								</p>
								<div className="space-y-8">
									{/* Flutter Workshop */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Workshop on Flutter</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 11 November 2023 | <span className="font-semibold">Venue:</span> Programming Lab 1, STM | <span className="font-semibold">Participants:</span> 31</p>
										<p className="text-white">An enlightening hands-on workshop introducing Flutter, Google's UI toolkit, with expert guests from GCE Kannur. Participants learned to build cross-platform apps and gained practical experience, receiving positive feedback for the interactive session.</p>
									</div>
									{/* Execom Selection */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>Execom Selection</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 20 November 2023 | <span className="font-semibold">Venue:</span> Library, STM | <span className="font-semibold">Participants:</span> 31</p>
										<p className="text-white">Selection of new executive committee members for IEEE SB STM, fostering leadership and organizational skills. The event included a rigorous selection process and provided insights into committee roles and responsibilities.</p>
									</div>
									{/* Execom Training (Nov) */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>Execom Training</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 30 November 2023 | <span className="font-semibold">Venue:</span> Google Meet | <span className="font-semibold">Participants:</span> 15</p>
										<p className="text-white">Online training for newly selected execom members, with guidance from IEEE Kerala Section and Malabar Hub leaders. The session covered roles, responsibilities, and leadership development.</p>
									</div>
									{/* Inauguration of IEEE SB STM */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>Inauguration of IEEE Student Branch</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 07 December 2023 | <span className="font-semibold">Venue:</span> Seminar Hall 1 | <span className="font-semibold">Participants:</span> 100</p>
										<p className="text-white">A milestone event marking the official launch of IEEE SB STM, featuring addresses by dignitaries, a session on IEEE Code of Ethics, and a ceremonial lamp lighting. The event highlighted the importance of ethics and innovation in technology.</p>
									</div>
									{/* Technical Talk on IEEE Standards */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>Technical Talk on IEEE Standards</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 07 December 2023 | <span className="font-semibold">Venue:</span> Seminar Hall 1 | <span className="font-semibold">Participants:</span> 100</p>
										<p className="text-white">An expert session by Prof. Muhammed Kasim S on the significance of IEEE standards in technology, featuring practical examples and interactive discussions. The talk increased awareness of industry standards among students.</p>
									</div>
									{/* Technical Quiz Trivia */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>Trivia - Technical Quiz</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 23 February 2024 | <span className="font-semibold">Venue:</span> Online & Seminar Hall 1 | <span className="font-semibold">Participants:</span> 61</p>
										<p className="text-white">A two-round technical quiz competition testing knowledge in engineering and technology. The event fostered healthy competition, teamwork, and learning, with prizes for top performers.</p>
									</div>
									{/* Path to Internationalisation */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>Technical Talk: Path to Internationalisation</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 11 March 2024 | <span className="font-semibold">Venue:</span> Seminar Hall 1 | <span className="font-semibold">Participants:</span> 47</p>
										<p className="text-white">A seminar by Mr. Shone Jose on leveraging IEEE for global opportunities, including study abroad, international conferences, and networking. The session encouraged students to embrace international experiences and develop cross-cultural skills.</p>
									</div>
									{/* Execom Training (Mar) */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>Execom Training</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 11 March 2024 | <span className="font-semibold">Venue:</span> STM | <span className="font-semibold">Participants:</span> 15</p>
										<p className="text-white">A follow-up training session for execom members, focusing on leadership, teamwork, and effective management of IEEE SB activities.</p>
									</div>
									{/* Solar Power Plants Workshop Part 1 */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>Workshop: Design and Commissioning of Solar Power Plants (Part 1)</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 15 March 2024 | <span className="font-semibold">Venue:</span> Seminar Hall 1 | <span className="font-semibold">Participants:</span> 61</p>
										<p className="text-white">A technical workshop led by Dr. Shinu Mathew John, covering the fundamentals of solar power plant design, real-life examples, and practical insights. Sponsored by Sonic Power Solutions.</p>
									</div>
									{/* Solar Power Plants Workshop Part 2 */}
									<div className="glass-card p-6">
										<h2 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>Workshop: Design and Commissioning of Solar Power Plants (Part 2)</h2>
										<p className="text-white mb-1"><span className="font-semibold">Date:</span> 15 April 2024 | <span className="font-semibold">Venue:</span> Seminar Hall 1 | <span className="font-semibold">Participants:</span> 47</p>
										<p className="text-white">A hands-on session on solar power plant setup, from site assessment to installation and maintenance. The workshop emphasized practical skills and sustainable energy solutions. Sponsored by Sonic Power Solutions, in association with NSS Unit 310 and Nature Club STM.</p>
									</div>
								</div>
								<div className="glass-card p-6 mt-8">
										<h2 className="text-xl font-bold text-blue-700 mb-4">2023-24 Highlights</h2>
										<ul className="list-disc ml-6 text-white">
												<li>10+ major events and workshops conducted</li>
												<li>Strong focus on technical upskilling, leadership, and community outreach</li>
												<li>Collaboration with industry, alumni, and other organizations</li>
												<li>Active participation and recognition within the IEEE community</li>
										</ul>
								</div>
			</div>
		</section>
	);
}
