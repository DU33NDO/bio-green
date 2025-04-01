"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Client = {
  name: string;
  logo: string;
  alt: string;
};

const clients: Client[] = [
  {
    name: "Sensata Group",
    logo: "/images/clients/sensata.png",
    alt: "Sensata Group Logo",
  },
  {
    name: "Bazis",
    logo: "/images/clients/bazis.png",
    alt: "Bazis Logo",
  },
  {
    name: "BI Group",
    logo: "/images/clients/bi-group.png",
    alt: "BI Group Logo",
  },
  {
    name: "Orda Invest",
    logo: "/images/clients/orda.jpg",
    alt: "Orda Invest Logo",
  },
  {
    name: "Qazaq Stroy",
    logo: "/images/clients/qazaq-stroy.png",
    alt: "Qazaq Stroy Logo",
  },
];

export default function ClientSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, nextSlide]);

  return (
    <div
      className="relative w-full overflow-hidden py-12 px-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-green-100 rounded-full opacity-20 -translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-200 rounded-full opacity-20 translate-x-16 translate-y-16"></div>

      <div className="relative mx-auto max-w-4xl">
        {/* Main slider */}
        <div className="relative h-40 md:h-48 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {clients.map((client, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + clients.length) % clients.length;
              const isNext = index === (currentIndex + 1) % clients.length;
              const isHidden = !isActive && !isPrev && !isNext;

              return (
                <div
                  key={index}
                  className={cn(
                    "absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-700",
                    isActive ? "opacity-100 scale-100 z-30" : "",
                    isPrev ? "opacity-0 scale-95 -translate-x-full z-20" : "",
                    isNext ? "opacity-0 scale-95 translate-x-full z-20" : "",
                    isHidden ? "opacity-0 scale-90 z-10" : ""
                  )}
                >
                  <div
                    className={cn(
                      "bg-white rounded-xl shadow-lg p-6 md:p-8 w-72 md:w-96 h-32 md:h-40 flex items-center justify-center",
                      "transition-all duration-500 transform",
                      "border border-gray-100",
                      isActive ? "shadow-xl" : "shadow-md"
                    )}
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.alt}
                      width={240}
                      height={120}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client name */}
        <div className="text-center mb-8 h-8">
          <p className="text-lg font-medium text-green-800 transition-all duration-500 transform">
            {clients[currentIndex].name}
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center gap-8 mb-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 border-green-200 bg-white shadow-sm hover:bg-green-50 hover:border-green-300 transition-all"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 text-green-700" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex
                    ? "w-3 h-3 bg-green-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-green-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 border-green-200 bg-white shadow-sm hover:bg-green-50 hover:border-green-300 transition-all"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 text-green-700" />
          </Button>
        </div>
      </div>
    </div>
  );
}
