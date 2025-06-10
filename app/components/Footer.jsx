import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[rgba(255,255,255,0.1)] bg-black text-white py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Signup */}
        <div>
          <h3 className="font-bold mb-2">Don't Miss Out</h3>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2 text-white bg-transparent border border-white"
            />
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              className="w-full p-2 text-white bg-transparent border border-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 font-bold"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-gray-400 text-xs mt-2">
            This site is intended for US consumers. By signing up, you agree
            that your data will be collected and used as per our Privacy Policy
            and Terms of Use.
          </p>
        </div>

        {/* Company */}
        {/* <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-400">
            <li>About</li>
            <li>Experts and Spokesmodels</li>
          </ul>
        </div> */}

        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Contact Us</li>
            <li>Functional Training</li>
            <li>Explore App</li>
            <li>Events & News</li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className="font-bold mb-2">Connect With Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#E30803]" /> +1 (619) 404-7752
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#E30803] mt-1" />
              <span>
                5649L General Washington Dr. <br />
                Alexandria, Virginia
              </span>
            </li>
            <li className="flex gap-4 pt-2 text-lg">
              <a
                href="https://www.instagram.com/athlete_whispererr/tle bit of body text"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/discover/ray-athletics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.tiktok.com/discover/ray-athletics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        <p>SITE MAP | PRIVACY POLICY | TERMS OF SERVICE</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Rise Above Yourself
        </p>
      </div>
    </footer>
  );
}
