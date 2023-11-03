import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import { Providers } from '@/components/providers/Providers'
import { Footer } from '@/components/Footer'
import { MobileNav } from '@/components/MobileNav'
import { MobileFooter } from '@/components/MobileFooter'
import { MobileSideBar } from '@/components/MobileSideBar'
import Script from 'next/script'
import { NavContextProvider } from '@/components/context/MobileNavContext'
import { SideBarProvider } from '@/components/context/DesktopSideBarContext'
// import { NavSideBar } from '@/components/CategoriesNav'
import { CategoriesNav } from '@/components/CategoriesNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nillar.com'),
  verification: {
    google: 'google-site-verification='
  },
  title:{
    default: 'Nillar Magazines',
    template: `Nillar Magazines | %s`
  },
  description: 'Stay Informed with Expert Insights, Breaking News, and How-To Guides on Business, Finance, Investments, and More. Explore a Wealth of Knowledge to Secure Your Financial Future Today.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Nillar Magazines</title>
        <meta
          name="description"
          content={`Stay Informed with Expert Insights, Breaking News, and How-To Guides on Business, Finance, Investments, and More. Explore a Wealth of Knowledge to Secure Your Financial Future Today.`}
          key="desc"
        />

        <meta name='robots' content='index,follow' />

        <meta
          property="og:description"
          content="The Magazines"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/HnzmyW3P/Group-61.png"
        />

        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,user-scalable=yes" />
        <link rel="canonical" href="https://www.nillar.com/" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta property="og:site_name" content="Nillar" />
        <meta property="og:title" content="Nillar" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:url" content="https://www.nillar.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nillarmagazines" />
        <meta name="twitter:image" content="https://i.postimg.cc/HnzmyW3P/Group-61.png" />
        <meta name="twitter:title" content="Nillar" />
        <meta
          name="twitter:description"
          content="Nillar is a productivity and finance manazine that teaches you about investing in business, how-to, politics, finance, and many other topics" />
        <meta
          name="news_keywords"
          // @ts-ignore
          itemprop="keywords"
          content="business, finace, prodcuctivity, politics, tech, leadership, entrepreneurs, investing"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2G16ESXQ6W');
          `}
        </Script>
          <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2G16ESXQ6W"></Script>
      </Head>
      <body className={`${inter.className} bg-[rgb(244,244,244)] dark:bg-[rgb(0,0,0)]`}>
        <Providers>
          <SideBarProvider>
            <NavContextProvider>
              <MobileSideBar />
              <div className=" hidden flex-col w-full lg:flex">
              {/* <div className=" hidden flex-col fixed top-0 w-full lg:flex"> */}
                <Navbar />
                  <div className=" justify-center w-full lg:flex">
                    <CategoriesNav />
                  </div>
              </div>
              <div className=" fixed top-0 left-auto w-full lg:hidden">
                <MobileNav />
              </div>
              {children}
              <Footer />
                <div className="fixed bottom-0 left-auto w-full lg:hidden">
                <MobileFooter />
              </div>
            </NavContextProvider>
          </SideBarProvider>
       </Providers>
      </body>
    </html>
  )
}
