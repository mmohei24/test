import '@/src/css/style.css'
import 'react-multi-carousel/lib/styles.css';
import { Roboto } from 'next/font/google'

import Header from '@/src/components/ui/header'

import { Locale, i18n } from '@/i18n.config'
import Script from 'next/script'


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

interface Params {
  lang?: string
}

export async function generateMetadata({ params }: { params: Params }) {

  const { lang } = params

  let languagesMeta = {}
  i18n.locales.forEach(locale => {
    languagesMeta = { ...languagesMeta, [locale]: '/' + locale }
  })

  return {
    title: 'SPATIUM',
    description: 'We provide Design and Development services for customized Websites, or Android, and iPhone apps.',
    generator: 'Spatium',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords: ['spatium'],
    authors: [{ name: 'Spatium' }, { name: 'Spatium', url: process.env.NEXT_PUBLIC_BASE_URL }],
    colorScheme: 'dark',
    creator: 'spatium fg',
    publisher: 'spatium',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL + ''),
    alternates: {
      canonical: `/${lang}`,
      languages: languagesMeta
    },
    openGraph: {
      images: 'https://ik.imagekit.io/arsdfirst/spatium/image.png?updatedAt=1706252849709',
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,

    },
    twitter: {
      card: 'summary_large_image',
      title: 'SPATIUM',
      description: 'We provide Design and Development services for customized Websites, or Android, and iPhone apps.',
      images: ['https://ik.imagekit.io/arsdfirst/spatium/image.png?updatedAt=1706252849709'],
    },
  }
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <html lang={lang} dir={dir}>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_ID}');`,
        }}

      />
      {/* End Google Tag Manager */}

      <body className={`${roboto.variable} font-roboto antialiased bg-white text-gray-900 tracking-tight`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          >
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header lang={lang} />
          {children}
        </div>
      </body>
    </html>
  )
}
