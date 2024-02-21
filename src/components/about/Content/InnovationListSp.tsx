'use client'
import Flickity from 'react-flickity-component'
import './styles.css'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'

const flickityOptions = {
  // wrapAround: true,
  "groupCells": 2
}

const Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const InnovationListSp = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  return (
    <>
      <Flickity options={flickityOptions} className='listProject'>
        {Items.map((_, index) => (
          <div className="flex w-[calc(50%-12px)] mr-[24px] flex-col gap-[8px] p-[12px] rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]" key={index}>
            <div className='flex gap-[8px] items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M7.50065 10.1313C7.50065 10.7943 7.76404 11.4302 8.23288 11.899C8.70173 12.3679 9.33761 12.6313 10.0007 12.6313C10.6637 12.6313 11.2996 12.3679 11.7684 11.899C12.2373 11.4302 12.5007 10.7943 12.5007 10.1313C12.5007 9.46823 12.2373 8.83234 11.7684 8.3635C11.2996 7.89466 10.6637 7.63127 10.0007 7.63127C9.33761 7.63127 8.70173 7.89466 8.23288 8.3635C7.76404 8.83234 7.50065 9.46823 7.50065 10.1313Z" fill="#4C5071" />
                <path d="M14.7148 14.8454L11.179 18.3813C10.8665 18.6935 10.4428 18.8688 10.0011 18.8688C9.55933 18.8688 9.13567 18.6935 8.82315 18.3813L5.28649 14.8454C4.35417 13.9131 3.71927 12.7252 3.46206 11.432C3.20485 10.1388 3.3369 8.79836 3.84149 7.58021C4.34608 6.36205 5.20057 5.32088 6.29689 4.58836C7.39321 3.85583 8.68213 3.46484 10.0007 3.46484C11.3192 3.46484 12.6081 3.85583 13.7044 4.58836C14.8007 5.32088 15.6552 6.36205 16.1598 7.58021C16.6644 8.79836 16.7965 10.1388 16.5392 11.432C16.282 12.7252 15.6471 13.9131 14.7148 14.8454Z" fill="#4C5071" />
                <path d="M7.50065 10.1313C7.50065 10.7943 7.76404 11.4302 8.23288 11.899C8.70173 12.3679 9.33761 12.6313 10.0007 12.6313C10.6637 12.6313 11.2996 12.3679 11.7684 11.899C12.2373 11.4302 12.5007 10.7943 12.5007 10.1313C12.5007 9.46823 12.2373 8.83234 11.7684 8.3635C11.2996 7.89466 10.6637 7.63127 10.0007 7.63127C9.33761 7.63127 8.70173 7.89466 8.23288 8.3635C7.76404 8.83234 7.50065 9.46823 7.50065 10.1313Z" stroke="white" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.7148 14.8454L11.179 18.3813C10.8665 18.6935 10.4428 18.8688 10.0011 18.8688C9.55933 18.8688 9.13567 18.6935 8.82315 18.3813L5.28649 14.8454C4.35417 13.9131 3.71927 12.7252 3.46206 11.432C3.20485 10.1388 3.3369 8.79836 3.84149 7.58021C4.34608 6.36205 5.20057 5.32088 6.29689 4.58836C7.39321 3.85583 8.68213 3.46484 10.0007 3.46484C11.3192 3.46484 12.6081 3.85583 13.7044 4.58836C14.8007 5.32088 15.6552 6.36205 16.1598 7.58021C16.6644 8.79836 16.7965 10.1388 16.5392 11.432C16.282 12.7252 15.6471 13.9131 14.7148 14.8454Z" stroke="white" strokeWidth="0.625" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className='flex-1 text-base leading-[20px]font-bold text-white'>
                {t('about-us.innovation.place')}<br />   {t('about-us.innovation.place_later')}
              </span>
            </div>
            <span className='text-[14px] leading-[20px] font-light text-[#fff]'>
              {t('about-us.innovation.project')}: 3
            </span>

          </div>
        )) as any}
      </Flickity>
    </>
  )
}
