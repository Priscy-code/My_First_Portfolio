import Frames from "./components/homepage/Frames";
import HeroText from "./components/homepage/HeroText";
import WaitListForm from "./components/homepage/WaitListForm";
import Header from "./components/shared/Header";

import BackgroundImage from '@/assets/images/bgImage.svg';  

const LandingPage = () => {
  return (
    <div className="overflow-hidden min-h-screen relative">
      <Header />

    
      <div className="hidden sm:flex h-screen flex-col justify-between sm:flex-row">
        <div className="relative w-full  sm:w-1/2 h-full sm:h-screen ">
           <div className="absolute inset-0 z-10">
            <Frames />
          </div> 
        </div>

        <div className="relative flex flex-col md:w items-center justify-center w-[900px] h-full  mb-20 sm:mb-0 z-10 ">
          <HeroText />
          <div className="mt-6 lg:w-5/6 sm:mt-8 px-5 text-center flex justify-center flex-col items-center">
            <p className="mb-4 font-bold sm:font-normal text-justify sm:text-lg md:w-3/4 text-white md:text-[#1C1C1C]">
              Get ready to discover amazing events near you. From unforgettable gatherings to vibrant communities, Xplora will revolutionize the way you explore and mingle. Stay tuned!
            </p>
            <div className="flex justify-center items-center space-x-4">
              <WaitListForm />
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:hidden h-screen overflow-hidden relative">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-screen pt-4 w-full z-10 bg-black bg-opacity-50">
          <HeroText />
          <div className="mt-4 sm:mt-8 px-5 text-center flex justify-center flex-col items-center">
            <p className="mb-4  text-white text-justify">
              Get ready to discover amazing events near you. From unforgettable gatherings to vibrant communities, Xplora will revolutionize the way you explore and mingle. Stay tuned!
            </p>
            <div className="flex justify-center items-center space-x-4">
              <WaitListForm />
            </div>
          </div>
        </div>
      </div>
      </div>  
    
  );
};

export default LandingPage;
