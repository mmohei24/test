import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-red-500'>
      ... Loading
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

      </svg>
    </div>
  )
}

export default Loading