// import Header2 from "@/components/shared/Header2";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import forgot from "@/assets/icons/forgot-password-icon.svg"
import AuthHeader from "@/components/shared/AuthHeader";

const VaildScheme = z.object({
    email: z.string().email({message: "Invaild email address"})
});
type vailform = z.infer<typeof VaildScheme>;

const ForgetPassword = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<vailform>({
        resolver: zodResolver(VaildScheme)
    });
    const onSubmit = (data: vailform) => {
        console.log("Form Data: ", data)
    }
    

    return(

        <div className="flex min-h-screen bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center p-12">
            <AuthHeader/> 
            <div className="bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl">

                <img src={forgot} alt="Xlpore" />


                <div className="font-stellfish flex flex-col gap-2 mb-8 w-[350px]">
                    <h2 className="font-bold font-roboto mt-4 text-2xl lg:2xl ">Forgot Your Password?</h2>
                    <p className="font-sfpro text-gray-500  ">Enter your email to reset your password and regain accessto your account.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2 flex flex-col">
                        <label htmlFor="" className="block text-sm mb-2">Email Address</label>
                        <input type="text" placeholder="Enter Emaile Address" 
                        className={`block bg-gray-100 p-4 rounded-xl mb-2 w-full ${errors.email ? 'border-red-500' : ''}`} 
                        {...register("email")}/>
                       
                    </div>
                     {errors.email && <p className="text-red-500 text-xs mb-4 ">{errors.email.message}</p>}

                     <button type="submit" className=" bg-purple text-white text-centertext- w-full rounded-full p-4 ">Send OTP</button>
                </form>

               


            </div>
        </div>




      
    )
}

export default ForgetPassword;