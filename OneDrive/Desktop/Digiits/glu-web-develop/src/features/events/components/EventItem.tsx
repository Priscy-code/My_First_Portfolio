import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventItemProps } from '../interfaces/EventsInterfaces';
import LocationIcon from '../../../assets/feed/events/location-icon.svg';
import DateIcon from '../../../assets/feed/events/date-icon.svg';
import InterestedIcon from '../../../assets/feed/events/interested-icon-active.svg';
import GoingIcon from '../../../assets/feed/events/going-icon.svg';
import { Share2 } from 'lucide-react';
import EventStatusDropdown from './EventStatusDropdown';

const EventItem = ({ event }: EventItemProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const shortContent = event.content.length > 10
  ? event.content.slice(0, 100) + '...'
  : event.content;

  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <Link to={`/events/${event.id}`} className="block">
          <img src={event.eventImage} alt={event.title} className="w-full h-48 object-cover" />
        </Link>
        <div className="p-4">
          <Link to={`/events/${event.id}`} className="block">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
          </Link>
          <div className='flex justify-between'>
            <div className="flex items-center flex-1 mr-2 min-w-0">
              <img src={LocationIcon} alt="Location" className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600 truncate">{event.location}</span>
            </div>
            <div className="flex items-center flex-1 min-w-0">
              <img src={DateIcon} alt="Date" className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600 truncate">{event.date}</span>
            </div>
          </div>
            <Link to={`/events/${event.id}`} className="block">
              <p className="text-gray-700 my-4">{shortContent}</p>
            </Link>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={InterestedIcon} alt="Interested" className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">{event.interestedNumber} Interested</span>
            </div>
            <div className="flex items-center">
              <img src={GoingIcon} alt="Going" className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">{event.goingNumber} Going</span>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <EventStatusDropdown
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              orientation="up"
            />
            <div className="mx-2 h-6 w-px bg-gray-300"></div>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default EventItem;