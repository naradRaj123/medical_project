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
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const profileFormSchema: any = z.object({
  f_name: z.string({
    required_error: "Please enter first name",
  }),
  l_name: z.string({
    required_error: "Please enter last name",
  }),
  email: z.string({
    required_error: "Please enter an email",
  }).email(),
  mobile: z.string({
    required_error: "Please enter your mobile number",
  }).min(10, "Number must contain 10 digits"),
  dob: z.string({
    required_error: "Enter your date of birth",
  }),
});
type ProfileFormValues = z.infer<typeof profileFormSchema>;


// 2nd form
const profileForm2Schema: any = z.object({

  address: z.string({
    required_error: "Please Fill address",
  }),
  registration_number: z.string({
    required_error: "Please Fill registration Number",
  }),
  role: z.string({
    required_error: "Please enter your role"
  }),
  degree: z.string({
    required_error: "Please enter your degree"
  }),
  branch: z.string({
    required_error: "Please enter an branch Name",
  }),
  password: z.string({
    required_error: "Enter your date of birth",
  }).min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain at least one special character and number'),
  confirmPassword: z.string({
    required_error: "Please enter Your password"
  }).min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain at least one special character and number'),
});
type ProfileForm2Values = z.infer<typeof profileForm2Schema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export default function Page() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [showForm1, setShowForm1] = useState(true);
  const { toast } = useToast()

  const toggleshowForm = () => {
    setShowForm1(true);
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit1 = (data: ProfileFormValues) => {
    if (data !== "") {
      setUserData(data);
      setShowForm1(false);
    }
  };

  const form2 = useForm<ProfileForm2Values>({
    resolver: zodResolver(profileForm2Schema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit2 = (data2: ProfileForm2Values) => {
    if (data2 !== "") {

      const newData = { ...userData, ...data2 };
      setUserData(newData);

      const addUser = async () => {
        try {
          const authToken = 'Y3VzP9H8a@r&M0A50b3Byb3RlY3RhcGlyb3V0ZXM=';
          const response = await fetch('http://13.202.22.54:3030/add-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authtoken': authToken
            },
            body: JSON.stringify(newData)
          });
          if (!response.ok) {
            throw new Error('Failed to add user');
          }
          const data = await response.json();

         

          // Redirect to sign up upon successful registration
          router.push('/sign-in');
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{error.toString()}</code>
              </pre>
            )
          })
        }
      };
      addUser();
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
            {showForm1 ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit1)}
                  className="space-y-3 md:space-y-5 w-full"
                  id="submit-form">
                  <div className="flex space-x-4">
                    <FormField
                      control={form.control}
                      name="f_name"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="text-white">First name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="First name"
                              {...field}
                              className="w-full"
                              defaultValue={form.getValues("f_name")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="l_name"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="text-white">Last name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Last name"
                              {...field}
                              className="w-full"
                              defaultValue={form.getValues("l_name")}
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
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              className="w-full"
                              defaultValue={form.getValues("email")}
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
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Mobile Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Mobile"
                              {...field}
                              className="w-full"
                              defaultValue={form.getValues("mobile")}
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
                      name="dob"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Date of Birth</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              placeholder="Date of Birth"
                              {...field}
                              className="w-full"
                              defaultValue={form.getValues("dob")}
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
                      Next
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <div>
                <Form {...form2}>
                  <form
                    onSubmit={form2.handleSubmit(onSubmit2)}
                    className="space-y-3 md:space-y-5 w-full"
                    id="submit-form"
                  >
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel className="text-white">Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your Address"
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("address")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="registration_number"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel className="text-white">Registration Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Registration Number"
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("registration_number")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="branch"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Branch</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Branch Name"
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("branch")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Role</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="DR">Doctor</SelectItem>
                                <SelectItem value="PM">Manufacturer</SelectItem>
                                <SelectItem value="BA">Business Associate</SelectItem>
                                <SelectItem value="LAB">LAB </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      


                    </div>
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="degree"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Degree</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Branch Name"
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("degree")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                   
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Enter password"
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("password")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="columns-1">
                      <FormField
                        control={form2.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Confirm Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Confirm Password"
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("confirmPassword")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                 
                    <div className="pt-[1rem] flex justify-between">
                      <Button
                        className="rounded-xl "
                        size="lg"
                        onClick={toggleshowForm}
                      >
                        Back
                      </Button>
                      <Button
                        className="rounded-xl "
                        size="lg"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
            {/* step1 */}
            <div className="text-sm text-white flex justify-end">
              <p>
                Have an account?
                <Link href={'/sign-in'}>
                  <Button
                    variant="link"
                    className="text-white text-sm -ml-2"
                  >
                    Login
                  </Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};