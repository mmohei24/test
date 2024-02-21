export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ar', 'zh-CN', 'ja', 'ko', 'nl', 'fr', 'pl', 'se', 'it', "es", "pl"]
} as const

export type Locale = (typeof i18n)['locales'][number]
