import React from 'react';

export default function Contact() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Contact Us</h1>
      <div className="glass-card p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Reach Out</h2>
          <p className="mb-2">Email: <a href="mailto:ieee.sb@email.com" className="text-blue-700 underline">ieee.sb@email.com</a></p>
          <p className="mb-2">Address: [Your Institution Address]</p>
          <p className="mb-2">Social Links: [Facebook, Twitter, LinkedIn]</p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input className="border border-blue-300 rounded p-2 w-full focus:outline-none focus:border-blue-700" type="text" placeholder="Name" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input className="border border-blue-300 rounded p-2 w-full focus:outline-none focus:border-blue-700" type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea className="border border-blue-300 rounded p-2 w-full focus:outline-none focus:border-blue-700" placeholder="Message" />
            </div>
            <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
