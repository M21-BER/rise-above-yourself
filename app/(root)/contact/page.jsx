import Header from "@/app/components/Header";

export default function Contact() {
  return (
    <section>
      <Header page="Contact Us" />
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
              <div className="absolute top-0 left-0 p-8 bg-black/95 text-white w-full">
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
            <div className="w-full p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Let's talk
              </h2>

              <form className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold text-base mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold text-base mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold text-base mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-max px-10 bg-background text-white font-semibold rounded-full py-3 hover:bg-background/90 transition focus:outline-none focus:ring-4 focus:ring-red-300"
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
