import './globals.scss'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geoffrey Doak',
  description: 'Mar-tech / Front-end Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
