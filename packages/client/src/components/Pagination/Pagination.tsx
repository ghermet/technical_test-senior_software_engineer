import React from 'react'
import ButtonSquare from '../ButtonSquare/ButtonSquare'
import { ChevronLeftBold, ChevronRightBold } from '@pretto/picto'
import { ctwMerge } from '../../utility/ctw-merge'

type PaginationProps = {
  className?: string
  page: number
  perPage: number
  total: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ className, page, perPage, total, onPageChange }: PaginationProps) => {
  const isFirstPage = page === 1
  const isLastPage = page * perPage >= total
  const handlePrevPage = () => onPageChange(page - 1)
  const handleNextPage = () => onPageChange(page + 1)
  return (
    <div className={ctwMerge('flex flex-row items-center justify-between', className)}>
      <span>
        <span data-testid="current-page">{page}</span> -{' '}
        <span data-testid="per-page">{Math.min(page * perPage, total)}</span> of{' '}
        <span data-testid="total">{total}</span>
      </span>
      <div className="flex gap-2">
        <ButtonSquare
          onClick={handlePrevPage}
          disabled={isFirstPage}
          aria-label="Previous page"
          data-testid="desktop-prev-page-button"
        >
          <ChevronLeftBold />
        </ButtonSquare>
        <ButtonSquare
          onClick={handleNextPage}
          disabled={isLastPage}
          aria-label="Next page"
          data-testid="desktop-next-page-button"
        >
          <ChevronRightBold />
        </ButtonSquare>
      </div>
    </div>
  )
}

export default Pagination
