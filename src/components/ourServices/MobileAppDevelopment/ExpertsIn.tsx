import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import { useState } from 'react'

const ExpertsIn = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      sub: t("service-page.mobile-development.expert.items.item1.sub"),
      number: t("service-page.mobile-development.expert.items.item1.number"),
      title: t("service-page.mobile-development.expert.items.item1.title"),
    },
    {
      sub: t("service-page.mobile-development.expert.items.item2.sub"),
      number: t("service-page.mobile-development.expert.items.item2.number"),
      title: t("service-page.mobile-development.expert.items.item2.title"),
    },
    {
      sub: t("service-page.mobile-development.expert.items.item3.sub"),
      number: t("service-page.mobile-development.expert.items.item3.number"),
      title: t("service-page.mobile-development.expert.items.item3.title"),
    },
    {
      sub: t("service-page.mobile-development.expert.items.item4.sub"),
      number: t("service-page.mobile-development.expert.items.item4.number"),
      title: t("service-page.mobile-development.expert.items.item4.title"),
    },


  ]




  return (
    <section className="relative  pt-[135px]">
      <div className='w-full lg:px-[24px] relative rounded-[64px] flex flex-col gap-[120px] py-[64px]
        bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] '>
        <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto  px-[24px] md:px-[40px] md:py-[48px] lg:py-[64px] lg:px-0
        flex flex-col lg:flex-row gap-[32px] lg:justify-between
        ">
          <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='max-w-[315px] text-gradient-4 text-[32px] h-fit tracking-[-0.5px] md:text-[36px] md:leading-[48px]  lg:text-[40px] lg:leading-[56px] capitalize md:tracking-[-1.5px]'>
            {t("service-page.mobile-development.expert.title")}
          </span>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col gap-[48px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 791 2" fill="none" className='hidden lg:block'>
              <path d="M1 1H790" stroke="url(#paint0_linear_89_7939)" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_89_7939" x1="1" y1="2" x2="810.054" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.05" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 866 2" fill="none" className='lg:hidden'>
              <path d="M1 1H865" stroke="url(#paint0_linear_89_25337)" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_89_25337" x1="1" y1="2" x2="886.96" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.05" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 md:grid-cols-2 gap-[32px] lg:max-w-[788px]'>
              {DATA.map(el => (
                <div className='flex col-span-1 flex-col gap-[24px]'>
                  <span className={`text-[40px] leading-[52px] tracking-[0.2px] cursor-pointer hover:text-gradient-4 text-primary-white font-bold`}>
                    {el.title}
                  </span>
                  <span className='text-violet text-[14px] leading-[20px] font-light'>{el.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertsIn 