import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import { Providers } from '@/components/providers/Providers'
import { Footer } from '@/components/Footer'
import { MobileFooter } from '@/components/mobileNavbarComponents/MobileFooter'
import Script from 'next/script'

import { CategoriesNav } from '@/components/CategoriesNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nillar.com"),
  verification: {
    google: "google-site-verification=",
  },
  title: {
    default: "Nillar Magazines",
    template: `Nillar | %s`,
  },
  openGraph: {
    type: "website",
    images: [
        "https://nillar.com/nillar.png",
    ],
  },
  keywords: [
    "finance",
    "business",
    "news",
    "breaking",
    "article",
    "united",
    "kingdom",
    "nigeria",
    "politics",
    "africa",
    "technology",
    "agriculture",
  ],
  description:
    "Stay Informed with Expert Insights, Breaking News, and How-To Guides on Business, Finance, Investments, and More. Explore a Wealth of Knowledge to Secure Your Financial Future Today.",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <Head>
        <title>Nillar Magazines</title>

        <meta
          name="robots"
          content="index,follow"
        />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,user-scalable=yes"
        />
        <link
          rel="canonical"
          href="https://www.nillar.com/"
        />
        <meta
          name="referrer"
          content="origin-when-cross-origin"
        />
        <meta
          property="og:site_name"
          content="Nillar"
        />

        <meta
          name="twitter:image"
          content="https://i.postimg.cc/HnzmyW3P/Group-61.png"
        />
        <meta
          name="twitter:title"
          content="Nillar"
        />
      </Head>
      <body
        className={`${inter.className} bg-white dark:bg-[rgb(0,0,0)]`}>
        <Providers>
          <div className=" flex-col top-0 fixed w-full lg:flex">
            <Navbar />
            <div className=" hidden justify-center w-full lg:flex">
              <CategoriesNav />
            </div>
          </div>
          <div className=" lg:mt-[90px] ">{children}</div>
          <div className=" lg:block hidden">
            <Footer />
          </div>
          <div className="fixed bottom-0 left-auto w-full lg:hidden">
            <MobileFooter />
          </div>
        </Providers>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2G16ESXQ6W" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2G16ESXQ6W');
        `}
        </Script>
      </body>
    </html>
  );
}
