import { Locale } from '@/i18n.config'
import { FormContact } from '@/src/components/FormContact'
import Hero from '@/src/components/hero'
import LearnAboutUs from '@/src/components/home/Introduction/Introduction'
import Service from '@/src/components/home/Service/Service'
import Technologies from '@/src/components/home/Technologies/Technologies'
import Working from '@/src/components/home/Working/Working'

export const metadata = {
  title: 'Spatium',
  description: 'We provide Design and Development services for customized Websites, or Android, and iPhone apps.',
}

const Home = ({ params: { lang } }: { params: { lang: Locale } }) => {

  return (
    <>
      <Hero lang={lang} />
      <LearnAboutUs lang={lang} />
      <Service lang={lang} />
      <Technologies lang={lang} />
      <Working lang={lang} />
      <FormContact lang={lang} />
    </>
  )
}

export default Home

