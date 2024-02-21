import { Locale } from '@/i18n.config';
import { useTranslation } from '@/src/i18n/client';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const LANGUAGE_SELECTOR_ID = 'language-selector';
const MAIN_LANGUAGE = ["en", "ar", "zh-CN"];

const languages = [

  {
    key: 'ar',
    name: 'Arabic',
    compact: "Ara",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/ar.svg?updatedAt=1706882889289" alt="icon-ar" />
  },
  {
    key: 'fr',
    name: 'French',
    compact: "Fre",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/fr.svg?updatedAt=1706882889188" alt="icon-fr" />
  },
  {
    key: 'en',
    name: 'English',
    compact: "Eng",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/en.svg?updatedAt=1706882889269" alt="icon-en" />

  },
  {
    key: 'pl',
    name: 'Polish',
    compact: "Pol",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/pl.svg?updatedAt=1706882889426" alt="icon-pl" />
  },
  {
    key: "zh-CN",
    name: "Chines",
    compact: "Chi",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/cn.svg?updatedAt=1706882889434" alt="icon-cn" />

  },
  {
    key: "se",
    name: "Swedish",
    compact: "Swe",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/se.svg?updatedAt=1706882889231" alt="icon-se" />
  },
  {
    key: "ja",
    name: "Japanese",
    compact: "Jap",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/ja.svg?updatedAt=1706882889339" alt="icon-ja" />
  },
  {
    key: "es",
    name: "Spanish",
    compact: "Spa",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/sp.svg?updatedAt=1706882892491" alt="sp" />

  },
  {
    key: "ko",
    name: "Korean",
    compact: "kor",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/ko.svg?updatedAt=1706882889445" alt="icon-flag" />
  },
  {
    key: "it",
    name: "Italian",
    compact: "Ita",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/itali.svg?updatedAt=1706882889197" alt="icon-flag" />
  },
  {
    key: "nl",
    name: "Dutch",
    compact: "Dut",
    flag: <img className='w-5 h-5' src="https://ik.imagekit.io/arsdfirst/spatium/flag/dutch.svg?updatedAt=1706882889365" alt="img-duct" />
  },
]


const LanguageSelector = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang)
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = useState<any>(languages[0])
  const dropdownRef = useRef<any>(null)

  const handleLanguageChange = async (language: any) => {
    setSelectedLanguage(language)
    setIsOpen(false);

    const _redirectedPathName = redirectedPathName(language.key)
    await window.location.replace(_redirectedPathName)
  }

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  useEffect(() => {
    const locale = pathName.split('/')[1]
    const _selectedLanguage = languages.find(item => item.key === locale)

    setSelectedLanguage(_selectedLanguage)
  }, [])

  const renderListLanguage = () => {
    return (
      <div className="py-1 grid grid-cols-2 gap-x-[32px] gap-y-[18px]" role="none">
        {languages.map((language, index) => {
          return (
            <button
              key={language.key}
              onClick={() => handleLanguageChange(language)}
              className={`${selectedLanguage.key === language.key
                ? "text-primary-5"
                : "text-primary-white"
                } px-2 py-2 text-xs text-start items-center inline-flex ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'} gap-x-[8px] hover:text-primary-5 hover:bg-transparent font-normal`}

              role="menuitem"
            >
              {/* <FlagIcon countryCode={language.key} /> */}
              {language.flag}
              <span className="truncate">{language.name}</span>
              <div className="w-[20px] h-[20px]">

                <svg className={`${selectedLanguage.key === language.key ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16797 10.0007L8.33464 14.1673L16.668 5.83398" stroke="#00A6F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
    )
  }
  return (
    <div ref={dropdownRef}>
      <div className="hidden md:flex relative min-w-[100px]" >
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-start sm:justify-center uppercase
          border-gray-300 shadow-sm text-xs leading-7 font-normal text-violet
          focus:outline-none gap-x-[4px] sm:bg-transparent sm:[box-shadow:none] rounded-[44px] 
          border-[1px] border-[solid] 
          py-[12px] px-[20px] "
          aria-expanded={isOpen}
          id={LANGUAGE_SELECTOR_ID}
        >
          {selectedLanguage.compact}

          {selectedLanguage.flag}

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#C5C5C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && <div
          className=" absolute ltr:right-0 rtl:left-0  top-full mt-6 p-[32px] rounded-md shadow-lg ring-black ring-opacity-5 
        rounded-tl-none rounded-br-[36px] rounded-tr-none rounded-bl-[36px] border-[1px] border-[solid]
        border-[#FFF] border-t-0 bg-[linear-gradient(180deg,_#11142B_0%,_#2B2E48_100%)] [box-shadow:0px_4px_25.3px_0px_rgba(31,_36,_78,_0.50)] w-max h-fit
        [border-image:linear-gradient(_to_bottom,_white,_transparent_)_1_100%]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          {renderListLanguage()}
        </div>}
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex  items-center -mx-[20px] justify-between w-[calc(100%+40px)]" role="none">
        {languages.map((language, index) => {
          const isShow = MAIN_LANGUAGE.includes(language.key)
          return (
            isShow && <button
              key={language.key}
              onClick={() => handleLanguageChange(language)}
              className={`${selectedLanguage.key === language.key
                ? "border-primary-5"
                : "border-gray-300"
                } flex items-center justify-center uppercase
                shadow-sm text-sm leading-7 font-normal text-violet
                focus:outline-none gap-x-[4px] md:bg-transparent md:[box-shadow:none] rounded-[44px] 
                border-[1px] border-[solid] py-[12px] px-[20px] 
                hover:text-primary-5 hover:bg-transparent`}
              role="menuitem"
            >
              <span className={`${selectedLanguage.key === language.key
                ? "text-primary-5 "
                : "text-primary-white"}
                truncate uppercase`}>{language.compact}</span>
              <span className='rounded-full overflow-hidden'>
                {language.flag}
              </span>
            </button>
          );
        })}

        <div className='w-[44px] h-[44px] rounded-full border border-[#fff] flex items-center justify-center'
          onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="#BABBC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {isOpen && <div
          className=" fixed top-[64px] left-0 right-0 ltr:right-0 rtl:left-0 mt-6 p-[32px] rounded-md shadow-lg ring-black ring-opacity-5 
        rounded-tl-none rounded-br-[36px] rounded-tr-none rounded-bl-[36px] border-[1px] border-[solid]
        border-[#FFF] border-t-0 bg-[linear-gradient(180deg,_#11142B_0%,_#2B2E48_100%)] [box-shadow:0px_4px_25.3px_0px_rgba(31,_36,_78,_0.50)]\
        h-fit w-full
        [border-image:linear-gradient(_to_bottom,_white,_transparent_)_1_100%]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className='mb-[62px] mt-8 text-primary-white pl-2' onClick={() => setIsOpen(!isOpen)}>
            {/* TODO: multi language */}
            {`<`}<span className='pl-2'>
              {t('home')}
            </span>
          </div>
          {renderListLanguage()}
        </div>}
      </div>
    </div>
  )
}

export default LanguageSelector