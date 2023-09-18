import React, { useState } from 'react'
import '../../styles/globals.generated.css'
import Pagination from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

export const Default = () => {
  const [page, setPage] = useState(1)
  return <Pagination page={page} perPage={10} total={199} onPageChange={setPage} />
}
