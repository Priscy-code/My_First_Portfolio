// import Header2 from "@/components/shared/Header2";
import completeProfile from "@/assets/icons/select-city-icon.svg"
import MarkPoint from "@/assets/icons/marker-pin-icon.svg"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthHeader from "@/components/shared/AuthHeader";

const VaildScheme = z.object({
    location: z.string().nonempty({message: "location is required "})
})
type vailform = z.infer<typeof VaildScheme>

const CitySelect = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<vailform>({
        resolver: zodResolver(VaildScheme)
    })
    const onSubmit = (data: vailform) => {
        console.log("Form Data:", data)
    }

    return(
        <div className="min-h-screen flex bg-gradient-to-br from-[#d3dffb] via-[#f0e7fd] to-[#ffff] items-center justify-center ">
            <AuthHeader/>
            <div className="bg-white shadow-lg mt-32 w-[90%] md:w-[500px] px-8 py-8 rounded-2xl">

                <img src={completeProfile} alt="Xplore" />

                <div className="font-steelfish flex flex-col gap-2 mb-8 w-[350px]">
                    <h1 className=" font-roboto lg:text-left mt-4 lg:2xl font-bold text-2xl ">Add your location to curate tailored recommendation</h1>
                    <p className="font-sfpro lg:text text-gry text-sm mb-4">id anim aliqua nulla ullamco velit duis et eu tempor fugiat irure</p>
                </div>


               <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="relative flex mb-2 text-center ">
                    <input type="text" placeholder="Enter City" className="rounded-xl bg-grayy text-sm w-full p-4 pl-10 "/>
                    <img src={MarkPoint} alt="Xplore" className="absolute ml-2 top-2 text-gray-300"
                    {...register("location")} />

                 </div>
                  {errors.location && <p className="text-red-500 text-xs mb-4">{errors.location.message}</p>}

                 <button className="text-center w-full text-white p-4 bg-purple rounded-full">Contiue</button>
               </form>

                

            </div>
        </div>
    )
}
export default CitySelect;