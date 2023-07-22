import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nillar - The Wealth Magazine',
  description: 'Stay Informed with Expert Insights, Breaking News, and How-To Guides on Business, Finance, Investments, and More. Explore a Wealth of Knowledge to Secure Your Financial Future Today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Nillar - The Wealth Magazine</title>
        <meta
          name="description"
          content={`Stay Informed with Expert Insights, Breaking News, and How-To Guides on Business, Finance, Investments, and More. Explore a Wealth of Knowledge to Secure Your Financial Future Today.`}
          key="desc"
        />

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
