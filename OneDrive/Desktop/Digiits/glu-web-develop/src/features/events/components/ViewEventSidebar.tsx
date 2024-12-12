import { useState, useRef, useEffect } from 'react';
import InterestedIconActive from '../../../assets/feed/events/interested-icon-active.svg';
import { EventItemProps } from '../interfaces/EventsInterfaces';
import ExploreCommunitiesArrow from '../../../assets/feed/communities/explore-communities-arrow.svg';
import PostCountIcon from '../../../assets/feed/members/posts.svg';
import FriendCountIcon from '../../../assets/feed/members/friends.svg';
import MapIcon from '../../../assets/feed/events/location-icon.svg';
import DateIcon from '../../../assets/feed/events/date-icon.svg';
import GoingIcon from '../../../assets/feed/events/going-icon.svg';
import ShareIcon from '../../../assets/feed/forums/share-icon.svg';
import EditEventIcon from '../../../assets/feed/events/edit-event-icon.svg';
import ShareMenu from '../../../components/shared/share-menu/components/ShareMenu';
import AddButton from '../../../assets/feed/members/add-button.svg';
import EventStatusDropdown from './EventStatusDropdown';
import { useMediaQuery } from 'react-responsive';

const ViewEventSidebar = ({ event }: EventItemProps) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
    const shareMenuRef = useRef<HTMLDivElement>(null);
    const shareButtonRef = useRef<HTMLButtonElement>(null);
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node) &&
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target as Node)
      ) {
        setIsShareMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShareOptionClick = (option: string) => {
    console.log(`Share option clicked: ${option}`);
    setIsShareMenuOpen(false);
  };

  const toggleShareMenu = () => {
    setIsShareMenuOpen((prev) => !prev);
  };

  return (
    <div className={`bg-white p-6 ${isMobileOrTablet ? 'w-full' : 'w-80 border-l border-gray-200 rounded-lg shadow-md sticky top-4'}`}>
        <div className="mb-6 ">
            <EventStatusDropdown
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              orientation="down"
            />
        </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Host</h3>
        <div className="flex items-center">
          <img src={event.host.avatar} alt={event.host.name} className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-grow">
            <p className="font-semibold">{event.host.name}</p>
            <div className="flex items-center text-xs text-gray-600">
              <img src={FriendCountIcon} alt="Friends" className="w-3 h-3 mr-1" />
              <span>{event.host.friendCount} Friends</span>
              <img src={PostCountIcon} alt="Posts" className="w-3 h-3 ml-2 mr-1" />
              <span>{event.host.postCount} Posts</span>
            </div>
          </div>
          <img src={AddButton} alt="Add Friend" className="w-6 h-6 ml-2 cursor-pointer" />
        </div>
      </div>

      <hr className="my-4 border-t border-gray-200" />

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Details</h3>
        <div className="flex items-center justify-between text-gray-600 mb-2">
          <div className="flex items-center">
            <img src={MapIcon} alt="Location" className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <img src={ExploreCommunitiesArrow} alt="Explore Communities" className="w-5 h-5" />
        </div>
        <div className="flex items-center text-gray-600">
          <img src={DateIcon} alt="Date" className="w-5 h-5 mr-2" />
          <span>{event.date}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img src={InterestedIconActive} alt="Interested" className="w-5 h-5 mr-1" />
            <span>{event.interestedNumber} Interested</span>
          </div>
          <img src={ExploreCommunitiesArrow} alt="Explore Communities" className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={GoingIcon} alt="Going" className="w-5 h-5 mr-1" />
            <span>{event.goingNumber} Going</span>
          </div>
            <img src={ExploreCommunitiesArrow} alt="Explore Communities" className="w-5 h-5" />
        </div>
      </div>

      <p className="text-base text-black font-semibold">{event.likedBy.join(', ')}</p>
      <p className="text-sm text-gray-500">&amp; {parseInt(event.interestedNumber) - event.likedBy.length} are interested</p>

      <hr className="my-4 border-t border-gray-200" />
      
      <div>
        <h3 className="font-semibold mb-2">Actions</h3>
        <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center mb-2">
          <img src={EditEventIcon} alt="Edit Event" className="w-5 h-5 mr-2" />
          Edit Event
        </button>
        <div className="relative">
          <button 
            ref={shareButtonRef}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center"
            onClick={toggleShareMenu}
          >
            <img src={ShareIcon} alt="Share" className="w-5 h-5 mr-2" />
            Share This Event
          </button>
          {isShareMenuOpen && (
            <div ref={shareMenuRef} className="absolute z-10 right-0 bottom-full mb-2">
              <ShareMenu 
                onClose={() => setIsShareMenuOpen(false)} 
                onShareOptionClick={handleShareOptionClick} 
                showSendToFriend={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewEventSidebar;