'use client'

import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import './globals.css'

import React from 'react'
import { GoogleTagManager } from '@next/third-parties/google'
import { AppWrapper } from '../contexts/state'
import { Poppins, Sacramento } from 'next/font/google'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Interstitial from '../components/Interstitial/Interstitial'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ui',
})

const sacramento = Sacramento({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-romantic',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppWrapper>
      <html lang='en' className={`${poppins.variable} ${sacramento.variable}`}>
        <GoogleTagManager gtmId='' />
        <head>
          <link rel='stylesheet' href='https://use.typekit.net/hig7rsm.css'></link>
        </head>
        <body>
          <Interstitial />
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </body>
      </html>
    </AppWrapper>
  )
}
