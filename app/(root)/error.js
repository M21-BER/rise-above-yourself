"use client";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-xl">
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="h-20 w-20 text-red-500 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Something went wrong
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          An unexpected error occurred. Try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-red-500 rounded-full text-white font-medium  hover:bg-red-600 transition duration-200 cursor-pointer"
          >
            Retry
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-full  transition duration-200 cursor-pointer"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
