import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import Link from 'next/link'

const Page404 = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { t } = await useTranslation(lang)
  return (
    <>
      <main className="relative grow h-screen w-full ">
        <img className='absolute top-0 right-0 z-[-1]' src="https://ik.imagekit.io/arsdfirst/spatium/Ellipse%2021.png?updatedAt=1706276891646" alt="img" />
        <img className='absolute bottom-0 left-0 z-[-1]' src="https://ik.imagekit.io/arsdfirst/spatium/Ellipse%2023.png?updatedAt=1706276891636" alt="img" />
        <img className='absolute top-1/3 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[0]'
          src="https://ik.imagekit.io/arsdfirst/spatium/img.png?updatedAt=1706275387771" alt="img" />
        <svg className='absolute top-1/3 right-[10%] z-[-1]' xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157" fill="none">
          <g filter="url(#filter0_f_2_11607)">
            <path d="M19.7389 148.773L150.74 6.29058L8.22739 137.315C7.91817 137.546 7.6219 137.804 7.3402 138.086C4.13551 141.29 4.13469 146.485 7.3402 149.69C9.34446 151.694 12.129 152.446 14.7177 151.942C16.2679 151.642 17.7452 150.89 18.9448 149.69C19.2354 149.4 19.5017 149.094 19.7389 148.773Z" fill="url(#paint0_linear_2_11607)" />
          </g>
          <g filter="url(#filter1_f_2_11607)">
            <path d="M15.9364 147.656L87.7453 69.2863L9.35896 141.108C9.18829 141.234 9.02517 141.375 8.87047 141.53C7.11067 143.29 7.16812 146.2 8.99984 148.032C10.1451 149.177 11.7137 149.629 13.1584 149.376C14.0236 149.225 14.8429 148.82 15.5017 148.161C15.6612 148.002 15.8071 147.834 15.9364 147.656Z" fill="#00FB94" />
          </g>
          <g filter="url(#filter2_f_2_11607)">
            <ellipse cx="21.4368" cy="135.599" rx="3.51672" ry="16.4114" transform="rotate(45 21.4368 135.599)" fill="white" />
          </g>
          <g filter="url(#filter3_f_2_11607)">
            <circle cx="13.9688" cy="143.059" r="3.51672" transform="rotate(45 13.9688 143.059)" fill="white" />
          </g>
          <defs>
            <filter id="filter0_f_2_11607" x="0.9375" y="2.29102" width="153.801" height="153.803" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <filter id="filter1_f_2_11607" x="3.58594" y="65.2871" width="88.1602" height="88.1562" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <filter id="filter2_f_2_11607" x="5.56641" y="119.729" width="31.7422" height="31.7402" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <filter id="filter3_f_2_11607" x="6.45312" y="135.543" width="15.0312" height="15.0332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <linearGradient id="paint0_linear_2_11607" x1="7.3402" y1="149.69" x2="128.36" y2="28.6709" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3FBFFE" />
              <stop offset="1" stopColor="#3FBFFE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className='absolute bottom-[5%] rotate-[180deg] left-[5%] z-[-1]' xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157" fill="none">
          <g filter="url(#filter0_f_2_11607)">
            <path d="M19.7389 148.773L150.74 6.29058L8.22739 137.315C7.91817 137.546 7.6219 137.804 7.3402 138.086C4.13551 141.29 4.13469 146.485 7.3402 149.69C9.34446 151.694 12.129 152.446 14.7177 151.942C16.2679 151.642 17.7452 150.89 18.9448 149.69C19.2354 149.4 19.5017 149.094 19.7389 148.773Z" fill="url(#paint0_linear_2_11607)" />
          </g>
          <g filter="url(#filter1_f_2_11607)">
            <path d="M15.9364 147.656L87.7453 69.2863L9.35896 141.108C9.18829 141.234 9.02517 141.375 8.87047 141.53C7.11067 143.29 7.16812 146.2 8.99984 148.032C10.1451 149.177 11.7137 149.629 13.1584 149.376C14.0236 149.225 14.8429 148.82 15.5017 148.161C15.6612 148.002 15.8071 147.834 15.9364 147.656Z" fill="#00FB94" />
          </g>
          <g filter="url(#filter2_f_2_11607)">
            <ellipse cx="21.4368" cy="135.599" rx="3.51672" ry="16.4114" transform="rotate(45 21.4368 135.599)" fill="white" />
          </g>
          <g filter="url(#filter3_f_2_11607)">
            <circle cx="13.9688" cy="143.059" r="3.51672" transform="rotate(45 13.9688 143.059)" fill="white" />
          </g>
          <defs>
            <filter id="filter0_f_2_11607" x="0.9375" y="2.29102" width="153.801" height="153.803" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <filter id="filter1_f_2_11607" x="3.58594" y="65.2871" width="88.1602" height="88.1562" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <filter id="filter2_f_2_11607" x="5.56641" y="119.729" width="31.7422" height="31.7402" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <filter id="filter3_f_2_11607" x="6.45312" y="135.543" width="15.0312" height="15.0332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_11607" />
            </filter>
            <linearGradient id="paint0_linear_2_11607" x1="7.3402" y1="149.69" x2="128.36" y2="28.6709" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3FBFFE" />
              <stop offset="1" stopColor="#3FBFFE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className='absolute top-[50%] lg:top-[68%] left-1/2 -translate-x-1/2 z-0  md:w-max  
        flex flex-col items-center justify-center gap-[36px] xl:gap-[48px]'>
          <p className='text-gradient-3 text-[48px] leading-[56px] lg:tracking-[0.24px] 
          xl:text-[65px] xl:leading-[80px] font-bold xl:tracking-[0.325px] text-center'>{t('404-page.desc')}</p>

          <Link href={`/${lang}`} className='rounded-[44px] border-[1px] border-[solid]
          border-[#FFF] bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter 
          backdrop-blur-[31.899999618530273px] flex px-[20px] py-[12px] lg:px-[28px] lg:py-[16px]  xl:px-[36px] xl:py-[24px] justify-center items-center gap-[12px]
          text-[14px] leading-[20px]  lg:text-[18px] lg:leading-[24px]  xl:text-[24px]  xl:leading[24px] uppercase text-white font-bold
          '>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
              <path d="M6.33203 14H22.6654M6.33203 14L13.332 21M6.33203 14L13.332 7" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              {t('404-page.button-text')}
            </span>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Page404