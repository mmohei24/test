
"use client"
import Flickity from "react-flickity-component"
import './styles.css'
import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n/client"

export const DesignStageSp = ({ lang }: { lang: Locale }) => {

  const { t } = useTranslation(lang)

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

  const DATA = [
    {
      sub: t("service-page.uiux.core.items.item1.content"),
      number: t("service-page.uiux.core.items.item1.number"),
      title: t("service-page.uiux.core.items.item1.title"),
      style: "bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]"
    },
    {
      sub: t("service-page.uiux.core.items.item2.content"),
      number: t("service-page.uiux.core.items.item2.number"),
      title: t("service-page.uiux.core.items.item2.title"),
      style: " bg-[linear-gradient(253deg,_#00FB94_13.62%,_#02CACF_90.04%)] [box-shadow:0px_0px_24px_0px_#00FB94]"
    },
    {
      sub: t("service-page.uiux.core.items.item3.content"),
      number: t("service-page.uiux.core.items.item3.number"),
      title: t("service-page.uiux.core.items.item3.title"),
      style: "rounded-[34px] bg-[linear-gradient(254deg,_#01F9C7_12.62%,_#01FB95_81.94%)] [box-shadow:0px_0px_24px_0px_#82F09F]"
    },
    {
      sub: t("service-page.uiux.core.items.item4.content"),
      number: t("service-page.uiux.core.items.item4.number"),
      title: t("service-page.uiux.core.items.item4.title"),
      style: "rounded-[34px] bg-[linear-gradient(253deg,_#00F6FA_13.62%,_#01F9C7_90.04%)] [box-shadow:0px_0px_24px_0px_#CBE793]"
    },
    {
      sub: t("service-page.uiux.core.items.item5.content"),
      number: t("service-page.uiux.core.items.item5.number"),
      title: t("service-page.uiux.core.items.item5.title"),
      style: "rounded-[34px] bg-[linear-gradient(254deg,_#72F7BE_12.62%,_#00F6FA_81.94%)] [box-shadow:0px_0px_24px_0px_#DFBF79]"
    },

  ]

  const flickityOptions = {
    initialIndex: 2,
    prevNextButtons: false,
  }

  return (
    <>
      <Flickity>
        {
          DATA.map(el => (
            <div className={`w-[80%] outline-none flex  flex-col gap-[24px] border-r border-r-[#fff] ${el.number === '01/' ? "border-l border-l-[#fff]" : ''}`} key={el.title}>
              <div className='flex flex-col gap-[12px] px-[18px] py-[24px] h-[400px]' >
                <div>
                  <p className='text-[23px] leading-[32px] tracking-[-0.5px] text-violet'>{el.number}</p>
                  <h3 className='text-[20px] leading-[30px] font-bold text-primary-white'>
                    {el.title}
                  </h3>
                </div>
                <Line />
                <span className='text-[14px] leading-[20px]  text-violet font-light'>
                  {el.sub}
                </span>
              </div>
              <div className={`h-[32px] rounded-[34px] ${el.style}`}>

              </div>
            </div>
          ))
        }

      </Flickity>

    </>
  )
}
