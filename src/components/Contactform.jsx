import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const { darkMode } = useDarkMode();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setForm({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#083D77] dark:text-white mb-10">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-xl shadow-md bg-white dark:bg-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F95738] ${
                darkMode ? " text-black" : "bg-white text-black"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F95738] ${
                darkMode ? " text-black" : "bg-white text-black"
              }`}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
              value={form.company}
              onChange={handleChange}
              className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F95738] ${
                darkMode ? " text-black" : "bg-white text-black"
              }`}
            />
            <select
              name="licenseType"
              required
              value={form.licenseType}
              onChange={handleChange}
              className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F95738] ${
                darkMode ? " text-black" : "bg-white text-black"
              }`}
            >
              <option value="">Select License Type</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="Office">Microsoft Office</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className={`mt-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F95738] ${
              darkMode ? " text-black" : "bg-white text-black"
            }`}
          />
          <button
            type="submit"
            className="mt-6 w-full bg-[#EE964B] hover:bg-[#F95738] text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
