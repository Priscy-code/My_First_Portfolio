import { Link } from 'react-router-dom';
import ImageCard from '../../../assets/img-card.svg';
import RecommendationsIcon from '../../../assets/recommendation.svg';
import ForumsIcon from '../../../assets/forums-icon.svg';
import EventsIcon from '../../../assets/events-icon.svg';
import ImageCards from '../../layouts/ImageCards';
import ArrowBox1 from '../../../assets/arrow-box.svg';

const CommunityBuilding = () => {
  return (
    <div className='py-8 lg:py-36 bg-light-blue px-4 sm:px-8'>
      <div className='mx-auto max-w-2xl text-center space-y-4 w-full'>
        <h1 className='font-bold text-blue text-3xl sm:text-5xl'>
          Community Building
        </h1>
        <p className='text-base sm:text-lg'>
          Connect with fellow immigrants from around the world. Build meaningful relationships, share experiences, and support each other on your journey in a new country.
        </p>
        <div>
          <Link to='/waitlist'>
            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base'>
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 sm:mt-10 lg:mt-20 lg:max-w-7xl lg:mx-auto">
        <div className='lg:w-3/5 lg:pr-12 space-y-8'>
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <img src={RecommendationsIcon} alt="" className="w-6 lg:w-10 mr-4 mt-1 flex-shrink-0"/>
              <img src={ArrowBox1} alt="arrow box" className="w-4 lg:w-6"/>
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="font-bold text-xl sm:text-2xl">Recommendations</h2>
              <p className='text-sm sm:text-base mt-2'>
                Discover top spots recommended by locals and fellow immigrants, from eateries to hidden gems, for an authentic local experience.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <img src={ForumsIcon} alt="" className="w-6 lg:w-10 mr-4 mt-1 flex-shrink-0"/>
              <img src={ArrowBox1} alt="arrow box" className="w-4 lg:w-6"/>
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="font-bold text-xl sm:text-2xl">Forums</h2>
              <p className='text-sm sm:text-base mt-2'>
                Engage in discussions, seek advice, and connect with others on topics ranging from housing to cultural insights.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img src={EventsIcon} alt="" className="w-6 lg:w-10 mr-4 mt-1 flex-shrink-0"/>
            <div className="flex flex-col">
              <h2 className="font-bold text-xl sm:text-2xl">Events</h2>
              <p className='text-sm sm:text-base mt-2'>
                Stay updated on local meetups, cultural events, and networking opportunities to immerse yourself in your new surroundings.
              </p>
            </div>
          </div>
        </div>
       
        <div className="lg:w-2/5 order-first lg:order-last lg:pl-8 mt-8 lg:mt-0">
          <div className="h-full">
            <img src={ImageCard} alt="" className="w-full h-full object-cover rounded-2xl"/>
          </div>
        </div>
      </div>

      <ImageCards />
    </div>
  )
}

export default CommunityBuilding;