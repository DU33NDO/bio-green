"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
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
import "../../i18n";

export default function RequestPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

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
            {t("request.success.title")}
          </h1>
          <p className="text-gray-700 mb-6">{t("request.success.message")}</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 hover:bg-green-700"
          >
            {t("request.success.button")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
          {t("request.title")}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t("request.form.name.label")}</Label>
                <Input
                  id="name"
                  placeholder={t("request.form.name.placeholder")}
                  className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t("request.form.phone.label")}</Label>
                <Input
                  id="phone"
                  placeholder={t("request.form.phone.placeholder")}
                  className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("request.form.email.label")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("request.form.email.placeholder")}
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">{t("request.form.address.label")}</Label>
              <Input
                id="address"
                placeholder={t("request.form.address.placeholder")}
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service-type">
                {t("request.form.service.label")}
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-white border-gray-300 focus:border-green-600 focus:ring-green-600 focus:ring-2">
                  <SelectValue
                    placeholder={t("request.form.service.placeholder")}
                  />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  <SelectItem
                    value="construction"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    {t("request.form.service.options.construction")}
                  </SelectItem>
                  <SelectItem
                    value="demolition"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    {t("request.form.service.options.demolition")}
                  </SelectItem>
                  <SelectItem
                    value="renovation"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    {t("request.form.service.options.renovation")}
                  </SelectItem>
                  <SelectItem
                    value="other"
                    className="flex items-center pl-2 pr-8 hover:bg-green-50 focus:bg-green-50 cursor-pointer"
                  >
                    {t("request.form.service.options.other")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("request.form.message.label")}</Label>
              <Textarea
                id="message"
                placeholder={t("request.form.message.placeholder")}
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {t("request.form.submit")}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
