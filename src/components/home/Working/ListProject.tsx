import { useTranslation } from "@/src/i18n/client"
import { ListProjectSp } from "./ListProjectSp"
import { Locale } from "@/i18n.config"

const ListProject = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  return (
    <div className="w-full md:max-w-4.5xl lg:max-w-7xl lg:py-[64px] mt-[124px] mx-auto">
      <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="flex flex-col gap-[12px] items-center mb-[64px]">
        <h2 className="text-[32px] leading-[48px] lg:text-[36px]  lg:leading-[48px] tracking-[0.5px] md:tracking-[-1.5px]  text-gradient max-w-[585px] text-center">
          {t('home-page.working.howWork.hightLight')}
        </h2>
        <span className="text-gradient-3 lg:text-[72px] font-bold  lg:leading-[80px] lg:tracking-[0.36px]">
          {t('home-page.working.howWork.title')}

        </span>
      </div>
      <div className="w-full hidden md:block">
        <div className="flex">
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            {/* 01 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    01/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item1.title')}

                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item1.sub')}

                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]">

              </div>
            </div>
          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            {/* 02 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    02/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item2.title')}

                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item2.sub')}

                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#00FB94_13.62%,_#02CACF_90.04%)] [box-shadow:0px_0px_24px_0px_#00FB94]">

              </div>
            </div>

          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px] md:pt-[192px]">
            {/* 03 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    03/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item3.title')}

                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item3.sub')}
                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(254deg,_#01F9C7_12.62%,_#01FB95_81.94%)] [box-shadow:0px_0px_24px_0px_#82F09F]">

              </div>
            </div>


          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px] md:pt-[192px]">
            {/* 04 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    04/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item4.title')}

                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item4.sub')}
                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#00F6FA_13.62%,_#01F9C7_90.04%)] [box-shadow:0px_0px_24px_0px_#CBE793]">

              </div>
            </div>



          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
        </div>

        <div className="flex -translate-y-[100px]">
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            {/* 05 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    05/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item5.title')}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item5.sub')}                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(254deg,_#72F7BE_12.62%,_#00F6FA_81.94%)] [box-shadow:0px_0px_24px_0px_#DFBF79]">

              </div>
            </div>


          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            {/* 06 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    06/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item6.title')}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item6.sub')}                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)] [box-shadow:0px_0px_24px_0px_#DEC37C]">

              </div>
            </div>


          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px] pt-[192px]">
          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px] pt-[192px]">

          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
        </div>

        <div className="flex -translate-y-[100px]">
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            {/* space */}


          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            {/* 07 */}
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    07/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item7.title')}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item7.sub')}                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px]  bg-[linear-gradient(254deg,_#ECC29F_12.62%,_#FBF775_81.94%)] [box-shadow:0px_0px_24px_0px_#F34D4E]">

              </div>
            </div>


          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    08/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item8.title')}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item4.sub')}
                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#ECC29F_90.04%)] [box-shadow:0px_0px_24px_0px_#F34766]">

              </div>
            </div>

          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
          <div className="flex w-[calc((100%-5px)/4)] flex-col gap-[64px]">
            <div className="flex flex-col gap-[24px]">
              <div className="min-h-[320px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                <div className="">
                  <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                    09/
                  </p>
                  <span className="text-primary-white font-bold text-[16px] leading-[20px] md:leading-[30px] md:text-[20px]">
                    {t('home-page.working.howWork.item9.title')}
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white">

                </div>
                <span className="text-violet text-[12px] leading-[18px] md:text-[14px] font-light md:leading-[20px]">
                  {t('home-page.working.howWork.item9.sub')}
                </span>
              </div>
              <div className="w-full h-[32px] rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)] [box-shadow:0px_0px_24px_0px_#F33B94]">

              </div>
            </div>

          </div>
          <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
        </div>

      </div>
      <div className="md:hidden">

        <ListProjectSp lang={lang} />
      </div>
    </div>
  )
}

export default ListProject