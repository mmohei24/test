'use client'
import Flickity from 'react-flickity-component'
import './styles.css'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'

const flickityOptions = {
  // wrapAround: true,
}


export const CoreSoftwareSp = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  const DATA = [
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(1).png?updatedAt=1707211243768",
      styleLine: "flex-row",
      sub: t("service-page.web-development.core.data.item1.subtitle"),
      number: t("service-page.web-development.core.data.item1.number"),
      title: t("service-page.web-development.core.data.item1.title"),
      icon: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(1).png?updatedAt=1706198048996"
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(2).png?updatedAt=1707211243826",
      styleLine: "flex-row-reverse",
      sub: t("service-page.web-development.core.data.item2.subtitle"),
      number: t("service-page.web-development.core.data.item2.number"),
      title: t("service-page.web-development.core.data.item2.title"),
      icon: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201.png?updatedAt=1706198049008"
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(3).png?updatedAt=1707211243756",
      styleLine: "flex-row",
      sub: t("service-page.web-development.core.data.item3.subtitle"),
      number: t("service-page.web-development.core.data.item3.number"),
      title: t("service-page.web-development.core.data.item3.title"),
      icon: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(2).png?updatedAt=1706198049031"
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(4).png?updatedAt=1707211243789",
      styleLine: "flex-row-reverse",
      sub: t("service-page.web-development.core.data.item4.subtitle"),
      number: t("service-page.web-development.core.data.item4.number"),
      title: t("service-page.web-development.core.data.item4.title"),
      icon: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(3).png?updatedAt=1706198049047"
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(5).png?updatedAt=1707211243704",
      styleLine: "flex-row",
      sub: t("service-page.web-development.core.data.item5.subtitle"),
      number: t("service-page.web-development.core.data.item5.number"),
      title: t("service-page.web-development.core.data.item5.title"),
      icon: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(4).png?updatedAt=1706198810005"
    },
  ]


  return (
    <>
      <Flickity options={flickityOptions}>
        {DATA.map(el => (
          <div className={`w-full flex flex-col gap-[32px] ml-[24px]`} key={el.number}>
            <div className='h-[370px] pb-[32px] flex gap-[24px] border-b border-b-primary-white '>
              <span className='pt-[6px] text-[24px] leading-[32px] tracking-[-0.5px] text-violet'>
                {el.number}
              </span>
              <div className='flex flex-col gap-[24px]'>
                <span className='text-[32px] leading-[38px]  font-bold tracking-[0.16px] text-primary-white'>
                  {el.title}
                </span>
                <span className='text-[14px] leading-[20px] text-violet font-light '>
                  {el.sub}
                </span>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <img className='h-[246px]' alt="img-core" />
              <div className='flex items-center w-full justify-center border-b-[2px] border-b-[rgba(255,_255,_255,_0.60)]'>
                <img src={el.icon} alt="img-icon" />
              </div>
            </div>


          </div>
        )) as any}
      </Flickity>
    </>
  )
}
