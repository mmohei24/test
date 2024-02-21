import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'



const WhyChooseMobileAppDevelopment = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/img.svg?updatedAt=1706631454527",
      title: t('service-page.mobile-development.whyChoose.item1.title'),
      content: t('service-page.mobile-development.whyChoose.item1.sub')
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/img(1).svg?updatedAt=1706631491020",
      title: t('service-page.mobile-development.whyChoose.item2.title'),
      content: t('service-page.mobile-development.whyChoose.item2.sub')
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/img(2).svg?updatedAt=1706631520641",
      title: t('service-page.mobile-development.whyChoose.item3.title'),
      content: t('service-page.mobile-development.whyChoose.item3.sub')
    },

  ]

  return (
    <section className='pt-[124px] pb-[64px] '>
      <div className="px-6">
        <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[32px] ">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center gap-[12 px]'>
            <span className='text-gradient text-[40px] leading-[56px] tracking-[-1.5px]'>
              {t('service-page.mobile-development.whyChoose.title')}
            </span>
            <span className='text-gradient-3 xl:text-[90px] xl:leading-[88px] xl:tracking-[0.45px] font-bold'>
              {t('service-page.mobile-development.whyChoose.sub')}
            </span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-[32px]'>
            {DATA.map(el => (
              <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" key={el.title} className='group col-span-1 rounded-[24px] border-[1px] border-[solid] border-[#00FB94] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)] backdrop-filter backdrop-blur-[6px]
              px-[28px] py-[24px] flex flex-col gap-[24px] items-center'>
                <img className='w-[164px] lg:w-[112px]' src={el.img} alt="img" />
                <h3 className='text-[32px] leading-[38px] font-bold tracking-[0.16px]  text-primary-white text-center'>
                  {el.title}
                </h3>
                <span className='text-[14px] leading-[20px] font-light text-primary-white text-center'>
                  {el.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyChooseMobileAppDevelopment 