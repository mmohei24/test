import { Locale } from '@/i18n.config'
import { useTranslation } from '@/src/i18n'
import { IconStar } from '../../IconStar'



const HeroMobileAppDevelopment = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang)
  return (
    <section className="relative  pt-[135px]  px-[24px]  border-b border-b-[#989AAE] ">
      <div className="flex justify-center ">
        <div data-aos="fade-right" className=" relative w-full lg:max-w-4.5xl xl:max-w-7xl mx-auto flex flex-col gap-[26px] pb-[128px]">
          <div className='flex  gap-[10px]'>
            <span className='text-[14px] leading-[20px] capitalize text-white'>{t("service-page.navigation")}</span>
            <IconStar />
            <span className='text-[#00A6F9] text-[14px] leading-[20px] capitalize'>{t("service-page.mobile-development.navigation")}</span>
          </div>
          <div data-aos="zoom-in-up" className='relative flex flex-col md:flex-row gap-[36px] items-center'>
            <img className='absolute lg:top-1/2 lg:-translate-y-1/2 z-[-1]' src="https://ik.imagekit.io/arsdfirst/spatium/our-sevices/web/Subtract.png?updatedAt=1706157954371" alt="img-light" />
            <div className='flex gap-[32px] flex-col h-full p-[24px] lg:p-[64px] flex-1 lg:max-w-[567px] xl:max-w-none
            rounded-[36px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]'>
              <h1 className='text-[48px] leading-[56px] tracking-[0.24px] lg:text-[72px] lg:leading-[80px] lg:tracking-[0.36px] xl:text-[90px] xl:leading-[88px] xl:tracking-[0.45px] font-bold text-primary-white whitespace-pre-wrap'>
                {t("service-page.mobile-development.hero.title")}
              </h1>
              <div className='w-full h-[1px] bg-[linear-gradient(180deg,_#fff_100%,_#fff_0%)]'>

              </div>
              <span className='text-[20px] leading-[30px] text-[#fff]'>
                {t("service-page.mobile-development.hero.subtitle")}
              </span>
            </div>
            <div className='rounded-[36px] max-w-[374px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]'>
              <img className='w-full h-full'
                src="https://ik.imagekit.io/arsdfirst/spatium/our-sevices/mobile-app/New%20Folder/image%20(10).svg?updatedAt=1706631455272" alt="img-service-1" />
            </div>
            <div className="md:absolute bottom-0 
            md:right-[38.5%] xl:right-[30.5%] lg:translate-x-1/2 
            md:translate-y-1/2 px-[38px] py-[28px] h-[214px] w-[214px] 
            flex items-center justify-center flex-col gap-[8px] 
            rtl:md:left-[38.5%] rtl:xl:left-[30.5%] rtl:lg:-translate-x-1/2 rtl:md:translate-y-1/2 rtl:right-[unset]
              rounded-full border border-white border-solid
              bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]
              ">
              <IconStar />
              <span className="text-[36px] font-bold leading-[110%] text-primary-white text-center">
                {t("service-page.mobile-development.hero.start-project")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMobileAppDevelopment 