import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section>
      <div className="min-h-screen text-black pt-14 sm:pt-20">
        <div className="container bg-white mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Image + Contact Info Overlay */}
            <div className="relative h-96 md:h-auto">
              <Image
                src="/images/slider/slider16.jpg"
                alt="Contact"
                fill
                className="object-cover object-top grayscale"
                priority
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
