import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n"



const HeroBlogs = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  return (
    <section className="relative  pt-[135px]  px-[24px]  border-b border-b-[#989AAE] ">
      <div className="flex justify-center ">
        <div data-aos='zoom-in' className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto pt-[64px] 
        md:py-[145px] flex  flex-col md:flex-row md:items-center justify-between">
          <div className='max-w-[583px] flex flex-col gap-6'>
            <span className='text-[32px] leading-[48px] md:text-[40px] md:leading-[56px] tracking-[-1.5px] text-gradient'>
              {t("blog-page.hero.titleHighlight")}
            </span>
            <h1 className='text-primary-white text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] font-bold lg:leading-[-88px] lg:tracking-[0.45]'>
              {t("blog-page.hero.titleAfter")}
            </h1>
          </div>
          <div className="bg-[url('https://ik.imagekit.io/arsdfirst/spatium/blog/New%20Folder/image%20(39).svg?updatedAt=1706636137764')]
            bg-center bg-no-repeat bg-cover md:absolute top-0 right-[0] rtl:left-0 rtl:right-[unset]
            h-[80vw] md:w-full md:max-w-[600px] md:h-full z-[0]"></div>


        </div>
      </div>
    </section>
  )
}
export default HeroBlogs