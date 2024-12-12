
import LogoBlack from '@/assets/icons/xplora-logo-purple.svg';
import { Button } from '@/components/ui/button';
import { useCurrentTime } from '@/components/shared/useCurrentTime';
const AuthHeader = () => {
    const currentTime = useCurrentTime();
  return (

      <header className="hidden w-full md:flex container mx-auto fixed top-0 left-0 right-0 bg-transparent font-inter py-5 sm:py-5 items-center justify-between z-20  ">
          <div>
              <img src={LogoBlack} alt="Xplora" className="w-36" />
          </div>

          <div className='flex flex-row gap-10 font-medium  w-auto text-center items-center'>
              <p className='text-black  '>
                  {currentTime}

              </p>
              <div className='text-black font-inter '>
                  <p className='font-inter'>
                      Explore Events
                  </p>
              </div>

              <Button className="w-auto rounded-full py-6 px-10 bg-[#9557ff] text-white hover:bg-[#6515ED]">Get Started</Button>

          </div>
      </header>
  )
}

export default AuthHeader