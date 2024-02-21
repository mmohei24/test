import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n"

const LearnAboutUs = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  return (
    <section className="">
      <div className="relative w-full px-[24px] lg:px-0 md:max-w-4.5xl lg:max-w-7xl  mx-auto py-[64px] md:py-[96px] lg:py-[128px] flex flex-col gap-6 items-center">
        <h2 data-aos="fade-up" className="text-[32px] leading-[48px] lg:text-[40px]  lg:leading-[56px] tracking-[0.5px] md:tracking-[-1.5px]  text-gradient max-w-[585px] text-center">
          {t('home-page.learAbout.hightLight')}
        </h2>
        <span data-aos="fade-up" className="text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] lg:text-[90px] font-bold lg:leading-[88px] md:tracking-[0.36px] lg:tracking-[0.45px] text-center text-white">
          {t('home-page.learAbout.title')}

          <br className="hidden lg:block" />
          {t('home-page.learAbout.title_2')}

        </span>
        <span data-aos="fade-up" className="max-w-[585px] text-[32px] leading-[48px] tracking-[-0.5px] text-white text-center">
          {t('home-page.learAbout.sub')}

        </span>
        <img className="absolute inset-0 z-[-1]" src="https://ik.imagekit.io/arsdfirst/spatium/home/elements.png?updatedAt=1706157748407" alt="img-sun" />
        <img className="w-[50%] md:w-[50%] lg:w-w-auto translate-x-1/2 md:translate-x-[unset] absolute left-[50%] bottom-[-100px] md:bottom-[unset] md:left-[60%] lg:left-[45%] z-[-1]" src="https://ik.imagekit.io/arsdfirst/spatium/home/Sun%20(2).svg?updatedAt=1706637329307" alt="img-sun" />
      </div>
    </section>
  )
}

export default LearnAboutUs 