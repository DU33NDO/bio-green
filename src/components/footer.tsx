import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Bio Green Logo"
                width={200}
                height={100}
                className="h-20 w-auto brightness-150"
              />
            </div>
            <p className="mb-4">Мы за чистый город!</p>
            <p>Услуги по вывозу строительных отходов</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-300 transition-colors"
                >
                  Главная страница
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-300 transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-green-300 transition-colors"
                >
                  Наши услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/request"
                  className="hover:text-green-300 transition-colors"
                >
                  Оставить заявку
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Свяжитесь с нами</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href="tel:+77005677070"
                  className="hover:text-green-300 transition-colors"
                >
                  +7-700-567-7070
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <a
                  href="https://wa.me/77005677070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-2" />
                <a
                  href="https://www.instagram.com/biogreen.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:bio_green21@mail.ru"
                  className="hover:text-green-300 transition-colors"
                >
                  bio_green21@mail.ru
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Астана, Казахстан</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Bio Green. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
