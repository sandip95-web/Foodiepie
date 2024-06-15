'use client'
import { useState, useEffect } from "react";
import Slide1 from "@/assets/slide1.jpg";
import Slide2 from "@/assets/slide2.jpg";
import Slide3 from "@/assets/slide3.jpg";
import Image from "next/image";

const Slideshow = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            animationDelay: `${index * 0.5}s` // Delay animation for each slide
          }}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
