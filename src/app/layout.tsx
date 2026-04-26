import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Field Day - Local Events for Kids in Fairfield County, CT",
    template: "%s | Field Day",
  },
  description:
    "Discover local events for kids in Fairfield County, CT. Storytime, festivals, arts & crafts, outdoor adventures and more — all in one app.",
  metadataBase: new URL("https://fielddayapp.com"),
  openGraph: {
    title: "Field Day - Local Events for Kids",
    description:
      "Discover local events for kids in Fairfield County, CT.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Day - Local Events for Kids",
    description:
      "Discover local events for kids in Fairfield County, CT.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
