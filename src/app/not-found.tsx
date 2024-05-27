import type { Metadata } from "next";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
  ),
  title: "Not Found | Achmad Daniel",
  description: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <div className="text-center justify-center items-center content-center space-y-4">
      <Link
        href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#fromView=search&page=1&position=31&uuid=10c64f8c-0de7-40fa-8cb0-5baa7d625b32"
        target="_blank"
        aria-label="Image by storyset on Freepik"
        className=" flex justify-center items-center">
        <Image
          src="/assets/not-found.png"
          alt="Image by storyset on Freepik"
          data-aos="fade-up"
          height={300}
          width={300}
        />
      </Link>
      <h1 className="text-2xl font-semibold">404 - Page not found :(</h1>
      <p>The page you are looking for does not exist</p>
      <div className="mt-4 flex justify-center items-center">
        <Button text="GO HOME" url={process.env.NEXT_PUBLIC_DOMAIN} />
      </div>
    </div>
  );
}
