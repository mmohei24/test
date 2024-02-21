'use client'
import Flickity from 'react-flickity-component'
import './styles.css'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'

const flickityOptions = {
  // wrapAround: true,
  "groupCells": 2
}


export const ListProjectSp = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  const ITEM = [
    {
      id: 1,
      number: '01/',
      title: t('home-page.working.howWork.item1.title'),
      content: t('home-page.working.howWork.item1.sub'),
      bg: 'bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]'
    },
    {
      id: 2,
      number: '02/',
      title: t('home-page.working.howWork.item2.title'),
      content: t('home-page.working.howWork.item2.sub'),
      bg: 'bg-[linear-gradient(253deg,_#00FB94_13.62%,_#02CACF_90.04%)] [box-shadow:0px_0px_24px_0px_#00FB94]'
    },
    {
      id: 3,
      number: '03/',
      title: t('home-page.working.howWork.item3.title'),
      content: t('home-page.working.howWork.item3.sub'),
      bg: 'bg-[linear-gradient(254deg,_#01F9C7_12.62%,_#01FB95_81.94%)] [box-shadow:0px_0px_24px_0px_#82F09F]'
    },
    {
      id: 4,
      number: '04/',
      title: t('home-page.working.howWork.item4.title'),
      content: t('home-page.working.howWork.item4.sub'),
      bg: 'bg-[linear-gradient(253deg,_#00F6FA_13.62%,_#01F9C7_90.04%)] [box-shadow:0px_0px_24px_0px_#CBE793]'
    },
    {
      id: 5,
      number: '05/',
      title: t('home-page.working.howWork.item5.title'),
      content: t('home-page.working.howWork.item5.sub'),
      bg: 'bg-[linear-gradient(254deg,_#72F7BE_12.62%,_#00F6FA_81.94%)] [box-shadow:0px_0px_24px_0px_#DFBF79]'
    },
    {
      id: 6,
      number: '06/',
      title: t('home-page.working.howWork.item6.title'),
      content: t('home-page.working.howWork.item6.sub'),
      bg: 'bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)] [box-shadow:0px_0px_24px_0px_#DEC37C]'
    },
    {
      id: 7,
      number: '07/',
      title: t('home-page.working.howWork.item7.title'),
      content: t('home-page.working.howWork.item7.sub'),
      bg: 'bg-[linear-gradient(254deg,_#ECC29F_12.62%,_#FBF775_81.94%)] [box-shadow:0px_0px_24px_0px_#F34D4E]'
    },
    {
      id: 8,
      number: '08/',
      title: t('home-page.working.howWork.item8.title'),
      content: t('home-page.working.howWork.item8.sub'),
      bg: 'bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#ECC29F_90.04%)] [box-shadow:0px_0px_24px_0px_#F34766]'
    },
    {
      id: 9,
      number: '09/',
      title: t('home-page.working.howWork.item9.title'),
      content: t('home-page.working.howWork.item9.sub'),
      bg: 'bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)] [box-shadow:0px_0px_24px_0px_#F33B94]'
    },
  ]
  return (
    <>
      <Flickity options={flickityOptions} className='listProject'>
        {ITEM.map(el => (
          <div className="flex w-1/2" key={el.id}>
            {el.id === 1 &&
              <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>
            }
            <div className="flex w-[calc((100%-1px))] flex-col gap-[64px]">
              {/* 01 */}
              <div className="flex flex-col justify-between">
                <div className="h-[455px] px-[18px] py-[24px] flex flex-col gap-[12px]">
                  <div className="">
                    <p className="text-[24px] leading-[32px] tracking-[-0.5px] text-violet">
                      {el.number}
                    </p>
                    <span className="text-primary-white font-bold text-[16px] leading-[20px] lg:leading-[30px] lg:text-[20px]">
                      {el.title}
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-white">

                  </div>
                  <span className="text-violet text-[12px] leading-[18px] lg:text-[14px] font-light lg:leading-[20px]">
                    {el.content}
                  </span>
                </div>
                <div className={`w-full h-[32px] rounded-[34px] ${el.bg}`}>

                </div>
              </div>

            </div>
            <div className="h-auto w-[1px] bg-[linear-gradient(270deg,_#FFF_2.18%,_rgba(255,_255,_255,_0.05)_98.84%,_rgba(255,_255,_255,_0.00)_98.84%)]"></div>

          </div>
        )) as any}
      </Flickity>
    </>
  )
}
