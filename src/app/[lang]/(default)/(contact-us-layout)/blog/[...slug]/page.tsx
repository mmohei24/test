import { Locale } from "@/i18n.config"
import ContentBlogDetail from "@/src/components/blogDetail/Content/Content"
import HeroBlogDetail from "@/src/components/blogDetail/Hero/Hero"


export const metadata = {
  title: 'SPATIUM - Unleashing Technological Insights: Navigating the IT',
  description: "In the fast-paced realm of Information Technology, staying ahead of the curve is not just a competitive advantage – it's a necessity. As businesses increasingly rely on technology to drive innovation, productivity, and efficiency, IT companies play a pivotal role in shaping the digital landscape. In this article, we delve into key insights that define the dynamic world of IT, shedding light on the trends, challenges, and opportunities that businesses need to embrace for sustained success."
}

const BlogDetail = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <>

      <HeroBlogDetail lang={lang} />
      <ContentBlogDetail lang={lang} />
    </>
  )
}

export default BlogDetail