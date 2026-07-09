import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_kvosd5g";
    const templateId = "template_hk8lwk4";
    const publicKey = "Oq0OzJg3E-AOG7vVJ";

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className={`py-20 transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <p
            className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Get in touch with me anytime.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`p-8 md:p-10 rounded-xl shadow-xl border transition-all duration-300 ${
            darkMode
              ? "bg-linear-to-br from-gray-900 to-gray-800 border-gray-700"
              : "bg-linear-to-br from-white to-gray-50 border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode
                    ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Subject of your message"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className={`block text-sm font-semibold mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                darkMode
                  ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              }`}
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 hover:shadow-lg hover:shadow-amber-600/50"
                  : "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white hover:shadow-lg hover:shadow-amber-600/50"
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;