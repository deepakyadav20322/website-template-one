
"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu-bg", {
        scale: 50,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(".mobile-menu", { display: "flex", duration: 0 });
      gsap.fromTo(
        ".mobile-nav-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.5,
        }
      );
    } else {
      gsap.to(".mobile-menu-bg", {
        scale: 0,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(".mobile-nav-item", { opacity: 0, duration: 0, delay: 0.5 }); // Hide nav items immediately
      gsap.to(".mobile-menu", { display: "none", duration: 0, delay: 0.5 }); // Hide menu after nav items disappear
    }
  }, [isOpen]);

  return (
    <nav className="navbar fixed p-3 w-full top-0 z-50 bg-gradient-to-r from-[#000] to-[#130F40] ">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <div className="text-white text-2xl font-bold">Vega</div>
        <div className="hidden md:flex space-x-4">
          {}
          <Link
            href="#home"
            className="nav-item text-white cursor-pointer hover:text-slate-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="nav-item text-white cursor-pointer hover:text-slate-300"
          >
            About
          </Link>
          <Link
            href="#services"
            className="nav-item text-white cursor-pointer hover:text-slate-300"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="nav-item text-white cursor-pointer hover:text-slate-300"
          >
            Contact
          </Link>
        </div>

        {/* <div className='text-white'>
          <button className='py-2 px-3 border-2 rounded-full'>Book a call</button>
           
        </div> */}

        <button className=" rounded-xl relative  !bg-[#251e7e] !border-[#2e23c6] !duration-100  overflow-hidden main-button outline-none px-4 py-2">
          <span className={`font-semibold`}>Book Call</span>
        </button>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`mobile-menu  items-center justify-center  ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="mobile-menu-bg absolute top-0 right-0 w-16 h-16 bg-gray-800 rounded-full transform scale-0"></div>
        <button
          className="absolute top-4 right-4 text-white focus:outline-none z-10"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="relative z-10 flex flex-col space-y-4 text-center mt-6">
          <li>
            <a
              href="#home"
              className="mobile-nav-item text-white text-2xl cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="mobile-nav-item text-white text-2xl cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="mobile-nav-item text-white text-2xl cursor-pointer"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-nav-item text-white text-2xl cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
