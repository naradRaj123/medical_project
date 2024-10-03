"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useAddPatientMutation } from "@/app/redux/api";

const patientSchema: any = z.object({
    fname: z.string({
        required_error: "First name is required"
    }),
    lname: z.string({
        required_error: "Last name is required"
    }),
    gender: z.string({
        required_error: "Gender is required",
    }),
    dob: z.string({
        required_error: "Date of birth is required"
    }),
    mobile: z.string({
        required_error: "Please enter your mobile number",
    }),
    email: z.string().email().optional(),
    address: z.string({
        required_error: "Please provide address"
    }),
    bloodGroup: z.string().optional()
});

type patientFormValue = z.infer<typeof patientSchema>;
const defaultValues: Partial<patientFormValue> = {};


const AddPatient = () => {
    const auth = useSelector((store: RootState) => store.auth);
    const { toast } = useToast();
    const form = useForm<patientFormValue>({
        resolver: zodResolver(patientSchema),
        mode: "onChange",
    });

    const [addPatient, { isLoading: isRegionsLoading, data: any, isError: clinicerror, error: userclinicerror }] = useAddPatientMutation();

    const userid = auth.user?.result?._id;

    const onSubmit = async (data: patientFormValue) => {

        const modifiedData = {
            ...data,
            doctorRef: userid,
        };

        console.log(modifiedData);

        try {
            const res = await addPatient(modifiedData);
            // console.log(res.data.status);
            if (res.data.status) {
                toast({
                    title: "Patient Added Successfully !"
                });
                console.log(res);
            } else {
                toast({
                    title: "Please try Again",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-red-300 p-4">
                            <code className="text-white">Patient Not Added Sucessfully !</code>
                        </pre>
                    )
                });
            }
        }
        catch (error) {
            toast({
                title: "",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-red-400 p-4">
                        <code className="text-white">Try Again ! </code>
                    </pre>
                )
            });
        }
    }

    return (
        <>
            <section className="w-[100%]  h-[100%] bg-[#ffffff] flex justify-center items-center">
                <div className=" w-[70%]  border-primary border-[0.5px]  rounded-md p-8">
                    <h2 className="text-center  text-[20px]">Add Patient</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="fname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter First Name"
                                                    {...field}
                                                    className="w-full"
                                                    defaultValue={form.getValues("fname")}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="lname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Last Name"
                                                    {...field}
                                                    className="w-full "
                                                    defaultValue={form.getValues("lname")}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Gender</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select the Gender" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="M">Male</SelectItem>
                                                    <SelectItem value="F">Female</SelectItem>
                                                    <SelectItem value="O">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date of Birth</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="date"
                                                    {...field}
                                                    className="w-full "
                                                    defaultValue={form.getValues("dob")}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="mobile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mobile Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Last Name"
                                                    {...field}
                                                    className="w-full "
                                                    defaultValue={form.getValues("mobile")}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Id</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="abc@gmail.com"
                                                    {...field}
                                                    className="w-full "
                                                    defaultValue={form.getValues("email")}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Address"
                                                    {...field}
                                                    className="w-full "
                                                    defaultValue={form.getValues("address")}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <FormField
                                    control={form.control}
                                    name="bloodGroup"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Blood Group</FormLabel>
                                            <Select onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Blood Group" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="A+">A+</SelectItem>
                                                    <SelectItem value="A-">A-</SelectItem>
                                                    <SelectItem value="B+">B+</SelectItem>
                                                    <SelectItem value="B-">B-</SelectItem>
                                                    <SelectItem value="AB+">AB+</SelectItem>
                                                    <SelectItem value="AB-">AB-</SelectItem>
                                                    <SelectItem value="O+">O+</SelectItem>
                                                    <SelectItem value="O-">O-</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="pt-[1rem]">
                                <Button className="rounded-xl w-full" size="lg" type="submit">
                                    Add Patient
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>
        </>
    )
};

export default AddPatient;