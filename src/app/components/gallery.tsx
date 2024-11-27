"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  // Navigation functions
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="embla max-w-8xl mx-auto overflow-hidden"  data-aos="fade-in">
      {/* Carousel viewport */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="embla__slide flex-shrink-0 w-100 px-2" key={index}>
              <img
                className="object-cover object-center w-full h-80 rounded-lg"
                src={`images/${index + 1}.JPG`}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center mt-4">
        <svg
          onClick={scrollPrev}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          onClick={scrollNext}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Gallery;
