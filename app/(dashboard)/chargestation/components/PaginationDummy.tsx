import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
  

const PaginationDummy = () => {
  return (
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationLink isActive href="#" className='bg-[#0035a3] text-white '>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">57</PaginationLink>
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}

export default PaginationDummy
