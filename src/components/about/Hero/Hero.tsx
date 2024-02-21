import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n"

const HeroAbout = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)
  return (
    <section className='relative md:pt-[124px] border-b border-#989AAE'>

      <div className="relative max-w-7xl mx-auto lg:pb-0 sm:px-6 ">

        {/* Hero content */}
        <div className="px-[24px] lg:px-0 pt-[8rem] pb-[4rem] xl:py-[4.5rem]
         flex flex-col gap-[2.25rem] md:flex-row lg:relative">
          <div className="flex flex-col gap-[1.5rem]" data-aos="zoom-in-up">
            <strong className="text-gradient text-[2rem] xl:text-[2.5rem] leading-[3rem] 
            xl:leading-[3.5rem] font-normal tracking-[-0.5px] lg:tracking-[-1.5px] capitalize">
              {/* {t('about-page.title')} */}
              {t('about-us.hero.hightLight')}
            </strong>
            {/* Section header */}
            <div className="lg:max-w-[554px]">
              <h1 className="text-primary-white text-[3rem] lg:text-[4.5rem]
               xl:text-[5.625rem] leading-[3.5rem] lg:leading-[5rem] xl:leading-[5.5rem] 
               tracking-[0.5%] font-bold"
              >

                {t('about-us.hero.title')}


              </h1>
            </div>
            <div className="lg:max-w-[554px]">
              <p className="text-neutral-2 text-[2rem] leading-[3rem] tracking-[-0.5px] font-normal">
                {/* {t('about-page.hero.desc')} */}
                {t('about-us.hero.desc')}

              </p>
            </div>
          </div>
          <div className="md:flex md:justify-center lg:absolute lg:top-2/4 lg:right-[0] lg:-translate-y-1/2
          rtl:lg:left-0 rtl:lg:right-[unset] rtl:lg:-translate-x-[10%]">
            <img data-aos="zoom-in-up" className="h-auto" src="https://ik.imagekit.io/arsdfirst/spatium/about%20us/image.png?updatedAt=1706357416658" alt="bg-sp" />
          </div>
        </div>
      </div >
    </section >
  )
}
export default HeroAbout