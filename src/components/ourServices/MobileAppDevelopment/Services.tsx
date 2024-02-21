"use client"
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'
import { Transition } from '@headlessui/react'
import React, { useState } from 'react'

const ServiceMobileAppDevelopment = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)

  const DATA = [
    {
      number: t("service-page.mobile-development.service.items.item1.number"),
      title: t("service-page.mobile-development.service.items.item1.title"),
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(11).svg?updatedAt=1706631455081"
    },
    {
      number: t("service-page.mobile-development.service.items.item2.number"),
      title: t("service-page.mobile-development.service.items.item2.title"),
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(12).svg?updatedAt=1706631454368'
    },
    {
      number: t("service-page.mobile-development.service.items.item3.number"),
      title: t("service-page.mobile-development.service.items.item3.title"),
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(13).svg?updatedAt=1706631451247"
    },
    {
      number: t("service-page.mobile-development.service.items.item4.number"),
      title: t("service-page.mobile-development.service.items.item4.title"),
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(14).svg?updatedAt=1706631451088"
    },
    {
      number: t("service-page.mobile-development.service.items.item5.number"),
      title: t("service-page.mobile-development.service.items.item5.title"),
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(15).svg?updatedAt=1706631451094"
    },
  ]

  const [active, setActive] = useState('01/')



  const onChangeActive = (value: string) => {
    setActive(value)
  }
  return (
    <section className='pt-[124px] pb-[64px] '>
      <div className="px-6">
        <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[32px] ">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col md:flex-row gap-[32px]'>
            <div className='flex flex-col gap-[10px] md:gap-[12px]'>
              <span className='text-gradient-2 w-full text-[32px] leading-[48px] md:text-[36px] tracking-[-0.5px ] md:leading-[48px] md:tracking-[-1.5px] lg:text-[40px] lg:leading-[56px] lg:tracking-[1.5px] capitalize'>
                {t("service-page.mobile-development.service.titleHighlight")}
              </span>
              <span className=' text-gradient-3 w-full text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
                {t("service-page.mobile-development.service.title")}
              </span>
            </div>

          </div>
          <span className='w-full h-[1px] bg-[#989AAE]'>

          </span>
          <div className='flex gap-[32px] flex-col md:flex-row md:items-center md:justify-between'>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='h-fit md:max-w-[40vw] lg:w-[38%] lg:max-w-[481px] '>
              {DATA.map(el => (
                <Transition
                  show={active === el.number}
                  enter="transition-opacity duration-75"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  key={el.number}
                >
                  <div data-aos="flip-left" className={`${active === el.number ? "" : 'hidden'} rounded-[40px]  bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]`}>

                    {/* <img key={el.key} className={`w-full `}
                     src={el.img} alt="img-service-1" /> */}
                    <img className={`w-full ${el.number === active ? 'block' : 'hidden'}`} src={el.img} alt="img-service-1" key={el.number} />
                  </div>
                </Transition>
              ))}
            </div>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex gap-[48px] flex-1 flex-col md:max-w-[687px]'>
              {DATA.map(el => (
                <React.Fragment key={el.number}>
                  <div className='flex gap-[36px] '>
                    <span onClick={() => onChangeActive(el.number)} className='cursor-pointer text-violet text-[24px] leading-[38px] lg:leading-[52px] tracking-[0.5px]' >
                      {el.number}
                    </span>
                    <div className='flex-1 flex flex-col gap-[24px]'>
                      <span onClick={() => onChangeActive(el.number)} className={`cursor-pointer 
                      text-[32px] md:tracking-[0.16px] lg:text-[40px] font-bold leading-[38px] 
                      lg:leading-[52px]  lg:tracking-[0.2px] ${active === el.number ? 'text-primary-white' : 'text-[#BABBC8]'}`}>
                        {el.title}
                      </span>

                    </div>
                  </div>
                  <div className='w-full h-[1px] bg-primary-white'></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ServiceMobileAppDevelopment  