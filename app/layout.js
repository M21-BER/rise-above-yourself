import { Allerta_Stencil, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "./components/Head";
import Footer from "./components/Footer";

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

export const metadata = {
  title: "Rise Above Yourself",
  description:
    "Ray Athletics isn’t just a gym—it’s a movement. We train adults & youth to own their bodies through functional strength, mobility, and discipline. Rise Above Yourself with community-driven bootcamps, youth development, and 1-on-1 coaching. No ego, just effort. Join us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      {/* <body className={`flex min-h-screen flex-col`}> */}
      <body
        className={`flex min-h-screen flex-col ${bidsak.variable} ${allerta_Stencil.variable} ${dm_sans.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
