import { useTranslation } from "@/src/i18n/client"

export const ModalSuccess = ({ onClick, onClose, lang }: any) => {
  const { t } = useTranslation(lang)

  return (
    <div className='fixed top-0 bottom-0 left-0 px-[24px]  right-0 z-30 bg-neutral-6 bg-opacity-80 flex items-center justify-center'>
      <div className='relative w-full max-w-[740px] rounded-[36px] border-[1px] border-[solid] border-[#8AFDCE] 
      bg-[linear-gradient(180deg,_#11142B_0%,_#131731_100%)] backdrop-filter backdrop-blur-[6px] p-[24px] lg:p-[64px] 
      flex flex-col gap-[32px] items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          className="absolute top-[16px] right-4 lg:top-[24px] lg:right-6 cursor-pointer"
          onClick={onClose}
        >
          <path d="M18 6L6 18M6 6L18 18" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex gap-[8px] flex-col">
          <span className="text-gradient text-[24px] leading-[32px] lg:text-[32px] lg:leading-[48px] tracking-[-0.5px] text-center">
            {t('modal.success.title')}
          </span>
          <h3 className='capitalize text-gradient-3 text-[48px] leading-[56px] lg:text-[72px] lg:leading-[80px] tracking-[0.36px] font-bold text-center'>
            {t('modal.success.text')}
          </h3>
        </div>
        <p className='text-primary-white text-[20px] leading-[30px] lg:text-[24px] lg:leading-[32px] tracking-[-0.5px] text-center'>
          {t('modal.success.sub')}
        </p>
        <button onClick={onClick}
          className='flex px-[14px] py-[20px] lg:px-[28px] lg:py-[16px]
          rounded-[44px] border-[1px] border-[solid] border-[#FFF] gap-[8px] lg:gap-[12px] 
          bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]'>
          <span className="text-[14px] leading-[20px] lg:text-[18px] lg:leading-[24px] uppercase text-center font-bold text-white">
            {t('modal.success.btn')}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 18M19 12L13 6" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}