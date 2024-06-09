import type { Metadata } from "next";
import { SeoMetadata } from "@/utils/seo-metadata";
import { Toaster } from "react-hot-toast";
import { Noto_Sans } from "next/font/google";
import NavigationBar from "@/components/ui/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = SeoMetadata;

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
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <header>
              <NavigationBar />
            </header>
            {children}
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
