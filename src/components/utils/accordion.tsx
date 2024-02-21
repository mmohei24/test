'use client'

import { useState, useRef, useEffect } from 'react'

type AccordionpProps = {
  children: React.ReactNode
  tag?: string
  title: string
  active?: boolean
  activeKey: string | number | null
  setActiveKey: any
  index: number
  lang?: string
}

export default function Accordion({
  children,
  tag = 'li',
  title,
  active = false,
  activeKey,
  setActiveKey,
  index,
  lang = 'en'
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  const accordion = useRef<HTMLDivElement>(null)
  const Component = tag as keyof JSX.IntrinsicElements
  useEffect(() => {
    setAccordionOpen(active)

  }, [accordion, active])

  const handleAccordionToggle = () => {
    setActiveKey(index === activeKey ? null : index);
  };

  return (
    <Component className='border-b border-b-[#2E2E2E] pb-4 lg:pb-6 list-none'>
      <button
        className="flex  w-full lg:items-center"
        onClick={() => handleAccordionToggle()}
        aria-expanded={accordionOpen}
      >

        <h3 className={`flex-1 rtl:text-right text-left text-primary-1 text-lg lg:text-2xl font-bold lg:font-medium leading-6 lg:leading-8`}>{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className={`transform origin-center w-6 h-6 lg:w-10 lg:h-10 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
        >
          <path
            d="M10 15L20 25L30 15"
            stroke="#2871FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        ref={accordion}
        className={`text-neutral-4 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen && 'mt-4 lg:mt-5'}`}
        style={accordionOpen ? { maxHeight: accordion.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <pre className="whitespace-pre-wrap text-neutral-6 text-sm leading-[20px] font-normal lg:text-lg lg:leading-7">{children}</pre>
      </div>
    </Component>
  )
}
