import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import React from 'react'

const HeroOurService = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)
  return (
    <section className="relative pt-[135px]  px-[24px]  border-b border-b-[#989AAE] ">
      <div className="flex justify-center ">
        <div data-aos="zoom-in-up" className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto pt-[64px] md:py-[145px] flex  flex-col md:flex-row md:items-center justify-between">
          <div className='max-w-[583px] flex flex-col gap-6'>
            <span className='text-[32px] leading-[48px] md:text-[40px] md:leading-[56px] tracking-[-1.5px] text-gradient'>
              {t("service-page.hero.titleHighlight")}
            </span>
            <h1 className='text-primary-white text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] font-bold lg:leading-[-88px] lg:tracking-[0.45]'>
              {t("service-page.hero.title")}
            </h1>
          </div>
          <img className='hidden md:block md:absolute md:w-[80%] lg:w-[100%] top-1/2 md:translate-y-[-45%] 
          right-0 md:translate-x-[20%] rtl:right-[unset] rtl:left-0 z-[-1] rtl:md:translate-x-[-30%]' src="https://ik.imagekit.io/arsdfirst/spatium/our-sevices/image%20(42).svg?updatedAt=1706637025501" alt="img-service" />
          <img className='md:hidden -translate-y-[40px]' src="https://ik.imagekit.io/arsdfirst/spatium/our-sevices/image%20(40).svg?updatedAt=1706636683908" alt="img-service-sp" />

        </div>
      </div>
    </section>
  )
}

export default HeroOurService 