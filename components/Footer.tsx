import React from 'react'
import logo from '@/public/logo_light.png'
import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/data/schemas'



const navItems = [
  {
    id: 1,
    header: 'company',
    navLinks: [
      {
        id: 1,
        name: 'Editors',
        url: '/editors'
      },
      {
        id: 2,
        name: 'Authors',
        url: '/authors'
      },
       {
        id: 3,
        name: 'About Us',
        url: '/about-us'
      },
      {
        id: 4,
        name: 'Our Team',
        url: '/team'
      },
      {
        id: 5,
        name: 'Contact Us',
        url: '/contact'
      }
    ]
  },

   {
    id: 2,
    header: 'Business',
    navLinks: [
      {
        id: 1,
        name: 'Partnering',
        url: '/partnering'
      },
      {
        id: 2,
        name: 'Investment',
        url: '/investment'
      },
      {
        id: 3,
        name: 'Stock',
        url: '/stock'
      },
       {
        id: 4,
        name: 'Advertising',
        url: '/ads'
      },
       {
        id: 5,
        name: 'Promotions',
        url: '/promotion'
      }
    ]
  },
   
    {
    id: 3,
    header: 'Career',
    navLinks: [
      {
        id: 1,
        name: 'Become a writer',
        url: '/become-a-writer'
      },
      {
        id: 2,
        name: 'Become an editor',
        url: 'become-an-editor'
      },
      {
        id: 3,
        name: 'Join Nillar',
        url: 'join-nillar'
      },
       {
        id: 4,
        name: 'Become a contributor',
        url: 'become-a-contributor'
      }
    ]
  },
    
     {
    id: 4,
    header: 'Topics',
    navLinks: [
      {
        id: 1,
        name: 'Personal Finance',
        url: 'personal-finance'
      },
      {
        id: 2,
        name: 'Business',
        url: '/business'
      },
      {
        id: 3,
        name: 'Technology',
        url: 'technology'
      },
       {
        id: 4,
        name: 'Money',
        url: '/money'
      },
       {
        id: 5,
        name: 'Sitemap',
        url: '/sitemap.xml'
      }
    ]
  }
]




export const Footer = () => {
  return (
    <div className=" w-full  dark:border-slate-400 border-t-2 dark:bg-dark-shade-bright border-line-color">
      <div className=" max-w-5xl mx-auto flex flex-col">
        <div className=" grid lg:grid-cols-4 gap-y-5 md:gap-y-0 grid-cols-1 py-6">
          <div className=" grid-cols-1 px-4">
            <Image
              src={logo}
              alt="Nillar Logo"
            />
          </div>
          <div className=" border-y py-6 col-span-2 text-sm lg:py-2 font-keisei px-6 lg:border-l border-line-color dark:border-gray-500">
            Nillar is a financial magazine created to educate readers about
            business, finance, personal productivity and technology. We also
            share news and updates about related topics. Stay tuned
          </div>
          <div className=" col-span-1">
            <div className=" flex items-center h-full border-l border-line-color px-4 dark:border-stone-500">
              {socials.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className=" p-1 hover:bg-primary-light/60 rounded-lg">
                    {item.icons}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* NAV LINKS */}

        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 border-t py-8 border-line-color dark:bg-dark-shade-bright">
          {navItems.map((s) => {
            return (
              <div className="" key={s.id}>
                <div className=" px-4">
                  <h2 className=" uppercase py-2 font-header mb-6 border-b border-line-color dark:bg-dark-shade-bright text-2xl">
                    {s.header}
                  </h2>
                  <div className=" flex flex-col space-y-1">
                    {s.navLinks.map((link) => {
                      return (
                        <Link
                          key={link.id}
                          className="font-keisei hover:underline"
                          href={link.url}>
                          {" "}
                          {link.name}{" "}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

