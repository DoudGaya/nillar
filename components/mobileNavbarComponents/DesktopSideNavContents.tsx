import React from 'react'
import { SocialLinks, urlLinks } from '@/typings';
import { topCategries } from '@/links';
import { company } from '@/links';
import { businessLinks } from '@/links';
import Link from 'next/link';
import { socials } from '@/data/schemas';
import { NavContents } from '../navigations/NavContents';
import { MobileNavLogo } from './MobileNavLogo';




export const DesktopSideNavContents = ({ navSwitch, setNavSwitch}: any) => {
  return (
    <div
      className={`transition-all delay-[60ms] duration-[60ms] ease-in-out animate-slideleft`}>
      <div className="w-[250px]  bg-white  py-3 flex flex-col justify-between shadow-md border-r border-gray-200 dark:border-gray-800 dark:bg-black h-screen">
        <div className=" flex flex-col">
          <div className=" lg:">
             <MobileNavLogo />
         </div>
          <div className="">
            {/* <NavContents
              categories={topCategries}
              title={"Top Categories"}
              setNavSwitch={setNavSwitch}
            /> */}
            {/* <NavContents
              categories={businessLinks}
              title={"Business"}
              setNavSwitch={setNavSwitch}
            /> */}
          </div>
        </div>
        <div className=" p-3 flex space-y-2 flex-col">
          <div className=" flex border-b py-2 ">
            {socials.map((social: SocialLinks) => {
              return <Link target='_blank' key={social.id} href={social.url}>{social.icons}</Link>;
            })}
          </div>
          <div className=" flex flex-wrap gap-2">
            {company.map((url: urlLinks) => {
              return (
                <Link onClick={() => setNavSwitch()} key={url.label} href={url.to}>
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
  );
}
