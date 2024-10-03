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
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/redux/slices/auth-slice";
import Link from "next/link";
import useGeoLocation from "@/components/customHook/useGeoLocation";
import { useEffect, useState } from "react";
import { addLocation } from "@/app/redux/slices/location-slice";
import { useSignInMutation } from "@/app/redux/api";
import { EyeIcon, EyeOff } from "lucide-react";
import { RootState, store } from "@/app/redux/store";


const loginSchema: any = z.object({
  email: z.string({
    required_error: "Please Enter your email"
  }).email(),
  password: z.string({
    required_error: "Please enter your password"
  }).min(8, "Password must be at least 8 characters long")
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain at least one special character and number'),
});
type profilevalue = z.infer<typeof loginSchema>;
const defaultValues: Partial<profilevalue> = {};

export default function Page() {
  // const location = useGeoLocation();
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast()
  const form = useForm<profilevalue>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onChange",
  });

  // role 
  let [role, setrole] = useState('')

  //login user of dashboard
  const userAuth=useSelector((store:RootState)=>store.auth)

  // useEffect(() => {
  //   if (location.loaded) {
  //     const { lat, lng } = location.cordinates;
  //     dispatch(addLocation(location.cordinates));
  //   }
  // }, [location.loaded, location.cordinates]);

  const [signIn, { isLoading: isRegionsLoading, data: any, isError: clinicerror, error: userclinicerror }] = useSignInMutation();

  

  const onSubmit = async (data: profilevalue) => {
    try {
      const authToken = 'Y3VzP9H8a@r&M0A50b3Byb3RlY3RhcGlyb3V0ZXM=';
      const response = await fetch('http://13.202.22.54:3030/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to sign up')
      }

      // const response = await signIn(data);
      // if (response.data) {
      //   toast({
      //     title: "Successfully Added Clinic.",
      //   });
      // } else {
      //   toast({
      //     title: "Something went wrong",
      //   });
      // }

      const output = await response.json();
      dispatch(login(output));

      if (output.result.isVerified) {
        switch (output.result.role) {
          case 'DR':
            if (output.result.isClinicCreated) {
              toast({
                title: "Welcome to Dashboard",
                // description: (
                //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                //     <code className="text-white">Your Account is not verified yet. Please login in after some time !</code>
                //   </pre>
                // )
              });
                router.push('/dashboard');
            } else {
              router.push('/nextpage');
            }
            break;

          case 'BA':
            router.push('/ba-dashboard');
            break;

          case 'manufacturer':
            router.push('/m-dashboard');
            break;

          default:
            toast({
              title: "Verification Pending",
              description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                  <code className="text-white">Your Account is not verified yet. Please login in after some time !</code>
                </pre>
              )
            });
        }
      }
    } catch (error) {
      toast({
        title: '',
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-[red] p-5 ">
              <code className="text-white"> Sign in Failed </code>
            </pre>
          )
      });
    }
  };


  // hide show
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <>
      <section className="w-[100%]  h-[100%] bg-[#007C7C] relative ">

        <div className="max-w-[73.2rem] h-[100%] mx-auto  flex justify-center items-center">
          <div className=" w-[90%] md:w-[50%]   rounded-md">

            <div className=" bg-[#FFF]  rounded-2xl py-[40px] px-[50px] backdrop-blur-lg relative z-[1] rounded-l-lg">
              <div className="w-[100%]  ">
                <h2 className="text-center  text-[20px]  font-[600] ">Login</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className=" mb-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your email "
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
                    <div className=" mb-2 relative ">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="">Password</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Your password"
                                type={showPassword ? 'text' : 'password'}
                                {...field}
                                className="w-full"
                                defaultValue={form.getValues("password")}
                              />

                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div onClick={togglePasswordVisibility} className=" fixed right-[15%] top-[50%] " >
                        {showPassword ? <EyeOff /> : <EyeIcon />}
                      </div>
                    </div>
                    <div className="pt-[1rem]">
                      <Button className="rounded-xl w-full hover:text-white bg-black hover:bg-primary " size="lg" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="flex items-center mt-4 ">
                  <p className=" mt-2 font-[500] ">Don’t have an account ? </p>
                  <span className="mt-2 ml-3 ">  <Link href={'/sign-up'} className=" text-primary font-[500] " >  Register</Link></span>
                </div>
              </div>

            </div>



          </div>
        </div>

      </section>
    </>
  );
}

