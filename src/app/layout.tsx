import type { Metadata } from "next";
import { Sora } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achmad Daniel | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}>
      <body className={sora.className}>
        <NextTopLoader color="#0284C7" showSpinner={false} />
        <main className="flex flex-col min-h-screen bg-slate-100 text-black">
          <NavigationBar />
          {children}
        </main>
      </body>
    </html>
  );
}
