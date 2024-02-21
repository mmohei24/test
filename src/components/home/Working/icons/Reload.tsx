import React from 'react'

export const Reload = ({ className = '' }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={`${className} lg:-translate-y-1/2`}>
      <path d="M12.3999 6V9L16.3999 5L12.3999 1V4C7.9799 4 4.3999 7.58 4.3999 12C4.3999 13.57 4.8599 15.03 5.6399 16.26L7.0999 14.8C6.6499 13.97 6.3999 13.01 6.3999 12C6.3999 8.69 9.0899 6 12.3999 6ZM19.1599 7.74L17.6999 9.2C18.1399 10.04 18.3999 10.99 18.3999 12C18.3999 15.31 15.7099 18 12.3999 18V15L8.3999 19L12.3999 23V20C16.8199 20 20.3999 16.42 20.3999 12C20.3999 10.43 19.9399 8.97 19.1599 7.74Z" fill="#FFAD00" />
    </svg>
  )
}
