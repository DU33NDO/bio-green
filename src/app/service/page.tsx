import Link from "next/link";
import { ArrowDown, CheckCircle, Leaf, Recycle, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import TruckSlider from "@/components/truck-slider";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WasteRemovalPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
            Вывоз строительного мусора
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Мы предлагаем экологически безопасные решения для вывоза
            строительного мусора объемом от 15 кубических метров
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="/request">Запрос на вывоз мусора</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-700 hover:bg-green-50 bg-white"
            >
              <Link href="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-12">
            Наши контейнеры для вывоза мусора
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title="Экологически безопасны"
              description="Наши контейнеры разработаны с учетом экологических стандартов и не наносят вред окружающей среде"
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-green-600" />}
              title="Высокая устойчивость"
              description="Прочная конструкция обеспечивает стабильность и безопасность при транспортировке и хранении отходов"
            />
            <FeatureCard
              icon={<Truck className="h-10 w-10 text-green-600" />}
              title="Удобны для транспортировки"
              description="Специальная конструкция позволяет легко загружать, транспортировать и разгружать контейнеры"
            />
          </div>

          <div className="flex justify-center">
            <ArrowDown className="h-12 w-12 text-green-500 mb-8" />
          </div>

          <div className="bg-green-50 p-8 rounded-xl shadow-md max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
              Закажите вывоз строительного мусора сегодня
            </h3>
            <p className="text-gray-700 mb-6">
              Мы обеспечиваем быструю доставку контейнеров и своевременный вывоз
              мусора, чтобы ваш проект продвигался без задержек
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link href="/request">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process and Benefits Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-800">
                  Наш процесс вывоза отходов
                </h2>
              </div>
              <ol className="space-y-4">
                {[
                  "Оставьте заявку - свяжитесь с нами удобным способом",
                  "Доставка контейнера - мы привезем его на ваш объект после оформления всех формальностей",
                  "Заполните контейнер - как только он наполнится, подайте заявку на замену",
                  "Замена и вывоз - мы оперативно заменим контейнер и вывезем строительные отходы на утилизацию",
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
                  Преимущества наших услуг
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Экологичная утилизация – строгое соблюдение экологических норм и стандартов",
                  "Квалифицированный персонал – оперативная и профессиональная работа.",
                  "Современная техника – автопарк с системой «мультилифт» для удобной смены контейнеров",
                  "Бункеры 15 м³ – вместительные и удобные для любых объемов мусора",
                  "GPS-мониторинг – полный контроль передвижения транспорта в реальном времени",
                  "Гибкие условия – конкурентные цены и индивидуальный подход к каждому клиенту",
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
              Наша техника
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Мы используем современную технику для вывоза строительного мусора,
              обеспечивая быструю и эффективную работу.
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
