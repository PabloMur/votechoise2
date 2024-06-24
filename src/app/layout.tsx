import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomLayout } from "@/components/CustomLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Votechoice",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
