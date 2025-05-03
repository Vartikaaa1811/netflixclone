"use client";
import { useEffect, useState } from "react";
import { Bell, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-10 py-4 text-white text-sm font-medium">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix"
            className="w-24 h-auto"
          />
          <nav className="hidden md:flex space-x-4">
            <span className="hover:text-gray-300 cursor-pointer">Home</span>
            <span className="hover:text-gray-300 cursor-pointer">TV Shows</span>
            <span className="hover:text-gray-300 cursor-pointer">Movies</span>
            <span className="hover:text-gray-300 cursor-pointer">Games</span>
            <span className="hover:text-gray-300 cursor-pointer">
              New & Popular
            </span>
            <span className="hover:text-gray-300 cursor-pointer">My List</span>
            <span className="hover:text-gray-300 cursor-pointer">
              Browse by Languages
            </span>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 cursor-pointer" />
          <span className="hidden sm:inline">Children</span>
          <Bell className="w-5 h-5 cursor-pointer" />
          <img
            src="https://occ-0-3752-64.1.nflxso.net/dnm/api/v6/5s3TKd5XQbU2cz9vTZh_1Q/webp/7232160/9e634cd2-5d3d-4769-989f-245c50e1d16b.webp"
            alt="Profile"
            className="w-8 h-8 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";

// const Navbar = () => {
//   return (
//     <>
//       <div className="px-8 py-10 bg-gray-950 text-white">
//         <div className=" grid grid-cols-2 md:grid-cols-5 gap-5 max-w-7xl mx-auto ">
//           <div className=" flex flex-col bg-gray-950 text-white">
//             <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
//               HOME
//             </h2>
//             <span>Services</span>
//             <span>Products</span>
//             <span>About Us</span>
//             <span>Pricing</span>
//             <span>Partners New</span>
//           </div>
//           <div className=" flex flex-col bg-gray-950 text-white">
//             <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
//               RESOURCES
//             </h2>
//             <span>Documentation</span>
//             <span>Tutorials</span>
//             <span>Support New</span>
//           </div>
//           <div className=" flex flex-col bg-gray-950 text-white">
//             <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
//               PRODUCTS
//             </h2>
//             <span>Our Products</span>
//             <span>Great Deals New</span>
//             <span>Analytics</span>
//             <span>Mobile</span>
//           </div>
//           <div className=" flex flex-col bg-gray-950 text-white">
//             <h2 className="font-bold text-lg mb-2 text-gray-600 hover:text-2xl hover:underline">
//               SUPPORT
//             </h2>
//             <span>Help Center</span>
//             <span>Privacy Policy</span>
//             <span>Conditions</span>
//           </div>
//           <div className=" flex flex-col bg-gray-950 text-white">
//             <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
//               CONTACT US
//             </h2>
//             <span>+91 9305904328</span>
//             <span>Punjab</span>
//             <span>vrtikaaa1811@gmail.com</span>
//           </div>
//         </div>

//         <hr className="my-8 border-b border-gray-600 w-full max-w-7xl mx-auto" />

//         <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm">
//           <p className="text-left">Copyright 2024. All Rights Reserved.</p>
//           <Image
//             src="/images/socialicons.jpg"
//             className="mt-4 md:mt-0"
//             alt="socialicons"
//             width={120}
//             height={120}
//           />
//         </div>
//       </div>

//       <div className=" place-items-center text-white bg-gray-600">
//         <p>Made by Vartika :) with NextJs.</p>
//       </div>
//     </>
//   );
// };

// export default Navbar;
