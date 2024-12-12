import Header2 from "@/components/shared/AuthHeader";

import { Button } from "@/components/ui/button";
// import Header2 from "@/components/shared/Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// >>>>>>> priscilla-fixes:src/features/authentication/Signupcomponent/SignUp.tsx
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import Signupicon from "@/assets/icons/login-icon.svg"
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {
  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(20, "Password must not exceed 20 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center ">

      <Header2 />

      <div className="mt-32 w-[90%] md:w-[500px] px-8 py-8 bg-white rounded-2xl shadow-lg" >
        <img src={Signupicon} alt="" />

        <div className="font-steelfish flex flex-col gap-2 mb-8 w-[350px]">
          <h2 className="font-roboto mt-4 text-2xl lg:2xl font-bold">Create Your Xplora Account</h2>
          <p className="font-sfpro text-gray-500 ">Sign up to discover events,connect with new people,and invite friends.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => { })} className="w-[100%] h-[20%] mb-6 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sfpro font-semibold">Email Address</FormLabel>
                  <FormControl>
                    <div className="">
                      <Input
                        placeholder="Please enter your email"
                        {...field}
                        className="lg:w[500px] mb-4 w-full bg-[#f5f5f5] text-black sm:text-black focus:ring-none sm:focus:border-[#6515ED] rounded-xl"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sfpro font-semibold">Password</FormLabel>
                  <FormControl>

                    <div className="relative flex "> 
                    <Input
                      type={showPassword ? 'text ' : 'password'}
                      placeholder="Enter your password"
                      {...field}
                      className="w-full bg-[#f5f5f5] text-black sm:text-black focus:ring-none sm:focus:border-[#6515ED] rounded-xl"
                    />
                    <FontAwesomeIcon icon={ showPassword ? faEyeSlash : faEye} className="absolute right-3 top-6"
                    onClick={togglePasswordVisibility}/>
                    </div>


                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <div>
          {/* <Button type="submit" className="w-full mt-4 sm:mt-0 lg:mb-5  rounded-full sm:py-6 py-3 bg-[#9557ff] text-white hover:bg-[#6515ED] mb-5">
            Create Your account
          </Button> */}
          <button className="text-center w-full text-white p-4 bg-purple rounded-full mb-4">Create Your account </button>
        </div>

        <div className="mb-4 flex flex-row gap-5">
          <button aria-label="sign up with Apple" className="flex items-center justify-center w-1/2 p-4 rounded-full border bg-grayy">
            <FontAwesomeIcon icon={faAppleAlt}/>
          </button>

          <button aria-label="Sign up with Google" className="flex border rounded-full p-4 bg-grayy items-center justify-center w-1/2">
           <FaGoogle/>
          </button>
        </div>

        <div>
          <p className="font-sfpro text-grey text-center">Already have an account?
             <Link to={'/login'} className="text-black font-semibold ml-2">
            Login 
            </Link>
             </p>
        </div>

      </div>




    </div>

  )
}

export default SignUp;