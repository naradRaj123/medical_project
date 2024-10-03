import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useRouter } from "next/navigation"


const TableContent = ({value}) => {
    const router = useRouter();
    const heads = Object.keys(value[0]);
  return (
    <div className=''>
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">S.No</TableHead>
                <TableHead>Firm Name </TableHead>
                <TableHead>Contact Number </TableHead>
                <TableHead className="text-right">Recommendations </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {value.map(data => (
              <TableRow key={data._id}>
                <TableCell className="font-medium">{data._id} </TableCell>
                <TableCell>{data.firmName} </TableCell>
                <TableCell>{data.contactNumber} </TableCell>
                <TableCell className="text-right cursor-pointer" onClick={() => router.push("/patient-prescriptions")}>{data.recommendationCount}
                </TableCell>
              </TableRow>
              ))}
              </TableBody>
          </Table>
    </div>
  )
}

export default TableContent














//               <TableRow>
//                 <TableCell className="font-medium">INV001</TableCell>
//                 <TableCell>Rajesh Pharmacy</TableCell>
//                 <TableCell>9090909090</TableCell>
//                 <TableCell className="text-right cursor-pointer" onClick={() => router.push("/patient-prescriptions")}>4
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell className="font-medium">INV001</TableCell>
//                 <TableCell>Rajesh Pharmacy</TableCell>
//                 <TableCell>9090909090</TableCell>
//                 <TableCell className="text-right cursor-pointer" onClick={() => router.push("/patient-prescriptions")}>4
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell className="font-medium">INV001</TableCell>
//                 <TableCell>Rajesh Pharmacy</TableCell>
//                 <TableCell>9090909090</TableCell>
//                 <TableCell className="text-right cursor-pointer" onClick={() => router.push("/patient-prescriptions")}>4
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//     </div>
//   )
// }

// export default TableContent