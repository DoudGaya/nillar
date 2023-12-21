
'use client'
import React from "react";
import Link from "next/link";
import { MobileNavLogo } from "./MobileNavLogo";
import { NavContents } from "../navigations/NavContents";
import { topCategries } from "@/links";
import { company } from "@/links";
import { businessLinks } from "@/links";
import { SocialLinks } from "@/typings";
import { urlLinks } from "@/typings";
import { socials } from "@/data/schemas";


export const MobileSideBar = ({ navSwitch, setNavSwitch }: any) => {
  return (
    <div
      className={`${
        navSwitch ? " block" : "hidden"
      } transition-all delay-[60ms] duration-[60ms] shadow-md border-r w-[250px]  ease-in-out animate-slideleft`}>
      <div className="w-fu;l block lg:hidden bg-white fixed h-screen top-0 dark:bg-black border-r border-line-color z-50  drop-shadow-lg">
        <div className=" p-3 flex flex-col space-y-4">
          <div className="w-full flex flex-col">
            <MobileNavLogo />
            <div className={``}>
              <div className=" bg-white py-6 flex flex-col justify-between  border-gray-200 dark:border-gray-800 dark:bg-black h-screen">
                <div className="">
                  <NavContents
                    categories={topCategries}
                    title={"Top Categories"}
                    setNavSwitch={setNavSwitch}
                  />
                  <NavContents
                    categories={businessLinks}
                    title={"Business"}
                    setNavSwitch={setNavSwitch}
                  />
                </div>
                <div className=" p-3 flex space-y-2 flex-col">
                  <div className=" flex border-b py-2 ">
                    {socials.map((social: SocialLinks) => {
                      return <Link href={social.url}>{social.icons}</Link>;
                    })}
                  </div>
                  <div className=" flex flex-wrap gap-2">
                    {company.map((url: urlLinks) => {
                      return (
                        <Link href={url.to}>
                          <p className=" text-sm text-gray-600 hover:text-black hover:font-semibold ">
                            {" "}
                            {url.label}{" "}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
