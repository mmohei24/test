import { Locale } from "@/i18n.config"
import { useTranslation } from "@/src/i18n/client"

export const ModalError = ({ onClick, onClose, lang }: { onClick: any, onClose: any, lang: Locale }) => {
  const { t } = useTranslation(lang)
  return (
    <div className='fixed top-0 bottom-0 left-0 px-[24px]  right-0 z-30 bg-neutral-6 bg-opacity-80 flex items-center justify-center'>
      <div className='relative w-full max-w-[740px] rounded-[36px] border-[1px] border-[solid] border-[#FA4254] 
      bg-[linear-gradient(180deg,_#11142B_0%,_#131731_100%)] backdrop-filter backdrop-blur-[6px] p-[24px] lg:p-[64px] 
      flex flex-col gap-[32px] items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          className="absolute top-[16px] right-4 lg:top-[24px] lg:right-6 cursor-pointer"
          onClick={onClose}
        >
          <path d="M18 6L6 18M6 6L18 18" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex gap-[8px] flex-col">
          <span className="text-[FA4254] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[48px] tracking-[-0.5px] text-center">
            {t('modal.error.title')}
          </span>
          <h3 className='text-gradient-3 text-[48px] leading-[56px] lg:text-[72px] lg:leading-[80px] tracking-[0.36px]
           font-bold text-center capitalize'>

            {t('modal.error.text')}
          </h3>
        </div>
        <p className='text-primary-white text-[20px] leading-[30px] lg:text-[24px] lg:leading-[32px] tracking-[-0.5px] text-center'>
          {t('modal.error.sub')}
        </p>
        <button onClick={onClick}
          className='flex px-[14px] py-[20px] lg:px-[28px] lg:py-[16px]
          rounded-[44px] border-[1px] border-[solid] border-[#FFF] gap-[8px] lg:gap-[12px] 
          bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]'>
          <span className="text-[14px] leading-[20px] lg:text-[18px] lg:leading-[24px] uppercase text-center font-bold text-white">
            {t('modal.error.btn')}

          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M20.4321 13.0417C20.2433 14.4816 19.666 15.843 18.7622 16.9798C17.8585 18.1166 16.6623 18.986 15.302 19.4947C13.9418 20.0034 12.4687 20.1321 11.0407 19.8672C9.61282 19.6023 8.28395 18.9537 7.19664 17.991C6.10933 17.0282 5.3046 15.7876 4.86876 14.4023C4.43292 13.017 4.3824 11.5391 4.72264 10.1272C5.06287 8.71537 5.78102 7.42275 6.80006 6.38801C7.8191 5.35327 9.10059 4.61544 10.5071 4.25366C14.4061 3.25366 18.4421 5.26066 19.9321 9.00066M20.4991 4.00064V9.00064H15.4991" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}