import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import CoreSoftware from '@/src/components/ourServices/MobileAppDevelopment/CoreSoftware'
import ExpertsIn from '@/src/components/ourServices/MobileAppDevelopment/ExpertsIn'
import HeroMobileAppDevelopment from '@/src/components/ourServices/MobileAppDevelopment/Hero'
import ListNoteMobileAppDevelopment from '@/src/components/ourServices/MobileAppDevelopment/ListNote'
import OurExperts from '@/src/components/ourServices/MobileAppDevelopment/OurExperts'
import ServiceMobileAppDevelopment from '@/src/components/ourServices/MobileAppDevelopment/Services'
import WhyChooseMobileAppDevelopment from '@/src/components/ourServices/MobileAppDevelopment/WhyChoose'

export const metadata = {
  title: 'SPATIUM - Mobile App Development',
  description: `Mobile apps have become one of the primary platforms for targeting millions of users across the globe.`
}

const WebDevelopment = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <HeroMobileAppDevelopment lang={lang} />
      <ListNoteMobileAppDevelopment lang={lang} />
      <ServiceMobileAppDevelopment lang={lang} />
      <CoreSoftware lang={lang} />
      <OurExperts lang={lang} />
      <ExpertsIn lang={lang} />
      <WhyChooseMobileAppDevelopment lang={lang} />
      <FormContact lang={lang} />

    </>
  )
}

export default WebDevelopment