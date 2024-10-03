"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useAddMedicineMutation } from "@/app/redux/api"
import { RootState } from "@/app/redux/store"
import { useSelector } from "react-redux"
import { useState } from "react"

const profileFormSchema = z.object({
  name: z.string({
    required_error: "Please enter the medicine name.",
  }),
  price: z.string({
    required_error: "Please enter the price of the medicine.",
  }),
  currency: z.string().optional(),
  manufacturer: z.string({
    required_error: "Please enter the manufacturer of the medicine.",
  }),
  composition: z.string({
    required_error: "Please enter the composition of the medicine.",
  }),
  precautions: z.string({
    required_error: "Please enter the precautions for the medicine.",
  }),
  description: z.string({
    required_error: "Please enter the description of the medicine.",
  }),
  isAfterFood: z.string(),
  clinicRef: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;


// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  clinicRef: "153246549872"
}

const AddMedicine = () => {
  const { toast } = useToast()
  let [morning, setmorning] = useState(false)
  let [afternoon, setafternoon] = useState(false)
  let [evening, setevening] = useState(false)
  const auth = useSelector((store: RootState) => store.auth);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  //api data
  const [addMedicine, { isUninitialized, isLoading, isSuccess, isError }] = useAddMedicineMutation()
  const clinicRef = auth.user?.result?.clinicData[0]?._id;

  const clinicRe = {
    "clinicRef": clinicRef
  }

  const onSubmit = async (data: ProfileFormValues) => {

    //covert Numberic value from string
    data.price = parseFloat(data.price);
    let newData = { clinicRe, morning, afternoon, evening, ...data };

    try {
      const resData = await addMedicine(newData)
      console.log(resData)
      if (isSuccess) {
        toast({
          title: 'Sucessfully Added Medicine',
        });
      } else if (isError) {
        toast({
          title: "Something went wrong",
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Error Occurred!",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.toString()}</code>
          </pre>
        )
      });
    }


  }

  return (
    <div className="space-y-6 px-[4rem]">
      <p className="text-3xl font-semibold">Add Medicine</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-3/4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter medicine name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g 100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <Input placeholder="e.g INR" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="manufacturer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manufacturer</FormLabel>
                <FormControl>
                  <Input placeholder="Manufacturer name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="composition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Composition</FormLabel>
                <FormControl>
                  <Input placeholder="e.g Aspirin 80%, Caffeine 10%" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="precautions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precautions</FormLabel>
                <FormControl>
                  <Input placeholder="precautions" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dosageSchedule"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dosage Schedule</FormLabel>
                <div className="flex items-center space-x-4">
                  <div>
                    <FormControl>
                      <label className="flex items-center space-x-2">
                        <Input
                          type="checkbox"
                          onClick={() => setmorning(!morning)}
                        />
                        <span>Morning</span>
                      </label>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl>
                      <label className="flex items-center space-x-2">
                        <Input
                          type="checkbox"
                          onClick={() => setafternoon(!afternoon)}
                        />
                        <span>Afternoon</span>
                      </label>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl>
                      <label className="flex items-center space-x-2">
                        <Input
                          type="checkbox"
                          onChange={(e) => setevening(!evening)}
                        />
                        <span>Evening</span>
                      </label>
                    </FormControl>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isAfterFood"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Med Intake</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Food timing" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={true}>After Food</SelectItem>
                    <SelectItem value={false}>Before Food</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />




          <div className="flex justify-end">
            <Button type="submit" className="px-[3rem]">Add</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AddMedicine