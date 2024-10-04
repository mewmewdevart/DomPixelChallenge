import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interBlackItalic18 = localFont({
  src: "./fonts/Inter_18pt-BlackItalic.ttf",
  variable: "--font-inter-black-italic-18",
});
const interBlack18 = localFont({
  src: "./fonts/Inter_18pt-Black.ttf",
  variable: "--font-inter-black-18",
});
const interBoldItalic18 = localFont({
  src: "./fonts/Inter_18pt-BoldItalic.ttf",
  variable: "--font-inter-bold-italic-18",
});
const interBold18 = localFont({
  src: "./fonts/Inter_18pt-Bold.ttf",
  variable: "--font-inter-bold-18",
});

const interBlackItalic24 = localFont({
  src: "./fonts/Inter_24pt-BlackItalic.ttf",
  variable: "--font-inter-black-italic-24",
});
const interBlack24 = localFont({
  src: "./fonts/Inter_24pt-Black.ttf",
  variable: "--font-inter-black-24",
});
const interBoldItalic24 = localFont({
  src: "./fonts/Inter_24pt-BoldItalic.ttf",
  variable: "--font-inter-bold-italic-24",
});
const interBold24 = localFont({
  src: "./fonts/Inter_24pt-Bold.ttf",
  variable: "--font-inter-bold-24",
});

const interBlackItalic28 = localFont({
  src: "./fonts/Inter_28pt-BlackItalic.ttf",
  variable: "--font-inter-black-italic-28",
});
const interBlack28 = localFont({
  src: "./fonts/Inter_28pt-Black.ttf",
  variable: "--font-inter-black-28",
});
const interBoldItalic28 = localFont({
  src: "./fonts/Inter_28pt-BoldItalic.ttf",
  variable: "--font-inter-bold-italic-28",
});
const interBold28 = localFont({
  src: "./fonts/Inter_28pt-Bold.ttf",
  variable: "--font-inter-bold-28",
});

export const metadata: Metadata = {
  title: "DomPixel Blog",
  description: "DomPixel Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${interBlackItalic18.variable} ${interBlack18.variable} ${interBoldItalic18.variable} ${interBold18.variable}
          ${interBlackItalic24.variable} ${interBlack24.variable} ${interBoldItalic24.variable} ${interBold24.variable}
          ${interBlackItalic28.variable} ${interBlack28.variable} ${interBoldItalic28.variable} ${interBold28.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
