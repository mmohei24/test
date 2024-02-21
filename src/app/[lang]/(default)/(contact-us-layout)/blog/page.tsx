import { Locale } from '@/i18n.config'
import ContentBlogs from '@/src/components/blogs/Content/Content'
import HeroBlogs from '@/src/components/blogs/Hero/Hero'

export const metadata = {
  title: 'SPATIUM - Our blog',
  description: `Our blog`
}


const Blogs = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>
      <HeroBlogs lang={lang} />
      <ContentBlogs lang={lang} />
    </>
  )
}

export default Blogs