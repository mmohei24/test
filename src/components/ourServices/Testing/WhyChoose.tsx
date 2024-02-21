"use client"
import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n/client'

const WhyChooseTesting = ({ lang }: { lang: Locale }) => {

  const { t } = useTranslation(lang)

  const DATA = [
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/testing/New%20Folder/img.svg?updatedAt=1706633860118",
      title: t("service-page.testing.why-choose.items.item1.title"),
      content: t("service-page.testing.why-choose.items.item1.content")
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/testing/New%20Folder/img(1).svg?updatedAt=1706633890290",
      title: t("service-page.testing.why-choose.items.item2.title"),
      content: t("service-page.testing.why-choose.items.item2.content")
    },
    {
      img: "https://ik.imagekit.io/arsdfirst/spatium/our-sevices/testing/New%20Folder/img(2).svg?updatedAt=1706633925387",
      title: t("service-page.testing.why-choose.items.item3.title"),
      content: t("service-page.testing.why-choose.items.item3.content")
    },

  ]



  return (
    <section className='pt-[124px] pb-[64px] '>
      <div className="px-6 ">
        <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[32px] ">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col items-center gap-[12 px]'>
            <span className='text-gradient text-[40px] leading-[56px] tracking-[-1.5px]'>
              {t("service-page.testing.why-choose.titleHighlight")}
            </span>
            <span className='text-gradient-3 lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
              {t("service-page.testing.why-choose.title")}
            </span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-[32px]'>
            {DATA.map(el => (
              <div key={el.title} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='col-span-1 rounded-[24px] border-[1px] border-[solid] border-[#00FB94] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)] backdrop-filter backdrop-blur-[6px]
              px-[28px] py-[24px] flex flex-col gap-[24px] items-center'>
                <img className='w-[164px] md:w-[112px]' src={el.img} alt="img" />
                <h3 className='text-[32px] leading-[38px] font-bold tracking-[0.16px] text-primary-white text-center'>
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

export default WhyChooseTesting 