import { Button } from "../ui/button"
import SeatingCard from "./SeatingCard";



const HeroSection = () => {
  const maxVisible = 3;

  const registeredUsers = [
    { id: 1, imageSrc: '/src/assets/images/eventPageImg/eventAvatar.svg' },
    { id: 2, imageSrc: '/src/assets/images/eventPageImg/eventAvatar2.svg' },
    { id: 3, imageSrc: '/src/assets/images/eventPageImg/eventAvatar3.svg' },
    { id: 4, imageSrc: '/src/assets/images/eventPageImg/eventAvatar.svg' },
    { id: 5, imageSrc: '/src/assets/images/eventPageImg/eventAvatar.svg' },
    // Add more avatars if needed
  ];

  return (
    <div className="bg-[url(/src/assets/images/eventPageImg/eventsSectionBg.svg)]  bg-cover bg-center h-[600px]">
      <div className="absolute inset-0 bg-black bg-opacity-60 h-[600px]">

        <div className="flex flex-row justify-center items-center m-auto gap-12  h-full mt-3">

        <div className="flex flex-col gap-4">
          <img src='/src/assets/images/eventPageImg/eventsSectionimg.svg' alt=''
          className="w-[333px] h-[320px] rounded-xl" />

            <div className="w-[333px] flex flex-row justify-between ">
              <div className="flex flex-row gap-3">
              <img 
                  src="/src/assets/images/eventPageImg/dreamville.svg" 
              alt="" className="rounded-full"/>
              <div className="text-white">
                <p className="font-sfpro font-medium text-base">@dreamville</p>
                <p className="font-sfpro font-light text-gray-300 text-sm">Event organizer</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
              <Button className="text-white bg-white/15 rounded-full h-8  px-7 text-xs font-light">Message</Button>
              </div>
            </div>

        </div>
        <div className="text-white flex flex-col gap-5">

          
          <div className="flex flex-row gap-3">
            <img className="cursor-pointer" src="/src/assets/images/eventPageImg/likeIcon.svg" alt="Share" />
            <img className="cursor-pointer" src="/src/assets/images/eventPageImg/shareIcon.svg" alt="Share" />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-sfpro font-medium text-5xl tracking-wide">The Social Quiz Club</h1>
            <div className="flex flex-row gap-5">
                <p className="flex flex-row gap-3 font-sfpro text-xl tracking-wider font-light"><img src="/src/assets/icons/clock.svg" alt="Date" />Sat, Aug 17 • 7:00 PM</p>
                
                <p className="flex flex-row gap-3 font-sfpro text-xl tracking-wider font-light"><img src="/src/assets/icons/location.svg" alt="Date" />Proud City, London</p>
                
              </div>

              <div className="flex flex-row gap-4">

              <div className="flex items-center">
                  {registeredUsers.slice(0, maxVisible).map((avatar, index) => (
                  <div
                    key={avatar.id}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 border-white ${index !== 0 ? '-ml-4' : ''}`}
                  >
                    <img src={avatar.imageSrc} alt={`Avatar ${avatar.id}`} className="w-full h-full object-cover" />
                  </div>
                ))}

                {/* Show the remaining count if there are more avatars */}
                  {registeredUsers.length > maxVisible && (
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center border-2 border-white -ml-4">
                      +{registeredUsers.length - maxVisible}
                  </div>
                )}
              </div>
                <div className="flex flex-col gap-1 justify-center">
                  <p className="font-sfpor text-sm font-medium tracking-wider ">{registeredUsers.length} people are attending</p>
                  <p className="text-xs font-light text-[#c8c1c1] tracking-wide">Register Now to be a part of them!</p>
              </div>


              </div>

              
          </div>
            <div className=" flex flex-row gap-4 border-t-[2px] border-[#2E3D34] w-[591px] pt-4"> 
              <SeatingCard
                title="VIP Seating"
                seatsLeft={54}
                price={1500}
                iconSrc="/src/assets/images/eventPageImg/VipTicket.svg"
              />

              <SeatingCard
                title="Regular Seating"
                seatsLeft={54}
                price={1500}
                iconSrc="/src/assets/images/eventPageImg/RegularTicket.svg"
              />
          </div>

        </div>




      </div>

        <div>

        </div>
        <div>

        </div>

        </div>
    </div>
  )
}

export default HeroSection