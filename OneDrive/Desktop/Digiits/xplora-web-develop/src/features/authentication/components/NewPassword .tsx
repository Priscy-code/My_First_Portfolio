import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Header2 from "@/components/shared/Header2";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AuthHeader from "@/components/shared/AuthHeader";



    const PasswordScheme = z.object ({
        password: z.string()
        .min(6, "Password be at least 6 charaters long")
        .max(18, "Password must not exceed 18 characters"),
        confirmPassword: z.string(),

    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password don't match",
        path: ["confirmPassword"],
    })
    type passwordForm = z.infer<typeof PasswordScheme>
   

const NewPassword = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<passwordForm>({
        resolver: zodResolver(PasswordScheme)
    });
    const onSubmit = (data: passwordForm) => {
        console.log("Form Data: ", data)
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }


    return(
        <div className="min-h-screen items-center justify-center flex bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff]">
            <AuthHeader/>

            <div className="bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl">

                <div className="h-12 w-12 rounded-full bg-gray-200 justify-center items-center  ">
                    <FontAwesomeIcon icon={faLock} className="text-purple size-8 mb-6 p-2 "/>
                </div>

                <div className="font-steelfish flex flex-col gap-2 mb-4 w-[350px]">
                    <h1 className=" font-roboto font-bold text-2xl md:text-xl sm:text-lg ">Create a New Password</h1>
                    <p className="text-gray-500 text-sm sm:text-sm md:text-base mb-6 font-sfpro ">Enter a new password to secure your account and continue exploring events.</p>

                </div>

                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                <div className=" relative mb-8 flex-col flex ">
                    <label htmlFor="password" className="mb-2 text-sm ">New Password</label>

                    <div className="relative flex mb-2">
                        <input type={showPassword ? 'password' : 'text'} placeholder="Enter Password" id= "password"
                        className={`text-sm w-full bg-gray-200 p-4 rounded-xl border  sm:text-sm md:text-base text-xs ${errors.password ? 'border-red-500' : ''}`} 
                        {...register("password")}/>
                        <span className="absolute right-3 top-1  "><FontAwesomeIcon icon={ showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility}/></span>
                    </div>

                    {errors.password && <p className="text-red-500 text-xs mb-4">{errors.password.message}</p>}

                    <label htmlFor="confirmpassword" className="text-sm sm:text-sm md:text-base mb-2">Re-enter New Password</label>

                    <div className="relative flex mb-2 ">
                        <input type={showPassword ? 'password' : 'text'} placeholder="Enter Password" id="confirmpassword"
                        className={`w-full bg-gray-200 p-4 rounded-xl border text-sm ${errors.confirmPassword ? "border-red-500" : ""}`} 
                        {...register("confirmPassword")}/> 
                        <span className="absolute right-3 top-3"><FontAwesomeIcon icon={ showPassword ? faEyeSlash : faEye} 
                        onClick={togglePasswordVisibility}/></span>
                    </div>

                    {errors.confirmPassword && (<p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>)}
                </div>
                
                    <button type="submit" className="w-full bg-purple p-4 rounded-full text-center text-white ">Confirm new password</button>
                </form>
  


                
            </div>
        </div>
    )
}

export default NewPassword;