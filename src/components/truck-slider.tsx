"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Truck = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const trucks: Truck[] = [
  {
    title: "КАМАЗ",
    description: "Специализированный автомобиль для перевозки контейнеров",
    image: "/images/trucks/truck1.jpg",
    alt: "КАМАЗ Мультилифт без контейнера",
  },
  {
    title: "Погрузка контейнера",
    description: "Процесс погрузки контейнера на мультилифт",
    image: "/images/trucks/truck2.jpg",
    alt: "КАМАЗ с погрузкой синего контейнера",
  },
  {
    title: "Автопарк Bio Green",
    description: "Наш современный автопарк для вывоза строительного мусора",
    image: "/images/trucks/truck3.jpg",
    alt: "Три грузовика КАМАЗ и Scania",
  },
  {
    title: "Производство контейнеров",
    description:
      "Мы производим собственные контейнеры для строительного мусора",
    image: "/images/trucks/truck4.jpg",
    alt: "Производство контейнера в цеху",
  },
  {
    title: "Техника Bio Green",
    description: "Наша техника оснащена современным оборудованием",
    image: "/images/trucks/truck5.jpg",
    alt: "КАМАЗ с логотипом Bio Green",
  },
];

export default function TruckSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trucks.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + trucks.length) % trucks.length
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
        <div className="relative h-64 md:h-80 lg:h-96 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {trucks.map((truck, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + trucks.length) % trucks.length;
              const isNext = index === (currentIndex + 1) % trucks.length;
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
                      "bg-white rounded-xl shadow-lg p-2 w-full h-full max-w-3xl",
                      "transition-all duration-500 transform",
                      "border border-gray-100 overflow-hidden",
                      isActive ? "shadow-xl" : "shadow-md"
                    )}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={truck.image || "/placeholder.svg"}
                        alt={truck.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <h3 className="text-xl font-bold">{truck.title}</h3>
                        <p className="text-sm text-gray-200">
                          {truck.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            {trucks.map((_, index) => (
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
