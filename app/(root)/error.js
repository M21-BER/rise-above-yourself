"use client";
import { useRouter } from "next/navigation";
import { FaExclamation } from "react-icons/fa";

export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
      <FaExclamation className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        An unexpected error occurred. Please try again or go back to the
        homepage.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
        >
          Retry
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
