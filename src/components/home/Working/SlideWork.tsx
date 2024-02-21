'use client'
import Flickity from 'react-flickity-component'
import './styles.css'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'

const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  initialIndex: 2
}

const ARR = [1, 2, 3, 4, 5]

export const SliderUtil = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  return (
    <>
      <Flickity options={flickityOptions} className='work-slide'>
        {ARR.map((_, index) => (
          <div className='w-full md:w-2/3 lg:w-1/2' key={index}>

            <div className='flex flex-col  px-[24px] md:px-[50px] gap-[32px]'>
              <img width={790} height={400} className='w-full rounded-[16px]' src="https://ik.imagekit.io/arsdfirst/spatium/home/image%20(49).svg?updatedAt=1706637579022" alt="img" />

              <div className='flex gap-[32px] flex-col md:flex-row md:items-center'>
                <div className='flex flex-col  gap-[12px]'>
                  <span className='text-[40px] leading-[52px] tracking-[0.2px] text-white'>
                    Company A
                  </span>
                  <div className=' flex-1 bg-[#1C2147] rounded-[8px] flex gap-[8px] flex-col p-[12px]'>
                    <span className='text-[14px] leading-[20px] font-semibold text-[#BABBC8]'>
                      {t('home-page.working.project.made')}
                    </span>
                    <div className='flex gap-[8px]'>
                      <div className='rounded-[29px] border border-violet flex gap-[8px] items-center px-[6px] py-[4px]'>
                        <img className='w-4 h-4' src='https://ik.imagekit.io/arsdfirst/spatium/newAdd/brand-xd.png?updatedAt=1706876058822' alt="icon-xd" />

                        <span className='text-[12px] leading-[18px] font-light text-[#BABBC8]'>
                          XD
                        </span>
                      </div>
                      <div className='rounded-[29px] border border-violet flex gap-[8px] items-center px-[6px] py-[4px]'>
                        <img className='w-4 h-4' src="https://ik.imagekit.io/arsdfirst/spatium/Vector.png?updatedAt=1706882133097" alt="icon-python" />
                        <span className='text-[12px] leading-[18px] font-light text-[#BABBC8]'>
                          Python
                        </span>
                      </div>
                      <div className='rounded-[29px] border border-violet flex gap-[8px] items-center px-[6px] py-[4px]'>
                        <img className='w-4 h-4' src="https://ik.imagekit.io/arsdfirst/spatium/brand-angular.png?updatedAt=1706882133159" alt="icon-angular" />
                        <span className='text-[12px] leading-[18px] font-light text-[#BABBC8]'>
                          Angular
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-1 flex gap-[12px] flex-col'>
                  <span className='text-[14px] leading-[20px] font-semibold text-[#BABBC8]'>
                    {t('home-page.working.project.process')}

                  </span>
                  <span className='font-light text-[16px] leading-[20px] line-clamp-3 text-[#BABBC8]'>
                    {t('home-page.working.project.sub')}

                  </span>
                  <div className='flex gap-[8px] items-center'>
                    <span className='text-[12px] leading-[20px] uppercase font-bold text-white'>
                      {t('home-page.working.project.viewCase')}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M20 12L12 20M20 12V20M20 12H12M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2348 5.26428 19.1826 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )) as any}
      </Flickity>
    </>
  )
}
