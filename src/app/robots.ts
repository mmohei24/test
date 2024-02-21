import { i18n } from '@/i18n.config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const listLang = i18n.locales.map(locale => ({ lang: locale }))
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://spatium-lp.vercel.app/en'

  const sitemap = listLang.map(el => (`${baseUrl}/${el.lang}/sitemap.xml`))
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemap
  }
}