import HeroImage from "../../../assets/group-afro-americans-working-together.svg";
import Navbar from "../../layouts/HomeNavbar";
import PeopleRow from '../../../assets/people-row.svg';
import Quotes from '../../../assets/quotes.svg';
import MouseIcon from '../../../assets/iconoir_mouse-scroll-wheel.svg';
import Monochrome from '../../../assets/logo-monochrome.svg';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen h-[calc(100vh-2rem)] overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        
        <div className="flex-grow flex flex-col items-center justify-center text-white px-2 sm:px-4 mt-4 sm:mt-6">
          <div className="flex w-full justify-between items-start mb-2 sm:mb-4">
            <img src={Monochrome} alt="Global LinkUp" className="w-20 sm:w-24 hidden sm:block"/>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 text-center">
                Connecting Immigrants in the US
              </h1>
              <p className="w-full sm:w-3/4 lg:w-2/3 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-center">
                Join our platform and unlock a world of opportunities for networking, exploration, and community building as an immigrant. Welcome to your new home away from home!
              </p>


              <div className="relative flex items-center mt-2 p-2 sm:p-3 bg-gray-500 bg-opacity-50 rounded-2xl backdrop-blur-md sm:w-2/3 md:w-1/2">
                <div className="flex space-x-1 sm:space-x-2 w-1/2">
                  <img src={PeopleRow} alt="People Row" className="w-[70%] sm:w-[80%]" />
                </div>
                <div className="ml-2 sm:ml-4 py-2 px-2 sm:py-3 sm:px-3 bg-gray-800 bg-opacity-75 w-1/2 text-center text-[8px] sm:text-xs lg:text-sm text-white rounded-full flex items-center justify-center">
                  <span>Join 2000+ Immigrants</span>
                </div>
              </div>
            </div>
            <img src={Monochrome} alt="Global LinkUp" className="w-20 sm:w-24 hidden sm:block"/>
          </div>
        </div>

        <div className="mt-auto flex flex-col lg:flex-row justify-between items-center lg:items-end w-full px-2 sm:px-4 lg:px-6 pb-4 sm:pb-6 space-y-4 lg:space-y-0">
          <button className="flex items-center bg-black bg-opacity-50 text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-opacity-70 transition-colors duration-300 order-3 lg:order-1 text-sm sm:text-base">
              <span className="mr-2">Learn More</span>
              <img src={MouseIcon} alt="Mouse Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <div className="w-full lg:w-1/3 bg-[#FDFEFF33] rounded-xl p-3 sm:p-4 order-2 lg:order-2 flex flex-col items-center">
            <img src={Quotes} alt="Quotes" className="w-6 sm:w-8 mb-2 sm:mb-3"/>
            <p className="text-sm sm:text-base text-center text-white">
              GL<span className="text-custom-red">U</span> is a social networking platform designed to connect immigrants, offering a supportive community for individuals navigating life in a new country. The platform focuses on community building, local recommendations, forums, and events.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;