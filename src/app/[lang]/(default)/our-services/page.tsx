import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import Service from '@/src/components/home/Service/Service'
import HeroOurService from '@/src/components/ourServices/Hero'

export const metadata = {
  title: 'SPATIUM - Our Services',
  description: `What we actually do`
}

const OurService = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <HeroOurService lang={lang} />
      <Service lang={lang} />
      <FormContact lang={lang} />

    </>
  )
}

export default OurService