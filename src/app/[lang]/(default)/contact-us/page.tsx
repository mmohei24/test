import { Locale } from '@/i18n.config'
import ContentContact from '@/src/components/contact/Content/Content'

export const metadata = {
  title: 'SPATIUM - Contact Us',
  description: 'Your insights, questions, and feedback propel us forward.'
}

const ContactUs = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <ContentContact lang={lang} />
    </>
  )
}

export default ContactUs