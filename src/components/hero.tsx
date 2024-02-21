
import { Locale } from "@/i18n.config";
import { useTranslation } from "../i18n";
import { NavHero } from "./navHero";

export default async function Hero({ lang }: { lang: Locale }) {
  const { t } = await useTranslation(lang);
  return (
    <section className="relative ">
      <img className="hidden md:block absolute top-0 right-0 z-[-1]" src="https://ik.imagekit.io/arsdfirst/spatium/Ellipse%2021%20(2).png?updatedAt=1706438984757" alt="img-bg" />
      <div className="w-full h-[10px] relative md:max-w-4.5xl lg::max-w-7xl mx-auto">
        <img className="w-[40%] md:w-[30%] lg:w-auto absolute right-0 top-[50px] z-[-1]
        rtl:left-0 rtl:right-[unset]
        " src="https://ik.imagekit.io/arsdfirst/spatium/home/planet.svg?updatedAt=1706637185203" alt="img-sun" />

      </div>
      <div className=" pt-[135px]  flex justify-center ">
        <div className="w-full  flex flex-col gap-[36px] pb-[70] md:pb-0 md:py-[70px]  ">
          <div className="flex  flex-col md:flex-row gap-[32px] 
          md:items-end md:max-w-4.5xl lg:max-w-7xl  mx-auto px-[24px] xl:px-0">
            <span className="text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] font-bold lg:leading-[88px] md:max-w-[619px] lg:max-w-[769px] text-white lg:tracking-[0.45px]"
              data-aos="zoom-in-up">
              {t('home-page.hero.title')}
              <span className="text-springGreen">  {t('home-page.hero.titleHightLight')}</span>
            </span>
            <span className="text-[20px] leading-[30px] text-violet  max-w-[379px] pb-[5px]"
              data-aos="zoom-in-up">
              {t('home-page.hero.desc')}
            </span>
          </div>
          <NavHero lang={lang} />
        </div>
      </div>
    </section>
  )
}