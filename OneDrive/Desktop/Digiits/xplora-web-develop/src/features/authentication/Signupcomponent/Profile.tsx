// import Header2 from "@/components/shared/Header2"
import profile from "@/assets/icons/xplora-complete-profile-icon.svg"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import AuthHeader from "@/components/shared/AuthHeader"

const VaildScheme = z.object({
    username: z.string().nonempty({message: "Please enter userName "}),
    bio: z.string()
        .max(100, "Bio must be at most 100 words")
        .min(20, "Bio must be at least 20 words")
    
})
type formVail = z.infer<typeof VaildScheme>


const Profile = () => {

    const { register, handleSubmit, formState:{errors}} = useForm<formVail>({
        resolver: zodResolver(VaildScheme)
    })
    const onSubmit = (data: formVail) => {
        console.log("Form Data: ", data)
    }
    return(
        <div className="min-h-screen flex bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center  ">
            <AuthHeader/>
            <div className="bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl">

                <img src={profile} alt="xplore"  />

                <div className="font-steelfish flex flex-col gap-2 mb-8 w-[350px]">
                    <h1 className="font-roboto lg:text-left mt-4 lg:2xl font-bold text-2xl">Complete Your Profile</h1>
                    <p className=" font-sfpro lg:text-left text-gry text-sm mb-4">Add a photo and fill in your details to complete your profile</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2 flex flex-col">
                        <label htmlFor="username" className="text-sm mb-3">Username</label>
                        <input type="text" placeholder="@"
                        className="w-full bg-grayy p-4 rounded-xl text-sm " 
                        {...register("username")}/>

                    </div>
                    {errors.username && <p className="text-red-500 text-xs mb-4 ">{errors.username.message}</p>}

                <div className="mb-2 flex flex-col">
                    <label htmlFor="bio" className="text-sm mb-3">Short bio</label>
                    <textarea  placeholder="Tell us a little about yourself" 
                    className="border rounded-xl bg-grayy w-full p-4 mt-1"
                    {...register("bio")}></textarea>
                </div>
                {errors.bio && <p className="text-red-500 text-xs mb-4"> {errors.bio.message}</p>}
                        <button className="text-center w-full text-white p-4 bg-purple rounded-full">Continue</button>
                </form>

                


            </div>
        </div>
    )
}
export default Profile;