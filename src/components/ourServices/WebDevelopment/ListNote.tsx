import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'


const ListNoteWebDevelopment = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)

  const DATA = [
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/img.svg?updatedAt=1706630377711',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]",
      sub: t("service-page.web-development.list-note.item1.subtitle")
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/img%20(1).svg?updatedAt=1706630377664',
      styleLine: "rounded-[34px] bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]",
      sub: t("service-page.web-development.list-note.item2.subtitle")
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/img%20(2).svg?updatedAt=1706630377663',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]",
      sub: t("service-page.web-development.list-note.item3.subtitle")
    },
  ]
  return (
    <section className="relative  pt-[135px]  px-[24px] md:px-0 pb-[64px] md:pb-[128px]">
      <div className="flex justify-center gap-[32px] relative">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='rounded-tl-[0] rounded-br-[16px] rounded-tr-[16px] rounded-bl-[0] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] h-auto flex-1'></div>
        <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[32px] ">
          {
            DATA.map(el => (
              <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='col-span-1 flex flex-col px-[28px] py-[24px] gap-[24px] rounded-[16px] border-[0px] border-[solid] 
              border-[#FBF775] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]'>
                <div className='flex gap-[32px] items-center'>
                  <img className='w-[54px] h-[54px]' src={el.img} alt="img" />
                  <div className={`h-[12px] flex-1 ${el.styleLine}`}></div>
                </div>
                <span className='text-[14px] leading-[20px] font-light text-primary-white'>
                  {el.sub}
                </span>
              </div>
            ))
          }

        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='rounded-tl-[16px] rounded-br-[0] rounded-tr-[0] rounded-bl-[16px] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] h-auto flex-1'></div>


        <div className="absolute  top-[30%] left-[-30px] z-[-1] w-[calc(100%+30px)] h-full hidden md:flex justify-center gap-[32px]">
          <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[32px] ">
            {
              DATA.map(() => (
                <div className='col-span-1 flex flex-col px-[28px] py-[24px] gap-[24px] rounded-[16px] bg-[linear-gradient(180deg,_rgba(130,_130,_130,_0.20)_0%,_rgba(113,_113,_113,_0.05)_100%)]'>
                  <div className='flex gap-[32px] items-center'>
                  </div>
                  <span className='text-[14px] leading-[20px] font-light text-primary-white'>
                  </span>
                </div>
              ))
            }

          </div>
          <div className='rounded-tl-[16px] rounded-br-[0] rounded-tr-[0] rounded-bl-[16px]  opacity-50 bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] h-auto flex-1'></div>

        </div>


      </div>


    </section>
  )
}

export default ListNoteWebDevelopment 