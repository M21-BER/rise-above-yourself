// "use client";
// import { useRouter } from "next/navigation"; // ✅ c
// import { useRef, useState } from "react";

// export default function Home() {
//   const router = useRouter(); // ✅ init router
//   const firstNameRef = useRef(null);
//   const lastNameRef = useRef(null);
//   const phoneRef = useRef(null);
//   const emailRef = useRef(null);
//   const passForRef = useRef("myself");
//   const termsRef = useRef(null);

//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [errors, setErrors] = useState({}); // error messages

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const values = {
//       passFor: passForRef.current,
//       firstName: firstNameRef.current?.value?.trim(),
//       lastName: lastNameRef.current?.value?.trim(),
//       phone: phoneRef.current?.value?.trim(),
//       email: emailRef.current?.value?.trim() || "",
//       agreedToTerms: termsRef.current?.checked || false,
//       selectedSession:
//         selectedOption && selectedDate
//           ? `${selectedOption} on ${selectedDate}`
//           : "",
//     };

//     const newErrors = {};
//     if (!values.firstName) newErrors.firstName = "First name is required.";
//     if (!values.lastName) newErrors.lastName = "Last name is required.";
//     if (!values.phone) newErrors.phone = "Phone number is required.";
//     if (!values.agreedToTerms) newErrors.terms = "You must agree to the terms.";
//     if (!values.selectedSession)
//       newErrors.selectedSession = "Please select an option and a date.";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       router.push("/welcome");
//     }
//   };

//   const inputClass =
//     "w-full placeholder:text-gray-400 text-black border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition";

//   const optionClass = (option) =>
//     `border rounded-md p-3 text-center transition cursor-pointer ${
//       selectedOption === option
//         ? "bg-red-600 text-white border-red-600"
//         : "border-gray-300 hover:border-red-600 hover:bg-red-50 text-black"
//     }`;

//   return (
//     <div className="bg-gray-50 flex justify-center py-28 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl border border-[rgba(0,0,0,0.1)]"
//       >
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-red-600 text-center mb-2">
//           Claim Your Free Day Pass
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Pick a class option and book your free session with our calendar!
//         </p>

//         {/* Pass Type */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">
//             Who is this pass for?
//           </label>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <label className="flex items-center gap-2 text-gray-700">
//               <input
//                 type="radio"
//                 name="passFor"
//                 defaultChecked
//                 onChange={() => (passForRef.current = "myself")}
//                 className="w-4 h-4 accent-red-600"
//               />
//               For Myself
//             </label>
//             <label className="flex items-center gap-2 text-gray-700">
//               <input
//                 type="radio"
//                 name="passFor"
//                 onChange={() => (passForRef.current = "child")}
//                 className="w-4 h-4 accent-red-600"
//               />
//               For My Child(ren)
//             </label>
//           </div>
//         </div>

//         {/* Name */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-gray-700 mb-1 font-medium">
//               First Name
//             </label>
//             <input
//               type="text"
//               ref={firstNameRef}
//               placeholder="e.g., Jane"
//               className={inputClass}
//               onChange={() =>
//                 setErrors((prev) => ({ ...prev, firstName: undefined }))
//               }
//             />
//             {errors.firstName && (
//               <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 font-medium">
//               Last Name
//             </label>
//             <input
//               type="text"
//               ref={lastNameRef}
//               placeholder="e.g., Doe"
//               className={inputClass}
//               onChange={() =>
//                 setErrors((prev) => ({ ...prev, lastName: undefined }))
//               }
//             />
//             {errors.lastName && (
//               <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
//             )}
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-gray-700 mb-1 font-medium">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               ref={phoneRef}
//               placeholder="(555) 123-4567"
//               className={inputClass}
//               onChange={() =>
//                 setErrors((prev) => ({ ...prev, phone: undefined }))
//               }
//             />
//             {errors.phone && (
//               <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1 font-medium">
//               Email Address (Optional)
//             </label>
//             <input
//               type="email"
//               ref={emailRef}
//               placeholder="e.g., jane@example.com"
//               className={inputClass}
//             />
//           </div>
//         </div>

//         {/* Session Options */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-red-600 mb-4">
//             Select Your Session Type
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div
//               onClick={() => {
//                 setSelectedOption("Group Class");
//                 setSelectedDate("");
//               }}
//               className={optionClass("Group Class")}
//             >
//               Group Class
//             </div>
//             <div
//               onClick={() => {
//                 setSelectedOption("Personal Training");
//                 setSelectedDate("");
//               }}
//               className={optionClass("Personal Training")}
//             >
//               Personal Training
//             </div>
//             <div
//               onClick={() => {
//                 setSelectedOption("Soccer Program");
//                 setSelectedDate("");
//               }}
//               className={optionClass("Soccer Program")}
//             >
//               Soccer Program
//             </div>
//           </div>

//           {/* Show calendar if option picked */}
//           {selectedOption && (
//             <div className="mt-4">
//               <label className="block text-gray-700 mb-2 font-medium">
//                 Pick a date for your {selectedOption}:
//               </label>
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => {
//                   setSelectedDate(e.target.value);
//                   setErrors((prev) => ({
//                     ...prev,
//                     selectedSession: undefined,
//                   }));
//                 }}
//                 className="border border-gray-300 text-black rounded-md p-3 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition w-full"
//               />
//             </div>
//           )}
//           {errors.selectedSession && (
//             <p className="text-sm text-red-600 mt-2">
//               {errors.selectedSession}
//             </p>
//           )}
//         </div>

//         {/* Terms */}
//         <div className="mb-6">
//           <label className="flex items-center gap-2 text-gray-700">
//             <input
//               type="checkbox"
//               ref={termsRef}
//               className="w-4 h-4 accent-red-600"
//               onChange={() =>
//                 setErrors((prev) => ({ ...prev, terms: undefined }))
//               }
//             />
//             I agree to the Terms and Conditions.
//           </label>
//           {errors.terms && (
//             <p className="text-sm text-red-600 mt-1">{errors.terms}</p>
//           )}
//           <p className="text-sm text-gray-500 mt-2">
//             Pass is for first-time, local residents only. One session per
//             person.
//           </p>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700 transition"
//         >
//           Claim My Free Session Pass
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [passFor, setPassFor] = useState("myself");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [errors, setErrors] = useState({});
  const [children, setChildren] = useState([]);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const parentFirstRef = useRef(null);
  const parentLastRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const termsRef = useRef(null);
  const childFirstRef = useRef(null);
  const childLastRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      passFor,
      firstName:
        passFor === "myself"
          ? firstNameRef.current?.value?.trim()
          : parentFirstRef.current?.value?.trim(),
      lastName:
        passFor === "myself"
          ? lastNameRef.current?.value?.trim()
          : parentLastRef.current?.value?.trim(),
      phone: phoneRef.current?.value?.trim(),
      email: emailRef.current?.value?.trim() || "",
      agreedToTerms: termsRef.current?.checked || false,
      selectedSession:
        selectedOption && selectedDate
          ? `${selectedOption} on ${selectedDate}`
          : "",
      children: passFor === "child" ? children : [],
    };

    const newErrors = {};
    if (!values.firstName) newErrors.firstName = "First name is required.";
    if (!values.lastName) newErrors.lastName = "Last name is required.";
    if (!values.phone) newErrors.phone = "Phone number is required.";
    if (!values.agreedToTerms) newErrors.terms = "You must agree to the terms.";
    if (!values.selectedSession)
      newErrors.selectedSession = "Please select an option and a date.";
    if (passFor === "child" && children.length === 0)
      newErrors.children = "Please add at least one child.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Values:", values);
      router.push("/welcome");
    }
  };

  const addChild = () => {
    const first = childFirstRef.current?.value?.trim();
    const last = childLastRef.current?.value?.trim();
    if (first && last) {
      setChildren((prev) => [...prev, { first, last }]);
      childFirstRef.current.value = "";
      childLastRef.current.value = "";
      setErrors((prev) => ({ ...prev, children: undefined }));
    }
  };

  const inputClass =
    "w-full placeholder:text-gray-400 text-black border border-gray-300 rounded-md p-3 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition";

  const optionClass = (option) =>
    `border rounded-md p-3 text-center transition cursor-pointer ${
      selectedOption === option
        ? "bg-red-600 text-white border-red-600"
        : "border-gray-300 hover:border-red-600 hover:bg-red-50 text-black"
    }`;

  return (
    <div className="bg-gray-50 flex justify-center py-28 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl border border-[rgba(0,0,0,0.1)]"
      >
        <h1 className="text-3xl font-bold text-red-600 text-center mb-2">
          Claim Your Free Day Pass
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Pick a class option and book your free session with our calendar!
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
                value="myself"
                checked={passFor === "myself"}
                onChange={() => {
                  setPassFor("myself");
                  setChildren([]);
                }}
                className="w-4 h-4 accent-red-600"
              />
              For Myself
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="passFor"
                value="child"
                checked={passFor === "child"}
                onChange={() => setPassFor("child")}
                className="w-4 h-4 accent-red-600"
              />
              For My Child(ren)
            </label>
          </div>
        </div>

        {/* Name Fields */}
        {passFor === "myself" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              ref={firstNameRef}
              placeholder="First Name"
              className={inputClass}
              onChange={() =>
                setErrors((prev) => ({ ...prev, firstName: undefined }))
              }
            />
            <input
              type="text"
              ref={lastNameRef}
              placeholder="Last Name"
              className={inputClass}
              onChange={() =>
                setErrors((prev) => ({ ...prev, lastName: undefined }))
              }
            />
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-red-600 mb-2">
              Parent/Guardian Info
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                ref={parentFirstRef}
                placeholder="Parent First Name"
                className={inputClass}
              />
              <input
                type="text"
                ref={parentLastRef}
                placeholder="Parent Last Name"
                className={inputClass}
              />
            </div>

            <h3 className="text-lg font-medium text-red-600 mb-2">
              Add Child(ren)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                ref={childFirstRef}
                placeholder="Child First Name"
                className={inputClass}
              />
              <input
                type="text"
                ref={childLastRef}
                placeholder="Child Last Name"
                className={inputClass}
              />
            </div>
            <button
              type="button"
              onClick={addChild}
              className="mb-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Add Child
            </button>

            {/* Display Children Full Names */}
            {children.length > 0 && (
              <div className="mb-2">
                <h4 className="font-medium text-gray-700 mb-1">
                  Children Added:
                </h4>
                <ul className="list-disc list-inside">
                  {children.map((c, i) => (
                    <li key={i} className="text-black capitalize">
                      {c.first} {c.last}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {errors.children && (
              <p className="text-sm text-red-600 mt-1">{errors.children}</p>
            )}
          </div>
        )}

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            ref={phoneRef}
            placeholder="Phone Number"
            className={inputClass}
            onChange={() =>
              setErrors((prev) => ({ ...prev, phone: undefined }))
            }
          />
          <input
            type="email"
            ref={emailRef}
            placeholder="Email (Optional)"
            className={inputClass}
          />
        </div>

        {/* Session Options */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Select Your Session Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Group Class", "Personal Training", "Soccer Program"].map(
              (option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedOption(option);
                    setSelectedDate("");
                  }}
                  className={optionClass(option)}
                >
                  {option}
                </div>
              )
            )}
          </div>

          {selectedOption && (
            <div className="mt-4">
              <label className="block text-gray-700 mb-2 font-medium">
                Pick a date for your {selectedOption}:
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    selectedSession: undefined,
                  }));
                }}
                className="border border-gray-300 text-black rounded-md p-3 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none transition w-full"
              />
            </div>
          )}
          {errors.selectedSession && (
            <p className="text-sm text-red-600 mt-2">
              {errors.selectedSession}
            </p>
          )}
        </div>

        {/* Terms */}
        <label className="flex items-center gap-2 text-gray-700 mb-6">
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
          <p className="text-sm text-red-600 mb-2">{errors.terms}</p>
        )}

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
