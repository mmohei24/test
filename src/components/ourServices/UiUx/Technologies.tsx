'use client'
import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n/client"


const Diamond = () => (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
  <path d="M25.9954 8.20117H1.99403C1.55241 8.20117 1.19398 8.55959 1.19398 9.00122C1.19398 9.44284 1.55241 9.80127 1.99403 9.80127H25.9954C26.4371 9.80127 26.7955 9.44284 26.7955 9.00122C26.7955 8.55959 26.4371 8.20117 25.9954 8.20117Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
  <path d="M20.9953 8.47091L14.5949 1.27049C14.2909 0.928067 13.7004 0.928067 13.398 1.27049L6.99763 8.47091C6.70482 8.80053 6.73362 9.30776 7.06484 9.60057C7.39446 9.89339 7.90009 9.86459 8.1945 9.53337L11.6045 5.69637C12.8775 4.26403 15.1154 4.26404 16.3883 5.69638L19.7984 9.53337C19.9568 9.71098 20.176 9.80219 20.3968 9.80219C20.5856 9.80219 20.776 9.73498 20.928 9.60057C21.2577 9.30616 21.2897 8.80053 20.9953 8.47091Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
  <path d="M26.5967 8.47266L20.9963 2.07228C20.8683 1.92508 20.6891 1.82907 20.4955 1.80507L14.0951 1.00502C14.0327 0.998621 13.9751 0.998621 13.9159 1.00342L5.91547 1.80347C5.66905 1.82747 5.44824 1.96508 5.31703 2.17469L1.3168 8.57506C1.13599 8.86148 1.15679 9.2295 1.3664 9.49512L13.3671 24.696C13.5191 24.888 13.7511 25 13.9959 25C14.2408 25 14.4728 24.888 14.6232 24.696L26.6239 9.49512C26.8623 9.1927 26.8511 8.76228 26.5967 8.47266ZM13.9959 22.9087L2.97129 8.94469L6.4659 3.35396L13.9863 2.60192L19.9947 3.35396L24.9566 9.02469L13.9959 22.9087Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
  <path d="M14.7344 23.8908L8.33398 8.6899C8.16117 8.28188 7.68914 8.09467 7.28592 8.26268C6.87789 8.43389 6.68748 8.90272 6.85869 9.31074L13.2591 24.5116C13.3887 24.8172 13.6847 25.0013 13.9967 25.0013C14.0991 25.0013 14.2063 24.9805 14.3071 24.9389C14.7136 24.7676 14.9056 24.2988 14.7344 23.8908Z" fill="#FDFBFB" />
  <path d="M20.7096 8.25862C20.2984 8.08581 19.8327 8.27942 19.6615 8.68584L13.2612 23.8867C13.0899 24.2948 13.2804 24.7636 13.6884 24.9348C13.7892 24.9764 13.8948 24.9972 13.9988 24.9972C14.3108 24.9972 14.6068 24.8132 14.7364 24.5076L21.1368 9.30668C21.308 8.89865 21.116 8.42983 20.7096 8.25862Z" fill="#FDFBFB" />
  <path d="M8.37271 8.80429L6.77262 2.40391C6.66541 1.97509 6.22858 1.71267 5.80296 1.82148C5.37413 1.92869 5.11332 2.36391 5.22213 2.79114L6.82222 9.19151C6.91182 9.55633 7.23824 9.79795 7.59666 9.79795C7.66067 9.79795 7.72627 9.78995 7.79028 9.77395C8.2191 9.66674 8.47992 9.23312 8.37271 8.80429Z" fill="#FDFBFB" />
  <path d="M20.4001 1.79883C19.9585 1.79883 19.6001 2.15725 19.6001 2.59888V8.99925C19.6001 9.44088 19.9585 9.7993 20.4001 9.7993C20.8418 9.7993 21.2002 9.44088 21.2002 8.99925V2.59888C21.2002 2.15725 20.8418 1.79883 20.4001 1.79883Z" fill="#FDFBFB" />
</svg>)

const Star = ({ className }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className={className}>
    <g filter="url(#filter0_f_2_13148)">
      <path d="M6.47472 24.6851C5.84176 24.6131 5.84176 23.3869 6.47472 23.3149L19.3744 21.8465C20.5343 21.7145 21.486 20.5757 21.7026 19.0606L23.4899 6.55972C23.5966 5.81344 24.4034 5.81344 24.5101 6.55972L26.2974 19.0606C26.514 20.5757 27.4657 21.7145 28.6256 21.8465L41.5253 23.3149C42.1582 23.3869 42.1582 24.6131 41.5253 24.6851L28.6256 26.1535C27.4657 26.2855 26.514 27.4243 26.2974 28.9394L24.5101 41.4403C24.4034 42.1866 23.5966 42.1866 23.4899 41.4403L21.7026 28.9394C21.486 27.4243 20.5343 26.2855 19.3744 26.1535L6.47472 24.6851Z" fill="#1DB4FF" />
    </g>
    <g filter="url(#filter1_f_2_13148)">
      <path d="M12.862 24.4261C12.4679 24.3812 12.4679 23.6177 12.862 23.5729L20.8939 22.6586C21.6161 22.5764 22.2086 21.8674 22.3435 20.924L23.4563 13.1404C23.5228 12.6758 24.0251 12.6758 24.0916 13.1404L25.2044 20.924C25.3393 21.8674 25.9318 22.5764 26.6541 22.6586L34.6859 23.5729C35.08 23.6177 35.08 24.3812 34.6859 24.4261L26.6541 25.3403C25.9318 25.4225 25.3393 26.1316 25.2044 27.075L24.0916 34.8585C24.0251 35.3232 23.5228 35.3232 23.4563 34.8585L22.3435 27.075C22.2086 26.1316 21.6161 25.4225 20.8939 25.3403L12.862 24.4261Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_f_2_13148" x="0.918892" y="0.918892" width="46.1622" height="46.1622" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2.54055" result="effect1_foregroundBlur_2_13148" />
      </filter>
      <filter id="filter1_f_2_13148" x="7.4853" y="7.70991" width="32.5773" height="32.5782" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="2.54055" result="effect1_foregroundBlur_2_13148" />
      </filter>
    </defs>
  </svg>
)

const XDIcon = () => (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.549 12.2803H14.761L12.649 15.4483L10.525 12.2803H8.72504L11.7611 16.6003L8.82109 20.8003H10.6211L12.649 17.7523L14.665 20.8003H16.453L13.513 16.6003L16.549 12.2803Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
  <path d="M6.40002 3.2002C4.6327 3.2002 3.20001 4.63288 3.20001 6.4002V25.6002C3.20001 27.3675 4.6327 28.8002 6.40001 28.8002H25.6C27.3673 28.8002 28.8 27.3675 28.8 25.6002V6.4002C28.8 4.63289 27.3673 3.2002 25.6 3.2002H6.40002ZM27.3 24.1002C27.3 25.8675 25.8673 27.3002 24.1 27.3002H7.90002C6.13271 27.3002 4.70001 25.8675 4.70001 24.1002V7.9002C4.70001 6.13289 6.1327 4.7002 7.90001 4.7002H24.1C25.8673 4.7002 27.3 6.13288 27.3 7.9002V24.1002Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
  <path d="M23.0399 18.952V12.04H21.4319V15.616C21.2238 15.256 20.5711 14.404 19.308 14.404C17.817 14.404 16.5 15.7 16.5 17.656C16.5 19.3813 17.6419 20.92 19.488 20.92C20.7482 20.92 21.4399 20.1082 21.6719 19.708C21.6719 19.708 21.5668 20.884 22.7279 20.884C22.9038 20.884 23.1318 20.8559 23.4119 20.8V19.432C23.2758 19.4241 23.0399 19.12 23.0399 18.952ZM21.432 18.496C21.3759 18.6481 20.917 19.552 19.908 19.552C18.8419 19.552 18.168 18.6084 18.168 17.692C18.168 16.8584 18.717 15.772 19.812 15.772C20.7919 15.772 21.3679 16.8201 21.432 16.996V18.496Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
</svg>
)

const PSIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.4 3.2002C4.63269 3.2002 3.2 4.63288 3.2 6.4002V25.6002C3.2 27.3675 4.63269 28.8002 6.4 28.8002H25.6C27.3673 28.8002 28.8 27.3675 28.8 25.6002V6.4002C28.8 4.63289 27.3673 3.2002 25.6 3.2002H6.4ZM27.3 24.1002C27.3 25.8675 25.8673 27.3002 24.1 27.3002H7.9C6.13269 27.3002 4.7 25.8675 4.7 24.1002V7.9002C4.7 6.13289 6.13269 4.7002 7.9 4.7002H24.1C25.8673 4.7002 27.3 6.13288 27.3 7.9002V24.1002Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
    <path d="M13.8532 12.2803H10.2412V20.8003H11.8972V17.9443H13.9132C15.3898 17.9443 16.5652 16.6586 16.5652 15.1123C16.5652 13.8003 15.5064 12.2803 13.8532 12.2803ZM13.8172 16.4923H11.8972V13.7323H13.7452C14.4481 13.7323 14.8852 14.3923 14.8852 15.1123C14.8852 15.9503 14.3981 16.4923 13.8172 16.4923Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
    <path d="M20.0483 17.0316C19.8162 16.9757 18.8123 16.8121 18.8123 16.2396C18.8123 15.7809 19.1888 15.5316 19.7723 15.5316C20.5638 15.5316 21.2762 15.9876 21.5963 16.2276L22.2443 15.2556C21.9002 14.9517 21.1638 14.3916 19.7843 14.3916C18.4701 14.3916 17.3123 15.1371 17.3123 16.4676C17.3123 17.8496 19.1483 18.1077 19.5563 18.2196C20.0441 18.3558 20.9363 18.5309 20.9363 19.0716C20.9363 19.5121 20.5138 19.7676 19.9043 19.7676C18.9638 19.7676 18.0803 19.2117 17.6963 18.9396L17.0963 19.9476C17.4563 20.2596 18.4888 20.9196 19.9403 20.9196C20.7242 20.9196 22.4843 20.6746 22.4843 18.9276C22.4843 17.4496 20.4803 17.1437 20.0483 17.0316Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" strokeLinejoin="round" />
  </svg>

)

const AIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2897 12.2812H13.8257L10.5737 20.8012H12.2777L13.0577 18.6772H16.0337L16.8257 20.8012H18.5297L15.2897 12.2812ZM13.3337 17.5132L14.5577 14.1652L15.7337 17.5132H13.3337Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" />
    <path d="M20.9198 14.5107H19.3119V20.7987H20.9198V14.5107Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" />
    <path d="M20.9198 12.0391H19.3119V13.6351H20.9198V12.0391Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" />
    <path d="M6.40002 3.2002C4.6327 3.2002 3.20001 4.63288 3.20001 6.4002V25.6002C3.20001 27.3675 4.6327 28.8002 6.40001 28.8002H25.6C27.3673 28.8002 28.8 27.3675 28.8 25.6002V6.4002C28.8 4.63289 27.3673 3.2002 25.6 3.2002H6.40002ZM27.3 24.1002C27.3 25.8675 25.8673 27.3002 24.1 27.3002H7.90002C6.13271 27.3002 4.70001 25.8675 4.70001 24.1002V7.9002C4.70001 6.13289 6.1327 4.7002 7.90001 4.7002H24.1C25.8673 4.7002 27.3 6.13288 27.3 7.9002V24.1002Z" fill="#FDFBFB" stroke="#FDFBFB" strokeWidth="0.8" />
  </svg>


)

const Technologies = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)

  return (
    <section className=" md:px-0 ">
      <div data-aos="zoom-in" className="w-full  md:max-w-[1400px] mx-auto px-[24px] py-[64px] md:py-0 md:px-0  relative flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px] items-center  md:translate-y-[110%]">
          <h2 className="text-[32px] leading-[48px] md:text-[36px]  md:leading-[48px] tracking-[0.5px] md:tracking-[-1.5px]  text-gradient max-w-[585px] text-center">
            {t("service-page.mobile-development.technology.titleHighlight")}
          </h2>
          <span className="text-gradient-3 text-[48px]  leading-[56px] md:text-[72px] lg:leading-[80px] lg:text-[90px] font-bold  md:leading-[100px] md:tracking-[0.36px] text-center">
            {t("service-page.mobile-development.technology.title")}
          </span>
        </div>
        <img className="hidden md:block lg:hidden w-full object-cover trans" src="https://ik.imagekit.io/arsdfirst/spatium/our-sevices/ui-ux/New%20Folder/image%20(38).svg?updatedAt=1706635151649" alt="tech-img" />
        <img className="hidden lg:block w-full object-cover trans" src="https://ik.imagekit.io/arsdfirst/spatium/our-sevices/ui-ux/New%20Folder/image%20(37).svg?updatedAt=1706635151760" alt="tech-img" />
        <div className="flex flex-wrap justify-center gap-[24px]">
          <div className="relative md:absolute md:left-[8%]  md:top-[40%] lg:left-[18.5%]
          w-[142px] h-[142px] md:w-[166px] 
          md:h-[166px] py-[24px] px-[28px] flex flex-col gap-[10px] items-center justify-center  rounded-full border-[1px] border-[solid]
             border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M20 12C21.0609 12 22.0783 12.4214 22.8284 13.1716C23.5786 13.9217 24 14.9391 24 16C24 17.0609 23.5786 18.0783 22.8284 18.8284C22.0783 19.5786 21.0609 20 20 20C18.9391 20 17.9217 19.5786 17.1716 18.8284C16.4214 18.0783 16 17.0609 16 16C16 14.9391 16.4214 13.9217 17.1716 13.1716C17.9217 12.4214 18.9391 12 20 12ZM20 12C21.0609 12 22.0783 11.5786 22.8284 10.8284C23.5786 10.0783 24 9.06087 24 8C24 6.93913 23.5786 5.92172 22.8284 5.17157C22.0783 4.42143 21.0609 4 20 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12M20 12H12M12 12C10.9391 12 9.92172 12.4214 9.17157 13.1716C8.42143 13.9217 8 14.9391 8 16C8 17.0609 8.42143 18.0783 9.17157 18.8284C9.92172 19.5786 10.9391 20 12 20M12 20H16M12 20C11.2089 20 10.4355 20.2346 9.77772 20.6741C9.11992 21.1136 8.60723 21.7384 8.30448 22.4693C8.00173 23.2002 7.92252 24.0044 8.07686 24.7804C8.2312 25.5563 8.61216 26.269 9.17157 26.8284C9.73098 27.3878 10.4437 27.7688 11.2196 27.9231C11.9956 28.0775 12.7998 27.9983 13.5307 27.6955C14.2616 27.3928 14.8864 26.8801 15.3259 26.2223C15.7654 25.5645 16 24.7911 16 24V4" stroke="#FDFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[24px] text-white  leading-[32px] tracking-[-0.5px] ">
              {t("service-page.mobile-development.technology.Illustrator")}
            </span>
            <Star className='absolute left-[3px] top-[20%] -translate-x-1/2' />
          </div>

          <div className="relative md:absolute md:right-[21%]  md:top-[34%] lg:right-[29%]
          w-[142px] h-[142px] md:w-[166px] 
          md:h-[166px] py-[24px] px-[28px] flex flex-col gap-[10px] items-center justify-center  rounded-full border-[1px] border-[solid]
             border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
            <Diamond />
            <span className="text-[24px] text-white  leading-[32px] tracking-[-0.5px] ">
              {t("service-page.mobile-development.technology.Sketch")}
            </span>
            <Star className='absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2' />
          </div>
          {/* XD */}

          <div className="relative md:absolute md:left-[10%]  md:top-[65%] lg:left-[20%]
          w-[142px] h-[142px] md:w-[166px] 
          md:h-[166px] py-[24px] px-[28px] flex flex-col gap-[10px] items-center justify-center  rounded-full border-[1px] border-[solid]
             border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
            <XDIcon />
            <span className="text-[24px] text-white  leading-[32px] tracking-[-0.5px] ">
              {t("service-page.mobile-development.technology.XD")}
            </span>
            <Star className='absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2' />
          </div>

          {/* Photoshop */}
          <div className="relative md:absolute  top-[52%] md:right-[7%] lg:right-[17%]
          w-[142px] h-[142px] md:w-[166px] 
          md:h-[166px] py-[24px] px-[28px] flex flex-col gap-[10px] items-center justify-center  rounded-full border-[1px] border-[solid]
             border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
            <PSIcon />
            <span className="text-[24px] text-white  leading-[32px] tracking-[-0.5px] ">
              {t("service-page.mobile-development.technology.Photoshop")}
            </span>
            <Star className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2' />
          </div>

          {/* Illustrator */}
          <div className="relative md:absolute md:top-[73%] lg:top-[71%] md:right-[35%]
          w-[142px] h-[142px] md:w-[166px] 
          md:h-[166px] py-[24px] px-[28px] flex flex-col gap-[10px] items-center justify-center  rounded-full border-[1px] border-[solid]
             border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
            <AIIcon />
            <span className="text-[24px] text-white  leading-[32px] tracking-[-0.5px] ">
              {t("service-page.mobile-development.technology.Illustrator")}
            </span>
            <Star className='absolute right-1/4 top-[5%] -translate-y-1/2 translate-x-1/2' />
          </div>

        </div>



      </div>

    </section>
  )
}

export default Technologies