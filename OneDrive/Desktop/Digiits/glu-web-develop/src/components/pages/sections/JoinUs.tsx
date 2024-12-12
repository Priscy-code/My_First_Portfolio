import SmartLady from '../../../assets/lady.svg';
import DiamondShape from '../../../assets/diamond-shape.svg';
import CircleShape from '../../../assets/circle-shape.svg';
import CircleShape2 from '../../../assets/circle-shape-2.svg';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center mt-8 sm:mt-10 mx-6 lg:mx-20'>
      <div className='relative w-full md:w-1/2 lg:w-2/5'>
        <img src={SmartLady} alt='lady' className='object-contain w-full' />
        <img 
          src={DiamondShape} 
          alt='diamond shape' 
          className='absolute top-[20%] left-[-5%] w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 md:top-[20%]' 
        />
      </div>

      <div className='relative my-5 md:my-0 md:ml-8 space-y-4 w-full md:w-1/2 lg:w-3/5'>
        <div className='relative'>
          <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            Join us and make the most of your immigrant journey!
          </h3>
          <img 
            src={CircleShape2} 
            alt='circle shape 2' 
            className='absolute top-[-10%] right-[-5%] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 md:top-[-20%] md:right-[-5%]' 
          />
        </div>

        <p className='text-sm md:text-base lg:text-lg'>
          A social networking platform designed to connect immigrants, offering a supportive community for individuals navigating life in a new country
        </p>

        <div className='relative inline-block'>
          <Link to='/waitlist'>
            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base'>
              Join Waitlist
            </button>
          </Link>
          <img 
            src={CircleShape} 
            alt='circle shape' 
            className='absolute bottom-[-50%] right-[-20%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 md:bottom-[-100%]' 
          />
        </div>
      </div>
    </div>
  )
}

export default JoinUs;