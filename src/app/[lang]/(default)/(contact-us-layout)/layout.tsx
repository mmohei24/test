'use client'
import { Locale } from '@/i18n.config'

export default function DefaultLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode,
  params: { lang: Locale }

}) {

  return (
    <>
      {children}
      {/* <ContactUs lang={lang} /> */}
    </>
  )
}
