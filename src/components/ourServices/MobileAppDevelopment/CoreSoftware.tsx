import { Locale } from '@/i18n.config'
import { CoreSoftwareSp } from './CoreSoftwareSp'
import { useTranslation } from '@/src/i18n'

const CoreSoftware = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(16).svg?updatedAt=1706631450850',
      styleLine: "flex-row",
      sub: t("service-page.mobile-development.core.items.item1.sub"),
      number: t("service-page.mobile-development.core.items.item1.number"),
      title: t("service-page.mobile-development.core.items.item1.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12257)" />
        <defs>
          <linearGradient id="paint0_linear_2_12257" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#01A6FA" />
            <stop offset="1" stopColor="#02DBBC" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(17).svg?updatedAt=1706631450968',
      styleLine: "flex-row-reverse",
      sub: t("service-page.mobile-development.core.items.item2.sub"),
      number: t("service-page.mobile-development.core.items.item2.number"),
      title: t("service-page.mobile-development.core.items.item2.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12261)" />
        <defs>
          <linearGradient id="paint0_linear_2_12261" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#02CFCA" />
            <stop offset="1" stopColor="#01FC95" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(18).svg?updatedAt=1706631450913',
      styleLine: "flex-row",
      sub: t("service-page.mobile-development.core.items.item3.sub"),
      number: t("service-page.mobile-development.core.items.item3.number"),
      title: t("service-page.mobile-development.core.items.item3.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12346)" />
        <defs>
          <linearGradient id="paint0_linear_2_12346" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78F8BB" />
            <stop offset="1" stopColor="#F6F878" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(22).svg?updatedAt=1706631451042',
      styleLine: "flex-row-reverse",
      sub: t("service-page.mobile-development.core.items.item4.sub"),
      number: t("service-page.mobile-development.core.items.item4.number"),
      title: t("service-page.mobile-development.core.items.item4.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12412)" />
        <defs>
          <linearGradient id="paint0_linear_2_12412" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCF776" />
            <stop offset="1" stopColor="#EEA592" />
          </linearGradient>
        </defs>
      </svg>)
    },

  ]

  const IconSun = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="396" height="421" viewBox="0 0 396 421" fill="none" className='hidden xl:block absolute top-0 right-0 translate-x-[30%] -translate-y-[25%]'>
      <g filter="url(#filter0_dd_2_12094)">
        <ellipse cx="221.781" cy="178.915" rx="96.7212" ry="96.9819" transform="rotate(-30 221.781 178.915)" fill="url(#paint0_radial_2_12094)" />
      </g>
      <defs>
        <filter id="filter0_dd_2_12094" x="0.568113" y="0.0821609" width="419.806" height="420.066" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="15.6001" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_12094" />
          <feOffset dx="-11.31" dy="31.2001" />
          <feGaussianBlur stdDeviation="48.7502" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.166072 0 0 0 0 0.649821 0 0 0 0 0.45131 0 0 0 0.54 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_12094" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="3.90001" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_2_12094" />
          <feOffset dy="5.07002" />
          <feGaussianBlur stdDeviation="39.0001" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.85 0 0 0 0 0.459 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_2_12094" result="effect2_dropShadow_2_12094" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_12094" result="shape" />
        </filter>
        <radialGradient id="paint0_radial_2_12094" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(202.437 113.453) rotate(40.9682) scale(153.714 153.773)">
          <stop offset="0.261559" stopColor="#1F244E" />
          <stop offset="0.634788" stopColor="#459B77" />
          <stop offset="0.854167" stopColor="#50DFA4" />
          <stop offset="1" stopColor="#00FB94" />
        </radialGradient>
      </defs>
    </svg>
  )

  return (
    <section className="relative pt-[135px]">
      <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto">
        <div className='w-full relative rounded-[64px] flex flex-col gap-[120px]
        bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]  md:px-[40px] py-[64px] lg:px-[103px] lg:py-[128px]'>
          <IconSun />
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center gap-[12 px]'>
            <span className='text-gradient text-[40px] leading-[56px] tracking-[-1.5px]'>
              {t("service-page.mobile-development.core.titleHighlight")}
            </span>
            <span className='text-gradient-3 text-[48px]  leading-[56px ] md:text-[72px] md:leading-[80px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold text-center'>
              {t("service-page.mobile-development.core.title")}
            </span>
          </div>

          <div className='hidden md:flex flex-col'>
            {DATA.map((el, index) => (
              <div className={`flex justify-between ${el.styleLine} `}>
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className={`flex gap-[24px] md:max-w-[345px] lg:max-w-[410px] pb-[48px] border-b border-b-primary-white ${index === 0 ? "" : "pt-[112px]"}`}>
                  <span className='pt-[12px] text-[24px] leading-[32px] tracking-[-0.5px] text-violet'>
                    {el.number}
                  </span>
                  <div className='flex  flex-col gap-[24px]'>
                    <span className='text-[32px] leading-[38px] font-bold tracking-[0.16px] text-primary-white'>
                      {el.title}
                    </span>
                    <span className='text-[14px] leading-[20px] font-light text-violet'>
                      {el.sub}
                    </span>
                  </div>
                </div>
                <div className='w-[4px] h-auto bg-[rgba(255,_255,_255,_0.60)] relative'>
                  <span className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                    {el.icon()}
                  </span>
                </div>
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className={` ${index === 0 ? "" : "pt-[112px]"}`}>
                  <img className='md:w-[345px] lg:w-full' src={el.img} alt="img" />
                </div>
              </div>
            ))}
          </div>

          <div className='md:hidden pb-[80px] px-[24px]'>
            <CoreSoftwareSp lang={lang} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CoreSoftware 