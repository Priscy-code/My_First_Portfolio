import { Button } from "../ui/button"
import { Input } from "../ui/input"


const InputSearch = () => {
  return (
    <div className="flex flex-row rounded-full relative">
      
      <span className="absolute inset-y-0 z-50 left-0 flex items-center pl-3">
        <img src="/src/assets/icons/homepage/search.svg" alt="search" />
      </span>
      <Input 
        type="text"
        placeholder="Search for Events"
        className="px-8 h-12 border-[3px] border-y-[#727374]/40 border-l-[#727374]/50 border-r-[0.5px] border-r-[#727374]/50 text-sm font-sfpro font-light tracking-wider w-[339px] bg-white/10 backdrop-blur-md text-[#AAAAAA] py-4 rounded-l-xl shadow-lg"></Input>
      <Button className="border-[3px] border-y-[#727374]/50 border-r-[#727374]/50 border-l-[0.5px] border-l-[#727374]/50 h-12 font-sfpro text-base w-[158px] bg-white/20 backdrop-blur-md text-white py-4 px-3  rounded-r-xl shadow-lg flex flex-row gap-11">
      <span className="flex flex-row gap-2">
        <img src="/src/assets/icons/homepage/location.svg" alt="location" />
        Accra
          
        </span>
        <img src="/src/assets/icons/homepage/chevron-down.svg" alt="" />
      </Button>
    </div>
  )
}

export default InputSearch