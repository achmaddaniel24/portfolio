"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import NavigationItem from "./navigation";
import Link from "next/link";

export default function NavigationBar() {
  const [selectedItem, setSelectedItem] = useState<
    "home" | "about" | "skills" | "contact" | string
  >("home");
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-10 max-w-5xl w-full flex flex-wrap py-4 px-5">
      <div className="w-full bg-slate-100 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex flex-wrap">
                <h1 className="text-sky-700 text-xl md:text-3xl font-poppins font-semibold">
                  Portfolio.
                </h1>
              </div>
              <div className="md:hidden">
                <Hamburger
                  toggled={active}
                  toggle={setActive}
                  color="#000000"
                  size={24}
                  rounded
                  label="menu"
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
                {NavigationItem.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      item.path.includes(selectedItem)
                        ? "font-semibold underline underline-offset-8"
                        : "font-medium"
                    } md:px-4 px-4 py-2 pb-6 text-xl text-black text-center font-poppins hover:text-sky-700 duration-300`}>
                    <Link
                      key={index}
                      href={item.path}
                      onClick={() => {
                        setActive(!active);
                        setSelectedItem(item.path);
                      }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
