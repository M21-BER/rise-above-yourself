"use client";
import useMountedTranslation from "@/hook/useMountedTranslation";
import React from "react";

function ContactForm() {
  const { t, mounted } = useMountedTranslation();
  if (!mounted) return null;

  return (
    <div className="w-full p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl  font-cinzel font-extrabold text-background mb-8 text-center">
        {t("contact_page.talk")}
      </h2>

      <form className="space-y-6" noValidate>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold text-base mb-2"
          >
            {t("contact_page.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact_page.enter_name")}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold text-base mb-2"
          >
            {t("contact_page.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact_page.enter_email")}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold text-base mb-2"
          >
            {t("contact_page.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t("contact_page.enter_message")}
            required
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="w-max px-10 bg-background text-white font-semibold rounded-full py-3 hover:bg-background/90 transition focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          {t("contact_page.send")}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
