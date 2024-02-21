'use client'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import React from 'react'
import { Map } from './Map'
import { InnovationListSp } from './InnovationListSp'

export const Innovation = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  return (
    <div className='flex flex-col gap-[64px] max-w-7xl mt-[64px] lg:mt-[59px] mx-[auto] lg:h-[465px] px-[24px] '>
      <div className='text-white text-center' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <p className='text-gradient text-[32px] leading-[48px] 
        tracking-[-0.5px] mb-[10px] capitalize'>{t('about-us.innovation.hightLight')}</p>
        <p className='text-gradient-3 text-[48px] leading-[56px] 
        tracking-[0.24px] font-bold '>{t('about-us.innovation.title')}</p>
      </div>
      <Map />
      <div className='md:hidden' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <InnovationListSp lang={lang} />
      </div>
    </div>
  )
}
