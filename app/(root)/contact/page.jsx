import Header from "@/app/components/Header";

export default function Contact() {
  return (
    <section>
      <Header />
      <div className="min-h-screen text-black mt-10">
        <div className="container bg-white mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Image + Contact Info Overlay */}
            <div className="relative h-96 md:h-auto">
              <img
                src="/images/gym.jpg" // ✅ Change to your image path
                alt="Contact"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 p-8 bg-black/70 text-white w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                  +1 (619) 404-7752
                </h3>
                <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
                  5649L General Washington Dr. <br />
                  Alexandria, Virginia <br />
                  <span className="font-semibold">Ray Athletics HQ</span>
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-xl text-gray-900 sm:text-2xl md:text-3xl font-bold mb-6">
                Let's talk
              </h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm md:text-base font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm md:text-base font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm md:text-base font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-red-600 transition text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
