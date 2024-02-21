"use client"
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { useState } from 'react'



const Service = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  const [active, setActive] = useState('01/')
  const onChangeActive = (value: string) => {
    setActive(value)
  }

  const DATA = [
    {
      key: '01/',
      title: t('home-page.services.item1.title'),
      sub: t('home-page.services.item1.sub'),
      img: "https://ik.imagekit.io/arsdfirst/spatium/home/image%20(43).svg?updatedAt=1706637185362",
      url: '/our-services/web-development'
    },
    {
      key: '02/',
      title: t('home-page.services.item2.title'),
      sub: t('home-page.services.item2.sub'),
      img: "https://ik.imagekit.io/arsdfirst/spatium/home/image%20(44).svg?updatedAt=1706637185621",
      url: '/our-services/mobile-app-development'

    },
    {
      key: '03/',
      title: t('home-page.services.item3.title'),
      sub: t('home-page.services.item3.sub'),
      img: "https://ik.imagekit.io/arsdfirst/spatium/home/image%20(45).svg?updatedAt=1706637185438",
      url: '/our-services/testing'

    },
    {
      key: '04/',
      title: t('home-page.services.item4.title'),
      sub: t('home-page.services.item4.sub'),
      img: "https://ik.imagekit.io/arsdfirst/spatium/home/image%20(46).svg?updatedAt=1706637185428",
      url: '/our-services/ui-ux'

    },
  ]
  return (
    <section className='pt-[124px] pb-[64px] '>
      <div className="px-6 ">
        <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[32px] ">
          <div data-aos="fade-up" className='flex flex-col gap-[10px] md:gap-[12px]'>
            <span className='text-gradient-2 w-full md:text-[36px] tracking-[-0.5px ] md:leading-[48px] md:tracking-[-1.5px] lg:text-[40px] lg:leading-[56px] lg:tracking-[1.5px] capitalize'>
              {t('home-page.services.hightLight')}
            </span>
            <span className=' text-gradient-3 w-full text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
              {t('home-page.services.title')}

            </span>
          </div>
          <span className='w-full h-[1px] bg-[#989AAE]'>

          </span>
          <div className='flex gap-[32px] flex-col md:flex-row items-center'>
            <div data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500" className='h-fit md:max-w-[40vw] lg:w-[35%] lg:max-w-[456px] '>
              {DATA.map(el => (
                <Transition
                  show={active === el.key}
                  enter="transition-opacity duration-75"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  key={el.key}
                >
                  <div data-aos="flip-left" className={`${active === el.key ? "" : 'hidden'} rounded-[40px]  bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]`}>

                    <img width={420} height={605} loading='lazy' key={el.key} className={`w-full `}
                      src={el.img} alt="img-service-1" />
                  </div>
                </Transition>
              ))}
            </div>
            <div data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500" className='flex gap-[48px] flex-1 flex-col' >
              {DATA.map(el => (
                <React.Fragment key={el.key}>

                  <div className='flex gap-[36px] '>
                    <span onClick={() => onChangeActive(el.key)}
                      className='cursor-pointer text-violet text-[24px] leading-[38px] lg:leading-[52px] tracking-[0.5px]' >
                      {el.key}
                    </span>
                    <div className='flex-1 flex flex-col gap-[24px]'>
                      <span onClick={() => onChangeActive(el.key)} className='cursor-pointer text-[32px] md:tracking-[0.16px] lg:text-[40px] font-bold leading-[38px] lg:leading-[52px]  lg:tracking-[0.2px] text-primary-white'>
                        {el.title}

                      </span>
                      <div className={`flex flex-col gap-[24px] [transition:all_ease_0.3s] overflow-hidden ${active === el.key ? 'h-auto mt-0' : 'h-0 mt-[-24px]'} `}>
                        <span className='text-violet text-[16px] font-light leading-[20px]'>
                          {el.sub}

                        </span>
                        <div className='flex gap-[8px] items-center'>
                          <Link href={`/${lang}/${el.url}`} className='uppercase text-[16px] leading-6 font-bold text-white'
                            title={el.title}
                            aria-label={el.title}
                          >
                            <span className='absolute w-px h-px p-0 -m-[1px] overflow-hidden [clip:rect(0,_0,_0,_0)] whitespace-nowrap border-[0]'>
                              {el.title}
                            </span>
                            {t('home-page.learnMore')}
                          </Link>
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M22.5 13.5L13.5 22.5M22.5 13.5V22.5M22.5 13.5H13.5M4.5 18C4.5 19.7728 4.84919 21.5283 5.52763 23.1662C6.20606 24.8041 7.20047 26.2923 8.45406 27.5459C9.70765 28.7995 11.1959 29.7939 12.8338 30.4724C14.4717 31.1508 16.2272 31.5 18 31.5C19.7728 31.5 21.5283 31.1508 23.1662 30.4724C24.8041 29.7939 26.2923 28.7995 27.5459 27.5459C28.7995 26.2923 29.7939 24.8041 30.4724 23.1662C31.1508 21.5283 31.5 19.7728 31.5 18C31.5 14.4196 30.0777 10.9858 27.5459 8.45406C25.0142 5.92232 21.5804 4.5 18 4.5C14.4196 4.5 10.9858 5.92232 8.45406 8.45406C5.92232 10.9858 4.5 14.4196 4.5 18Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
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

export default Service 