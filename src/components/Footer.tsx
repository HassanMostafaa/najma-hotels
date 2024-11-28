import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black/90 border-t border-amber-500/20 py-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-amber-950/20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent"
            >
              NAJMA HOTELS
            </motion.h3>
            <p className="text-amber-100/80 font-light">
              Experience luxury redefined
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-amber-300 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-amber-100/60 hover:text-amber-200 transition-colors inline-flex items-center group"
                  >
                    <span className="w-5 h-px bg-amber-500/30 mr-3 transition-all group-hover:w-8 group-hover:bg-amber-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl text-amber-300 mb-6">Contact</h4>
            <ul className="space-y-3 text-amber-100/60">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>123 Luxury Avenue</p>
                  <p>Dubai, UAE</p>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +971 123 456 789
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@najmahotels.com
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-playfair text-xl text-amber-300 mb-6">Follow Us</h4>
            <div className="flex space-x-6">
              {[
                { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-amber-500/20 text-center">
          <p className="text-amber-200/60 text-sm">
            &copy; {new Date().getFullYear()} NAJMA HOTELS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
