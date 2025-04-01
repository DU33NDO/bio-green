"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm",
        isMenuOpen && "bg-green-50"
      )}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="z-10">
            <Image
              src="/images/logo.png"
              alt="Bio Green Logo"
              width={300}
              height={150}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Contact buttons */}
          <div className="flex items-center gap-3 md:mr-6">
            <a
              href="tel:+77005677070"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
              aria-label="Позвонить нам"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/77005677070"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
              aria-label="Написать в WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden z-10 transition-colors duration-300",
              isMenuOpen ? "bg-green-100 text-green-700" : "text-gray-700"
            )}
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute block w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "rotate-45 top-3" : "top-2"
                )}
              />
              <span
                className={cn(
                  "absolute block w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100 top-3"
                )}
              />
              <span
                className={cn(
                  "absolute block w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "-rotate-45 top-3" : "top-4"
                )}
              />
            </div>
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="/">Главная страница</NavLink>
            <NavLink href="/about">О нас</NavLink>
            <NavLink href="/service">Наши услуги</NavLink>
            <NavLink href="/request">Оставить заявку</NavLink>
          </nav>
        </div>

        {/* Mobile navigation overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-green-800/10 backdrop-blur-sm transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={toggleMenu}
        />

        {/* Mobile navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-[72px] p-4 bg-green-50 border-t border-green-100 shadow-lg transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-1 py-2">
            <MobileNavLink href="/" onClick={toggleMenu} active={true}>
              Главная страница
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>
              О нас
            </MobileNavLink>
            <MobileNavLink href="/service" onClick={toggleMenu}>
              Наши услуги
            </MobileNavLink>
            <MobileNavLink href="/request" onClick={toggleMenu}>
              Оставить заявку
            </MobileNavLink>
          </nav>

          <div className="mt-6 pt-6 border-t border-green-200">
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/request" onClick={toggleMenu}>
                Оставить заявку
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-green-600 font-medium transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center py-3 px-4 rounded-lg font-medium transition-all",
        active
          ? "bg-green-100 text-green-700"
          : "text-gray-700 hover:bg-green-100 hover:text-green-700"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
