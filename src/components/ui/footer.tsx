

import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import Link from 'next/link'
import Logo from './logo'
import { IconStar } from '../IconStar'

export default async function Footer({ lang }: { lang: Locale }) {
  const { t } = await useTranslation(lang)

  const ListNav = [
    {
      title: t('footer.navigation.title'),
      children: [
        {
          title: 'Home',
          url: ''
        },
        {
          title: 'About us',
          url: 'about-us'
        },
        {
          title: 'Technologies',
          url: 'our-services'
        },
        {
          title: 'Blog',
          url: 'blog'
        },
        {
          title: 'Get in touch',
          url: 'contact-us '
        },
      ]
    },
    {
      title: 'Services',
      children: [
        {
          title: 'Web Development',
          url: 'our-services/web-development'
        },
        {
          title: 'Mobile Development',
          url: 'our-services/mobile-app-development'
        },
        {
          title: 'UI/UX Designing',
          url: 'our-services/ui-ux'
        },
        {
          title: 'Testing & Quality Assurance',
          url: 'our-services/testing'
        },
      ]
    }
  ]

  return (
    <footer className=' pt-[48px] border-t border-t-[#989AAE] px-6'>
      <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto  flex flex-col gap-[48px]">
        {/* Top area: Blocks */}
        <div className='flex flex-col gap-[32px] md:gap-0 md:flex-row md:justify-between'>
          {/* 1st block */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[200px] sm:w-[200px] sm:h-[61px] h-[60px]">
              <Link href={`/${lang}`} className="block" aria-label="Cruip">
                <img src="https://ik.imagekit.io/arsdfirst/spatium/Logo%20(1).png?updatedAt=1707123498049" alt="img-logo" />
              </Link>
            </div>
          </div>
          <div className='flex-1 flex justify-evenly md:mb-[32px] lg:mb-0'>
            {
              ListNav.map(el => (
                <div className='min-w-[133px]' key={el.title}>
                  <p className='text-[24px] text-gradient-3 font-bold leading-[32px] tracking-[-0.5px] mb-3'>
                    {el.title}
                  </p>
                  <ul className='text-[14px] leading-[20px] lg:text-[18px] lg:leading-[24px] capitalize text-white flex flex-col gap-[5px] max-w-[127px] lg:max-w-[163px]'>
                    {el.children.map(item => (
                      <li key={item.title}><Link href={`/${lang}/${item.url}`}>{item.title}</Link></li>

                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
          <div className='px-[26px] py-[36px] flex flex-col gap-[16px] relative 
          rounded-[8px] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]'>
            <h3 className='text-[20px] leading-[30px] text-gradient-3'>
              Get in touch
            </h3>
            <a href="mailto:contact@spatiumsoftware.com" className="text-[16px] font-bold leading-6 underline text-white">
              contact@spatiumsoftware.com
            </a>
            <a href="tel:0020123456789" className="text-[16px] font-bold leading-6 underline text-white">
              0020123456789
            </a>
            <span className="text-[16px] font-bold leading-6 underline text-white">
              Egypt. Assiut
            </span>
            <div className="absolute bottom-0 right-0 translate-y-1/2 p-[18px] rtl:left-0 rtl:right-[unset]
            h-[132px] w-[132px] flex items-center justify-center flex-col gap-[8px] 
        rounded-full border border-white border-solid
        bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] 
        backdrop-filter backdrop-blur-[31.899999618530273px]
        ">
              <IconStar />
              <span className="text-[22px] font-bold leading-[110%] text-primary-white text-center">
                Contact us
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-[12px] py-[48px]'>
          <span className='text-[16px] leading-[20px] text-white text-center lg:text-left'>
            © 2024 SPATIUM. ALL RIGHT RESERVED
          </span>
          <div className='flex justify-around  lg:gap-[48px] '>
            <span className='text-[16px] leading-[20px] text-white '>
              Terms and Conditions
            </span>
            <span className='text-[16px] leading-[20px] text-white'>
              Privacy and Policy
            </span>
          </div>
        </div>
      </div>

    </footer >
  )
}
