"use client"

import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import BsSidebar from '@/components/bssidebar'

const data: Payment[] = [
    {
      sr_no: "1",
      name: "Rajesh",
      location: "India",
    },
  ]
  
  type Payment = {
    sr_no: string
    name: string
    location: string
  }

  
const FarmaDetails = () => {
    const router = useRouter()
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
      useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    

    const columns: ColumnDef<Payment>[] = [
        {
          accessorKey: "sr_no",
          header: "Sr.No",
          cell: ({ row }) => (
            <div className="capitalize">{row.getValue("sr_no")}</div>
          ),
        },
        {
          accessorKey: "name",
          header: "Doctor Name",
          cell: ({ row }) => (
            <a className="capitalize text-primary">{row.getValue("name")}</a>
          ),
        },
        {
          accessorKey: "location",
            header: "Location",
          cell: ({ row }) => 
          <a className="capitalize text-primary " >{row.getValue("location")}</a>
          ,
        },
      ]

      const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
          sorting,
          columnFilters,
          columnVisibility,
          rowSelection,
        },
      })
    

  return (

    <div className='h-full relative'>
    <div className='space-y-6 p-5'>
        <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold text-primary'>Pharam&apos;s Profile</p>
        
        </div>
    <div className='flex gap-6'>
    <div className='w-4/12 space-y-2'>
        <div className='shadow-sm p-6 space-y-3 bg-lightestGray text-primary text-sm font-medium rounded-xl'>
        <div className='flex justify-center'>
            <img src="https://github.com/shadcn.png" alt="" className='w-32 h-32 rounded-full' />
        </div>
         <p>Full Name: <span className='text-black font-normal'>Test</span></p>
            <p>Mobile: <span className='text-black font-normal'>0000000000</span></p>
            <p>Address: <span className='text-black font-normal'>Test, D-1/2</span></p>
            <p>Date of birth: <span className='text-black font-normal'>12/12/2005</span></p>
            <p>Age: <span className='text-black font-normal'>22</span></p>
            <p>Ailment: <span className='text-black font-normal'>HIV/AIDS</span></p>
            <p>Date Recorded: <span className='text-black font-normal'>19/12/2023 - 04:11pm</span></p>
        </div>
    </div>
    <div className='w-8/12 h-auto rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
    </div>
  )
}
export default FarmaDetails
