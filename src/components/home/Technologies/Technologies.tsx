'use client'
import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n/client"
import { useState } from "react"
import { IconStar } from "../../IconStar"

const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" fill="#4C5071" />
    <path d="M12 16H20H12Z" fill="#4C5071" />
    <path d="M16 12V20V12Z" fill="#4C5071" />
    <path d="M12 16H20M16 12V20M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" fill="#4C5071" />
    <path d="M12 16H20H12Z" fill="#4C5071" />
    <path d="M12 16H20M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Line = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="216" height="2" viewBox="0 0 216 2" fill="none">
    <path d="M1 1H215" stroke="url(#paint0_linear_2_3013)" strokeLinecap="round" />
    <defs>
      <linearGradient id="paint0_linear_2_3013" x1="1.00001" y1="4.0001" x2="210.478" y2="-6.56491" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.05" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const Technologies = ({ lang }: { lang: Locale }) => {
  const [active, setActive] = useState('frontend')
  const { t } = useTranslation(lang)
  const onChangeActive = (value: string) => {
    if (active === value) {
      setActive("")
      return
    }
    setActive(value)

  }
  return (
    <section className=" md:py-[96px] lg:py-[128px] md:px-0 ">
      <div data-aos="zoom-in" className="w-full md:max-w-4.5xl  max-w-7xl mx-auto px-5 md:px-0   relative flex flex-col">
        <img width={944} height={771} loading="lazy" className="hidden md:block w-full object-cover" src="https://ik.imagekit.io/arsdfirst/spatium/home/image%20(47).svg?updatedAt=1706637498155" alt="tech-img" />
        <img width={355} height={600} loading="lazy" className="md:hidden w-full object-cover" src="https://ik.imagekit.io/arsdfirst/spatium/home/image%20(48).svg?updatedAt=1706637498116" alt="tech-img" />
        <div className="flex flex-col gap-[12px] items-center absolute top-[50px] left-[50%] -translate-x-[50%]">
          <h2 className="text-[32px] leading-[48px] lg:text-[36px]  lg:leading-[48px] tracking-[0.5px] md:tracking-[-1.5px]  text-gradient max-w-[585px] text-center">
            {t('home-page.technologies.hightLight')}
          </h2>
          <span className="text-gradient-3 lg:text-[72px] font-bold  lg:leading-[80px] lg:tracking-[0.36px]">
            {t('home-page.technologies.title')}

          </span>
        </div>
        <div className="flex flex-col items-center gap-[32px] -translate-y-[180px] md:[transform:unset]">
          <div className="w-[269px] md:absolute top-[210px] left-[180px] px-[24px] py-[24px]  md:translate-x-[-50%]
          rounded-[54px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
          ">
            <div onClick={() => onChangeActive('app')} className="flex gap-[10px] items-center cursor-pointer">
              <span className="font-bold tracking-[-0.5px] leading-[32px] text-[24px] text-white flex-1">
                {t('home-page.technologies.app')}

              </span>
              {!active.includes('app') ? <IconPlus /> : <IconClose />}
            </div>
            <div className={`flex flex-col gap-[10px] [transition:all_linear_0.4s] overflow-hidden  ${active.includes('app') ? 'h-auto mt-[10px]' : 'h-0'}`}>
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.00073 15.0004L12.0007 7.00044L15.0007 15.0004M10.0007 13.0004H14.0007M5.42872 17.2454L11.5047 20.7164C11.6558 20.8027 11.8267 20.8481 12.0007 20.8481C12.1747 20.8481 12.3457 20.8027 12.4967 20.7164L18.5727 17.2454C18.706 17.1693 18.82 17.0635 18.9059 16.9362C18.9917 16.8089 19.0471 16.6636 19.0677 16.5114L20.3907 6.80744C20.4218 6.57949 20.3733 6.34779 20.2534 6.15142C20.1336 5.95505 19.9497 5.80602 19.7327 5.72944L12.3327 3.11744C12.1175 3.04158 11.8829 3.04158 11.6677 3.11744L4.26872 5.73044C4.05178 5.80702 3.86787 5.95605 3.74801 6.15242C3.62815 6.34879 3.57966 6.58049 3.61072 6.80844L4.93372 16.5124C4.95435 16.6646 5.00973 16.8099 5.09557 16.9372C5.18141 17.0645 5.2954 17.1693 5.42872 17.2454Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Native
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.5 4L12 12L7.5 4M3 4L12 20L21 4" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.306 8.71057C3.704 9.43357 2 10.6366 2 11.9996C2 14.2096 6.477 15.9996 12 15.9996C12.773 15.9996 13.526 15.9646 14.248 15.8976M17.692 15.2886C20.295 14.5666 22 13.3626 22 11.9996C22 9.78957 17.523 7.99957 12 7.99957C11.227 7.99957 10.474 8.03457 9.75 8.10157M6.30499 15.2866C5.62899 17.9016 5.81999 19.9796 6.99999 20.6596C8.91299 21.7646 12.703 18.7826 15.464 13.9996C15.851 13.3296 16.197 12.6606 16.5 11.9996M17.694 8.71556C18.371 6.09956 18.181 4.01956 17 3.33956C15.087 2.23456 11.297 5.21656 8.53602 9.99956C8.14902 10.6696 7.80302 11.3396 7.49902 11.9996M12 5.42358C10.075 3.53158 8.17998 2.65758 6.99998 3.33958C5.08698 4.44358 5.77398 9.21658 8.53598 13.9996C8.92199 14.6696 9.32898 15.3036 9.74798 15.8956M12 18.5736C13.926 20.4666 15.821 21.3416 17 20.6596C18.913 19.5556 18.226 14.7826 15.464 9.99957C15.089 9.34957 14.684 8.71657 14.252 8.10257M11.5 12.8656C11.6138 12.9323 11.7396 12.9758 11.8703 12.9937C12.0009 13.0115 12.1338 13.0034 12.2613 12.9697C12.3888 12.936 12.5084 12.8774 12.6132 12.7973C12.7179 12.7172 12.8058 12.6171 12.8718 12.5029C12.9377 12.3887 12.9804 12.2626 12.9974 12.1318C13.0144 12.001 13.0054 11.8682 12.9708 11.7409C12.9363 11.6136 12.8769 11.4944 12.7961 11.3902C12.7153 11.286 12.6146 11.1988 12.5 11.1336C12.2704 11.0031 11.9986 10.9686 11.7437 11.0378C11.4889 11.107 11.2718 11.2742 11.1397 11.5029C11.0077 11.7316 10.9715 12.0032 11.039 12.2585C11.1065 12.5138 11.2722 12.732 11.5 12.8656Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
            </div>
          </div>

          <div className="w-[269px] md:absolute top-[230px] right-[180px] px-[24px] py-[24px]  md:translate-x-[50%]
          rounded-[54px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
          ">
            <div onClick={() => onChangeActive('backend')} className="flex gap-[10px] items-center justify-between cursor-pointer">
              <span className="font-bold tracking-[-0.5px] leading-[32px] text-[24px] text-white flex-1">
                {t('home-page.technologies.backend')}

              </span>
              {!active.includes('backend') ? <IconPlus /> : <IconClose />}
            </div>
            <div className={`flex flex-col gap-[10px] [transition:all_linear_0.4s] overflow-hidden  ${active.includes('backend') ? 'h-auto mt-[10px]' : 'h-0'}`}>
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.00073 15.0004L12.0007 7.00044L15.0007 15.0004M10.0007 13.0004H14.0007M5.42872 17.2454L11.5047 20.7164C11.6558 20.8027 11.8267 20.8481 12.0007 20.8481C12.1747 20.8481 12.3457 20.8027 12.4967 20.7164L18.5727 17.2454C18.706 17.1693 18.82 17.0635 18.9059 16.9362C18.9917 16.8089 19.0471 16.6636 19.0677 16.5114L20.3907 6.80744C20.4218 6.57949 20.3733 6.34779 20.2534 6.15142C20.1336 5.95505 19.9497 5.80602 19.7327 5.72944L12.3327 3.11744C12.1175 3.04158 11.8829 3.04158 11.6677 3.11744L4.26872 5.73044C4.05178 5.80702 3.86787 5.95605 3.74801 6.15242C3.62815 6.34879 3.57966 6.58049 3.61072 6.80844L4.93372 16.5124C4.95435 16.6646 5.00973 16.8099 5.09557 16.9372C5.18141 17.0645 5.2954 17.1693 5.42872 17.2454Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Native
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.5 4L12 12L7.5 4M3 4L12 20L21 4" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.306 8.71057C3.704 9.43357 2 10.6366 2 11.9996C2 14.2096 6.477 15.9996 12 15.9996C12.773 15.9996 13.526 15.9646 14.248 15.8976M17.692 15.2886C20.295 14.5666 22 13.3626 22 11.9996C22 9.78957 17.523 7.99957 12 7.99957C11.227 7.99957 10.474 8.03457 9.75 8.10157M6.30499 15.2866C5.62899 17.9016 5.81999 19.9796 6.99999 20.6596C8.91299 21.7646 12.703 18.7826 15.464 13.9996C15.851 13.3296 16.197 12.6606 16.5 11.9996M17.694 8.71556C18.371 6.09956 18.181 4.01956 17 3.33956C15.087 2.23456 11.297 5.21656 8.53602 9.99956C8.14902 10.6696 7.80302 11.3396 7.49902 11.9996M12 5.42358C10.075 3.53158 8.17998 2.65758 6.99998 3.33958C5.08698 4.44358 5.77398 9.21658 8.53598 13.9996C8.92199 14.6696 9.32898 15.3036 9.74798 15.8956M12 18.5736C13.926 20.4666 15.821 21.3416 17 20.6596C18.913 19.5556 18.226 14.7826 15.464 9.99957C15.089 9.34957 14.684 8.71657 14.252 8.10257M11.5 12.8656C11.6138 12.9323 11.7396 12.9758 11.8703 12.9937C12.0009 13.0115 12.1338 13.0034 12.2613 12.9697C12.3888 12.936 12.5084 12.8774 12.6132 12.7973C12.7179 12.7172 12.8058 12.6171 12.8718 12.5029C12.9377 12.3887 12.9804 12.2626 12.9974 12.1318C13.0144 12.001 13.0054 11.8682 12.9708 11.7409C12.9363 11.6136 12.8769 11.4944 12.7961 11.3902C12.7153 11.286 12.6146 11.1988 12.5 11.1336C12.2704 11.0031 11.9986 10.9686 11.7437 11.0378C11.4889 11.107 11.2718 11.2742 11.1397 11.5029C11.0077 11.7316 10.9715 12.0032 11.039 12.2585C11.1065 12.5138 11.2722 12.732 11.5 12.8656Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
            </div>
          </div>

          <div className="w-[269px] md:absolute top-[63%] left-[220px] px-[24px] py-[24px]  md:translate-x-[-50%]
          rounded-[54px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
          ">
            <div onClick={() => onChangeActive('frontend')} className="flex gap-[10px] items-center justify-between cursor-pointer">
              <span className="font-bold tracking-[-0.5px] leading-[32px] text-[24px] text-white flex-1">
                {t('home-page.technologies.frontend')}

              </span>
              {!active.includes('frontend') ? <IconPlus /> : <IconClose />}
            </div>
            <div className={`flex flex-col gap-[10px] [transition:all_linear_0.4s] overflow-hidden  ${active.includes('frontend') ? 'h-auto mt-[10px]' : 'h-0'}`}>
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.00073 15.0004L12.0007 7.00044L15.0007 15.0004M10.0007 13.0004H14.0007M5.42872 17.2454L11.5047 20.7164C11.6558 20.8027 11.8267 20.8481 12.0007 20.8481C12.1747 20.8481 12.3457 20.8027 12.4967 20.7164L18.5727 17.2454C18.706 17.1693 18.82 17.0635 18.9059 16.9362C18.9917 16.8089 19.0471 16.6636 19.0677 16.5114L20.3907 6.80744C20.4218 6.57949 20.3733 6.34779 20.2534 6.15142C20.1336 5.95505 19.9497 5.80602 19.7327 5.72944L12.3327 3.11744C12.1175 3.04158 11.8829 3.04158 11.6677 3.11744L4.26872 5.73044C4.05178 5.80702 3.86787 5.95605 3.74801 6.15242C3.62815 6.34879 3.57966 6.58049 3.61072 6.80844L4.93372 16.5124C4.95435 16.6646 5.00973 16.8099 5.09557 16.9372C5.18141 17.0645 5.2954 17.1693 5.42872 17.2454Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Native
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.5 4L12 12L7.5 4M3 4L12 20L21 4" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.306 8.71057C3.704 9.43357 2 10.6366 2 11.9996C2 14.2096 6.477 15.9996 12 15.9996C12.773 15.9996 13.526 15.9646 14.248 15.8976M17.692 15.2886C20.295 14.5666 22 13.3626 22 11.9996C22 9.78957 17.523 7.99957 12 7.99957C11.227 7.99957 10.474 8.03457 9.75 8.10157M6.30499 15.2866C5.62899 17.9016 5.81999 19.9796 6.99999 20.6596C8.91299 21.7646 12.703 18.7826 15.464 13.9996C15.851 13.3296 16.197 12.6606 16.5 11.9996M17.694 8.71556C18.371 6.09956 18.181 4.01956 17 3.33956C15.087 2.23456 11.297 5.21656 8.53602 9.99956C8.14902 10.6696 7.80302 11.3396 7.49902 11.9996M12 5.42358C10.075 3.53158 8.17998 2.65758 6.99998 3.33958C5.08698 4.44358 5.77398 9.21658 8.53598 13.9996C8.92199 14.6696 9.32898 15.3036 9.74798 15.8956M12 18.5736C13.926 20.4666 15.821 21.3416 17 20.6596C18.913 19.5556 18.226 14.7826 15.464 9.99957C15.089 9.34957 14.684 8.71657 14.252 8.10257M11.5 12.8656C11.6138 12.9323 11.7396 12.9758 11.8703 12.9937C12.0009 13.0115 12.1338 13.0034 12.2613 12.9697C12.3888 12.936 12.5084 12.8774 12.6132 12.7973C12.7179 12.7172 12.8058 12.6171 12.8718 12.5029C12.9377 12.3887 12.9804 12.2626 12.9974 12.1318C13.0144 12.001 13.0054 11.8682 12.9708 11.7409C12.9363 11.6136 12.8769 11.4944 12.7961 11.3902C12.7153 11.286 12.6146 11.1988 12.5 11.1336C12.2704 11.0031 11.9986 10.9686 11.7437 11.0378C11.4889 11.107 11.2718 11.2742 11.1397 11.5029C11.0077 11.7316 10.9715 12.0032 11.039 12.2585C11.1065 12.5138 11.2722 12.732 11.5 12.8656Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
            </div>
          </div>

          <div className="w-[269px] md:absolute top-[60%] left-[55%] px-[24px] py-[24px]  
          rounded-[54px] border-[1px] border-[solid] border-[#FFF]
           bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
          ">
            <div onClick={() => onChangeActive('design')} className="flex gap-[10px] items-center justify-between cursor-pointer">
              <span className="font-bold tracking-[-0.5px] leading-[32px] text-[24px] text-white flex-1">
                {t('home-page.technologies.uiUx')}

              </span>
              {!active.includes('design') ? <IconPlus /> : <IconClose />}
            </div>
            <div className={`flex flex-col gap-[10px] [transition:all_linear_0.4s] overflow-hidden  ${active.includes('design') ? 'h-auto mt-[10px]' : 'h-0'}`}>
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.00073 15.0004L12.0007 7.00044L15.0007 15.0004M10.0007 13.0004H14.0007M5.42872 17.2454L11.5047 20.7164C11.6558 20.8027 11.8267 20.8481 12.0007 20.8481C12.1747 20.8481 12.3457 20.8027 12.4967 20.7164L18.5727 17.2454C18.706 17.1693 18.82 17.0635 18.9059 16.9362C18.9917 16.8089 19.0471 16.6636 19.0677 16.5114L20.3907 6.80744C20.4218 6.57949 20.3733 6.34779 20.2534 6.15142C20.1336 5.95505 19.9497 5.80602 19.7327 5.72944L12.3327 3.11744C12.1175 3.04158 11.8829 3.04158 11.6677 3.11744L4.26872 5.73044C4.05178 5.80702 3.86787 5.95605 3.74801 6.15242C3.62815 6.34879 3.57966 6.58049 3.61072 6.80844L4.93372 16.5124C4.95435 16.6646 5.00973 16.8099 5.09557 16.9372C5.18141 17.0645 5.2954 17.1693 5.42872 17.2454Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Native
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.5 4L12 12L7.5 4M3 4L12 20L21 4" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
              <Line />
              <span className="flex gap-[10px] text-[18px] leading-[28px] font-light text-primary-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.306 8.71057C3.704 9.43357 2 10.6366 2 11.9996C2 14.2096 6.477 15.9996 12 15.9996C12.773 15.9996 13.526 15.9646 14.248 15.8976M17.692 15.2886C20.295 14.5666 22 13.3626 22 11.9996C22 9.78957 17.523 7.99957 12 7.99957C11.227 7.99957 10.474 8.03457 9.75 8.10157M6.30499 15.2866C5.62899 17.9016 5.81999 19.9796 6.99999 20.6596C8.91299 21.7646 12.703 18.7826 15.464 13.9996C15.851 13.3296 16.197 12.6606 16.5 11.9996M17.694 8.71556C18.371 6.09956 18.181 4.01956 17 3.33956C15.087 2.23456 11.297 5.21656 8.53602 9.99956C8.14902 10.6696 7.80302 11.3396 7.49902 11.9996M12 5.42358C10.075 3.53158 8.17998 2.65758 6.99998 3.33958C5.08698 4.44358 5.77398 9.21658 8.53598 13.9996C8.92199 14.6696 9.32898 15.3036 9.74798 15.8956M12 18.5736C13.926 20.4666 15.821 21.3416 17 20.6596C18.913 19.5556 18.226 14.7826 15.464 9.99957C15.089 9.34957 14.684 8.71657 14.252 8.10257M11.5 12.8656C11.6138 12.9323 11.7396 12.9758 11.8703 12.9937C12.0009 13.0115 12.1338 13.0034 12.2613 12.9697C12.3888 12.936 12.5084 12.8774 12.6132 12.7973C12.7179 12.7172 12.8058 12.6171 12.8718 12.5029C12.9377 12.3887 12.9804 12.2626 12.9974 12.1318C13.0144 12.001 13.0054 11.8682 12.9708 11.7409C12.9363 11.6136 12.8769 11.4944 12.7961 11.3902C12.7153 11.286 12.6146 11.1988 12.5 11.1336C12.2704 11.0031 11.9986 10.9686 11.7437 11.0378C11.4889 11.107 11.2718 11.2742 11.1397 11.5029C11.0077 11.7316 10.9715 12.0032 11.039 12.2585C11.1065 12.5138 11.2722 12.732 11.5 12.8656Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Vue
              </span>
            </div>
          </div>


        </div>

      </div>
      <div className="w-full px-[24px] pb-[64px] md:pb-0 " data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="relative w-full flex-col md:flex-row md:max-w-4.5xl lg:max-w-7xl mx-auto rounded-[36px]
       flex justify-between items-center border border-solid border-white p-[32px] md:p-[48px] lg:p-[64px]">
          <div className="flex gap-[12px] flex-col items-center md:items-start mb-[48px] md:mb-0">
            <span className="text-gradient text-[24px] leading-[32px] text-center md:text-left md:text-[32px] md:leading-[48px] md:tracking-[-0.5px]">
              {t('home-page.technologies.question')}
            </span>
            <span className="text-gradient-3 text-[48px] leading-[56px] md:text-[72px] font-bold md:leading-[80px] tracking-[0.36px]">
              {t('home-page.technologies.talk')}

            </span>

          </div>
          <img className="absolute left-[60%] top-4" src="https://ik.imagekit.io/arsdfirst/spatium/home/star?updatedAt=1706030985385" alt="light-img" />
          <img className="absolute left-1/2 bottom-2 md:w-[102px] lg:w-auto" src="https://ik.imagekit.io/arsdfirst/spatium/home/light?updatedAt=1706030938941" alt="light-img" />
          <svg xmlns="http://www.w3.org/2000/svg" width="473" height="75" viewBox="0 0 473 75" fill="none" className="absolute left-[0%] top-[35%] rotate-45 md:rotate-0  md:left-[60%] md:-translate-x-1/2 md:top-1/2 z-[1] w-[150px] md:w-[300px]">
            <path d="M1.71455 6.52683C0.901078 6.68355 0.368681 7.47005 0.525404 8.28352C0.682127 9.09698 1.46862 9.62938 2.28209 9.47266L1.71455 6.52683ZM472.436 19.4292C472.673 18.6355 472.222 17.7997 471.428 17.5626L458.493 13.6977C457.699 13.4605 456.864 13.9117 456.626 14.7055C456.389 15.4992 456.84 16.3349 457.634 16.5721L469.132 20.0076L465.696 31.5053C465.459 32.299 465.91 33.1348 466.704 33.3719C467.498 33.6091 468.334 33.1579 468.571 32.3642L472.436 19.4292ZM2.28209 9.47266C56.545 -0.981643 96.0111 3.53871 128.9 13.8915C161.915 24.2841 188.196 40.4848 216.554 53.6724C244.839 66.8263 274.864 76.7839 314.773 74.2546C354.639 71.7281 404.23 56.7519 471.711 20.3197L470.286 17.6799C403.017 53.9977 353.858 68.7715 314.583 71.2606C275.352 73.7469 245.845 63.9857 217.819 50.9521C189.864 37.9522 163.051 21.4967 129.8 11.0299C96.4232 0.523291 56.4518 -4.01886 1.71455 6.52683L2.28209 9.47266Z" fill="url(#paint0_linear_2_3093)" />
            <defs>
              <linearGradient id="paint0_linear_2_3093" x1="236.714" y1="8.62783" x2="233.984" y2="70.2966" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.05" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="px-[38px] py-[28px] h-[214px] w-[214px] flex items-center justify-center flex-col gap-[8px] 
        rounded-full border border-white border-solid
        bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]
        ">
            <IconStar />
            <span className="text-[36px] font-bold leading-[110%] text-primary-white text-center">
              {t('home-page.technologies.contactUs')}

            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies