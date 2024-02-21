import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import React from 'react'

export const OurMission = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      number: '01/',
      styleLine: "rounded-[34px] bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]",
      title: t('about-us.ourMission.item1.title'),
      sub: t('about-us.ourMission.item1.sub')
    },
    {
      number: '02/',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]  [box-shadow:0px_0px_24px_0px_#DEC37C]",
      title: t('about-us.ourMission.item2.title'),
      sub: t('about-us.ourMission.item2.sub')
    }
    ,
    {
      number: '03/',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]  [box-shadow:0px_0px_24px_0px_#F33B94]",
      title: t('about-us.ourMission.item3.title'),
      sub: t('about-us.ourMission.item1.sub'),
    }
  ]

  return (
    <section className="relative pt-[2rem] md:pt-[48px] lg:pt-[64px] px-[24px] lg:px-[40px]">
      <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-center mb-[3rem] md:mb-[64px]">
        <p className="text-gradient text-[2rem] md:text-[36px] lg:text-[40px]
         leading-[48px] md:-leading-[56px] tracking-[-0.5px] md:tracking-[-1.5px] 
         font-Space_Mono mb-[10px] md:mb-[12px] capitalize">
          {t('about-us.ourMission.hightLight')}
        </p>
        <p className="text-gradient-3 text-[48px] md:text-[72px] 
        leading-[56px] md:leading-[80px] tracking-[0.36px] font-bold">
          {t('about-us.ourMission.title')}
        </p>
      </div>
      <div className="flex justify-center ">
        <div data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500" className=" relative w-full md:max-w-4xl 
        mx-auto grid grid-cols-1 md:grid-cols-3 
        gap-[32px] md:gap-0  pb-[64px] lg:pb-[120px]">
          {
            DATA.map((el, index) => (
              <div className={`${index === 1 ? 'md:mt-[85px]' : ''} 
              col-span-1 flex flex-col gap-[24px] md:gap-0 text-primary-white`}>
                <div className='relative'>
                  <div className='py-[24px] px-[18px]'>
                    <svg className={`${index === 0 ? 'absolute left-0 bottom-0 hidden md:block' : 'hidden'}`} width="1" height="348" viewBox="0 0 1 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.5" y1="-5.96244e-09" x2="0.500004" y2="348" stroke="url(#paint0_linear_2_3580)" />
                      <defs>
                        <linearGradient id="paint0_linear_2_3580" x1="0.49457" y1="340.402" x2="0.238195" y2="4.05185" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg className={`${index === 0 ? 'absolute right-0 bottom-[-85px] hidden md:block' : 'hidden'}`} width="1" height="433" viewBox="0 0 1 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.5" y1="433" x2="0.499978" y2="1.85923e-08" stroke="url(#paint0_linear_2_3579)" />
                      <defs>
                        <linearGradient id="paint0_linear_2_3579" x1="0.505412" y1="9.45416" x2="0.902333" y2="427.958" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div>
                      <p className='text-[24px] leading-[32px] tracking-[-0.5px]'>{el.number}</p>
                      <p className='h-[60px] flex items-center text-[1rem] md:text-[20px] leading-[20px] md:leading-[30px] font-bold'>{el.title}/</p>
                    </div>
                    <div className='my-[12px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="258" height="2" viewBox="0 0 258 2" fill="none">
                        <path d="M1 1H257" stroke="url(#paint0_linear_187_4060)" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="paint0_linear_187_4060" x1="1" y1="2" x2="263.507" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0.05" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className='md:h-[124px] text-violet text-[14px] leading-[18px] md:leading-[20px] font-light'>
                      {el.sub}
                    </div>

                    <svg className={`${index === 1 ? 'absolute right-0 bottom-0 hidden md:block' : 'hidden'}`} width="1" height="433" viewBox="0 0 1 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.5" y1="433" x2="0.499978" y2="1.85923e-08" stroke="url(#paint0_linear_2_3579)" />
                      <defs>
                        <linearGradient id="paint0_linear_2_3579" x1="0.505412" y1="9.45416" x2="0.902333" y2="427.958" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg className={`${index === 2 ? 'absolute right-0 bottom-0 hidden md:block' : 'hidden'}`} width="1" height="348" viewBox="0 0 1 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.5" y1="-5.96244e-09" x2="0.500004" y2="348" stroke="url(#paint0_linear_2_3580)" />
                      <defs>
                        <linearGradient id="paint0_linear_2_3580" x1="0.49457" y1="340.402" x2="0.238195" y2="4.05185" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0.05" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className='flex gap-[32px] items-center'>
                    <div className={`h-[24px] flex-1 ${el.styleLine}`}></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
