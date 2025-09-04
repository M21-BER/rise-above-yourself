"use client";
import React, { useState } from "react";

const translations = {
  English: {
    header: "Youth Soccer Camp",
    description:
      "Enroll your child in our upcoming camp. Simple, fast, and secure.",
    parentInfo: "Parent/Guardian Information",
    fullName: "Full Name",
    phone: "Phone Number",
    playerInfo: "Player Information",
    childName: "Child's Full Name",
    childDOB: "Child's Date of Birth",
    emergency: "Emergency Contact",
    emergencyDesc: "Please provide a contact person in case of an emergency.",
    contactName: "Contact's Full Name",
    contactPhone: "Contact's Phone Number",
    payment: "Payment Method",
    paymentDesc: "How would you like to pay?",
    creditCard: "Credit/Debit Card",
    nameOnCard: "Name on Card",
    expiry: "MM/YY",
    cvc: "CVC",
    zip: "ZIP",
    pay: "Pay",
    complete: "Complete Enrollment",
  },
  Español: {
    header: "Campamento de Fútbol Juvenil",
    description:
      "Inscriba a su hijo en nuestro próximo campamento. Rápido y seguro.",
    parentInfo: "Información del Padre/Tutor",
    fullName: "Nombre Completo",
    phone: "Número de Teléfono",
    playerInfo: "Información del Jugador",
    childName: "Nombre Completo del Niño",
    childDOB: "Fecha de Nacimiento del Niño",
    emergency: "Contacto de Emergencia",
    emergencyDesc: "Proporcione un contacto en caso de emergencia.",
    contactName: "Nombre Completo del Contacto",
    contactPhone: "Número de Teléfono del Contacto",
    payment: "Método de Pago",
    paymentDesc: "Costo del Campamento: $150.00. ¿Cómo desea pagar?",
    creditCard: "Tarjeta de Crédito/Débito",
    nameOnCard: "Nombre en la Tarjeta",
    expiry: "MM/AA",
    cvc: "CVC",
    zip: "Código Postal",
    pay: "Pagar",
    complete: "Completar Inscripción",
  },
  አማርኛ: {
    header: "የወጣቶች እግርኳስ ካምፕ",
    description: "ልጅዎን በቀጣዩ ካምፕ ይመዝግቡ። ቀላል፣ ፈጣን፣ ደህና ያስተናግዱ።",
    parentInfo: "የወላጅ/አሳዳጊ መረጃ",
    fullName: "ሙሉ ስም",
    phone: "ስልክ ቁጥር",
    playerInfo: "የተጫዋች መረጃ",
    childName: "የልጅ ሙሉ ስም",
    childDOB: "የልጅ የትውልድ ቀን",
    emergency: "የአደጋ እየከላከለ ግንኙነት",
    emergencyDesc: "በአደጋ ጊዜ ማንነት ያስተናግዱ።",
    contactName: "የአደጋ ግንኙነት ሙሉ ስም",
    contactPhone: "የአደጋ ግንኙነት ስልክ ቁጥር",
    payment: "የክፍያ ዘዴ",
    paymentDesc: "የካምፕ ክፍያ: $150.00። እንዴት መክፈል ይፈልጋሉ?",
    creditCard: "የክሬዲት/ዴቢት ካርድ",
    nameOnCard: "በካርድ ላይ ስም",
    expiry: "ወ/ዓ",
    cvc: "CVC",
    zip: "ZIP",
    pay: "ክፍያ",
    complete: "ምዝገባ ያጨርሱ",
  },
};

function YouthSoccerCampForm() {
  const [lang, setLang] = useState("English");
  const t = translations[lang];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 py-28">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 max-w-lg w-full">
        {/* Language Buttons */}
        <div className="flex justify-end mb-6 space-x-2">
          {Object.keys(translations).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 text-sm rounded-lg font-semibold transition ${
                lang === l
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-red-600 mb-2 text-center">
          {t.header}
        </h1>
        <p className="text-gray-600 mb-6 text-center">{t.description}</p>

        {/* Parent/Guardian Info */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {t.parentInfo}
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-gray-700 block mb-1">{t.fullName}</label>
              <input
                type="text"
                placeholder={t.fullName}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-gray-700 block mb-1">{t.phone}</label>
              <input
                type="text"
                placeholder={t.phone}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* Player Info */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {t.playerInfo}
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-gray-700 block mb-1">{t.childName}</label>
              <input
                type="text"
                placeholder={t.childName}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-gray-700 block mb-1">{t.childDOB}</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {t.emergency}
          </h2>
          <p className="text-gray-500 mb-3 text-sm">{t.emergencyDesc}</p>
          <div className="space-y-3">
            <div>
              <label className="text-gray-700 block mb-1">
                {t.contactName}
              </label>
              <input
                type="text"
                placeholder={t.contactName}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-gray-700 block mb-1">
                {t.contactPhone}
              </label>
              <input
                type="text"
                placeholder={t.contactPhone}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {t.payment}
          </h2>
          <p className="text-red-600 font-medium mb-3">{t.paymentDesc}</p>
          <div className="space-y-3">
            <div>
              <label className="text-gray-700 block mb-1">{t.creditCard}</label>
              <input
                type="text"
                placeholder={t.creditCard}
                className="w-full p-3 border border-gray-300 rounded-lg bg-red-50 text-red-600 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-gray-700 block mb-1">{t.nameOnCard}</label>
              <input
                type="text"
                placeholder={t.nameOnCard}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div>
            {/* <div className="flex space-x-3">
              <input
                type="text"
                placeholder={t.expiry}
                className="w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder={t.cvc}
                className="w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder={t.zip}
                className="w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              />
            </div> */}
            {/* <div className="flex space-x-3 mt-2">
              <button className="w-1/2 bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                {t.pay}
              </button>
              <button className="w-1/2 bg-white border border-gray-300 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg"
                  alt="Google Pay"
                  className="h-6"
                />
              </button>
            </div> */}
          </div>
        </section>

        <button className="w-full bg-red-600 text-white p-3 rounded-xl font-semibold hover:bg-red-700 transition">
          {t.complete}
        </button>
      </div>
    </div>
  );
}

export default YouthSoccerCampForm;
