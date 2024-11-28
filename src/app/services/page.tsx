"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    name: "Fine Dining Experience",
    description: "Indulge in exquisite culinary masterpieces crafted by our Michelin-starred chefs. Experience a fusion of traditional Arabian flavors and contemporary international cuisine in our elegant dining venues.",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1200",
    features: ["Private Dining Rooms", "Wine Pairing", "Celebrity Chefs", "24/7 Service"]
  },
  {
    id: 2,
    name: "Luxury Spa & Wellness",
    description: "Immerse yourself in tranquility at our world-class spa. Our expert therapists offer traditional Arabian treatments and modern wellness therapies for the ultimate relaxation experience.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200",
    features: ["Traditional Hammam", "Couples Massage", "Wellness Programs", "Private Pools"]
  },
  {
    id: 3,
    name: "Private Beach Access",
    description: "Experience exclusivity at its finest with our private beach access. Enjoy pristine shores, dedicated butler service, and luxury beach amenities while soaking in breathtaking ocean views.",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
    features: ["Butler Service", "Private Cabanas", "Water Sports", "Sunset Events"]
  },
  {
    id: 4,
    name: "Yacht & Maritime Services",
    description: "Set sail in style with our premium yacht services. From sunset cruises to private chartered voyages, experience Dubai's stunning coastline from the comfort of our luxury vessels.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200",
    features: ["Private Charters", "Sunset Cruises", "Fishing Trips", "Ocean Dining"]
  },
  {
    id: 5,
    name: "Desert Adventures",
    description: "Embark on unforgettable desert experiences with our exclusive desert safari services. Enjoy traditional entertainment, gourmet dining under the stars, and luxury camping in the Arabian desert.",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1200",
    features: ["Luxury Camping", "Dune Bashing", "Camel Rides", "Arabian Nights"]
  },
  {
    id: 6,
    name: "Executive Services",
    description: "Experience unparalleled business facilities and services. Our executive lounges and meeting rooms are equipped with state-of-the-art technology and supported by dedicated concierge services.",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200",
    features: ["Meeting Rooms", "Business Center", "Private Offices", "Event Planning"]
  }
];

export default function ServicesPage() {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200"
          alt="Luxury Hotel Services"
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
            Exclusive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-amber-100/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Experience unparalleled luxury with our curated collection of world-class services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm flex flex-col h-full border border-amber-900/20 hover:border-amber-500/30 transition-colors duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90" />
                </div>
                <div className="relative p-8 flex flex-col flex-grow">
                  <h3 className="font-playfair text-2xl font-bold text-amber-300 mb-4">{service.name}</h3>
                  <p className="text-amber-100/80 mb-6 flex-grow">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-amber-200/60">
                        <svg
                          className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={handleContact}
                    className="w-full mt-8 bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber-300 mb-6">
            Personalized Service Excellence
          </h2>
          <p className="text-amber-100/80 max-w-2xl mx-auto mb-8">
            Our dedicated concierge team is available 24/7 to assist you with any requests and ensure your stay exceeds all expectations.
          </p>
          <button 
            onClick={handleContact}
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-4 px-8 rounded-lg transition-colors duration-200"
          >
            Contact Concierge
          </button>
        </div>
      </section>
    </PageLayout>
  );
}
