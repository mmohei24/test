"use client";

import { Locale } from "@/i18n.config";
import { useTranslation } from "@/src/i18n/client";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./language-selector";
import { NAVBAR_DEFAULT } from "@/src/utils/constant";
import { usePathname } from "next/navigation";

export default function MobileMenu({ lang }: { lang: Locale }) {
  const { t } = useTranslation(lang);
  const pathname = usePathname();

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [showChild, setShowChild] = useState<boolean>(false);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    const body: any = document.querySelector("body");
    if (body) {
      if (mobileNavOpen) {
        body.style.overflow = "hidden";
        return;
      }
      body.style.overflow = "auto";
    }
  }, [mobileNavOpen]);

  const openChilde = (e: any, item: any) => {
    if (item.children) {
      setMobileNavOpen(true);
      e.preventDefault();
      e.stopPropagation();
      setShowChild(!showChild);
      return;
    }
  };

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger relative z-[21] ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute  pt-[68px]  top-[-20px]  pb-16 z-20 left-[-20px] right-[-20px]  overflow-scroll 
          h-screen w-screen bg-[#11142B]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="h-fit  w-screen  rounded-tl-none rounded-br-[36px] rounded-tr-none rounded-bl-[36px] border-[1px] 
          border-[solid] border-[#FFF] bg-[linear-gradient(180deg,_#11142B_0%,_#2B2E48_100%)] 
          [box-shadow:0px_4px_25.3px_0px_rgba(31,_36,_78,_0.50)]
          [border-image:linear-gradient(_to_bottom,_white,_transparent_)_1_100%]
          "
          >
            <ul className="px-5 border-t border-t-[#fff] py-[62px] flex flex-col gap-[40px] ">
              {NAVBAR_DEFAULT.map((item) => {
                let path = "/";
                if (!item.endpoint) path = `/${lang}`;
                else path = `/${lang}/${item.endpoint}`;

                let highlightClass = "";
                if (item.endpoint === "blog") {
                  highlightClass = pathname.includes(path)
                    ? "text-primary-white"
                    : "";
                } else {
                  highlightClass = path === pathname ? "!text-primary-5 " : "";
                }

                return (
                  <li
                    key={item.key}
                    className="flex flex-col gap-6 group"
                    onClick={(e) => openChilde(e, item)}
                  >
                    <Link
                      href={path}
                      className={`flex items-center gap-[8px] w-full text-primary-white font-normal text-[24px] leading-[32px]  justify-center capitalize ${highlightClass}`}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {t(item.text)}
                      {item.children && (
                        <svg
                          className={`${showChild ? "rotate-[180deg]" : ""
                            } transition 
                        duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 12.5L10 7.5L15 12.5"
                            stroke={"#fff"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </Link>
                    {item.children && showChild && (
                      <>
                        <div className="w-full h-[1px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]"></div>
                        {item.children.map((el) => (
                          <Link
                            href={`/${lang}/${el.endpoint}`}
                            className={`flex w-full group/item text-primary-white font-normal text-sm leading-7  justify-center capitalize ${highlightClass}`}
                            key={el.number}
                          >
                            <span className="text-primary-white group-hover/item:text-primary-5 text-[24px] leading-[32px] tracking-[-0.5px]">
                              {el.title}
                            </span>
                          </Link>
                        ))}
                        <div className="w-full h-[1px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]"></div>
                      </>
                    )}
                  </li>
                );
              })}
              <div className="flex flex-col gap-[24px]">
                <Link
                  href={`/${lang}/contact-us`}
                  className="rounded-[44px] border-[1px] border-[solid] 
              border-[#FFF] bg-[linear-gradient(93deg,_rgba(255,_255,_255,_0.20)_4.32%,_rgba(255,_255,_255,_0.05)_92.92%)] backdrop-filter backdrop-blur-[31.899999618530273px]
                text-[18px] leading-[24px] w-full text-center text-neutral-1 border-contact-us uppercase"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="w-full h-[1px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.05)_100%)]"></div>
                <LanguageSelector lang={lang} />
              </div>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
