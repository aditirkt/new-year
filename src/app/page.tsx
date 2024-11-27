"use client";

import { useEffect } from "react";
import Link from "next/link";
import Register from "@/app/components/register";
import Gallery from "./components/gallery";
import Highlight from "./components/highlight";
import FAQSection from "./components/faq";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Schedule from "./components/schedule";

export default function Home() {
  // Initialize AOS in useEffect to ensure it only runs on the client side
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/banner.JPG')" }}
      >
        <div className="flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50 text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-in">
            Step into 2025 with Joy and Devotion
          </h1>
          <p className="text-lg md:text-xl mb-6" data-aos="fade-right" >
            Join us for an evening filled with gratitude, cultural celebrations,
            and heartfelt devotion.
          </p>
          <div className="mt-4" data-aos="fade-left" >
            <Link href="/register" legacyBehavior>
              <a className="bg-gradient-to-r from-pink-600 to-rose-950 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-3 px-8 rounded">
                Buy Tickets
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 px-8" id="about">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right" >
          Welcome 2025 in the most joyful way!
        </h2>
        <div className="flex justify-center items-center p-5 text-center">
          <div className="shadow-md max-w-2xl m-6 pt-3 pb-6 px-3 rounded-lg" data-aos="fade-left">
            <img src="images/5.JPG" alt="New Year Highlights from 2023" />
            <p className="pt-3 text-2xl font-semibold">Highlights from 2023</p>
          </div>
          <div className="border shadow-rose-900 shadow-md max-w-2xl p-6 rounded-lg dark:text-gray-300" data-aos="fade-right">
            <p className="text-lg mb-6">
              Join a one-of-a-kind New Year 2025 celebration in Dallas.
              Experience a unique and spiritually uplifting way to ring in the
              New Year with activities for all ages and hearts.
            </p>
            <ul className="space-y-2 text-left inline-block">
              <li>
                <strong>Date:</strong> Jan 1st, 2025
              </li>
              <li>
                <strong>Time:</strong> 6:00 AM CT
              </li>
              <li>
                <strong>Location:</strong> Radha Krishna Temple, Allen, TX
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right" >
          What to Expect at the Event
        </h2>
        <Highlight />
      </section>

      {/* Schedule */}
      <section className="bg-gradient-to-b from-pink-100 via-rose-50 to-yellow-100 py-16 px-8" id="schedule">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right">
          Bhakti Diwas Celebration
        </h2>
        <Schedule/>
      </section>

      {/* Donations */}
      <section className="py-12 px-8 text-center" id="support">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right" >Support the Event</h2>
        <p className="text-lg mb-6">
          Support Radha Krishna Temple to host this event by donating today.
        </p>
        <div  data-aos="fade-right">
          <Link href="/donate" legacyBehavior>
            <a className="bg-gradient-to-r from-pink-600 to-rose-950 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-3 px-8 rounded">
              Donate
            </a>
          </Link>
        </div>
      </section>

      {/* Testimonials and Past Event Photos */}
      <section className="py-12 px-8 bg-white" id="gallery">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right" >
          Event Gallery
        </h2>

        <Gallery />
      </section>

      {/* Register */}
      <section className="py-12 px-8 bg-gradient-to-b from-yellow-100 via-rose-50 to-pink-100" id="register">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right" >Register for the Event</h2>
        <Register />
      </section>

      {/* FAQs */}
      <section className="py-12 px-8 bg-white dark:bg-gray-900" id="faq">
        <h2 className="text-4xl font-bold text-rose-800 mb-4 text-center" data-aos="fade-right" >FAQ's</h2>
        <FAQSection />
      </section>
    </div>
  );
}
