import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";
import localFont from "next/font/local";
import { Allerta_Stencil, DM_Sans, Anton, Noto_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const bidsak = localFont({
  src: "./fonts/Bisdak.ttf",
  display: "swap",
  weight: "400",
  variable: "--font-bidsak",
});

const allerta_Stencil = Allerta_Stencil({
  variable: "--font-allerta_stencil",
  subsets: ["latin"],
  weight: "400",
});
const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
});
const anton = Anton({
  weight: "400", // Required, since Anton only has this weight
  subsets: ["latin"],
  variable: "--font-anton",
});
const notoSans = Noto_Sans({
  weight: ["400", "700"], // required, otherwise hydration mismatch
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Rise Above Yourself",
  description:
    "Ray Athletics isn’t just a gym—it’s a movement. We train adults & youth to own their bodies through functional strength, mobility, and discipline. Rise Above Yourself with community-driven bootcamps, youth development, and 1-on-1 coaching. No ego, just effort. Join us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/circle-logo-white.PNG"
          type="image/png"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      {/* <body className={`flex  min-h-screen flex-col`}> */}
      <body
        className={`flex  min-h-screen flex-col ${bidsak.variable} ${notoSans.variable} ${anton.variable} ${allerta_Stencil.variable} ${dm_sans.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <Link href="/free-trial">
          <div className="fixed bottom-0 w-full bg-red-600 py-4 px-5 flex items-center justify-center gap-3 shadow-lg z-50 hover:bg-red-700 transition">
            <p className="text-white font-anton text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center">
              Try Us For Free
            </p>
            <Image
              src="/right-chevron.png"
              alt="arrow icon"
              width={24}
              height={24}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10"
            />
          </div>
        </Link>

        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-600 mb-4 animate-pulse">
              🚧 Under Construction 🚧
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              We are working hard to bring something amazing. Stay tuned!
            </p>
          
          </div>
        </div> */}
      </body>
    </html>
  );
}
