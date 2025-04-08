"use client";

import Link from "next/link";
import { ArrowDown, CheckCircle, Leaf, Recycle, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import TruckSlider from "@/components/truck-slider";
import "../../i18n";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WasteRemovalPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-12">
            {t("service.features.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title={t("service.features.eco.title")}
              description={t("service.features.eco.description")}
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-green-600" />}
              title={t("service.features.stability.title")}
              description={t("service.features.stability.description")}
            />
            <FeatureCard
              icon={<Truck className="h-10 w-10 text-green-600" />}
              title={t("service.features.transport.title")}
              description={t("service.features.transport.description")}
            />
          </div>

          {/* Attention Section - Warning about illegal waste disposal */}
          <div className="mb-16 bg-red-50 border-l-4 border-red-600 rounded-lg shadow-lg overflow-hidden">
            <div className="p-5 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl md:text-2xl font-bold text-red-800">
                  {t("service.attention.title")}
                </h3>
              </div>

              <div className="space-y-4 text-gray-800">
                <p className="font-medium">{t("service.attention.illegal")}</p>
                <p>{t("service.attention.legislation")}</p>
                <p>{t("service.attention.monitoring")}</p>

                <div className="bg-white p-4 rounded-md border border-red-200">
                  <p className="flex items-start mb-2">
                    <span className="text-red-600 mr-2 text-xl">🚫</span>
                    <span className="font-semibold">
                      {t("service.attention.penalties")}
                    </span>
                  </p>
                  <ul className="list-disc ml-10 space-y-1">
                    <li>{t("service.attention.individuals")}</li>
                    <li>{t("service.attention.entities")}</li>
                    <li>{t("service.attention.repeat")}</li>
                  </ul>
                </div>

                <p>{t("service.attention.responsibility")}</p>

                <div className="bg-green-50 p-4 rounded-md border border-green-200">
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>{t("service.attention.licensed")}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>{t("service.attention.authorized")}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>{t("service.attention.documentation")}</span>
                    </p>
                    <p className="flex items-center mt-2">
                      <span className="text-blue-500 mr-2">🔗</span>
                      <a
                        href="/docs/license.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        {t("service.attention.view_certificate")}
                      </a>
                    </p>
                  </div>
                </div>

                <p className="flex items-center font-medium text-lg">
                  <span className="text-blue-600 mr-2">📞</span>
                  <span>{t("service.attention.contact")}</span>
                </p>

                <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="flex items-center mb-2">
                    <span className="text-gray-700 mr-2">🔍</span>
                    <span className="font-semibold">
                      {t("service.attention.regulatory")}
                    </span>
                  </p>
                  <ul className="list-disc ml-10 space-y-1 text-gray-700">
                    <li>{t("service.attention.ecoCode")}</li>
                    <li>{t("service.attention.adminCode")}</li>
                    <li>{t("service.attention.city")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="h-12 w-12 text-green-500 mb-8" />
          </div>

          <div className="bg-green-50 p-8 rounded-xl shadow-md max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
              {t("service.cta.title")}
            </h3>
            <p className="text-gray-700 mb-6">{t("service.cta.description")}</p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="/request">{t("service.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-800">
                  {t("service.process.title")}
                </h2>
              </div>
              <ol className="space-y-4">
                {[
                  t("service.process.step1"),
                  t("service.process.step2"),
                  t("service.process.step3"),
                  t("service.process.step4"),
                ].map((step, index) => {
                  const [boldText, normalText] = step.split(" - ");

                  return (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center bg-green-600 text-white rounded-full w-8 h-8 mr-4">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">
                        <strong>{boldText}</strong> — {normalText}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-800">
                  {t("service.benefits.title")}
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  t("service.benefits.eco"),
                  t("service.benefits.qualified"),
                  t("service.benefits.modern"),
                  t("service.benefits.capacity"),
                  t("service.benefits.gps"),
                  t("service.benefits.flexible"),
                ].map((benefit, index) => {
                  const [boldText, normalText] = benefit.split(" – ");

                  return (
                    <li key={index} className="flex">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>{boldText}</strong> — {normalText}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              {t("service.equipment.title")}
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t("service.equipment.description")}
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg border border-green-100">
            <TruckSlider />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-green-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
