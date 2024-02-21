'use client'
import { Locale } from "@/i18n.config";
import { IconStar } from "./IconStar";
import { useTranslation } from "../i18n/client";



export const NavHero = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)

  return (
    <div className="w-full relative">
      <div className="absolute top-[30px] w-full h-[1px] bg-white z-[-1]"></div>
      <div className="flex justify-between md:max-w-4.5xl lg:max-w-7xl mx-auto px-[24px] ">
        <div className="px-[38px] py-[28px] h-[214px] w-[214px] flex items-center justify-center flex-col gap-[8px] 
        rounded-full border border-white border-solid
        bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]
        " data-aos="zoom-in-up">
          <IconStar />
          <span className="text-[36px] font-bold leading-[110%] text-primary-white text-center">
            {t('home-page.hero.nav.rounded')}
          </span>
        </div>
        <div className="hidden md:flex justify-between items-start self-stretch flex-1 pt-[60px] max-w-[789px]">
          <span data-aos="zoom-in-up" className="text-[14px] font-bold leading-[110%] text-violet text-center">
            {t('home-page.hero.nav.web')}
          </span>
          <span className="w-[1px] text-[14px] text-transparent font-bold leading-[110%]  bg-white">*</span>

          <span data-aos="zoom-in-up" className="text-[14px] font-bold leading-[110%] text-violet text-center">
            {t('home-page.hero.nav.app')}
          </span>
          <span className="w-[1px] text-[14px] text-transparent font-bold leading-[110%]  bg-white">*</span>

          <span data-aos="zoom-in-up" className="text-[14px] font-bold leading-[110%] text-violet text-center">
            {t('home-page.hero.nav.test')}
          </span>
          <span className="w-[1px] text-[14px] text-transparent font-bold leading-[110%]  bg-white">*</span>

          <span data-aos="zoom-in-up" className="text-[14px] font-bold leading-[110%] text-violet text-center">
            {t('home-page.hero.nav.uiUx')}
          </span>
        </div>
      </div>

    </div>
  )
}