import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import ContentAbout from '@/src/components/about/Content/Content'
import HeroAbout from '@/src/components/about/Hero/Hero'
import Background from '@/src/components/ourServices/WebDevelopment/Background'

export const metadata = {
  title: ' SPATIUM - About Us',
  description: 'We help our clients build & improve your technical product'
}

const AboutPage = ({ params: { lang } }: { params: { lang: Locale } }) => {

  return (
    <>
      <Background />
      <HeroAbout lang={lang} />
      <ContentAbout lang={lang} />
      <FormContact lang={lang} />
    </>
  )
}

export default AboutPage