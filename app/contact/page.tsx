"use client";
import React from 'react';

export default function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setSending(true);
    setError('');
    // Simulate async send (replace with real API call if needed)
    await new Promise((res) => setTimeout(res, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Contact Us</h1>
      <div className="glass-card p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Reach Out</h2>
          <p className="mb-2">Email: <a href="mailto:ieeesb@stthomaskannur.ac.in" className="text-blue-700 underline">ieeesb@stthomaskannur.ac.in</a></p>
          <p className="mb-2">
            <span className="font-semibold text-blue-700">Address:</span><br />
            IEEE SB STM<br />
            St. Thomas College of Engineering and Technology<br />
            Sivapuram P.O, Mattannur (via), Kannur - 670 702
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Form</h2>
          {sent ? (
            <div className="text-green-600 font-semibold text-center py-8">Thank you! Your message has been sent.</div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  className="border border-blue-300 rounded p-2 w-full focus:outline-none focus:border-blue-700"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Your Email</label>
                <input
                  className="border border-blue-300 rounded p-2 w-full focus:outline-none focus:border-blue-700"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  className="border border-blue-300 rounded p-2 w-full focus:outline-none focus:border-blue-700"
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={sending}
                />
              </div>
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <button
                className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition disabled:opacity-60"
                type="submit"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
