"use client"

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import useGeoLocation from "@/components/customHook/useGeoLocation";
import { useEffect, useState } from "react";
import { useAddClinicMutation } from "@/app/redux/api";

const ClinicFormSchema = z.object({
  name: z.string({
    required_error: "Please fill in the name",
  }),
  contactNumber: z.string({
    required_error: "Please fill in the contact number",
  }),
  address: z.string({
    required_error: "Please fill in the address",
  }),
});

type ClinicFormValues = z.infer<typeof ClinicFormSchema>;
// This can come from your database or API.
const defaultValues: Partial<ClinicFormValues> = {};

export default function Page() {
  const location = useGeoLocation();
  const [cord, setCord] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const router = useRouter();
  const { toast } = useToast();
  const auth = useSelector((store: RootState) => store.auth);
  const geolocation = useSelector((store: RootState) => store.location);
  const form = useForm<ClinicFormValues>({
    resolver: zodResolver(ClinicFormSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
      if(geolocation.location) {
      const { lat, lng } = geolocation.location;
    setCord({ lat: parseFloat(lat), lng: parseFloat(lng) });
      }
  }, []);

  const [addClinic, { isLoading: isRegionsLoading, data: any, isError: clinicerror , error: userclinicerror }] = useAddClinicMutation();

  const userid = auth.user?.result?._id;

  const onSubmit = async (data: ClinicFormValues) => {

    const latitude = cord.lat;
    const longitude = cord.lng;

    const modifiedData = {
      ...data,
      location: { latitude, longitude },
      doctors: [userid],
    };

    try {
      const res = await addClinic(modifiedData);
      if (res.data) {
        toast({
          title: "Successfully Added Clinic.",
        });
      } else {
        toast({
          title: "Something went wrong",
        });
      }
      router.push('/dashboard');
      
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

  return (
    <>
      <div className="md:px-[3rem] w-full py-0 pb-[2rem] md:py-[3rem] h-screen bg-white overflow-y-auto relative">
        <div className="flex flex-row rounded-xl md:bg-secondary md:bg-opacity-60 md:backdrop-blur-lg relative z-[1]">
          <div className="hidden md:inline-flex md:w-4/12 bg-primary rounded-xl p-[3rem]">
            <div className="space-y-5 mt-[4rem]">
              <p className="text-white text-24 font-medium md:max-w-[300px]">
                Pharma unions
              </p>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-[2rem] md:px-[5rem] py-[2rem] space-y-3 md:space-y-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 md:space-y-5 w-full"
                id="submit-form"
              >
                <div className="columns-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the clinic name"
                            {...field}
                            className="w-full"
                            defaultValue={defaultValues.name}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="columns-1">
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-white">Contact Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter contact number"
                            {...field}
                            className="w-full"
                            defaultValue={defaultValues.contactNumber}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="columns-1">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-white">Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter address"
                            {...field}
                            className="w-full"
                            defaultValue={defaultValues.address}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pt-[1rem]">
                  <Button
                    className="rounded-xl w-full"
                    size="lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
