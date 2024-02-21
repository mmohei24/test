'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Locale } from '@/i18n.config'
import Footer from '@/src/components/ui/footer'
import { FormContact } from '@/src/components/FormContact'
import Background from '@/src/components/ourServices/WebDevelopment/Background'

export default function DefaultLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow relative">
        <Background />
        {children}

      </main>
      <Footer lang={lang} />
    </>
  )
}
