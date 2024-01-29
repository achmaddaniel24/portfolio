"use client";
import { navigation as navigation } from "./navigation.json";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function NavigationBar() {
  const pathname = usePathname() || "/";
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="sticky top-0 z-10 max-w-5xl w-full flex flex-wrap py-4 px-5">
      <nav className="w-full bg-slate-100 fixed top-0 left-0 right-0 z-10 border">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex flex-wrap">
                <h1 className="text-black text-2xl font-semibold">
                  Achmad Daniel
                </h1>
              </div>
              <div className="md:hidden">
                <Hamburger
                  toggled={active}
                  toggle={setActive}
                  color="#000000"
                  size={24}
                  rounded
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-2 ${
                active ? "p-12 md:p-0 block" : "hidden"
              }`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex bg-slate-100">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className={` ${
                      pathname.includes(item.path)
                        ? "md:font-bold underline underline-offset-8"
                        : "md:font-light"
                    } md:px-4 px-4 py-2 pb-6 text-2xl text-black text-center font-semibold md:hover:font-bold`}>
                    <Link
                      key={index}
                      href={item.path}
                      onClick={() => setActive(!active)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
