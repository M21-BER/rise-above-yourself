import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";
import localFont from "next/font/local";
import { Allerta_Stencil, DM_Sans, Cinzel, Jost } from "next/font/google";
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
const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // optional
  variable: "--font-jost",
  display: "swap",
});
const cinzel = Cinzel({
  variable: "--font-cinzel",
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
        className={`flex  min-h-screen flex-col ${bidsak.variable} ${jost.variable} ${cinzel.variable} ${allerta_Stencil.variable} ${dm_sans.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
