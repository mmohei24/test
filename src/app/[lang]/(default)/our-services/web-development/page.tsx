import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import Service from '@/src/components/home/Service/Service'
import Background from '@/src/components/ourServices/WebDevelopment/Background'
import CoreSoftware from '@/src/components/ourServices/WebDevelopment/CoreSoftware'
import { CoreSoftwareSp } from '@/src/components/ourServices/WebDevelopment/CoreSoftwareSp'
import HeroWebDevelopment from '@/src/components/ourServices/WebDevelopment/Hero'
import ListNoteWebDevelopment from '@/src/components/ourServices/WebDevelopment/ListNote'
import ServiceWebDevelopment from '@/src/components/ourServices/WebDevelopment/Services'
import WhyChooseWebDevelopment from '@/src/components/ourServices/WebDevelopment/WhyChoose'

export const metadata = {
  title: 'SPATIUM - Web  Development',
  description: `Overcome business challenges and enhance your business growth with our software development services customized to your needs.`
}

const WebDevelopment = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <Background />
      <HeroWebDevelopment lang={lang} />
      <ListNoteWebDevelopment lang={lang} />
      <CoreSoftware lang={lang} />
      <ServiceWebDevelopment lang={lang} />
      <WhyChooseWebDevelopment lang={lang} />
      <FormContact lang={lang} />

    </>
  )
}

export default WebDevelopment