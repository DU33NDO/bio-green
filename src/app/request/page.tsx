"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RequestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-green-800 mb-4">
            Заявка подана!
          </h1>
          <p className="text-gray-700 mb-6">
            Спасибо за ваш запрос. Наши сотрудники свяжутся с вами в ближайшее
            время, чтобы обсудить ваши потребности в вывозе отходов.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 hover:bg-green-700"
          >
            Отправить другой запрос
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
          Оставить заявку
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Полное имя</Label>
                <Input
                  id="name"
                  placeholder="Введите свое полное имя"
                  className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <Input
                  id="phone"
                  placeholder="+7 (XXX) XXX-XXXX"
                  className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Адрес электронной почты</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Адрес для вывоза отходов</Label>
              <Input
                id="address"
                placeholder="Введите адрес"
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service-type">Тип услуги</Label>
              <Select>
                <SelectTrigger className="w-full bg-white border-gray-300 focus:border-green-600 focus:ring-green-600 focus:ring-2">
                  <SelectValue placeholder="Выберите тип услуги" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  <SelectItem
                    value="construction"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    Вывоз строительного мусора
                  </SelectItem>
                  <SelectItem
                    value="demolition"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    Вывоз отходов сноса
                  </SelectItem>
                  <SelectItem
                    value="renovation"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    Вывоз мусора при ремонте
                  </SelectItem>
                  <SelectItem
                    value="other"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    Другое
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Дополнительная информация</Label>
              <Textarea
                id="message"
                placeholder="Пожалуйста, предоставьте любую дополнительную информацию о ваших потребностях в вывозе мусора"
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Отправить запрос
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
