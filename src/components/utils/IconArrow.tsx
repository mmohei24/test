import React from 'react'

interface Props {
  color: string
  className: string
}

const IconArrow = ({ color = "", className = '' }: Props) => {
  return (
    <>
      <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
        <path d="M7.89447 20.4674L0.809045 10.6684L7.89447 0.819198H14.9296L8.04523 10.6684L14.9296 20.4674H7.89447ZM19.2513 20.4674L12.1658 10.6684L19.2513 0.819198H26.2864L19.402 10.6684L26.2864 20.4674H19.2513Z" fill={color} />
      </svg>


    </>
  )
}

export default IconArrow