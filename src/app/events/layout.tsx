import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gunn.one",
  description: "Your favorite student web apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className + " bg-neutral-200 text-neutral-700"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
