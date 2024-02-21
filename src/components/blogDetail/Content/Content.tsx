"use client";
import { Locale } from "@/i18n.config";
import { useTranslation } from "@/src/i18n/client";
import { BLOG_DETAIL_DEFAULT } from "@/src/utils/constant";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Facebook } from "../../ui/facebook";
import { IconLink } from "../../ui/icon-link";
import { Linkedin } from "../../ui/linkedin";
import { Twitter } from "../../ui/twiter";

const style: any = {
  development: "rounded-[43px] bg-[linear-gradient(253deg,_#DE8EC6_13.62%,_#CC4FF7_90.04%)]",
  insights: "rounded-[43px] bg-[linear-gradient(90deg,_#00FB94_0%,_#00A6F9_100%)]",
  seo: "rounded-[43px] bg-[linear-gradient(94deg,_#00FB94_1.89%,_#208774_91.89%)]",
  design: "rounded-[43px] bg-[linear-gradient(253deg,_#FBF775_13.62%,_#72F7BE_90.04%)]"
}





const Line = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 999 2" fill="none">
    <path d="M-1.5 1H998.5" stroke="url(#paint0_linear_2_11064)" strokeLinecap="round" />
    <defs>
      <linearGradient id="paint0_linear_2_11064" x1="-1.5" y1="2" x2="1023.92" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.05" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const ContentBlogDetail = ({ lang }: { lang: Locale }) => {

  const urlTmp = `/${lang}/blog/insights`

  const { t } = useTranslation(lang)
  const [urlShare, setUrlShare] = useState("");
  const [copied, setCopySuccess] = useState("");


  const Socials = useMemo(() => {
    return [
      {
        key: 'linked',
        icon: () => <Linkedin />,
        share: `https://www.linkedin.com/shareArticle?url=${urlShare}`

      },
      {
        key: 'fb',
        icon: () => <Facebook />,
        share: `https://www.facebook.com/sharer/sharer.php?u=${urlShare}`
      },
      {
        key: 'Twitter',
        icon: () => <Twitter />,
        share: `https://twitter.com/share?url=${urlShare}`
      },
      {
        key: 'link',
        icon: () => <IconLink />

      },
    ]
  }, [urlShare])

  const copyToClip = async (item: any) => {
    if (item?.key !== 'link') {
      return
    }
    await navigator.clipboard.writeText(location.href);
    setCopySuccess("Copied");
  }

  useEffect(() => {
    const url = window?.location?.href || process.env.NEXT_PUBLIC_BASE_URL || '';

    setUrlShare(url);
  }, []);

  const goToView = (id: any) => {
    const element = document.getElementById(id)
    return element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  const renderBlogDetail = useMemo(() => {
    return BLOG_DETAIL_DEFAULT(t).map((item, index) => {
      return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" key={index} className="flex flex-col gap-6">
          <h2 id={index + ''} className="text-[24px] leading-[32px] tracking-[-0.5px] font-bold text-primary-white">
            {item.title}
          </h2>
          <p className="text-primary-white text-[14px] leading-[20px] font-light" dangerouslySetInnerHTML={{ __html: item.desc }}>
          </p>
          {item?.img ?
            <img className="w-full" src={item.img} alt="" /> : <></>
          }
          {item?.method ?
            <div className="p-[24px] md:p-[32px] flex gap-[24px] items-start md:items-center
            rounded-[24px] border-[1px]  border-[#FFF] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12 16L14.6667 18.6667L20 13.3333M16 4C25.6 4 28 6.4 28 16C28 25.6 25.6 28 16 28C6.4 28 4 25.6 4 16C4 6.4 6.4 4 16 4Z" stroke="#FDFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-primary-white text-[20px] leading-[30px] font-bold flex-1">
                {item.method}
              </span>
            </div>
            : <></>
          }

        </div>
      )
    })
  }, [])

  const ChangeBlog = useMemo(() => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex gap-[12px] items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" className="w-[32px] h-[32px] md:w-[42px] md:h-[42px]">
            <path d="M8.75 21H33.25M8.75 21L19.25 31.5M8.75 21L19.25 10.5" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#fff] text-[14px] leading-[20px] md:text-[18px] font-bold md:leading-[24px] uppercase">
            {t('blog-details-page.previous-blog')}
          </span>
        </div>
        <div className="flex gap-[12px] items-center cursor-pointer relative group">
          <span className="rounded-[8px] border-[1px] border-[rgba(255,255,255,0.20)] 
          bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)] backdrop-filter backdrop-blur-[6px]
          p-[16px] w-[205px] text-[14px] leading-[20px] text-[#BABBc8]
          absolute bottom-0 translate-y-full right-0
         hidden group-hover:block
          ">
            {t('blog-details-page.endBlog')}

          </span>
          <span className="text-gradient-3  text-[14px] leading-[20px] md:text-[18px] font-bold md:leading-[24px] uppercase">
            {t('blog-details-page.next-blog')}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" className="w-[32px] h-[32px] md:w-[42px] md:h-[42px]">
            <path d="M8.75 21H33.25M33.25 21L22.75 31.5M33.25 21L22.75 10.5" stroke="#FDFBFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    )
  }, [])

  const ComponentShare = useMemo(() => {
    return (
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="flex flex-col gap-[24px]">
        <span className="text-primary-white text-[20px] leading-[30px ]">
          {t('blog-details-page.share')}
        </span>
        <div className="flex gap-[16px] flex-wrap">
          {Socials.map((el, index) => (
            <a key={index} className="p-4 flex items-center justify-center rounded-full  cursor-pointer
          border-[1px] border-[solid] 
          border-[#FFF] bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] 
          backdrop-filter backdrop-blur-[31.899999618530273px]"
              href={el.share} onClick={() => copyToClip(el)} target="_blank"
              title={el.key === 'link' ? copied : ''}>
              {el.icon()}
            </a>
          ))}
        </div>
      </div>
    )
  }, [])

  const renderTableContent = useMemo(() => {
    return (
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
        className="w-full rounded-[24px] border-[1px] border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_#11142B_0%,_#2B2E48_100%)] [box-shadow:0px_4px_25.3px_0px_rgba(31,_36,_78,_0.50)]
        p-[24px] md:p-[32px] flex flex-col gap-[32px]"
      >
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-primary-white text-[32px] leading-[38px] tracking-[0.16px] font-bold">
            {t('blog-details-page.table-title')}
          </h3>
          <div className="flex flex-col gap-4 text-primary-white text-[20px] leading-[30px]">
            {BLOG_DETAIL_DEFAULT(t).map((item, index) =>
              <div key={index} >
                <p onClick={() => goToView(index + '')} className="hover:text-gradient-blog hover:cursor-pointer">{item?.title}</p>
                {
                  Array.isArray(item.desc) && item.desc.length && (
                    <ul className="list-disc px-6">
                      {
                        item.desc.map((subTitle, idx) => <li onClick={() => { goToView(`${index}_${idx}`) }} className="hover:text-primary-1 hover:cursor-pointer" key={idx}>{subTitle.title}</li>)
                      }
                    </ul>
                  )
                }
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block rounded-[15px]  w-full h-[4px] bg-primary-white relative">
          <div className="absolute bg-springGreen w-[5%] h-full left-0">

          </div>
        </div>
        <div className="hidden md:block">
          {ComponentShare}
        </div>
      </div>
    )
  }, [])

  const Items = [
    {
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover.png?updatedAt=1706281672113',
      type: t("blog-page.type.insights.title"),
      time: "4Jan",
      content: t("blog-page.items.item11.content"),
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
      img: 'https://ik.imagekit.io/arsdfirst/spatium/blog/Cover.png?updatedAt=1706281672113',
      type: t("blog-page.type.insights.title"),
      time: "4Jan",
      content: t("blog-page.items.item11.content"),
      author: "Jane Jou"
    },
  ]

  return (
    <section className="relative w-full  py-[80px] px-[40px] lg:px-0 ">
      <div className=" w-full md:max-w-4.5xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[64px] py-[64px] ">
        <div className="col-span-1 md:col-span-5 md:order-2 flex flex-col gap-[32px]">
          {renderTableContent}
          <div className="hidden md:block">
            {ChangeBlog}

          </div>
        </div>
        <div className="col-span-1 md:col-span-7 md:order-1 flex flex-col gap-[24px]">
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="text-[20px] font-semibold leading-[30px] text-primary-white">
            {t('blog-details-page.openBlog')}
          </div>
          <Line />
          {renderBlogDetail}
          <Line />
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="rounded-[24px] border-[1px] 
          border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_#11142B_0%,_rgba(17,_20,_43,_0.60)_100%)]
          flex flex-col gap-[24px] p-[32px]">
            <span className="text-[24px] leading-[32x] font-bold tracking-[-0.5px] text-primary-white">
              {t('blog-details-page.finalPoint')}
            </span>
            <span className="text-[14px] leading-[20px] font-light text-primary-white">
              {t('blog-details-page.contentFinal')}
            </span>
          </div>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="flex flex-col gap-[24px] md:hidden">
            {ComponentShare}
            {ChangeBlog}
          </div>
        </div>

      </div >
      <div className="w-full md:max-w-4.5xl lg:max-w-7xl mx-auto flex flex-col gap-[32px] pt-[64px] ">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='flex flex-col gap-[10px] md:gap-[12px]'>
          <span className='text-gradient-2 w-full md:text-[36px] tracking-[-0.5px ] md:leading-[48px] md:tracking-[-1.5px] lg:text-[40px] lg:leading-[56px] lg:tracking-[1.5px] capitalize'>
            {t('blog-details-page.otherBlog')}
          </span>
          <span className=' text-gradient-3 w-full text-[48px] leading-[56px] tracking-[0.24px] md:text-[72px] md:leading-[80px] md:tracking-[0.36px] lg:text-[90px] lg:leading-[88px] lg:tracking-[0.45px] font-bold'>
            {t('blog-details-page.subOther')}
          </span>
        </div>
        <span className='w-full h-[1px] bg-[#989AAE]'>

        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]'>
          {Items
            .map((el, index) => (
              <Link
                href={urlTmp}
                className="col-span-1 rounded-[24px]  bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)] backdrop-filter backdrop-blur-[6px]
              px-[20px] pt-[20px] pb-[32px] flex flex-col gap-[16px]  "
                key={index}
                data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
      </div>
    </section >
  );
};

export default ContentBlogDetail;
