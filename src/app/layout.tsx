import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
  ),
  title: "Portfolio | Achmad Daniel",
  icons: { icon: "/favicon.ico" },
  description: "Achmad Daniel Web Portfolio",
  openGraph: {
    title: "Portfolio | Achmad Daniel",
    description: "Achmad Daniel Web Portfolio",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: process.env.NEXT_PUBLIC_DOMAIN,
    locale: "id_ID",
    type: "website",
  },
  authors: {
    name: "Achmad Daniel Syahputra",
    url: process.env.NEXT_PUBLIC_DOMAIN,
  },
  keywords: [
    "portfolio",
    "achmad daniel",
    "developer",
    "mobile dev",
    "web dev",
    "mobile developer",
    "web developer",
  ],
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
      <body className={notoSans.className}>
        <nav>
          <NextTopLoader color="#0284C7" showSpinner={false} />
          <NavigationBar />
        </nav>
        <main className="flex flex-col min-h-screen bg-slate-100 text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
