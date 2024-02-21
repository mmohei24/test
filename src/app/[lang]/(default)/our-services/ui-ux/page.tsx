import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import Technologies from '@/src/components/ourServices/UiUx/Technologies'
import CoreSoftware from '@/src/components/ourServices/UiUx/CoreSoftware'
import ExpertsIn from '@/src/components/ourServices/UiUx/ExpertsIn'
import HeroUiUx from '@/src/components/ourServices/UiUx/Hero'
import ListNoteUiUx from '@/src/components/ourServices/UiUx/ListNote'
import OurExperts from '@/src/components/ourServices/UiUx/OurExperts'

export const metadata = {
  title: 'SPATIUM - UI/UX Design',
  description: `Creating top-notch UI/UX designs is something Spatium Software has been doing for several years. You can exceed the expectations of your users with our UI and UX services.`
}


const WebDevelopment = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <HeroUiUx lang={lang} />
      <ListNoteUiUx lang={lang} />
      <CoreSoftware lang={lang} />
      <OurExperts lang={lang} />
      <ExpertsIn lang={lang} />
      <Technologies lang={lang} />
      <FormContact lang={lang} />

    </>
  )
}

export default WebDevelopment