"use client"

import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Checkbox } from "@/components/ui/checkbox"
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
  import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
  
  
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/components/ui/use-toast'
import { RootState } from '@/app/redux/store'
import { getPatientDetails } from '@/app/redux/slices/patient-slice'

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

  interface Patient {
    fname: string;
    lname: string;
    mobile: number;
    address: string;
    dob: number;
    bloodGroup: string;
    // Add other properties as needed
  }

  // const dobSubstring = Patient?.dob.substring(0, 10);


  address
: 
"123 Main Street, City"
bloodGroup
: 
"AB+"
createdAt
: 
"2024-02-28T12:15:24.212Z"
dob
: 
"1990-01-01T00:00:00.000Z"
doctorRef
: 
"65887e9689af1593c150570a"
email
: 
"kb.bbbb@example.com"
fname
: 
"kb"
gender
: 
"male"
isDeleted
: 
false
lname
: 
"bbbb"
mobile
: 
"1234567890"
prescription
: 
[]
updatedAt
: 
"2024-02-28T12:15:24.212Z"
_id
: 
"65df23dcea2200a2236525c7"
  
const PatientDetails = () => {
  const [patient, setPatientDetail] = useState<Patient | null>(null);
  const dispatch = useDispatch();
  const auth = useSelector((store: RootState) => store.auth);
  const patientdetail = useSelector((store: RootState) => store.patient);
    const router = useRouter()
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
      useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    

    const { toast } = useToast()

  const token = auth.user?.result?.token;
  const userid = auth.user?.result?._id;
  const id_patient = patientdetail.patient;
  
  useEffect(() => {
    console.log(id_patient);
    const showuser = async () => {
      try {
        if (!token) {
          throw new Error('User token not found');
        }
        const authToken = 'Y3VzP9H8a@r&M0A50b3Byb3RlY3RhcGlyb3V0ZXM=';
        const response = await fetch(`http://13.202.22.54:3030/patient/${id_patient}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authtoken': authToken ,
            'userid': userid,
            'Authorization': `Bearer ${token}`
          },
        });

        console.log(response)

        if (!response.ok) {
          throw new Error('Failed to add user');
        }
        const data = await response.json();
        console.log('patient details' , data)
        setPatientDetail(data.data);
        console.log(data);
        dispatch(getPatientDetails(data));
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: (
            <pre className="mt-2 w-[400px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.toString()}</code>
            </pre>
          )
        })
      }
    };
    showuser();
  }, []);

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
        // {
        //   id: "actions",
        //   enableHiding: false,
        //   cell: ({ row }) => {
        //     const payment = row.original
      
        //     return (
        //       <DropdownMenu>
        //         <DropdownMenuTrigger asChild>
        //           <Button variant="ghost" className="h-8 w-8 p-0">
        //             <span className="sr-only">Open menu</span>
        //             <MoreHorizontal className="h-4 w-4" />
        //           </Button>
        //         </DropdownMenuTrigger>
        //         <DropdownMenuContent align="end">
        //           {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
        //           <DropdownMenuItem
        //             // onClick={() => router.push("/")}
        //           >
        //             View 
        //           </DropdownMenuItem>
        //           <DropdownMenuItem
        //             onClick={() => navigator.clipboard.writeText(payment.id)}
        //           >
        //             Edit 
        //           </DropdownMenuItem>
        //         </DropdownMenuContent>
        //       </DropdownMenu>
        //     )
        //   },
        // },
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
        <p className='text-xl font-semibold text-primary'>{patient?.fname}&apos;s Profile</p>
        <Button
        onClick={() => router.push("/new-prescription")}
        >
            New Prescription
        </Button>
        </div>
    <div className='flex gap-6'>
    <div className='w-4/12 space-y-2'>
        <div className='shadow-sm p-6 space-y-3 bg-lightestGray text-primary text-sm font-medium rounded-xl'>
        <div className='flex justify-center'>
            <img src="https://github.com/shadcn.png" alt="" className='w-32 h-32 rounded-full' />
        </div>
         <p>Full Name: <span className='text-black font-normal'>{patient?.fname} {patient?.lname} </span></p>
            <p>Mobile: <span className='text-black font-normal'>{patient?.mobile} </span></p>
            <p>Address: <span className='text-black font-normal'>{patient?.address} </span></p>
            <p>Date of birth: <span className='text-black font-normal'>{patient?.dob} </span></p>
            <p>Age: <span className='text-black font-normal'>22</span></p>
            <p>Blood Group: <span className='text-black font-normal'>{patient?.bloodGroup} </span></p>
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
