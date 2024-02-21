'use client'
import { Locale } from "@/i18n.config";
import Pagination from "@/src/components/ui/pagination";
import { useTranslation } from "@/src/i18n/client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContentBlogs = ({ lang }: { lang: Locale }) => {
  const urlTmp = `/${lang}/blog/lucrative-business-in-the-arabic-speaking-market-video-game-localization`
  const [currentType, setCurrentType] = useState('all')
  const { t } = useTranslation(lang)
  const [valueSearch, setValueSearch] = useState('')

  const [dataBlog, setDataBlog] = useState<any>([])

  const Items = [
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(2).png?updatedAt=1706281672130',
      type: t("blog-page.type.development.title"),
      time: "4Jan",
      content: t("blog-page.items.item1.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(1).png?updatedAt=1706281672152',
      type: t("blog-page.type.design.title"),
      time: "4Jan",
      content: t("blog-page.items.item2.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover.png?updatedAt=1706281672113',
      type: t("blog-page.type.insights.title"),
      time: "4Jan",
      content: t("blog-page.items.item3.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(3).png?updatedAt=1706281672098',
      type: t("blog-page.type.seo.title"),
      time: "4Jan",
      content: t("blog-page.items.item4.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(2).png?updatedAt=1706281672130',
      type: t("blog-page.type.development.title"),
      time: "4Jan",
      content: t("blog-page.items.item5.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(1).png?updatedAt=1706281672152',
      type: t("blog-page.type.design.title"),
      time: "4Jan",
      content: t("blog-page.items.item6.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover.png?updatedAt=1706281672113',
      type: t("blog-page.type.insights.title"),
      time: "4Jan",
      content: t("blog-page.items.item7.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(3).png?updatedAt=1706281672098',
      type: t("blog-page.type.seo.title"),
      time: "4Jan",
      content: t("blog-page.items.item8.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(2).png?updatedAt=1706281672130',
      type: t("blog-page.type.development.title"),
      time: "4Jan",
      content: t("blog-page.items.item9.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(1).png?updatedAt=1706281672152',
      type: t("blog-page.type.design.title"),
      time: "4Jan",
      content: t("blog-page.items.item10.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover.png?updatedAt=1706281672113',
      type: t("blog-page.type.insights.title"),
      time: "4Jan",
      content: t("blog-page.items.item11.content"),
      author: "Jane Jou"
    },
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover%20(3).png?updatedAt=1706281672098',
      type: t("blog-page.type.seo.title"),
      time: "4Jan",
      content: t("blog-page.items.item12.content"),
      author: "Jane Jou"
    },
  ]

  const style: any = {
    development: "rounded-[43px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]",
    insights: "rounded-[43px] bg-[linear-gradient(90deg,_#00FB94_0%,_#00A6F9_100%)]",
    seo: "rounded-[43px] bg-[linear-gradient(94deg,_#00FB94_1.89%,_#208774_91.89%)]",
    design: "rounded-[43px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]"
  }
  const Type = [
    {
      id: t("blog-page.type.all.id"),
      title: t("blog-page.type.all.title")
    },
    {
      id: t("blog-page.type.insights.id"),
      title: t("blog-page.type.insights.title")
    },
    {
      id: t("blog-page.type.development.id"),
      title: t("blog-page.type.development.title")
    },
    {
      id: t("blog-page.type.design.id"),
      title: t("blog-page.type.design.title")
    },
    {
      id: t("blog-page.type.seo.id"),
      title: t("blog-page.type.seo.title")
    },

  ]

  useEffect(() => {
    setDataBlog(Items)
  }, [])

  const onChangeSearch = (e: any) => {
    const value = e.target.value
    setValueSearch(value)
    const filter: any = Items.filter((el: any) => el.type.toLowerCase().includes(value.toLowerCase()))
    setDataBlog(filter)
  }

  const onShowMore = () => {
    const newData = [...dataBlog, ...Items]
    setDataBlog(newData)

  }

  return (
    <section className="relative w-full  py-[70px]  px-5 xl:px-0">
      <div className=" w-full max-w-7xl mx-auto flex flex-col gap-[48px] md:gap-[64px]">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="hidden md:flex gap-[10px] w-fit mx-auto ">
          {
            Type.map(el => (
              <div key={el.id} className={`px-[20px] py-[12px] 
            rounded-[44px] border-[1px] border-[solid] border-[#FFF] 
            text-[14px] leading-[24px] uppercase font-bold text-primary-white
            cursor-pointer
            ${currentType === el.id ? "bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]" : "bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]"}
            backdrop-filter backdrop-blur-[31.899999618530273px]`}
                onClick={() => setCurrentType(el.id)}>
                {el.title}
              </div>
            ))
          }
          {currentType !== 'search' ?
            <div className={`px-[20px] py-[12px] 
          rounded-[44px] border-[1px] border-[solid] border-[#FFF] 
          text-[14px] leading-[24px] uppercase font-bold text-primary-white cursor-pointer
          bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
          flex gap-[8px] items-center
          backdrop-filter backdrop-blur-[31.899999618530273px]`}
              onClick={() => setCurrentType('search')}>
              {t("blog-page.search.text")}
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.5 3.5C6.46243 3.5 4 5.96243 4 9C4 12.0376 6.46243 14.5 9.5 14.5C11.019 14.5 12.393 13.8852 13.3891 12.8891C14.3852 11.893 15 10.519 15 9C15 5.96243 12.5376 3.5 9.5 3.5ZM2.5 9C2.5 5.13401 5.63401 2 9.5 2C13.366 2 16.5 5.13401 16.5 9C16.5 10.6625 15.9197 12.1906 14.9517 13.3911L18.2803 16.7197C18.5732 17.0126 18.5732 17.4874 18.2803 17.7803C17.9874 18.0732 17.5126 18.0732 17.2197 17.7803L13.8911 14.4517C12.6906 15.4197 11.1625 16 9.5 16C5.63401 16 2.5 12.866 2.5 9Z" fill="#FDFBFB" />
              </svg>
            </div>
            :
            <div className="relative">
              <input onChange={onChangeSearch} type="text" className="bg-transparent rounded-[44px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
            py-[12px] pl-[50px] !outline-none !border-none !shadow-none
            text-[14px] leading-[24px] text-primary-white" placeholder={t("blog-page.search.placeholder")} />
              <svg className="absolute top-1/2 -translate-y-1/2 left-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 3.50391C5.96243 3.50391 3.5 5.96634 3.5 9.00391C3.5 12.0415 5.96243 14.5039 9 14.5039C10.519 14.5039 11.893 13.8891 12.8891 12.893C13.8852 11.8969 14.5 10.5229 14.5 9.00391C14.5 5.96634 12.0376 3.50391 9 3.50391ZM2 9.00391C2 5.13791 5.13401 2.00391 9 2.00391C12.866 2.00391 16 5.13791 16 9.00391C16 10.6664 15.4197 12.1945 14.4517 13.395L17.7803 16.7236C18.0732 17.0165 18.0732 17.4913 17.7803 17.7842C17.4874 18.0771 17.0126 18.0771 16.7197 17.7842L13.3911 14.4556C12.1906 15.4236 10.6625 16.0039 9 16.0039C5.13401 16.0039 2 12.8699 2 9.00391Z" fill="#FDFBFB" />
              </svg>
            </div>
          }
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="flex md:hidden gap-[10px]">
          <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full
          border border-[#fff]  bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4.00391H20V6.17591C19.9999 6.7063 19.7891 7.21492 19.414 7.58991L15 12.0039V19.0039L9 21.0039V12.5039L4.52 7.57591C4.18545 7.20783 4.00005 6.7283 4 6.23091V4.00391Z" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="relative flex-1">
            <input type="text" className="bg-transparent w-full rounded-[44px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]
            py-[12px] pl-[50px] !outline-none !border-none !shadow-none
            text-[14px] leading-[24px] text-primary-white" placeholder="I’m looking for" />
            <svg className="absolute top-1/2 -translate-y-1/2 left-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 3.50391C5.96243 3.50391 3.5 5.96634 3.5 9.00391C3.5 12.0415 5.96243 14.5039 9 14.5039C10.519 14.5039 11.893 13.8891 12.8891 12.893C13.8852 11.8969 14.5 10.5229 14.5 9.00391C14.5 5.96634 12.0376 3.50391 9 3.50391ZM2 9.00391C2 5.13791 5.13401 2.00391 9 2.00391C12.866 2.00391 16 5.13791 16 9.00391C16 10.6664 15.4197 12.1945 14.4517 13.395L17.7803 16.7236C18.0732 17.0165 18.0732 17.4913 17.7803 17.7842C17.4874 18.0771 17.0126 18.0771 16.7197 17.7842L13.3911 14.4556C12.1906 15.4236 10.6625 16.0039 9 16.0039C5.13401 16.0039 2 12.8699 2 9.00391Z" fill="#FDFBFB" />
            </svg>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {dataBlog
            .map((el: any, index: any) => (
              <Link
                href={urlTmp}
                className="col-span-1 rounded-[24px]  bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)] backdrop-filter backdrop-blur-[6px]
              px-[20px] pt-[20px] pb-[32px] flex flex-col gap-[16px]  "
                key={index}
              >
                <img className="w-full h-[220px] rounded-[20px] border border-[rgba_255_255_255_0.30]" src={el.img} alt="img" />
                <div className="flex items-center justify-between">
                  <span className={`rounded-[43px] px-[12px]  py-[4px] text-[14px] leading-[20px] font-bold uppercase ${style[`${el.type}`]}`}>
                    {el.type}
                  </span>
                  <span className="text-[16px] leading-[24px] font-light text-primary-white">
                    {el.time}
                  </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 340 2" fill="none">
                  <path d="M1 1H339" stroke="url(#paint0_linear_89_7918)" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear_89_7918" x1="1" y1="2" x2="347.591" y2="2" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.05" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-primary-white text-[20px] leading-[30px] font-bold line-clamp-2 overflow-clip ">
                  {el.content}
                </span>
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px]  items-center">
                    <div className="w-[24px] h-[24px] rounded-full  border border-white"></div>
                    <span className="text-[14px] leading-[20px] text-white font-light">
                      {el.author}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 8L20 16L12 24" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}

        </div>
        <button onClick={onShowMore} className="flex gap-[12px] items-center text-[18px] leading-[24px] uppercase font-bold w-fit mx-auto text-[#fff]">
          {t("blog-page.show-more.text")}
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M10.5 15.75L21 26.25L31.5 15.75" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default ContentBlogs;
