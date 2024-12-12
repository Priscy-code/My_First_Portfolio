import { useMediaQuery } from 'react-responsive';
import Card from './Card';

import JobListingImg from '../../assets/job-listing-img.svg';
import HousingImg from '../../assets/housing.svg';
import GlobalOutReachImg from '../../assets/img-center.svg';
import GlobalOutReachMobile from '../../assets/global-outreach-img-mobile.svg';

const ImageCards = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-24 mx-4 sm:mx-8 lg:mx-auto max-w-6xl mb-8">
      <Card 
        image={JobListingImg}
        title="Job Listings"
        description="Explore job opportunities tailored for immigrants. Browse diverse listings, from international corporations to local businesses, and take the next step in your career journey."
      />

      <div className="flex justify-center items-center w-full h-full rounded-2xl overflow-hidden">
        <img 
          src={isMobile ? GlobalOutReachMobile : GlobalOutReachImg} 
          alt="Global Outreach" 
          className="w-full h-full object-cover" 
        />
      </div>

      <Card 
        image={HousingImg}
        title="Housing"
        description="Find your ideal home in your new city. Search through a range of housing options, from apartments to houses, and discover properties suited to your needs and budget."
      />
    </div>
  );
};

export default ImageCards;