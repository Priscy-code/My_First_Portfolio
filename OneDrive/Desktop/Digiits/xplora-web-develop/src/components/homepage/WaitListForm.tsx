import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { toast } from "react-toastify";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export default function WaitListForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const waitlistQuery = query(collection(db, "waitlist"), where("email", "==", values.email));
            const waitlistSnapshot = await getDocs(waitlistQuery);
            if (!waitlistSnapshot.empty) {
                toast.error("Email already exists in the waitlist");
                return;
            }

            // Add email to waitlist
            await addDoc(collection(db, "waitlist"), {
                email: values.email,
                timeStamp: new Date(),
            });

            toast.success("Email successfully added to waitlist");

            // Reset the form input to empty
            form.reset(); // Reset the form fields
        } catch (error: any) {
            console.error("Error adding document: ", error);
            toast.error("Error adding email to waitlist");
        }
    }

    return (
        <div className="w-full mt-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-[350px] sm:w-[520px] ">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="sm:flex w-full">
                                        <Input
                                            placeholder="Please enter your email"
                                            {...field}
                                            className="rounded-r-none w-full bg-black sm:bg-gray-100 border-gray-200 text-white sm:text-black focus:ring-none sm:focus:border-[#6515ED]"
                                        />
                                        <Button type="submit" className="w-1/2 mt-4 sm:mt-0 sm:rounded-none rounded-l-none rounded-full py-6 sm:py-8 bg-[#6515ED] text-white hover:bg-[#6515ED]">
                                            Notify me
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    );
}
