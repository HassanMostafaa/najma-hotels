"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

const contactInfo = {
  phone: "+971 4 123 4567",
  email: "reservations@najmahotels.com",
  address: "Palm Jumeirah, Dubai, United Arab Emirates",
  workingHours: "24/7 Guest Services",
  socialMedia: {
    facebook: "najmahotels",
    instagram: "@najmahotels",
    twitter: "@najmahotels"
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1200"
          alt="Contact Najma Hotels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-amber-300 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-amber-100/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Experience the epitome of luxury hospitality
          </motion.p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-playfair text-3xl font-bold text-amber-300 mb-6">
                  Get in Touch
                </h2>
                <p className="text-amber-100/80 mb-8">
                  For reservations, inquiries, or any assistance, our dedicated team is here to serve you with the highest level of hospitality.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-amber-300 font-medium mb-1">Phone</h3>
                    <p className="text-amber-100/80">{contactInfo.phone}</p>
                    <p className="text-amber-100/60 text-sm mt-1">{contactInfo.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-amber-300 font-medium mb-1">Email</h3>
                    <p className="text-amber-100/80">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-amber-300 font-medium mb-1">Address</h3>
                    <p className="text-amber-100/80">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-amber-300 font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {Object.entries(contactInfo.socialMedia).map(([platform, handle]) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/${handle}`}
                      className="p-3 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 transition-colors duration-200"
                    >
                      <span className="text-amber-100/80 text-sm">{handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-amber-900/20"
            >
              <h2 className="font-playfair text-2xl font-bold text-amber-300 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-amber-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-amber-900/40 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-amber-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-amber-900/40 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-amber-200 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border-2 border-amber-900/40 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-amber-200 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/40 border-2 border-amber-900/40 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    required
                  >
                    <option value="" className="bg-black">Select a subject</option>
                    <option value="reservation" className="bg-black">Reservation Inquiry</option>
                    <option value="general" className="bg-black">General Inquiry</option>
                    <option value="feedback" className="bg-black">Feedback</option>
                    <option value="corporate" className="bg-black">Corporate Events</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-amber-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/40 border-2 border-amber-900/40 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-100/50 focus:outline-none focus:border-amber-500 transition-colors duration-200"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] my-20 mx-4 sm:mx-6 lg:mx-8">
        <div className="relative h-full rounded-xl overflow-hidden  ">
          <Image
            src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=1200"
            alt="Najma Hotels Location"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="bg-black/40 p-8 rounded-xl border border-amber-900/20 text-center max-w-xl mx-4 backdrop-blur-[10px]">
              <h3 className="font-playfair text-2xl font-bold text-amber-300 mb-4">
                Visit Us
              </h3>
              <p className="text-amber-100/80">
                Located in the prestigious Palm Jumeirah, Najma Hotels offers an oasis of luxury in the heart of Dubai.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2 text-amber-100/60">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Palm Jumeirah, Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
