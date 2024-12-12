import { useState } from 'react';
import LocationFilter from '../../recommendations/components/LocationFilter';
import InterestedEvents from '../components/InterestedEvents'

const EventsSidebar = () => {
  const [activeInput, setActiveInput] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <LocationFilter activeInput={activeInput} setActiveInput={setActiveInput} />
      <hr className="my-2 mx-4 border-t border-gray-200" />
      <InterestedEvents />
    </div>
  );
};

export default EventsSidebar;