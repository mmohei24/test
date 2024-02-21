import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import CoreSoftware from '@/src/components/ourServices/Testing/CoreSoftware'
import HeroTesting from '@/src/components/ourServices/Testing/Hero'
import ListNoteTesting from '@/src/components/ourServices/Testing/ListNote'
import ServiceTesting from '@/src/components/ourServices/Testing/Services'
import WhyChooseTesting from '@/src/components/ourServices/Testing/WhyChoose'


export const metadata = {
  title: 'SPATIUM - Testing & Quality Assurance',
  description: `Build trust and confidence with your customers by delivering products that meet the minimum quality standards in your industry. `
}


const Testing = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <HeroTesting lang={lang} />
      <ListNoteTesting lang={lang} />
      <CoreSoftware lang={lang} />
      <ServiceTesting lang={lang} />
      <WhyChooseTesting lang={lang} />
      <FormContact lang={lang} />

    </>
  )
}

export default Testing