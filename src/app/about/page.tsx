"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Building } from "lucide-react";
import { useTranslation } from "react-i18next";
import ClientSlider from "@/components/client-slider";
import { Loader } from "@googlemaps/js-api-loader";
import "../../i18n";

declare global {
  interface Window {
    google: typeof google;
  }
}

export default function AboutPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      });

      try {
        await loader.load();

        if (!window.google) {
          console.error("Google Maps library not loaded");
          return;
        }

        const location = { lat: 51.094868, lng: 71.408656 };

        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: false,
        });

        new window.google.maps.Marker({
          position: location,
          map: map,
          title: "Bio Green Office",
        });
      } catch (error) {
        console.error("Error loading Google Maps", error);
      }
    };

    initMap();
  }, []);

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
          {t("about.title")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              {t("about.mission.title")}
            </h2>
            <p className="text-gray-700 mb-6">
              {t("about.mission.description")}
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              {t("about.contact.title")}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <h3 className="font-medium">{t("about.contact.phone")}</h3>
                  <a
                    href="tel:+77005677070"
                    className="hover:text-green-600 transition-colors"
                  >
                    +7-700-567-7070
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <h3 className="font-medium">{t("about.contact.email")}</h3>
                  <a
                    href="mailto:bio_green21@mail.ru"
                    className="hover:text-green-600 transition-colors"
                  >
                    bio_green21@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <h3 className="font-medium">
                    {t("about.contact.address.title")}
                  </h3>
                  <p>{t("about.contact.address.value")}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={mapRef}
            className="h-[400px] bg-gray-100 rounded-lg overflow-hidden"
          >
            {/* Google Map will be loaded here */}
          </div>
        </div>

        {/* Our Clients Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Building className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-3">
              {t("about.clients.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("about.clients.description")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg border border-green-100">
            <ClientSlider />
          </div>
        </section>
      </div>
    </main>
  );
}
