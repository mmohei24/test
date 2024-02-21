import { DOTS, usePagination } from '@/src/hooks/usePagination';
import React, { useMemo } from 'react'

const Pagination = ({
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  onChangPage
}: any) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize

  });

  const colorPrev = useMemo(() => {
    const color = currentPage === 1 ? '#B8B8B8' : "#FFAD00"
    return color
  }, [currentPage])
  const colorNext = useMemo(() => {
    const color = currentPage === paginationRange[paginationRange.length - 1] ? '#B8B8B8' : "#FFAD00"
    return color
  }, [currentPage])

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center gap-[14px]  text-base h-10">
          <li className='mr-[42px]'>
            <a href="#" className="flex items-center justify-center rtl:rotate-180 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.0457 2.43918C17.3269 2.72047 17.4849 3.10193 17.4849 3.49968C17.4849 3.89743 17.3269 4.27889 17.0457 4.56018L9.62068 11.9852L17.0457 19.4102C17.3189 19.6931 17.4701 20.072 17.4667 20.4653C17.4633 20.8586 17.3055 21.2348 17.0274 21.5129C16.7493 21.791 16.3731 21.9488 15.9798 21.9522C15.5865 21.9556 15.2076 21.8044 14.9247 21.5312L6.43918 13.0457C6.15797 12.7644 6 12.3829 6 11.9852C6 11.5874 6.15797 11.206 6.43918 10.9247L14.9247 2.43918C15.206 2.15797 15.5874 2 15.9852 2C16.3829 2 16.7644 2.15797 17.0457 2.43918Z" fill={colorPrev} />
              </svg>
            </a>
          </li>
          {paginationRange.map((pageNumber: any) => {
            if (pageNumber === DOTS) {
              return <li className="pagination-item dots">&#8230;</li>;
            }

            return (
              <li onClick={() => onChangPage(pageNumber)} className={`${pageNumber === currentPage ? "text-primary-1" : 'text-neutral-2'} text-base leading-normal-1 capitalize cursor-pointer`}>
                <a className="flex items-center">
                  {pageNumber}
                </a>

              </li>
            );
          })}

          <li className='!ml-[42px]'>
            <a href="#" className="flex items-center justify-center rtl:rotate-180 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.4387 2.43918C6.15749 2.72047 5.99952 3.10193 5.99952 3.49968C5.99952 3.89743 6.15749 4.27889 6.4387 4.56018L13.8637 11.9852L6.4387 19.4102C6.16546 19.6931 6.01427 20.072 6.01768 20.4653C6.0211 20.8586 6.17886 21.2348 6.45697 21.5129C6.73508 21.791 7.1113 21.9488 7.50459 21.9522C7.89789 21.9556 8.27679 21.8044 8.55969 21.5312L17.0452 13.0457C17.3264 12.7644 17.4844 12.3829 17.4844 11.9852C17.4844 11.5874 17.3264 11.206 17.0452 10.9247L8.5597 2.43918C8.2784 2.15797 7.89694 2 7.4992 2C7.10145 2 6.71999 2.15797 6.4387 2.43918Z" fill={colorNext} />
              </svg>
            </a>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Pagination