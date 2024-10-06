import type { Metadata } from "next";
import localFont from "next/font/local";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { NavbarComponent } from "./components/organisms/navbar/navbar";
import { FooterComponent } from "./components/organisms/footer/footer";
import '@mantine/tiptap/styles.css';

import "./globals.css";

// 18pt Fonts
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
const interItalic18 = localFont({
  src: "./fonts/Inter_18pt-Italic.ttf",
  variable: "--font-inter-italic-18",
});
const interLight18 = localFont({
  src: "./fonts/Inter_18pt-Light.ttf",
  variable: "--font-inter-light-18",
});
const interMedium18 = localFont({
  src: "./fonts/Inter_18pt-Medium.ttf",
  variable: "--font-inter-medium-18",
});
const interSemiBold18 = localFont({
  src: "./fonts/Inter_18pt-SemiBold.ttf",
  variable: "--font-inter-semi-bold-18",
});
const interThin18 = localFont({
  src: "./fonts/Inter_18pt-Thin.ttf",
  variable: "--font-inter-thin-18",
});

// 24pt Fonts
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
const interItalic24 = localFont({
  src: "./fonts/Inter_24pt-Italic.ttf",
  variable: "--font-inter-italic-24",
});
const interLight24 = localFont({
  src: "./fonts/Inter_24pt-Light.ttf",
  variable: "--font-inter-light-24",
});
const interMedium24 = localFont({
  src: "./fonts/Inter_24pt-Medium.ttf",
  variable: "--font-inter-medium-24",
});
const interSemiBold24 = localFont({
  src: "./fonts/Inter_24pt-SemiBold.ttf",
  variable: "--font-inter-semi-bold-24",
});
const interThin24 = localFont({
  src: "./fonts/Inter_24pt-Thin.ttf",
  variable: "--font-inter-thin-24",
});

// 28pt Fonts
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
const interItalic28 = localFont({
  src: "./fonts/Inter_28pt-Italic.ttf",
  variable: "--font-inter-italic-28",
});
const interLight28 = localFont({
  src: "./fonts/Inter_28pt-Light.ttf",
  variable: "--font-inter-light-28",
});
const interMedium28 = localFont({
  src: "./fonts/Inter_28pt-Medium.ttf",
  variable: "--font-inter-medium-28",
});
const interSemiBold28 = localFont({
  src: "./fonts/Inter_28pt-SemiBold.ttf",
  variable: "--font-inter-semi-bold-28",
});
const interThin28 = localFont({
  src: "./fonts/Inter_28pt-Thin.ttf",
  variable: "--font-inter-thin-28",
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
          ${interBlackItalic18.variable} ${interBlack18.variable} ${interBoldItalic18.variable} ${interBold18.variable} ${interItalic18.variable} ${interLight18.variable} ${interMedium18.variable} ${interSemiBold18.variable} ${interThin18.variable}
          ${interBlackItalic24.variable} ${interBlack24.variable} ${interBoldItalic24.variable} ${interBold24.variable} ${interItalic24.variable} ${interLight24.variable} ${interMedium24.variable} ${interSemiBold24.variable} ${interThin24.variable}
          ${interBlackItalic28.variable} ${interBlack28.variable} ${interBoldItalic28.variable} ${interBold28.variable} ${interItalic28.variable} ${interLight28.variable} ${interMedium28.variable} ${interSemiBold28.variable} ${interThin28.variable}
          antialiased`}
      >
        <MantineProvider>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </MantineProvider>
      </body>
    </html>
  );
}
