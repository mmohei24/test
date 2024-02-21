"use client"
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'
import React from 'react'

const OurExperts = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)

  const DATA = [
    {
      number: t("service-page.mobile-development.our-expert.items.item1.number"),
      title: t("service-page.mobile-development.our-expert.items.item1.title"),
      content: t("service-page.mobile-development.our-expert.items.item1.content"),
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(19).svg?updatedAt=1706631450944'
    },
    {
      number: t("service-page.mobile-development.our-expert.items.item2.number"),
      title: t("service-page.mobile-development.our-expert.items.item2.title"),
      content: t("service-page.mobile-development.our-expert.items.item2.content"),
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(20).svg?updatedAt=1706631450990'
    },
    {
      number: t("service-page.mobile-development.our-expert.items.item3.number"),
      title: t("service-page.mobile-development.our-expert.items.item3.title"),
      content: t("service-page.mobile-development.our-expert.items.item3.content"),
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(21).svg?updatedAt=1706631450940'
    },

  ]


  return (
    <section className='pt-[124px] pb-[64px] '>
      <div className="px-6 ">
        <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[48px] ">
          <div className='flex flex-col md:flex-row gap-[32px]'>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col gap-[10px] md:gap-[12px]'>
              <span className='text-gradient-2 w-full md:text-[36px] tracking-[-0.5px ] md:leading-[48px] md:tracking-[-1.5px] lg:text-[40px] lg:leading-[56px] lg:tracking-[1.5px] capitalize'>
                {t("service-page.mobile-development.our-expert.titleHighlight")}
              </span>
              <span className=' text-gradient-3 w-full text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
                {t("service-page.mobile-development.our-expert.title")}
              </span>
            </div>
            <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='max-w-[382px] flex items-end text-[14px] leading-[20px] font-light text-violet'>
              {t("service-page.mobile-development.our-expert.sub")}
            </span>
          </div>
          <span className='w-full h-[1px] bg-[#989AAE]' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">

          </span>
          <div className='flex gap-[48px] flex-1 flex-col'>
            {DATA.map((el, index) => (
              <>
                <div className='flex flex-col md:flex-row gap-[48px] md:gap-[64px] items-center justify-center'>
                  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col gap-[24px] max-w-[479px]'>
                    <span className='text-primary-white text-[32px] leading-[38px] font-bold tracking-[0.16px]'>
                      {el.title}
                    </span>
                    <span className='text-violet text-[14px] leading-[20px] font-light'>
                      {el.content}
                    </span>
                  </div>
                  <img data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" src={el.img} alt="img" />
                </div>
                {index !== DATA.length - 1 ? <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='w-full h-[1px] bg-primary-white'></div> : <></>}
              </>
            ))}


          </div>

        </div>
      </div>

    </section>
  )
}

export default OurExperts 
