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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const data: Payment[] = [
  {
    id: "12/12/2023",
    amount: 316,
    status: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
    email: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
  },
  {
    id: "12/12/2023",
    amount: 316,
    status: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
    email: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
  },
  {
    id: "12/12/2023",
    amount: 316,
    status: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
    email: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
  },
  {
    id: "12/12/2023",
    amount: 316,
    status: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
    email: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
  },
  {
    id: "12/12/2023",
    amount: 316,
    status: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
    email: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
  },
]

type Payment = {
  id: string
  amount: number
  status: string
  email: string
}


const PatientDetails = () => {
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
      accessorKey: "id",
      header: "Date",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Prescription",
      cell: ({ row }) => (
        <a className="capitalize text-primary underline" href={row.getValue("status")}>View</a>
      ),
    },
    {
      accessorKey: "email",
      header: "Lab Reports",
      cell: ({ row }) =>
        <a className="capitalize text-primary underline" href={row.getValue("email")}>View</a>
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
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold text-primary'>John Doe&apos;s Profile</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='bg-primary'>Upload new Report</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogDescription>
                Upload Report 
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Report
                </Label>
                <Input type="file" id="name" value=""  className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Date
                </Label>
                <Input type="date"  value=""  className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Upload</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
        <div className='w-8/12 rounded-md border'>
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
  )
}

export default PatientDetails
