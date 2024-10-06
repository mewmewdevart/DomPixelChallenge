import type { Metadata } from "next";

import { MantineProvider } from '@mantine/core';
import { Notifications } from "@mantine/notifications";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import { NavbarComponent } from "./components/organisms/navbar/navbar";
import { FooterComponent } from "./components/organisms/footer/footer";

import {
  interBlackItalic18,
  interBlack18,
  interBoldItalic18,
  interBold18,
  interItalic18,
  interLight18,
  interMedium18,
  interSemiBold18,
  interThin18,
  interBlackItalic24,
  interBlack24,
  interBoldItalic24,
  interBold24,
  interItalic24,
  interLight24,
  interMedium24,
  interSemiBold24,
  interThin24,
  interBlackItalic28,
  interBlack28,
  interBoldItalic28,
  interBold28,
  interItalic28,
  interLight28,
  interMedium28,
  interSemiBold28,
  interThin28,
} from './fonts/fonts';

import "./globals.css";
import LoadingComponent from "@atoms/loading/loading";

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
        <Notifications className="absolute top-0 right-0"/>
          <NavbarComponent />
          <LoadingComponent />
          {children}
          <FooterComponent />
        </MantineProvider>
      </body>
    </html>
  );
}
