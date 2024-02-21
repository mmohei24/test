'use client'
import { useState } from "react"
import { sendMail } from "./contact/Content/service"
import { ModalError } from "./utils/ModalError"
import { ModalSuccess } from "./utils/ModalSuccess"
import { useTranslation } from "../i18n/client"
import { Locale } from "@/i18n.config"

export const FormContact = ({ lang }: { lang: Locale }) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const { t } = useTranslation(lang)
  const getContentEmail = (data: any) => {
    const { name, phone, company, message } = data
    const splits = message.split('\n')
    const messageSend = splits.reduce((init: string, el: any) => {
      return init + `<p>${el}</p>`
    }, '')
    const phoneValue = phone ? `<p>Phone:${phone}</p>` : ''

    const content = `<html>
    <head></head>
    <body>
    ${messageSend}
    <p>${name}</p>
    ${phoneValue}
    </body>
    </html>`
    return content
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    const { name, email, phone, message } = e.target.elements;

    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value
    };
    const contentMail = getContentEmail(formData)

    const body = {
      sender: {
        name: formData.name,
        email: formData.email
      },
      to: [
        {
          email: process.env.NEXT_PUBLIC_OWNER_EMAIL,
        }
      ],
      subject: 'Contact',
      htmlContent: contentMail
    }
    try {
      const res = await sendMail(body)
      if (res.ok) {
        onToggleSuccess()
        return
      }
      onToggleError()

    } catch (error) {
      onToggleError()
      // throw error
    }

  };

  const onToggleSuccess = () => {

    setShowSuccess(!showSuccess)
  }
  const onToggleError = () => {

    setShowError(!showError)
  }
  return (
    <section className='py-[64px] md:[95px]  lg:py-[128px] '>
      <div className='relative w-full md:max-w-4.5xl lg:max-w-7xl mx-auto px-[24px] '>
        <div className='flex gap-[32px] flex-col lg:flex-row '>
          <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500" className="flex flex-col gap-[32px] lg:w-[585px]">
            <div className='flex flex-col gap-[10px] md:gap-[12px]'>
              <span className='text-gradient-2 w-full text-[32px] leading-[48px] md:text-[36px] tracking-[-0.5px ] md:leading-[48px] md:tracking-[-1.5px] lg:text-[40px] lg:leading-[56px] lg:tracking-[1.5px] capitalize'>
                {t('home-page.getInTouch.hightLight')}
              </span>
              <span className=' text-gradient-3 w-full text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
                {t('home-page.getInTouch.title')}

              </span>
            </div>
            <span className='w-full h-[1px] bg-[#989AAE]'>
            </span>
            <div className="flex flex-col gap-[12px]">
              <a href="mailto:contact@spatiumsoftware.com" className="text-[16px] font-bold leading-6 underline text-white">
                contact@spatiumsoftware.com
              </a>
              <a href="tel:0020123456789" className="text-[16px] font-bold leading-6 underline text-white">
                0020123456789
              </a>
              <span className="text-[16px] font-bold leading-6 underline text-white">
                Egypt. Assiut
              </span>
            </div>
          </div>
          <form
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col gap-[32px] flex-1"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-[10px]">

              <input
                type="text"
                className="text-white w-full px-[32px] py-[24px] rounded-[8px] border border-[#fff] text-[24px] leading-[120%] bg-transparent"
                placeholder={t('home-page.getInTouch.placeholderName')}
                name='name'
                required
              />
            </div>
            <div className="flex flex-col gap-[10px]">

              <input
                type="text"
                className=" text-white w-full px-[32px] py-[24px] rounded-[8px] border border-[#fff] text-[24px] leading-[120%] bg-transparent"
                placeholder={t('home-page.getInTouch.placeholderPhone')}
                name='phone'
                required
              />
            </div>
            <div className="flex flex-col gap-[10px]">

              <input
                type="email"
                className="text-white w-full px-[32px] py-[24px] rounded-[8px] border border-[#fff] text-[24px] leading-[120%] bg-transparent"
                placeholder={t('home-page.getInTouch.placeholderMail')}
                name='email'
                required
              />
            </div>


            <div className="col-span-2 ">

              <textarea
                className="text-white w-full px-[32px] py-[24px] rounded-[8px] border border-[#fff] text-[24px] leading-[120%] bg-transparent"
                placeholder={t('home-page.getInTouch.placeholderMess')}
                rows={5}
                name='message'
                required

              />
            </div>
            <div className="flex">
              <input
                type="submit"
                className="cursor-pointer flex w-full bg-btn-send-contact rounded-[44px] border border-white px-[36px] py-[24px] items-center 
                justify-center text-[24px] font-bold uppercase text-white"
                value={t('home-page.getInTouch.btnSubmit')}
              />
            </div>
            <span className="text-primary-white text-[16px] font-light leading-[24px] text-center">
              {t('home-page.getInTouch.note')} <br />
              <a href="mailto:contact@spatiumsoftware.com" className="font-semibold underline">
                contact@spatiumsoftware.com
              </a>
            </span>
          </form>
        </div>
      </div>
      {showSuccess && <ModalSuccess lang={lang} onClick={onToggleSuccess} onClose={onToggleSuccess} />}
      {showError && <ModalError lang={lang} onClick={onToggleError} onClose={onToggleError} />}

    </section>
  )
}
