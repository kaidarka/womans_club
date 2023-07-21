import React from "react";
import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { Header } from "@/widgets/Header";

const font = Source_Serif_4({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Клуб женщин предпринимателей',
  // TODO rewrite this
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <Header/>
          {children}
      </body>
    </html>
  )
}
