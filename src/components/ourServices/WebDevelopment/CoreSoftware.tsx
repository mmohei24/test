import { Locale } from '@/i18n.config'
import { CoreSoftwareSp } from './CoreSoftwareSp'
import { useTranslation } from '@/src/i18n'

const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="396" height="421" viewBox="0 0 396 421" fill="none" className='hidden lg:block absolute top-0 right-0 translate-x-[30%] -translate-y-[25%]'>
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

const CoreSoftware = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image.svg?updatedAt=1706630377903',
      styleLine: "flex-row",
      sub: t("service-page.web-development.core.data.item1.subtitle"),
      number: t("service-page.web-development.core.data.item1.number"),
      title: t("service-page.web-development.core.data.item1.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30" fill="none">
        <path d="M14.4001 1.51556C15.554 -0.488582 18.446 -0.488583 19.5999 1.51556L33.4109 25.5031C34.5624 27.5031 33.1188 30 30.811 30H3.18899C0.881181 30 -0.562394 27.5031 0.58912 25.5031L14.4001 1.51556Z" fill="url(#paint0_linear_2_11967)" />
        <defs>
          <linearGradient id="paint0_linear_2_11967" x1="17" y1="-3" x2="17" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#01A6FA" />
            <stop offset="1" stopColor="#02DBBC" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(1).svg?updatedAt=1706630377776',
      styleLine: "flex-row-reverse",
      sub: t("service-page.web-development.core.data.item2.subtitle"),
      number: t("service-page.web-development.core.data.item2.number"),
      title: t("service-page.web-development.core.data.item2.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_11998)" />
        <defs>
          <linearGradient id="paint0_linear_2_11998" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#02CFCA" />
            <stop offset="1" stopColor="#01FC95" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(2).svg?updatedAt=1706630377715',
      styleLine: "flex-row",
      sub: t("service-page.web-development.core.data.item3.subtitle"),
      number: t("service-page.web-development.core.data.item3.number"),
      title: t("service-page.web-development.core.data.item3.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12030)" />
        <defs>
          <linearGradient id="paint0_linear_2_12030" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78F8BB" />
            <stop offset="1" stopColor="#F6F878" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(3).svg?updatedAt=1706630377800',
      styleLine: "flex-row-reverse",
      sub: t("service-page.web-development.core.data.item4.subtitle"),
      number: t("service-page.web-development.core.data.item4.number"),
      title: t("service-page.web-development.core.data.item4.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12061)" />
        <defs>
          <linearGradient id="paint0_linear_2_12061" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCF776" />
            <stop offset="1" stopColor="#EEA592" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/image%20(4).svg?updatedAt=1706630377685',
      styleLine: "flex-row",
      sub: t("service-page.web-development.core.data.item5.subtitle"),
      number: t("service-page.web-development.core.data.item5.number"),
      title: t("service-page.web-development.core.data.item5.title"),
      icon: () => (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30" fill="none">
        <path d="M14.9001 1.51556C16.054 -0.488582 18.946 -0.488583 20.0999 1.51556L33.9109 25.5031C35.0624 27.5031 33.6188 30 31.311 30H3.68899C1.38118 30 -0.0623937 27.5031 1.08912 25.5031L14.9001 1.51556Z" fill="url(#paint0_linear_2_12090)" />
        <defs>
          <linearGradient id="paint0_linear_2_12090" x1="17.5" y1="-3" x2="17.5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8B0AD" />
            <stop offset="1" stopColor="#CE56F2" />
          </linearGradient>
        </defs>
      </svg>)
    },
  ]

  return (
    <section className="relative  pt-[135px]  ">
      <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto">
        <div className='w-full relative rounded-[64px] flex flex-col gap-[64px] md:gap-[120px]
        bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] px-[24px]  md:px-[40px] py-[64px] lg:px-[103px] lg:py-[128px]'>
          <IconSun />
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center gap-[12 px]'>
            <span className='text-gradient text-[40px] leading-[56px] tracking-[-1.5px] text-center'>
              {t("service-page.web-development.core.titleHighlight")}
            </span>
            <span className='text-center text-gradient-3  text-[48px]  leading-[56px ] md:text-[72px] md:leading-[80px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
              {t("service-page.web-development.core.title")}
            </span>
          </div>

          <div className='hidden md:flex flex-col'>
            {DATA.map((el, index) => (
              <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className={`flex justify-between ${el.styleLine} `}>
                <div className={`flex gap-[24px] md:max-w-[345px] lg:max-w-[410px] pb-[48px] border-b border-b-primary-white ${index === 0 ? "" : "pt-[112px]"}`}>
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

          <div className='pb-[80px]' >
            <CoreSoftwareSp lang={lang} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CoreSoftware 