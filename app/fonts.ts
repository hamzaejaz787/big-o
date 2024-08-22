import localFont from "next/font/local";
import { Quicksand, Bebas_Neue, Inter, Montserrat } from "next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "700"],
});

export const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin-ext"],
});

export const madeTommy = localFont({
  src: [
    { path: "../public/fonts/made-tommy-bold-outline.otf", weight: "700" },
    { path: "../public/fonts/made-tommy-bold.otf", weight: "400" },
  ],
  variable: "--font-tommy",
  preload: false,
});
