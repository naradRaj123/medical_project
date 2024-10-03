import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useRouter } from "next/navigation"
  import { useDispatch, useSelector } from "react-redux"
import { add, getPatientDetails } from "@/app/redux/slices/patient-slice"


const TableContent = ({value}) => {
    const router = useRouter();
  const dispatch = useDispatch();

  console.log(value)

    const viewPatient = (id) => {
        console.log('Patient ID:', id);
        dispatch(add(id));
        router.push('/patient-details');
      };

    const prescriptionPage = (val) => {
        dispatch(getPatientDetails(val));
        router.push('/new-prescription');
      };


  return (
    <div className=''>
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">S.No</TableHead>
                <TableHead>Patient Name </TableHead>
                <TableHead>Contact Number </TableHead>
                <TableHead>Gender </TableHead>
                <TableHead>Age </TableHead>
                <TableHead className="text-right">Actions </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {value?.map(data => (
              <TableRow key={data.patientRef?._id}>
                <TableCell className="font-medium">{data.patientRef?._id} </TableCell>
                <TableCell>{data.patientRef?.fname} </TableCell>
                <TableCell>{data.patientRef?.mobile} </TableCell>
                <TableCell>{data.patientRef?.gender} </TableCell>
                <TableCell>{data.patientRef?.age} </TableCell>
                <TableCell >
                    <Button
                    onClick={() => prescriptionPage(data.patientRef)}
                    >New Prescription</Button>
                    <Button
                    onClick={() => viewPatient(data.patientRef?._id)}
                    >View</Button>
                </TableCell>
              </TableRow>
              ))}
              </TableBody>
          </Table>
    </div>
  )
}

export default TableContent
