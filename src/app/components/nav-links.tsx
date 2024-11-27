"use client";

import { useState } from "react";

export function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="relative bg-rose-950 shadow text-white">
        <div className="px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-between">
            <a href="/">
              <img className="w-auto h-7 sm:h-7" src="/logo.png" alt="Logo" />
            </a>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-rose-500 dark:text-rose-200 hover:text-rose-600 dark:hover:text-rose-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <div
            className={`absolute inset-x-0 z-20 w-full mt-2 px-6 py-4 transition-all duration-300 ease-in-out bg-rose-900 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-rose-950 md:w-auto md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-rose-700 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-gray-50 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#about"
              >
                About
              </a>
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-gray-50 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#schedule"
              >
                Schedule
              </a>
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-gray-50 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#support"
              >
                Support
              </a>
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-gray-50 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#gallery"
              >
                Gallery
              </a>
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-gray-50 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#register"
              >
                Registration
              </a>
              <a
                className="my-2 text-gray-50 transition-colors duration-300 transform dark:text-gray-50 hover:text-rose-300 dark:hover:text-rose-300 md:mx-4 md:my-0"
                href="#faq"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
