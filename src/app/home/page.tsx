import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="flex xl:w-8/12 w-full justify-center items-center flex-col">
        <Image
          src="/me.png"
          alt="Achmad Daniel Syahputra"
          className="rounded-full object-cover"
          data-aos="fade-up"
          height={500}
          width={500}
        />
      </div>
      <div className="justify-center items-center text-center">
        <span className="text-2xl font-semibold">
          <a className="text-black">Hi, I‘am </a>
          <a className="text-sky-600">Achmad Daniel</a>
        </span>
      </div>
    </PageWrapper>
  );
}
