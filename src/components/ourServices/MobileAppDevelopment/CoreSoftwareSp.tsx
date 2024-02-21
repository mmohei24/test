'use client'
import Flickity from 'react-flickity-component'
import './styles.css'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'

export const CoreSoftwareSp = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)


  const DATA = [
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/image.png?updatedAt=1707211521667",
      styleLine: "flex-row",
      sub: t("service-page.mobile-development.core.items.item1.sub"),
      number: t("service-page.mobile-development.core.items.item1.number"),
      title: t("service-page.mobile-development.core.items.item1.title"),
      icon: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(1).png?updatedAt=1706198048996'
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/image%20(1).png?updatedAt=1707211521790",
      styleLine: "flex-row-reverse",
      sub: t("service-page.mobile-development.core.items.item2.sub"),
      number: t("service-page.mobile-development.core.items.item2.number"),
      title: t("service-page.mobile-development.core.items.item2.title"),
      icon: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201.png?updatedAt=1706198049008'
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/image%20(2).png?updatedAt=1707211521745',
      styleLine: "flex-row",
      sub: t("service-page.mobile-development.core.items.item3.sub"),
      number: t("service-page.mobile-development.core.items.item3.number"),
      title: t("service-page.mobile-development.core.items.item3.title"),
      icon: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(2).png?updatedAt=1706198049031'
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/image%20(3).png?updatedAt=1707211521677",
      styleLine: "flex-row-reverse",
      sub: t("service-page.mobile-development.core.items.item4.sub"),
      number: t("service-page.mobile-development.core.items.item4.number"),
      title: t("service-page.mobile-development.core.items.item4.title"),
      icon: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/Polygon%201%20(3).png?updatedAt=1706198048283"
    },

  ]

  return (
    <>
      <Flickity>
        {DATA.map(el => (
          <div className={`w-full flex flex-col gap-[32px] ml-[24px]`} key={el.number}>
            <div className='h-[250px] pb-[32px] flex gap-[24px] border-b border-b-primary-white '>
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
              <img className='h-[246px]' src={el.img} alt="img-core" />
              <div className='flex w-full items-center justify-center border-b-[2px] border-b-[rgba(255,_255,_255,_0.60)]'>
                <img src={el.icon} alt="img-icon" />
              </div>
            </div>


          </div>
        )) as any}
      </Flickity>
    </>
  )
}
