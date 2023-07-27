import React from "react";
import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { Header } from "@/widgets/Header";

const font = Source_Serif_4({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Клуб женщин предпринимателей',
    description: 'Тульская региональная общественная организация содействия развития бизнеса Клуб женщин предпринимателей. Организация взаимодействует с органами государственной власти Тульской области, с общественными организациями регионов РФ по поддержке и развитию малого и среднего предпринимательства. Клуб женщин предпринимателей объединяет предпринимателей Тульской области, помогает в развитии бизнеса, расширении деловых связей, поиске надежных партнеров, обучении и обмене опытом. Клуб женщин предпринимателей-это сообщество предпринимателей, чей бизнес является основой городской экономики.',
    viewport: 'initial-scale=1.0, width=device-width',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={font.className}>
          <Header/>
          {children}
      </body>
    </html>
  )
}
