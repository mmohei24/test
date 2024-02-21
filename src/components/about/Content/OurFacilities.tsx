import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n"


export const OurFacilities = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      number: '40+',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]",
      sub: t('about-us.ourFacilities.success')
    },
    {
      number: '40+',
      styleLine: "rounded-[34px] bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]",
      sub: t('about-us.ourFacilities.happy')
    },
    {
      number: '10+',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]",
      sub: t('about-us.ourFacilities.professionals')
    },
    {
      number: '40+',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]",
      sub: t('about-us.ourFacilities.happy')
    },
  ]

  const EXPERT = [
    {
      content: t('about-us.ourFacilities.item1.content'),
      desc: t('about-us.ourFacilities.item1.desc')
    },
    {
      content: t('about-us.ourFacilities.item2.content'),
      desc: t('about-us.ourFacilities.item2.desc')
    },
    {
      content: t('about-us.ourFacilities.item3.content'),
      desc: t('about-us.ourFacilities.item3.desc')
    },
    {
      content: t('about-us.ourFacilities.item4.content'),
      desc: t('about-us.ourFacilities.item4.desc')
    },
  ]

  return (
    <div className='md:flex flex-col items-center justify-between px-[24px] md:px-[40px] py-[32px] md:py-[64px] text-white bg-gradient'>
      <div className="w-full">
        <div className="relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-[32px] py-[32px] md:py-[64px]">
          {
            DATA.map(el => (
              <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className='col-span-1 flex flex-col gap-[24px]'>
                <div className='flex gap-[24px] items-center'>
                  <p className="text-[72px] leading-[80px] tracking-[0.36px] font-bold">{el.number}</p>
                </div>
                <span className='text-[24px] leading-[32px] tracking-[-0.5px] font-light text-primary-white'>
                  {el.sub}
                </span>
              </div>
            ))
          }
        </div>
        <div className='pb-[32px] md:pb-[64px] lg:mb-[128px] md:my=[48px] lg:border-about-provide'>
          <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="308" height="2" viewBox="0 0 308 2" fill="none">
            <path d="M1 1.00391H307" stroke="url(#paint0_linear_155_16021)" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear_155_16021" x1="1" y1="2.00391" x2="314.777" y2="2.00391" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.05" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="hidden md:block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="946" height="2" viewBox="0 0 946 2" fill="none">
            <path d="M1 0.601562H945" stroke="url(#paint0_linear_160_25873)" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear_160_25873" x1="1" y1="1.60156" x2="968.993" y2="1.60156" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.05" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between flex-1 w-full pt-[32px] gap-[32px]'>
          <p data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500" className='lg:w-[315px] text-gradient text-[32px] md:text-[36px] leading-[48px] tracking-[-1.5px] capitalize'>
            {/* {t('about-page.facilities.title')} */}
            {t('about-us.ourFacilities.hightLight')}
          </p>
          <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500" className="lg:w-[789px]">
            <div className="flex flex-col gap-[32px] md:gap-[64px]">
              {
                EXPERT.map(el => (
                  <p className="text-[32px] md:text-[72px] leading-[36px] md:leading-[80px] tracking-[0.36px] font-bold uppercase hover:text-gradient cursor-pointer">{el.content}</p>
                ))
              }
            </div>
            <div className='my-[32px] md:my-[48px]'>
              <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="308" height="2" viewBox="0 0 308 2" fill="none">
                <path d="M1 1.00391H307" stroke="url(#paint0_linear_155_16021)" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_155_16021" x1="1" y1="2.00391" x2="314.777" y2="2.00391" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.05" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="946" height="2" viewBox="0 0 946 2" fill="none">
                <path d="M1 0.601562H945" stroke="url(#paint0_linear_160_25873)" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_160_25873" x1="1" y1="1.60156" x2="968.993" y2="1.60156" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.05" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="791" height="2" viewBox="0 0 791 2" fill="none">
                <path d="M1 1H790" stroke="url(#paint0_linear_160_3228)" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_160_3228" x1="1" y1="2" x2="810.054" y2="2" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.05" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500" className="flex flex-col gap-[32px] md:grid md:grid-cols-2 pb-[32px] md:pb-[64px] lg:pb-0">
              {
                EXPERT.map(el => (
                  <div className="flex flex-col gap-[24px]">
                    <span className="text-[32px] md:text-[40px] leading-[38px] md:leading-[52px] tracking-[0.36px] font-bold capitalize hover:text-gradient cursor-pointer">{el.content}</span>
                    <span className="text-[14px] leading-[20px] font-light">{el.desc}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
