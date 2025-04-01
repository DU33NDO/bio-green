import Image from "next/image";
import Link from "next/link";
import { Leaf, Recycle, Scale, Truck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <Image
            src="/images/background.jpg"
            alt="Waste removal truck"
            fill
            className="object-cover filter blur-[2px] brightness-75 scale-105"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bio Green
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Мы за чистый город!
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/request">Оставить заявку</Link>
          </Button>
        </div>
      </div>

      {/* Company Description Section */}
      <section className="py-10 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-green-100 transition-all duration-300 hover:shadow-lg hover:border-green-200 hover:bg-green-50/30 transform hover:-translate-y-1">
            <p className="text-gray-700 text-lg leading-relaxed text-center transition-colors duration-300 hover:text-green-800">
              Компания BIO GREEN с 2020 года заняла прочные позиции среди
              лидеров рынка вывоза строительных отходов. Мы зарекомендовали себя
              как надежный и динамично развивающийся партнер, предлагающий
              качественный сервис и индивидуальный подход к каждому клиенту.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Наши основные принципы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReasonCard
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title="Экологическая безопасность"
              description="Экологическая безопасность окружающей среды и бережное отношение к экосистеме"
              number={1}
            />
            <ReasonCard
              icon={<Scale className="h-10 w-10 text-green-600" />}
              title="Соблюдение законодательства"
              description="Соблюдение законодательства Республики Казахстан"
              number={2}
            />
            <ReasonCard
              icon={<Users className="h-10 w-10 text-green-600" />}
              title="Ориентированность на клиента"
              description="Качественная клиентоориентированность, гибкая система скидок, заключение договоров"
              number={3}
            />
            <ReasonCard
              icon={<Truck className="h-10 w-10 text-green-600" />}
              title="Унификация"
              description="Унификация автопарка в целом, повышение его мобильности и функциональности"
              number={4}
            />
            <ReasonCard
              icon={<Recycle className="h-10 w-10 text-green-600" />}
              title="Современные технологии"
              description="Использование современных передовых технологии - система 'мультилифт'"
              number={5}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ReasonCard({
  icon,
  title,
  description,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}) {
  return (
    <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 bg-white p-4 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
        {number}. {title}
      </h3>
      <p className="text-center text-gray-700">{description}</p>
    </div>
  );
}
