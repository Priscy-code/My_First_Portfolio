import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FaGoogle} from 'react-icons/fa'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// import Header2 from '@/components/shared/Header2';
import { useState } from 'react';
import LoginIcon from "@/assets/icons/login-icon.svg"
import LoginHeader from '@/components/shared/LoginHeader';
import AuthHeader from '@/components/shared/AuthHeader';

 const VaildScheme = z.object({
    email: z.string().email({message: "Invalid email address"}),
    password: z.string()
    .max(16, "Password must be at most 16 characters")
    .min(8, "Password must be at least 8 character"),
    
    
  });
  type VaildForm = z.infer<typeof VaildScheme>;

const Login = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<VaildForm>({
     resolver: zodResolver(VaildScheme)
  }); 
  const onSubmit = (data: VaildForm) => {
    console.log("Form Data: ", data)
  }

  const [showPassword, setShowPassword] = useState(false)
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }


 

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center p-12">
      <AuthHeader/>

      <div className='bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl'>

        <div className='h-12 w-12 rounded-full bg-gray-200 justify-center items-center '>
          <img src={LoginIcon} alt="" />
        </div>

        <div className='font-steelfish flex flex-col gap-2 mb-8 w-[350px] '>
          <h2 className='text-2xl font-roboto lg:text-left font-bold mt-4 lg:2xl '>Welcome Back!</h2>
          <p className=' text-gry mb-6 lg:text-left font-sfpro'>Log in to continue exploring events and connecting with others</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="email" className='block mb-2 text-sm'>Email Address</label>
          <input type="text" placeholder="Enter Email Address"
          className={`w-full p-4 border rounded-2xl mb-2 bg-grayy text-sm ${errors.email ? 'border-red-500' : ''}`} 
          {...register("email")}/>

          {errors.email && <p className='text-red-500 text-xs mb-4'>{errors.email.message }</p>}

          <label htmlFor="password" className='block mb-2'> Password</label>

          <div className='relative flex'>
            <input type={showPassword ? 'password': 'text'} placeholder="Enter password"
            className={`w-full mb-2 p-4 rounded-2xl text-sm bg-grayy block ${errors.password ? 'border-red-500': ''}` }
            {...register("password")}/>
            
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='absolute right-3 top-4 '
            onClick={togglePasswordVisibility}/>
          </div>
            {errors.password && <p className='text-red-500 text-xs mb-4'>{errors.password.message}</p>}


          <div className='text-right mb-4'>
            <a href="/forgot-password" className='font-bold text-sm underline'>Forgot my password</a>
            </div>

          <button  className='text-center w-full text-white p-4 bg-purple rounded-full'>Create your account</button>
          
        </form>
        

        <div className='flex justify-between mt-4 space-x-2 mb-4'>
          <button aria-label='Sign up with Apple' className='flex items-center justify-center w-1/2 p-4 rounded-full border bg-grayy'>
            <FontAwesomeIcon icon={faAppleAlt}></FontAwesomeIcon>
          </button>
          
          <button aria-label='Sign up with Google' className='flex border rounded-full p-4 bg-grayy items-center justify-center w-1/2 '>
            <FaGoogle/>
          </button>
        </div>
        <p className='font-sfpro text-center text-sm text-grey'>New to Xplora? <a href="/signup" className='font-semibold text-black'>Create an account</a></p>
      </div>
    </div>
  )
}

export default Login;