import verify from "@/assets/icons/verify-icon.svg"
// import Header2 from "@/components/shared/Header2"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import LoginHeader from "@/components/shared/LoginHeader";

const otpSchema = z.object({
    otp: z.string()
    .min(6, "OTP must be 6 characters long")
    .max(6, "OTP must be 6 characters long")
    .regex(/^\d+$/, "OTP must contain only numbers")
});

type FormValues = {
    otp: string
}


const SignUpVerification = () => {

    const{register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(otpSchema)
    });

    const onSubmit = (data: any) => {
        console.log("OTP submitted: ", data.otp)
    }

    return(
        <div className="flex min-h-screen bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center p-12 ">
              <LoginHeader/>
            <div className="bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl ">

                <img src={verify} alt="" />

                <div className="font-steelfish flex flex-col gap-2 mb-8 w-[350px]">
                    <h2 className="text-2xl font-roboto lg:text-left font-bold mt-4 lg:2xl ">Enter Your Verification Code</h2>
                    <p className="text-gray-500 text-sm font-sfpro">We sent a Verification code to your email</p>
                    <p className="font-sfpro font-bold text-sm mn-6">user@user-mail.com</p>

                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-4 ">
                        <label htmlFor="" className="text-sm mb-2">Enter OTP Code</label>
                        <input type="text" placeholder="Enter OTP"
                        className={`bg-grayy p-4 rounded-xl text-sm w-full ${errors.otp ? "border-red-500": ""}`} 
                        {...register("otp")}/>
                    </div>
                    {errors.otp?.message && (<p>{String(errors.otp.message)}</p>)}
                    <button className="w-full text-center bg-purple p-4 rounded-full mt-4  hover: bg-[#6515ED] text-white ">Verify OTP</button>
                </form>
             

                
                

            </div>
        </div>
    )
}

export default SignUpVerification;