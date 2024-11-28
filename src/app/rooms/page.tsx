"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/navigation";

const rooms = [
  {
    id: "royal-suite",
    name: "Royal Suite",
    description: "Experience unparalleled luxury in our signature Royal Suite with breathtaking ocean views.",
    price: "1,200",
    size: "90 sqm",
    maxGuests: 2,
    bedType: "1 King Bed",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    features: [
      "Ocean View",
      "Private Balcony",
      "Living Room",
      "Walk-in Closet",
      "Marble Bathroom",
      "24/7 Butler Service"
    ]
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description: "The epitome of luxury, featuring a private pool and panoramic views of the Dubai skyline.",
    price: "2,500",
    size: "150 sqm",
    maxGuests: 4,
    bedType: "1 King Bed + 2 Queen Beds",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
    features: [
      "Private Pool",
      "Panoramic View",
      "Dining Room",
      "Private Gym",
      "Steam Room",
      "Executive Lounge Access"
    ]
  },
  {
    id: "penthouse",
    name: "Penthouse",
    description: "A luxurious retreat in the sky with a private terrace and stunning city views.",
    price: "3,800",
    size: "200 sqm",
    maxGuests: 6,
    bedType: "2 King Beds + 2 Queen Beds",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    features: [
      "Private Terrace",
      "City View",
      "Kitchen",
      "Wine Cellar",
      "Home Theater",
      "Private Elevator"
    ]
  },
  {
    id: "deluxe-ocean",
    name: "Deluxe Ocean Room",
    description: "Modern comfort meets seaside tranquility with direct ocean views.",
    price: "800",
    size: "55 sqm",
    maxGuests: 2,
    bedType: "1 King Bed",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    features: [
      "Ocean View",
      "Balcony",
      "Seating Area",
      "Mini Bar",
      "Rain Shower",
      "Evening Turndown"
    ]
  },
  {
    id: "garden-suite",
    name: "Garden Suite",
    description: "A serene escape with a private garden and outdoor relaxation area.",
    price: "950",
    size: "75 sqm",
    maxGuests: 3,
    bedType: "1 King Bed + 1 Sofa Bed",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
    features: [
      "Private Garden",
      "Outdoor Seating",
      "Workspace",
      "Walk-in Shower",
      "Kitchenette",
      "Garden View"
    ]
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Spacious accommodation perfect for families, with connecting rooms and child-friendly amenities.",
    price: "1,100",
    size: "100 sqm",
    maxGuests: 5,
    bedType: "1 King Bed + 2 Twin Beds",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    features: [
      "Connecting Rooms",
      "Kids Play Area",
      "Family Dining",
      "Multiple Bathrooms",
      "Entertainment System",
      "Child Safety Features"
    ]
  },
  {
    id: "wellness-suite",
    name: "Wellness Suite",
    description: "Designed for health-conscious travelers with in-room wellness amenities.",
    price: "1,300",
    size: "85 sqm",
    maxGuests: 2,
    bedType: "1 King Bed",
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42",
    features: [
      "Yoga Space",
      "Air Purification",
      "Meditation Area",
      "Wellness Minibar",
      "Aromatherapy",
      "Vitamin C Shower"
    ]
  },
  {
    id: "artist-suite",
    name: "Artist Suite",
    description: "A creative space featuring local art and inspiring city views.",
    price: "1,400",
    size: "95 sqm",
    maxGuests: 2,
    bedType: "1 King Bed",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be",
    features: [
      "Art Gallery Wall",
      "Creative Workspace",
      "City View",
      "Library Corner",
      "Premium Audio",
      "Artist Supplies"
    ]
  }
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "$500 - $1,000", min: 500, max: 1000 },
  { label: "$1,000 - $2,000", min: 1000, max: 2000 },
  { label: "$2,000 - $3,000", min: 2000, max: 3000 },
  { label: "$3,000+", min: 3000, max: Infinity },
];

// const amenityFilters = [
//   "Ocean View",
//   "Private Pool",
//   "Balcony",
//   "Kitchen",
//   "Living Room",
//   "Private Garden",
// ];

export default function RoomsPage() {
  const router = useRouter();
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleBookNow = () => {
    router.push('/contact');
  };

  const filteredRooms = rooms.filter((room) => {
    const price = parseInt(room.price.replace(",", ""));
    const meetsPrice = price >= selectedPriceRange.min && price <= selectedPriceRange.max;
    const meetsAmenities = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => room.features.includes(amenity));
    return meetsPrice && meetsAmenities;
  }).sort((a, b) => {
    const priceA = parseInt(a.price.replace(",", ""));
    const priceB = parseInt(b.price.replace(",", ""));
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <PageLayout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="Luxury Hotel Room"
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
              className="font-playfair text-4xl md:text-6xl font-bold mb-4"
            >
              Luxury Accommodations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-amber-100/80 max-w-2xl mx-auto"
            >
              Experience unparalleled comfort and elegance in our meticulously designed rooms and suites
            </motion.p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Price Range Filter */}
              <div className="flex flex-wrap gap-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPriceRange(range)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedPriceRange === range
                        ? "bg-amber-500 text-black"
                        : "bg-black/40 text-amber-400 hover:bg-black/60"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              {/* Sort Order */}
              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Price</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    sortOrder === "desc" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Amenity Filters */}
            {/* <div className="mt-6">
              <h3 className="text-amber-300 font-medium mb-3">Amenities</h3>
              <div className="flex flex-wrap gap-3">
                {amenityFilters.map((amenity) => (
                  <button
                    key={amenity}
                    onClick={() =>
                      setSelectedAmenities((prev) =>
                        prev.includes(amenity)
                          ? prev.filter((a) => a !== amenity)
                          : [...prev, amenity]
                      )
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedAmenities.includes(amenity)
                        ? "bg-amber-500 text-black"
                        : "bg-black/40 text-amber-400 hover:bg-black/60"
                    }`}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* Results Count */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-amber-200/60">
            Showing {filteredRooms.length} {filteredRooms.length === 1 ? "room" : "rooms"}
          </p>
        </div>

        {/* Rooms Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm flex flex-col h-full"
                  >
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90" />
                    </div>
                    <div className="relative p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-playfair text-2xl font-bold">{room.name}</h3>
                        <p className="text-amber-400 text-lg">
                          ${room.price}
                          <span className="text-sm text-amber-400/60 ml-1">per night</span>
                        </p>
                      </div>
                      <p className="text-amber-100/80 mb-6">{room.description}</p>
                      <div className="space-y-6 flex-grow">
                        <div className="flex items-center space-x-6 text-sm text-amber-200/60">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {room.size}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            {room.maxGuests}
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={handleBookNow}
                        className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                      >
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-amber-200/60 text-lg">
                  No rooms found matching your criteria. Please try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
