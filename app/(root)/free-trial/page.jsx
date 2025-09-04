"use client";
import { useRef, useState } from "react";

export default function Home() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passForRef = useRef("myself");
  const termsRef = useRef(null);
  const [selectedSession, setSelectedSession] = useState("");
  const [errors, setErrors] = useState({}); // error messages

  const groupClasses = [
    { day: "Mon", time: "8:00 AM", class: "Yoga Flow" },
    { day: "Mon", time: "6:30 PM", class: "Spin Class" },
    { day: "Tue", time: "6:00 AM", class: "HIIT Blast" },
    { day: "Tue", time: "6:30 PM", class: "Zumba" },
    { day: "Wed", time: "7:00 PM", class: "Boxing Basics" },
    { day: "Thu", time: "6:00 AM", class: "Full Body Strength" },
    { day: "Fri", time: "12:00 PM", class: "Spin & Core" },
  ];

  const personalTraining = [
    { day: "Mon Morning", session: "Intro Session" },
    { day: "Tue Afternoon", session: "Intro Session" },
    { day: "Wed Evening", session: "Intro Session" },
  ];

  const soccerProgram = [{ day: "Fri 6:00 PM", session: "Soccer Drills" }];

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      passFor: passForRef.current,
      firstName: firstNameRef.current?.value?.trim(),
      lastName: lastNameRef.current?.value?.trim(),
      phone: phoneRef.current?.value?.trim(),
      email: emailRef.current?.value?.trim() || "",
      agreedToTerms: termsRef.current?.checked || false,
      selectedSession,
    };

    const newErrors = {};

    if (!values.firstName) newErrors.firstName = "First name is required.";
    if (!values.lastName) newErrors.lastName = "Last name is required.";
    if (!values.phone) newErrors.phone = "Phone number is required.";
    if (!values.agreedToTerms) newErrors.terms = "You must agree to the terms.";
    if (!values.selectedSession)
      newErrors.selectedSession = "Please select a session.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(
        "Thank you! We’ve received your request and will contact you soon."
      );
      console.log("Form Values:", values);
    }
  };

  const inputClass =
    "w-full placeholder:text-gray-400 text-black border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition";

  return (
    <div className="bg-gray-50 flex justify-center py-28 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl border border-[rgba(0,0,0,0.1)]"
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-red-600 text-center mb-2">
          Claim Your Free Day Pass
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Pick a class from our schedule below and experience the Apex
          difference!
        </p>

        {/* Pass Type */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Who is this pass for?
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="passFor"
                defaultChecked
                onChange={() => (passForRef.current = "myself")}
                className="w-4 h-4 accent-red-600"
              />
              For Myself
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="passFor"
                onChange={() => (passForRef.current = "child")}
                className="w-4 h-4 accent-red-600"
              />
              For My Child(ren)
            </label>
          </div>
        </div>

        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              First Name
            </label>
            <input
              type="text"
              ref={firstNameRef}
              placeholder="e.g., Jane"
              className={inputClass}
              onChange={() =>
                setErrors((prev) => ({ ...prev, firstName: undefined }))
              }
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Last Name
            </label>
            <input
              type="text"
              ref={lastNameRef}
              placeholder="e.g., Doe"
              className={inputClass}
              onChange={() =>
                setErrors((prev) => ({ ...prev, lastName: undefined }))
              }
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              ref={phoneRef}
              placeholder="(555) 123-4567"
              className={inputClass}
              onChange={() =>
                setErrors((prev) => ({ ...prev, phone: undefined }))
              }
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Email Address (Optional)
            </label>
            <input
              type="email"
              ref={emailRef}
              placeholder="e.g., jane@example.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Session Selection */}
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Select Your Free Session for the Week of Sep 1 - Sep 5
        </h2>

        {/* Group Classes */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-red-600 mb-2">
            Group Classes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {groupClasses.map((session, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  setSelectedSession(
                    `${session.day} ${session.time} - ${session.class}`
                  );
                  setErrors((prev) => ({
                    ...prev,
                    selectedSession: undefined,
                  }));
                }}
                className={`border rounded-md p-3 text-center transition ${
                  selectedSession ===
                  `${session.day} ${session.time} - ${session.class}`
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-300 hover:border-red-600 hover:bg-red-50 text-black"
                }`}
              >
                {session.day} {session.time}
                <br />
                {session.class}
              </button>
            ))}
          </div>
          {errors.selectedSession && (
            <p className="text-sm text-red-600 mt-1">
              {errors.selectedSession}
            </p>
          )}
        </div>

        {/* Personal Training */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-red-600 mb-2">
            Personal Training
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {personalTraining.map((pt, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  setSelectedSession(`${pt.day} - ${pt.session}`);
                  setErrors((prev) => ({
                    ...prev,
                    selectedSession: undefined,
                  }));
                }}
                className={`border rounded-md p-3 text-center transition ${
                  selectedSession === `${pt.day} - ${pt.session}`
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-300 hover:border-red-600 hover:bg-red-50 text-black"
                }`}
              >
                {pt.day}
                <br />
                {pt.session}
              </button>
            ))}
          </div>
        </div>

        {/* Soccer Program */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-red-600 mb-2">
            Soccer Program
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {soccerProgram.map((sp, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  setSelectedSession(`${sp.day} - ${sp.session}`);
                  setErrors((prev) => ({
                    ...prev,
                    selectedSession: undefined,
                  }));
                }}
                className={`border rounded-md p-3 text-center transition ${
                  selectedSession === `${sp.day} - ${sp.session}`
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-300 hover:border-red-600 hover:bg-red-50 text-black"
                }`}
              >
                {sp.day}
                <br />
                {sp.session}
              </button>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              ref={termsRef}
              className="w-4 h-4 accent-red-600"
              onChange={() =>
                setErrors((prev) => ({ ...prev, terms: undefined }))
              }
            />
            I agree to the Terms and Conditions.
          </label>
          {errors.terms && (
            <p className="text-sm text-red-600 mt-1">{errors.terms}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Pass is for first-time, local residents only. One session per
            person.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Claim My Free Session Pass
        </button>
      </form>
    </div>
  );
}
