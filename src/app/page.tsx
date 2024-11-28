"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const services = [
  {
    title: "Fine Dining",
    description: "Experience culinary excellence with our Michelin-starred chefs",
    features: ["International Cuisine", "Private Dining", "24/7 Service"],
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696",
  },
  // {
  //   title: "Luxury Spa",
  //   description: "Rejuvenate your body and soul in our premium wellness center",
  //   features: ["Traditional Treatments", "Modern Therapies", "Expert Therapists"],
  //   image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
  // },
  {
    title: "Private Beach",
    description: "Exclusive access to pristine beaches and water activities",
    features: ["Private Cabanas", "Water Sports", "Beach Butler"],
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f",
  },
  // {
  //   title: "Fitness Center",
  //   description: "State-of-the-art equipment and personal training",
  //   features: ["24/7 Access", "Personal Trainers", "Yoga Classes"],
  //   image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
  // },
  {
    title: "Concierge Service",
    description: "Dedicated team for all your needs and requests",
    features: ["24/7 Available", "Local Expertise", "Personalized Service"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  // {
  //   title: "Business Center",
  //   description: "Professional facilities for business travelers",
  //   features: ["Meeting Rooms", "Tech Support", "Secretarial Service"],
  //   image: "https://images.unsplash.com/photo-1577412647305-991150c7d163",
  // },
];

const rooms = [
  {
    title: "Royal Suite",
    price: "1,200",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    features: ["90 sqm", "Ocean View", "Private Balcony"],
  },
  {
    title: "Presidential Suite",
    price: "2,500",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    features: ["150 sqm", "Panoramic View", "Private Pool"],
  },
  {
    title: "Penthouse",
    price: "3,800",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    features: ["200 sqm", "City View", "Terrace"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Luxury Rooms Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Luxury Accommodations</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Experience unparalleled comfort in our meticulously designed rooms and suites
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                </div>
                <div className="relative p-6">
                  <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
                  <p className="text-amber-400 text-lg mb-4">
                    From ${room.price} <span className="text-sm text-foreground/60">per night</span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground/80">
                        <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center rounded-full bg-amber-500 px-6 py-3 text-black font-semibold"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">Exclusive Services</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Indulge in our world-class amenities and personalized services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90" />
                </div>
                <div className="relative p-8">
                  <h3 className="font-playfair text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/80 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground/70">
                        <svg className="w-5 h-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={`/services`}
                      className="inline-flex items-center text-amber-400"
                    >
                      Learn more
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
