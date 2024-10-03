"use client"

import * as z from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TableContent from './_components/table'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useAddPartnersMutation, useGetConsortiumMutation } from "@/app/redux/api";

const partnersSchema: any = z.object({
  category: z.string({
    required_error: "Please select the category"
  }),
  firmName: z.string({
    required_error: "Please enter first name",
  }),
  contactNumber: z.string({
    required_error: "Please enter your mobile number",
  }).min(10, "Number must contain 10 digits"),
});
type partnersvalue = z.infer<typeof partnersSchema>;
const defaultValues: Partial<partnersvalue> = {};


const Partners = () => {

  const auth = useSelector((store: RootState) => store.auth);
  const { toast } = useToast();
  const [partners, setPartners] = useState([]);
  const form = useForm<partnersvalue>({
    resolver: zodResolver(partnersSchema),
  });

  const clinicRef = auth.user?.result?.clinicData[0]?._id;
  const clinicRe = {
    "clinicRef": clinicRef
  }

  const [addPartners, { isLoading: isRegionsLoading, data: json, isError: clinicerror , error: userclinicerror }] = useAddPartnersMutation();
  const [getConsortium, { isLoading: isRegionLoading, data: any, isError: consortiumError , error: drpartnererror }] = useGetConsortiumMutation();

  const onSubmit = async (data: partnersvalue) => {

    const newData = { clinicRef, ...data };
    try {
      const res = await addPartners(newData);
      if (res.data) {
        toast({
          title: "Successfully Added Partner.",
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
  };

  useEffect(() => {
    const getConsortiumData = async () => {
      try {

        const response = await getConsortium(clinicRe)
        if (response) {
        } else {
          toast({
            title: "Something went wrong",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{response.toString()}</code>
              </pre>
            )
          });
        }
        const output = response ;
        setPartners(output.data.result[0]);
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
    }
    getConsortiumData();
  }, []);

  return (
    <div>
      <div className='flex justify-end'>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add partner</DialogTitle>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categary</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the Categary" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pharmacy">Pharmacy</SelectItem>
                          <SelectItem value="lab">Lab</SelectItem>
                          <SelectItem value="diagnosticCenter">diagnostic Center</SelectItem>
                          <SelectItem value="physio">Physio</SelectItem>
                          <SelectItem value="nurse">Nurse</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firmName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel >Firm Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Firm Name"
                          {...field}
                          className="w-full"
                          defaultValue={form.getValues("firmName")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel >Mobile Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Mobile Number"
                          {...field}
                          className="w-full"
                          defaultValue={form.getValues("contactNumber")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Submit</Button>
              </form>
            </Form>

          </DialogContent>
        </Dialog>

      </div>
      <Tabs defaultValue="pharmacy" className="w-full">
        <TabsList>
          <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
          <TabsTrigger value="labs">Labs</TabsTrigger>
          <TabsTrigger value="diagnosticCenter">diagnostic Center</TabsTrigger>
          <TabsTrigger value="physio">Physio</TabsTrigger>
          <TabsTrigger value="nurse">Nurse</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>

        <TabsContent value="pharmacy">
          {partners.pharmacy ? (
            <TableContent value={partners.pharmacy} />
          ) : <h3>No Pharmacy is added yet !</h3>}
        </TabsContent>

         <TabsContent value="labs">
          {partners.lab ? (
            <TableContent value={partners.lab} />
          ) : <h3>No Lab is added yet !</h3>}
        </TabsContent>

        <TabsContent value="diagnosticCenter">
          {partners.diagnosticCenter ? (
            <TableContent value={partners.diagnosticCenter} />
          ) : <h3>No diagnosticCenter Center is added</h3>}
        </TabsContent>

        <TabsContent value="physio">
          {partners.physio? (
            <TableContent value={partners.physio} />
          ) : <h3>No Physio is added yet !</h3>}
        </TabsContent>

        <TabsContent value="nurse">
          {partners.nurse ? (
            <TableContent value={partners.nurse} />
          ) : <h3>No Nurse is added yet !</h3>}
        </TabsContent>
        <TabsContent value="other">
          {partners.other ? (
            <TableContent value={partners.other} />
          ) : <h3>No other is added yet !</h3>}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Partners
