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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    message: "",
  });
  const { t } = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSe4bSHck7DfXbARmWupSkjEvGxDvZKZ6BUbIlQT28FSxtJXDg/formResponse";

      const formSubmission = new FormData();
      formSubmission.append("entry.2064660761", formData.name);
      formSubmission.append("entry.262678051", formData.phone);
      formSubmission.append(
        "entry.507337508",
        formData.email || "Not provided"
      );
      formSubmission.append(
        "entry.1683173620",
        formData.address || "Not provided"
      );
      formSubmission.append(
        "entry.201877601",
        formData.serviceType || "Not provided"
      );
      formSubmission.append(
        "entry.1091497499",
        formData.message || "Not provided"
      );

      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // This is important for CORS issues with Google Forms
        body: formSubmission,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("request.error.submission"));
    }
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
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t("request.form.phone.label")}</Label>
                <Input
                  id="phone"
                  placeholder={t("request.form.phone.placeholder")}
                  className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                  required
                  value={formData.phone}
                  onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">{t("request.form.address.label")}</Label>
              <Input
                id="address"
                placeholder={t("request.form.address.placeholder")}
                className="focus:border-green-600 focus:ring-green-600 focus:ring-2"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service-type">
                {t("request.form.service.label")}
              </Label>
              <Select
                onValueChange={handleSelectChange}
                value={formData.serviceType}
              >
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
                value={formData.message}
                onChange={handleChange}
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
