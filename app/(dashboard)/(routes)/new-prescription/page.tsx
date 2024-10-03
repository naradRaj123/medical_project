"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import * as z from "zod"
import SelectMedicine from './_components/select-medicine'
import SelectManufacturer from './_components/select-manufactirer'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@/components/ui/separator'
import Canvas from './_components/canvas'
import { Edit, PrinterIcon } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { getPatientDetails } from '@/app/redux/slices/patient-slice'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { useCreatePrescriptionMutation } from '@/app/redux/api'




const profileFormSchema = z.object({

  patientName: z.string({
    required_error: "Please Enter Patient Name"
  }),
  patientContactNumber: z.string({
    required_error: "Plese Enter Your Moble number"
  }).min(10, "Number must contain 10 digits"),
  gender: z.string({
    required_error: "chooes Gender"
  }),
  address: z.string({
    required_error: "Enter Your Address"
  }),
  symptoms: z.string({
    required_error: "Please fill this field"
  }),
  age: z.string({
    required_error: "Please fill your age.",
  }),
  nextAppointment: z.object({
    date: z.string().optional(),
    time: z.string().optional(),
  }),
  bio: z.string().max(160).min(4),
  urls: z.array(z.object({
    value: z.string().url({ message: "Please enter a valid URL." }),
  })
  ).optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

const NewPrescription = () => {
  const patientdetail = useSelector((store: RootState) => store.patient);
  const auth = useSelector((store: RootState) => store.auth);
  const prescriptionVal = useSelector((store: RootState) => store.prescription);



  const dispatch = useDispatch();

  const userid = auth.user?.result?._id;
  const DrName = auth.user?.result?.Name
  const ClinicAddress = auth.user?.result?.clinicData[0]?.address;
  const ClinicRef = auth.user?.result?.clinicData[0]?._id;
  const ClinicName = auth.user?.result?.clinicData[0]?.name;
  const patientId = patientdetail?.patiendDetails?._id;



  const extraData = {
    doctorRef: userid,
    doctorName: DrName,
    clinicRef: ClinicRef,
    clinicName: ClinicName,
    patientRef: patientId,
    prescription: {
      medicine: prescriptionVal?.medicine,
      scan: prescriptionVal?.scan,
      diagnosis: prescriptionVal?.diagnosis,
      test: prescriptionVal?.test,
      advice: prescriptionVal?.advice,
    },
    medicines: [{
      "medicineRef": "65fdd0b77cf2f50a76a83c8a"
    }],
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  const [createPrescription, { isLoading: isRegionsLoading, data: json, isError: clinicerror, error: userclinicerror }] = useCreatePrescriptionMutation();


  const onSubmit = async (data: ProfileFormValues) => {

    const newData = { ...extraData, ...data };

    try {
      const res = await createPrescription(newData);
      if (res.status === 'success') {
        toast({
          title: "Successfully created Prescription",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{res.toString()}</code>
            </pre>
          )
        });
      }
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.toString()}</code>
          </pre>
        )
      });
    }
    // dispatch(getPatientDetails(null));
  }

  const currentDate = new Date()

  // patient detail to show on prescription
  const patientInfo = patientdetail?.patiendDetails

  return (
    <div>
      <div className='border border-primary rounded-2xl divide-y divide-primary'>
        <div className='flex items-start justify-between p-4'>
          <div className='space-y-1 w-1/3'>
            <p className='text-4xl text-primary font-bold'>{DrName}</p>
            <p className='text-xl text-primary font-medium'>{ClinicAddress} </p>
            <p className='text-lg italic font-semibold'>(M.B.B.S)</p>
          </div>

          <div className='relative w-1/3 h-10'>
            <Image
              src={"/vercel.svg"}
              fill
              alt="dr-logo"
            />
          </div>
          <div className='w-1/3'>
            <div className='flex flex-col items-end space-y-3'>
              <div className='w-[90%] overflow-hidden md:w-32'>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Recommend" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physiotherapist">physiotherapist</SelectItem>
                    <SelectItem value="Nurse">nurse</SelectItem>
                    <SelectItem value="others">others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className='text-right font-semibold'>{currentDate.toLocaleDateString('en-GB')}</p>
              <PrinterIcon className='text-primary cursor-pointer' size={40} />
            </div>
          </div>

        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
            <div className='flex justify-between'>
              <p className='text-xl font-semibold'>Pre-existing diseases : </p>
              <Edit className='text-primary' />
            </div>
            <div className='columns-2'>
              <FormField
                control={form.control}
                name="patientName"
                defaultValue={patientInfo?.fname || ""}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Patient Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                defaultValue={patientInfo?.age || ""}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='columns-2'>
              <FormField
                control={form.control}
                name="patientContactNumber"
                defaultValue={patientInfo?.mobile || ""}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}
                      defaultValue={patientInfo?.gender || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="M">Male</SelectItem>
                        <SelectItem value="F">Female</SelectItem>
                        <SelectItem value="O">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <div className='columns-2'>
              <FormField
                control={form.control}
                name="address"
                // defaultValue={patientdetail?.patiendDetails?.data.address || ""}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symptoms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="e.g. low BP, diabetic..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid grid-cols-12 divide-x divide-primary'>
              <div className='col-span-5 p-4 space-y-6'>
                {/* symptoms */}
                <div className='space-y-2 my-5'>
                  <p className='bg-primary rounded-2xl text-white py-3 px-4 text-center'>Diagnosis</p>
                  <div className='h-56 w-full'>
                    <Canvas val={"Diagnosis"} />
                  </div>
                </div>

                <div className='flex space-x-4 '>
                  {/* scans */}
                  <div className='space-y-2 w-[48%] my-5'>
                    <p className='bg-primary rounded-2xl text-white py-3 px-4 text-center'>Scans</p>
                    <p className='text-gray text-sm'>(e.g. CT scan, X-ray, ...)</p>
                    <div className='h-56 '>
                      <Canvas val={"scan"} />
                    </div>

                  </div>
                  {/* tests */}
                  <div className='space-y-2 w-[48%] my-5'>
                    <p className='bg-primary rounded-2xl text-white py-3 px-4 text-center'>Tests</p>
                    <p className='text-gray text-sm'>(e.g. Blood test, Urine test, ...)</p>
                    <div className='h-56 '>
                      <Canvas val={"test"} />
                    </div>

                  </div>
                </div>
                {/* advice */}
                <div className='space-y-2 my-5'>
                  <p className='bg-primary rounded-2xl text-white py-3 px-4 text-center'>Advice</p>
                  <div className='h-56 w-full'>
                    <Canvas val={"advice"} />
                  </div>

                </div>
              </div>
              <div className='col-span-7 p-4 relative'>
                {/* <p>Rx</p> */}
                <p className='text-xl font-bold'>Medicine Section</p>
                <div className='mt-8 flex items-start justify-between'>
                  <div className='uppercase font-semibold'>
                    <p>medicine 1</p>
                    <p>medicine 2</p>
                    <p>medicine 3</p>
                    <p>medicine 4</p>
                  </div>
                  <SelectMedicine />
                </div>
                <div className='mt-8 flex items-start justify-between'>
                  <div className='uppercase font-semibold'>
                    <p>medicine 1</p>
                    <p>medicine 2</p>
                    <p>medicine 3</p>
                    <p>medicine 4</p>
                  </div>
                  <SelectManufacturer />
                </div>
                <Separator className='my-6 h-1' />
                {/* signature pad */}
                <div>
                  <p className='text-gray text-sm'>(Medicines ...)</p>
                  <div className='h-[30rem] w-full my-12'>
                    <Canvas val={"medicines"} />
                  </div>
                </div>
                <div className="flex items-center justify-between bottom-5 px-8 mx-4">
                  <div>
                    <p className='text-md font-semibold'>Next Appointment </p>
                  </div>

                  <div className=''>
                    <FormField
                      control={form.control}
                      name="nextAppointment"
                      render={({ field }) => (
                        <FormItem className='flex gap-2 items-end'>
                          <div className=''>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              value={field.value?.date || ''}
                              onChange={(e) => {
                                field.onChange({ ...field.value, date: e.target.value });
                              }}
                            />
                          </FormControl>
                          </div>
                          <div>
                            <FormLabel>Time</FormLabel>
                          <FormControl>
                            <Input
                              type="time"
                              value={field.value?.time || ''}
                              onChange={(e) => {
                                field.onChange({ ...field.value, time: e.target.value });
                              }}
                            />
                          </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />



                  </div>
                  {/* <div className='flex items-center space-x-6'>

                   <Dialog>
                      <DialogTrigger asChild>
                        <Button className="px-[3rem] bg-primary text-white" >Submit</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Next Appointment</DialogTitle>
                        </DialogHeader>
                        {/* <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Date
                        </Label>
                        <Input id="name" type='date' value="Pedro Duarte" className="col-span-3" />
                      </div>

                    </div>

                    <FormField
                          control={form.control}
                          name="nextAppointment"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                    <Button type='submit'>Submit</Button>
                   </DialogContent>
                    </Dialog> 
                   </div> */}



                </div>
              </div>


            </div>
            <div className='grid grid-cols-6 gap-4 mx-4'>
              <div className='col-start-3 col-end-5 relative w-40 h-10'>
                <Image
                  src={"/vercel.svg"}
                  fill
                  alt="dr-logo"
                />
              </div>
              <div className='col-start-6 text-right '>
              <Button type='submit'>Submit</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default NewPrescription
