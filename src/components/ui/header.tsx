
'use client'
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LanguageSelector from './language-selector'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { NAVBAR_DEFAULT } from '@/src/utils/constant'


export default function Header({ lang }: { lang: Locale }) {
  const { t } = useTranslation(lang)
  const [top, setTop] = useState<boolean>(true)
  const pathname = usePathname()

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  const [mounted, setMounted] = useState(false)
  const [imgActive, setImgActive] = useState('01/')
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])



  return (
    mounted ? <header className={`fixed w-full z-30 md:bg-opacity-90 transition px-6
    duration-300 ease-in-out border-b-[1px] border-white 
    ${!top ? 'bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="md:max-w-4.5xl lg:max-w-7xl mx-auto py-[20px] md:py-0 ">
        <div className="relative flex items-center justify-between h-7 md:h-[3.75rem] md:my-5">
          <div className='flex md:gap-[32px] lg:gap-[48px]'>
            {/* Site branding */}
            <div className="shrink-0 flex items-center  relative z-[21]">
              <Logo lang={lang} />
            </div>


            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow md:items-center">
              {/* Desktop sign in links */}
              <ul className="flex grow  flex-wrap items-center h-[43.59px] gap-[32px]">
                {NAVBAR_DEFAULT.map(item => {
                  let path = '/'
                  if (!item.endpoint) path = `/${lang}`
                  else path = `/${lang}/${item.endpoint}`
                  let highlightClass = ''
                  if (item.endpoint === 'blog') {
                    highlightClass = pathname.includes(path) ? '!text-neutral-1' : ''
                  }
                  if (item.endpoint === 'our-services') {
                    highlightClass = pathname.includes(path) ? '!text-primary-5' : ''

                  }
                  else {
                    highlightClass = path === pathname ? '!text-primary-5' : ''
                  }

                  return (
                    <li key={item.key} className='relative group'>
                      <Link href={path} className={`text-[1rem] group leading-[24px] 
                      font-normal text-primary-white hover:text-primary-5 flex gap-[8px] items-center transition 
                      duration-150 ease-in-out capitalize ${highlightClass}`}
                        onMouseEnter={() => { if (item.children) setShowChild(true) }}
                        onMouseLeave={() => setShowChild(false)}
                      >{t(item.text)}
                        {item.children &&
                          <svg className='group-hover:rotate-[180deg] transition 
                          duration-150 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 12.5L10 7.5L15 12.5" stroke={showChild ? "#00A6F9" : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>}
                      </Link>
                      {item.children && showChild ?
                        <div
                          onMouseEnter={() => setShowChild(true)}
                          onMouseLeave={() => setShowChild(false)}
                          className='flex fixed top-[101px] left-1/2 
                              -translate-x-1/2 p-[32px]  gap-[32px] items-center w-max h-fit
                              rounded-tl-none rounded-br-[36px] rounded-tr-none rounded-bl-[36px]
                                border-[1px] border-[solid] border-[#FFF] 
                                border-t-0 bg-[linear-gradient(180deg,_#11142B_0%,_#2B2E48_100%)] 
                                [box-shadow:0px_4px_25.3px_0px_rgba(31,_36,_78,_0.50)]
                                after:content-[""] after:absolute after:w-full after:h-[40px] 
                                after:bg-transparent after:top-[0] after:-translate-y-full
                                [border-image:linear-gradient(_to_bottom,_white,_transparent_)_1_100%]
                        '>
                          <div className='flex flex-col gap-[32px]'>
                            {item.children.map(el => {
                              const pathChild = `/${lang}/${el.endpoint}`

                              const textHightLight = pathname === pathChild ? '!text-primary-5' : ""

                              return (
                                <Link href={pathChild} className='flex gap-[19px] items-center group/item cursor-pointer' key={Math.random()}
                                  onMouseEnter={() => setImgActive(el.number)}
                                >
                                  <span className='text-violet text-base leading-[20px]'>
                                    {el.number}
                                  </span>
                                  <span className={`text-primary-white group-hover/item:text-primary-5 ${textHightLight} text-[24px] leading-[32px] tracking-[-0.5px] font-bold
                                  `}>
                                    {el.title}</span>
                                </Link>
                              )
                            })}
                            <svg xmlns="http://www.w3.org/2000/svg" width="435" height="2" viewBox="0 0 435 2" fill="none">
                              <path d="M1 1H434" stroke="#989AAE" strokeLinecap="round" />
                            </svg>
                            <Link href={path} className='flex items-center gap-[8px] cursor-pointer'>
                              <span className='text-base font-bold leading-[24px] uppercase text-white'>
                                View all
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M22.5 13.5L13.5 22.5M22.5 13.5V22.5M22.5 13.5H13.5M4.5 18C4.5 19.7728 4.84919 21.5283 5.52763 23.1662C6.20606 24.8041 7.20047 26.2923 8.45406 27.5459C9.70765 28.7995 11.1959 29.7939 12.8338 30.4724C14.4717 31.1508 16.2272 31.5 18 31.5C19.7728 31.5 21.5283 31.1508 23.1662 30.4724C24.8041 29.7939 26.2923 28.7995 27.5459 27.5459C28.7995 26.2923 29.7939 24.8041 30.4724 23.1662C31.1508 21.5283 31.5 19.7728 31.5 18C31.5 14.4196 30.0777 10.9858 27.5459 8.45406C25.0142 5.92232 21.5804 4.5 18 4.5C14.4196 4.5 10.9858 5.92232 8.45406 8.45406C5.92232 10.9858 4.5 14.4196 4.5 18Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          </div>
                          {
                            item.children.map(el => {
                              const pathChild = `/${lang}/${el.endpoint}`
                              const showImgDefault = !imgActive && pathChild === pathname ? 'hidden lg:block' : ''
                              return (
                                <img key={Math.random()} className={`${imgActive === el.number ? 'hidden lg:block' : 'hidden'} ${showImgDefault}`} src={el.img} alt="img" />
                              )
                            })
                          }
                        </div> : <></>
                      }
                    </li>
                  )
                })}
              </ul>
            </nav>

          </div>

          <div className='flex gap-[12px] items-center'>
            <div className='hidden md:block'>
              <div className='flex md:flex-row lg:flex-row gap-[12px]'>
                <Link href={`/${lang}/contact-us`} className='flex items-center px-5 py-[12px] text-[14px]
                  leading-[20px] text-neutral-1 border-contact-us uppercase'>Contact Us</Link>
                <div className='line-header'></div>
                <LanguageSelector lang={lang} />
              </div>
            </div>
            <MobileMenu lang={lang} />
          </div>

        </div>
      </div>
    </header> :
      <></>
  )
}

