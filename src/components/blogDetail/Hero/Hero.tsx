import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n"
import { IconStar } from "../../IconStar"

const style: any = {
  development: "rounded-[43px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]",
  insights: "rounded-[43px] bg-[linear-gradient(90deg,_#00FB94_0%,_#00A6F9_100%)]",
  seo: "rounded-[43px] bg-[linear-gradient(94deg,_#00FB94_1.89%,_#208774_91.89%)]",
  design: "rounded-[43px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]"
}

const HeroBlogDetail = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)
  return (
    <section className="relative  pt-[135px]  px-[24px]  border-b border-b-[#989AAE] ">
      <div className="flex justify-center ">
        <div className=" relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[26px] pb-[128px]">
          <div data-aos='fade-right' className='flex  gap-[10px]'>
            <span className='text-[14px] leading-[20px] capitalize text-white'>{t("blog-page.navigation")}</span>
            <IconStar />
            <span className='text-[#00A6F9] text-[14px] leading-[20px] capitalize'>{t("blog-details-page.navigation")}</span>
          </div>
          <div data-aos='zoom-in' className="relative py-[48px] px-[24px] md:p-[64px] flex  flex-col w-full gap-[48px] overflow-hidden
           rounded-[36px] border-[1px] border-[rgba(255,255,255,0.30)] bg-[#1E234D]">
            <div className="flex flex-col gap-[24px] relative z-[1]">
              <div className={`${style['insights']} px-[20px] py-[6px] md:px-[24px] md:py-[12px] text-[#1F244E] 
              text-[20px] leading-[30px] md:text-[24px] 
              not-italic font-bold md:leading-[20px] uppercase w-fit`}>
                {t("blog-details-page.type")}
              </div>
              <h1 className="text-[32px] leading-[38px] md:text-[72px] md:leading-[80px] text-primary-white tracking-[0.36px] font-bold">
                {t("blog-details-page.title")}
              </h1>
            </div>
            <div className="flex justify-between items-center relative z-[1]">
              <div className="flex gap-[8px]  items-center">
                <div className="w-[36px] h-[36px] rounded-full  border border-white"></div>
                <span className="text-[18px] leading-[28px] text-white font-light">
                  Jane Jou
                </span>
              </div>
              <span className="text-[16px] leading-[24px] font-light text-primary-white">
                4JAN
              </span>

            </div>
            <img className="hidden md:block absolute right-0 top-0" src="https://ik.imagekit.io/arsdfirst/spatium/blog/New%20Folder/Sun%20(1).svg?updatedAt=1706636453912" alt="img" />
            <img className="absolute right-0 bottom-0" src="https://ik.imagekit.io/arsdfirst/spatium/blog/Ellipse%2023%20(1).png?updatedAt=1706287002323" alt="img" />
            <img className="absolute left-0  top-0" src="https://ik.imagekit.io/arsdfirst/spatium/blog/Ellipse%2021%20(1).png?updatedAt=1706287002250" alt="img" />
            <img className="absolute md:right-0 lg:right-[20%]  top-1/2 -translate-y-1/2" src="https://ik.imagekit.io/arsdfirst/spatium/blog/Group%201000001828.png?updatedAt=1706287002126" alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroBlogDetail