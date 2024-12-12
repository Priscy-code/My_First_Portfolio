import { useState } from 'react';
import { InterestedEventsProps } from '../interfaces/InterestedEventsInterfaces';
import { mockInterestedEvents } from '../../../data/mockInterestedEvents';
import LocationIcon from '../../../assets/feed/events/location-icon.svg';
import DateIcon from '../../../assets/feed/events/date-icon.svg';
import InterestedIcon from '../../../assets/feed/events/interested-icon-active.svg';
import GoingIcon from '../../../assets/feed/events/going-icon.svg';

const InterestedEvents = () => {
  const [interestedEvents] = useState<InterestedEventsProps[]>(mockInterestedEvents);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Interested</h2>
      <div className="space-y-4">
        {interestedEvents.map((event) => (
          <div key={event.id} className="p-4 rounded-lg border-b pb-4 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
            <div className="flex items-center mb-2">
              <img src={LocationIcon} alt="Location" className="w-4 h-4 mr-2" />
              <p className="text-sm text-gray-600">{event.location}</p>
            </div>
            <div className="flex items-center mb-2">
              <img src={DateIcon} alt="Date" className="w-4 h-4 mr-2" />
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src={InterestedIcon} alt="Interested" className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">{event.interestedNumber} Interested</span>
              </div>
              <div className="flex items-center">
                <img src={GoingIcon} alt="Going" className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">{event.goingNumber} Going</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <button className="text-[#2B3660] font-semibold">View All →</button>
      </div>
    </div>
  );
};

export default InterestedEvents;