'use client'
import { Locale } from '@/i18n.config';
import { useTranslation } from '@/src/i18n/client';
import ListProject from './ListProject';
import { SliderUtil } from './SlideWork';




const Working = ({ lang }: { lang: Locale }) => {

  const { t } = useTranslation(lang)

  return (
    <section className=' working-home relative px-[24px] rounded-[64px] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] bg-[#11142B] py-[64px]'>
      <div className="w-full md:max-w-4.5xl lg:max-w-7xl   mx-auto flex flex-col gap-[32px] ">
        <div className='w-full flex flex-col gap-[32px] md:gap-0 md:flex-row md:items-end justify-between'>
          <div data-aos="fade-up" className='flex flex-col gap-[10px] md:gap-[12px]'>
            <span className='text-gradient-2 w-full text-[32px] leading-[48px] tracking-[-0.5px] md:text-[36px] tracking-[-0.5px ] md:leading-[48px] md:tracking-[-1.5px] lg:text-[40px] lg:leading-[56px] lg:tracking-[1.5px] capitalize'>
              {t('home-page.working.project.hightLight')}
            </span>
            <span className=' text-gradient-3 w-full text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
              {t('home-page.working.project.title')}

            </span>
          </div>
          <button data-aos="fade-up" className='px-[28px] w-fit md:w-auto text-white py-[16px] gap-[12px] flex items-center justify-center uppercase font-bold text-[18px] leading-[24px]
            rounded-[44px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]'>
            {t('home-page.working.project.btnText')}
          </button>
        </div>
        <span className='w-full h-[1px] bg-[#989AAE]'>
        </span>
        /</div>
      <div className='mt-[30px] lg:px-0'>
        <SliderUtil lang={lang} />

      </div>
      <ListProject lang={lang} />
    </section>
  )
}

export default Working