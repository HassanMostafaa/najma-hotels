"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
          alt="NAJMA HOTELS Dubai"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-amber-400 text-lg font-medium tracking-wider"
              >
                WELCOME TO
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="block">NAJMA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  HOTELS
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-foreground/80 max-w-2xl mt-4"
              >
                Where Luxury Meets Arabian Hospitality in the Heart of Dubai
              </motion.p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground/90">
                Experience unparalleled luxury at Dubai most prestigious address. 
                NAJMA HOTELS combines traditional Arabian hospitality with contemporary elegance.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm">
                {[
                  "5-Star Luxury Accommodation",
                  "World-Class Dining",
                  "Premium Spa Services",
                  "Panoramic City Views",
                  "Private Beach Access",
                  "24/7 Concierge"
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-amber-500 px-8 py-4 text-black font-semibold hover:bg-amber-400 transition-colors text-center"
              >
                Book Your Stay
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-amber-500/50 px-8 py-4 hover:bg-amber-500/10 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Special Offer</h3>
                  <p className="text-foreground/80">Book 3 nights, get 1 night free</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-amber-400 text-lg font-semibold mb-2">Rating</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-foreground/80">Downtown Dubai</p>
                  <p className="text-amber-400 text-sm">5 min to Burj Khalifa</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <p className="text-foreground/80">+971 4 123 4567</p>
                  <p className="text-amber-400 text-sm">24/7 Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-amber-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
