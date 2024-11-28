"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const teamMembers = [
  {
    name: "Hassan",
    role: "Chief Executive Officer",
    // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    image: "",
    description: "With over 25 years of experience in luxury hospitality, Hassan leads Najma Hotels with a vision of unparalleled Arabian excellence."
  },
  {
    name: "Najma",
    role: "Director of Operations",
    image: "",
    // image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
    description: "Najma brings her international expertise to ensure every aspect of Najma Hotels meets the highest standards of luxury service."
  },
  // {
  //   name: "Mohammed Al Qasimi",
  //   role: "Head of Guest Experience",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  //   description: "Mohammed's dedication to authentic Arabian hospitality creates unforgettable experiences for our distinguished guests."
  // }
];

const values = [
  {
    title: "Arabian Excellence",
    description: "Embodying the finest traditions of Arabian hospitality while setting new standards in luxury accommodation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Timeless Luxury",
    description: "Creating environments where modern luxury meets timeless elegance, ensuring every moment is extraordinary.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )
  },
  {
    title: "Personalized Service",
    description: "Delivering bespoke experiences tailored to each guest's preferences with meticulous attention to detail.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200"
          alt="Najma Hotels Luxury"
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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-amber-100/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A legacy of luxury, a tradition of excellence
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-300 mb-6">
                A Heritage of Hospitality
              </h2>
              <div className="space-y-4 text-amber-100/80">
                <p>
                  Founded in 2010, Najma Hotels emerged from a vision to create an unparalleled luxury experience that combines Arabian hospitality with contemporary elegance. Our journey began with a single property in the heart of Dubai, and has since evolved into a collection of prestigious destinations.
                </p>
                <p>
                  Each Najma property is thoughtfully designed to reflect the rich cultural heritage of the region while providing modern luxuries that exceed the expectations of our distinguished guests. Our commitment to excellence has earned us numerous accolades and the trust of discerning travelers from around the world.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200"
                alt="Najma Hotels History"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-300 mb-6">
              Our Values
            </h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto">
              At Najma Hotels, our values are the foundation of every experience we create
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-black/40 backdrop-blur-sm border border-amber-900/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-amber-300 mb-4">
                  {value.title}
                </h3>
                <p className="text-amber-100/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-300 mb-6">
              Leadership Team
            </h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto">
              Meet the visionaries behind Najma Hotels commitment to excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold text-amber-300 mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-500 mb-4">{member.role}</p>
                <p className="text-amber-100/80 max-w-sm mx-auto">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-300 mb-6">
              Recognition & Awards
            </h2>
            <p className="text-amber-100/80 max-w-2xl mx-auto mb-8">
              Our commitment to excellence has been recognized by leading authorities in luxury hospitality
            </p>
            <div className="inline-flex items-center space-x-2 text-amber-500">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
