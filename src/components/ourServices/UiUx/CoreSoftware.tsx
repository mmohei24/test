import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import { DesignStageSp } from './CoreSoftwareSp'

const Line = () => (<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 344 2" fill="none">
  <path d="M0.5 1H343.5" stroke="url(#paint0_linear_89_15935)" strokeLinecap="round" />
  <defs>
    <linearGradient id="paint0_linear_89_15935" x1="0.5" y1="2" x2="352.218" y2="2" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="white" stopOpacity="0.05" />
      <stop offset="1" stopColor="white" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>)


const CoreSoftware = async ({ lang }: { lang: Locale }) => {

  const { t } = await useTranslation(lang)

  return (
    <section className="relative  pt-[135px]  px-[24px]  md:px-0  rounded-[36px] md:rounded-[64px]  bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]">
      <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto">
        <div className='w-full relative flex flex-col gap-[120px]
        md:px-[40px] md:py-[64px] lg:px-[103px] lg:py-[128px]'>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center gap-[12 px]'>
            <span className='text-gradient text-[40px] leading-[56px] tracking-[-1.5px]'>
              {t("service-page.uiux.core.titleHighlight")}
            </span>
            <span className='text-gradient-3 lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold text-center'>
              {t("service-page.uiux.core.title")}
            </span>
          </div>

          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='hidden md:block '>
            <div className='grid grid-cols-3'>
              <div className='col-span-1 flex'>
                <div className="flex flex-col gap-[66px] 
                w-full relative h-fit
                after:content-[''] after:absolute after:left-[0] after:bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)] after:w-px after:h-full">

                  <div className='flex  flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px] px-[18px] py-[24px] md:min-h-[350px] lg:min-h-[290px]'>
                      <div>
                        <p className='text-[23px] leading-[32px] tracking-[-0.5px] text-violet'>{t("service-page.uiux.core.items.item1.number")}</p>
                        <h3 className='text-[20px] leading-[30px] font-bold text-primary-white'>{t("service-page.uiux.core.items.item1.title")}</h3>
                      </div>
                      <Line />
                      <span className='text-[14px] leading-[20px]  text-violet font-light'>
                        {t("service-page.uiux.core.items.item1.content")}
                      </span>
                    </div>
                    <div className='h-[32px] rounded-[34px] bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]'>

                    </div>
                  </div>
                  <div className='flex  flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px] px-[18px] py-[24px] md:min-h-[350px] lg:min-h-[290px]'>
                      <div>
                        <p className='text-[23px] leading-[32px] tracking-[-0.5px] text-violet'>{t("service-page.uiux.core.items.item4.number")}</p>
                        <h3 className='text-[20px] leading-[30px] font-bold text-primary-white'>{t("service-page.uiux.core.items.item4.title")}</h3>
                      </div>
                      <Line />
                      <span className='text-[14px] leading-[20px]  text-violet font-light'>
                        {t("service-page.uiux.core.items.item4.content")}
                      </span>
                    </div>
                    <div className='h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)] [box-shadow:0px_0px_24px_0px_#F33B94]'>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex pt-[98px] relative
              after:content-[''] after:absolute after:left-[0] after:top-0 after:bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)] after:w-px after:h-full">
                <div className="flex flex-col gap-[66px] w-full relative
                after:content-[''] after:absolute after:right-[0] after:bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)] after:w-px after:h-full">

                  <div className='flex  flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px] px-[18px] py-[24px] md:min-h-[350px] lg:min-h-[290px]'>
                      <div>
                        <p className='text-[23px] leading-[32px] tracking-[-0.5px] text-violet'>{t("service-page.uiux.core.items.item2.number")}</p>
                        <h3 className='text-[20px] leading-[30px] font-bold text-primary-white'>
                          {t("service-page.uiux.core.items.item2.title")}
                        </h3>
                      </div>
                      <Line />
                      <span className='text-[14px] leading-[20px]  text-violet font-light'>
                        {t("service-page.uiux.core.items.item2.content")}
                      </span>
                    </div>
                    <div className='h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#00FB94_13.62%,_#02CACF_90.04%)] [box-shadow:0px_0px_24px_0px_#00FB94]'>

                    </div>
                  </div>
                  <div className='flex  flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px] px-[18px] py-[24px] md:min-h-[350px] lg:min-h-[290px]'>
                      <div>
                        <p className='text-[23px] leading-[32px] tracking-[-0.5px] text-violet'>{t("service-page.uiux.core.items.item5.number")}</p>
                        <h3 className='text-[20px] leading-[30px] font-bold text-primary-white'>{t("service-page.uiux.core.items.item5.title")}</h3>
                      </div>
                      <Line />
                      <span className='text-[14px] leading-[20px]  text-violet font-light'>
                        {t("service-page.uiux.core.items.item5.content")}
                      </span>
                    </div>
                    <div className='h-[32px] rounded-[34px] bg-[linear-gradient(254deg,_#01F9C7_12.62%,_#01FB95_81.94%)] [box-shadow:0px_0px_24px_0px_#82F09F]'>

                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-1 flex items-center
              '>
                <div className='w-[1px] h-auto bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]'>

                </div>
                <div className="flex flex-col gap-[66px] w-full relative
                after:content-[''] after:absolute after:right-[0] after:bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)] after:w-px after:h-full">

                  <div className='flex  flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px] px-[18px] py-[24px] md:min-h-[350px] lg:min-h-[290px]'>
                      <div>
                        <p className='text-[23px] leading-[32px] tracking-[-0.5px] text-violet'>{t("service-page.uiux.core.items.item3.number")}</p>
                        <h3 className='text-[20px] leading-[30px] font-bold text-primary-white'>
                          {t("service-page.uiux.core.items.item3.title")}
                        </h3>
                      </div>
                      <Line />
                      <span className='text-[14px] leading-[20px]  text-violet font-light'>
                        {t("service-page.uiux.core.items.item3.content")}
                      </span>
                    </div>
                    <div className='h-[32px] rounded-[34px]  bg-[linear-gradient(253deg,_#00F6FA_13.62%,_#01F9C7_90.04%)] [box-shadow:0px_0px_24px_0px_#CBE793]'>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className='md:hidden pb-[80px]' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <DesignStageSp lang={lang} />
          </div>
        </div>
      </div>
    </section >
  )
}

export default CoreSoftware 