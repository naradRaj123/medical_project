"use client"

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
import { ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { add, getPatientDetails } from "@/app/redux/slices/patient-slice"
import { RootState, store } from "@/app/redux/store"
import Link from "next/link"
import TableContent from "./_components/page"
import { useGetAppointmentsQuery } from "@/app/redux/api"

const Patient = () => {
  const [patients, setData] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((store: RootState) => store.auth);
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

  // const [getAppointments, { isLoading: isRegionsLoading, data: any, isError: patientserror , error: appointmenterror }] = useGetAppointmentsQuery();


  useEffect(() => {
    const showuser = async () => {
      try {
        if (!token) {
          throw new Error('User token not found');
        }
        const authToken = 'Y3VzP9H8a@r&M0A50b3Byb3RlY3RhcGlyb3V0ZXM=';
        const response = await fetch('http://13.202.22.54:3030/appointment/getall?allRecords=false&page=1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authtoken': authToken,
            'userid': userid,
            'Authorization': `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error('Failed to get patient data');
        }
        const data = await response.json();
        console.log("Patient data" , data)
        setData(data?.data?.appointments);
      } catch (error) {
        toast({
          title: "",
          description: (
            <pre className="mt-2 w-[400px] rounded-md bg-red-950 p-4">
              <code className="text-white"> Please Login again !</code>
            </pre>
          )
        })
      }
    };
    showuser();
  }, []);

  const data: Payment[] = patients;
  // console.log(data)
  type Payment = {
    _id: string
    fname: string
    mobile: number
    address: string
    status: "pending" | "processing" | "success" | "failed"
    bloodGroup: string
  }

  // const viewPatient = (row) => {
  //   console.log('Patient ID:', row.original._id);
  //   dispatch(add(row.original._id));
  //   router.push('/patient-details');
  // };

  // const patientNewPriscription = (row) => {
  //   console.log('Patient ID:', row.original._id);
  //   dispatch(add(row.original._id));

  //   // Api to get patient's all details
  //   const showuser = async () => {
  //     try {
  //       if (!token) {
  //         throw new Error('User token not found');
  //       }
  //       const authToken = 'Y3VzP9H8a@r&M0A50b3Byb3RlY3RhcGlyb3V0ZXM=';
  //       const response = await fetch(`http://13.202.22.54:3030/getById/${row.original._id}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'authtoken': authToken,
  //           'userid': userid,
  //           'Authorization': `Bearer ${token}`
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to add user');
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       dispatch(getPatientDetails(data));
  //     } catch (error) {
  //       toast({
  //         title: "Error Occured!",
  //         description: (
  //           <pre className="mt-2 w-[400px] rounded-md bg-slate-950 p-4">
  //             <code className="text-white">{error.toString()}</code>
  //           </pre>
  //         )
  //       })
  //     }
  //   };
  //   showuser();
  //   router.push('/new-prescription');
  // };

  // const columns: ColumnDef<Payment>[] = [
  //   {
  //     id: "select",
  //     header: ({ table }) => (
  //       <Checkbox
  //         checked={table.getIsAllPageRowsSelected()}
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     ),
  //     cell: ({ row }) => (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     ),
  //     enableSorting: false,
  //     enableHiding: false,
  //   },
  //   {
  //     accessorKey: "id",
  //     header: "SNo.",
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue("id")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "fname",
  //     header: "Name",
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue("fname")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "mobile",
  //     header: "Mobile Number",
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue("mobile")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "address",
  //     header: "Address",
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue("address")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "gender",
  //     header: "Gender",
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue("gender")}</div>
  //     ),
  //   },
  //   {
  //     accessorKey: "status",
  //     header: "Age",
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue("status")}</div>
  //     ),
  //   },
  //   {
  //     id: "actions",
  //     enableHiding: false,
  //     cell: ({ row }) => {
  //       return (
  //         <Button
  //           variant={"secondary"}
  //           onClick={() => patientNewPriscription(row)}
  //           className="whitespace-nowrap"
  //         >
  //           New Prescription
  //         </Button>
  //       )
  //     },
  //   },
  //   {
  //     id: "actions",
  //     accessorKey: "status",
  //     enableHiding: false,
  //     cell: ({ row }) => {
  //       const payment = row.original

  //       return (
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <MoreHorizontal className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuItem
  //               onClick={() => viewPatient(row)}
  //             >
  //               View
  //             </DropdownMenuItem>
  //             <DropdownMenuItem
  //               onClick={() => navigator.clipboard.writeText(payment._id)}
  //             >
  //               Edit
  //             </DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       )
  //     },
  //   },
  // ]

  // const table = useReactTable({
  //   data,
  //   columns,
  //   onSortingChange: setSorting,
  //   onColumnFiltersChange: setColumnFilters,
  //   getCoreRowModel: getCoreRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   getSortedRowModel: getSortedRowModel(),
  //   getFilteredRowModel: getFilteredRowModel(),
  //   onColumnVisibilityChange: setColumnVisibility,
  //   onRowSelectionChange: setRowSelection,
  //   state: {
  //     sorting,
  //     columnFilters,
  //     columnVisibility,
  //     rowSelection,
  //   },
  // })

  return (
    <div>
      <div className="flex justify-end">
            <Button><Link href={"/add-patient"} >Add Patient</Link></Button>
      </div>

      {/* <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("id")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      {/* <div className="rounded-md border">
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
      </div> */}

      <TableContent value={patients} ></TableContent>







      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  )
}

export default Patient