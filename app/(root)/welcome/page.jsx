import React from "react";

function FreeTrialWelcome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          You're All Set!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Congratulations — your Ray Athletics Day Pass is confirmed!
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-gray-900 font-medium">Ray Athletics</p>
          <p className="text-gray-700">5649 L General Washington Drive</p>
          <p className="text-gray-700">Alexandria, VA 22312</p>
        </div>
        <a
          href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2425.275483964913!2d-77.1653009!3d38.797289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3050711922f%3A0x54719de7075cc6a5!2sR.A.Y%20ATHLETICS!5e1!3m2!1sen!2set!4v1755424131942!5m2!1sen!2set"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition duration-200 mb-4"
        >
          View on Google Maps
        </a>
        <p className="text-gray-600 text-sm">
          When you arrive, just provide your phone number at the front desk to
          activate your pass.
        </p>
      </div>
    </div>
  );
}

export default FreeTrialWelcome;
