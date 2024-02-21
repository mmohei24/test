import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'

const ListNoteUiUx = async ({ lang }: { lang: Locale }) => {

  const { t } = await useTranslation(lang)

  const DATA = [
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/ui-ux/New%20Folder/img%20(8).svg?updatedAt=1706635151642',
      styleLine: "rounded-[34px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]",
      sub: t("service-page.uiux.list-note.items.item1.sub")
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/our-sevices/ui-ux/New%20Folder/img%20(9).svg?updatedAt=1706635151544',
      styleLine: "rounded-[34px] bg-[linear-gradient(254deg,_#01CDCB_12.62%,_#00A6F9_81.94%)] [box-shadow:0px_0px_24px_0px_#00A6F9]",
      sub: t("service-page.uiux.list-note.items.item2.sub")
    },
  ]

  return (
    <section className="relative  pt-[135px]  px-[24px] md:px-0 pb-[64px] md:pb-[128px]">
      <div className="flex justify-center gap-[32px] relative">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='rounded-tl-[0] rounded-br-[16px] rounded-tr-[16px] rounded-bl-[0] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] h-auto flex-1'></div>

        <div className=" relative w-full md:w-fit md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-[32px]  ">
          {
            DATA.map(el => (
              <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='md:max-w-[calc(50%-16px)] lg:max-w-[481px] h-full flex flex-col px-[28px] py-[24px] gap-[24px] rounded-[16px] border-[0px] border-[solid] border-[#FBF775] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]'>
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
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='rounded-tl-[16px] rounded-br-[0] rounded-tr-[0] 
        rounded-bl-[16px] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] h-auto flex-1'></div>

        <div className="absolute  top-[30%] left-[0] z-[-1] w-[calc(100%+30px)] h-full hidden md:flex justify-center gap-[32px]">
          <div className='rounded-tl-[0] rounded-br-[16px] rounded-tr-[16px] rounded-bl-[0]  opacity-50 bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]
            h-auto w-[5%]'></div>

          <div className=" relative w-fit md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-[32px] ">
            {
              DATA.map((el) => (
                <div className='md:max-w-[calc(50%-16px)] lg:max-w-[481px]  flex flex-col px-[28px]  py-[24px] gap-[24px] rounded-[16px] bg-[linear-gradient(180deg,_rgba(130,_130,_130,_0.20)_0%,_rgba(113,_113,_113,_0.05)_100%)]'>
                  <div className='flex gap-[32px] items-center'>
                    <img className='invisible' src={el.img} alt="img" />
                    <div className={`invisible h-[12px] flex-1 ${el.styleLine}`}></div>
                  </div>
                  <span className='invisible text-[14px] leading-[20px] font-light text-primary-white'>
                    {el.sub}
                  </span>
                </div>
              ))
            }

          </div>
          <div className='rounded-tl-[16px] rounded-br-[0] rounded-tr-[0] rounded-bl-[16px] 
           opacity-50 bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]
            h-auto flex-1'></div>

        </div>
      </div>
    </section>
  )
}

export default ListNoteUiUx 