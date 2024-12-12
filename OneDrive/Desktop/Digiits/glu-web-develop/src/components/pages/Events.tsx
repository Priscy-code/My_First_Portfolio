import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../shared/navbar/components/Navbar';
import Sidebar from '../shared/sidebar/components/Sidebar';
import EventsSidebar from '../../features/events/components/EventsSidebar';
import EventContent from '../../features/events/components/EventContent';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import { useEvents } from '../../features/events/hooks/useEvents';
import EventsIcon from '../../assets/feed/events/events-icon.svg';
import { FiPlus } from 'react-icons/fi';
import NewEventModal from '../../components/layouts/modal/NewEventModal';
import { NewEvent } from '../../features/events/interfaces/EventsInterfaces';

const Events = () => {
  const { events, loading } = useEvents();
  const [activeTab, setActiveTab] = useState('events');
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const tabs = [
    { key: 'events', label: 'Events' },
    { key: 'interested', label: 'Interested' },
  ];

  const handleCreateEvent = (event: Partial<NewEvent>) => {
    // Send data to backend here
    console.log('New event created:', event);
    setIsNewEventModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar className="z-10" isLoggedIn={true} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto flex flex-col p-4">
          <div className="flex items-center p-4">
            <img src={EventsIcon} alt="Events" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-semibold">Events</h1>
            {isMobileOrTablet ? (
              <button 
                className="bg-custom-red text-white p-2 rounded-2xl ml-auto"
                onClick={() => setIsNewEventModalOpen(true)}
              >
                <FiPlus size={24} />
              </button>
            ) : (
              <button 
                className="bg-custom-red text-white px-4 py-2 rounded ml-auto"
                onClick={() => setIsNewEventModalOpen(true)}
              >
                New Event
              </button>
            )}
          </div>
          
          {isMobileOrTablet && (
            <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          <hr className="my-2 mx-4 border-t border-gray-200" />
          
          <div className={`flex flex-1 overflow-hidden ${isMobileOrTablet ? 'pb-24' : ''}`}>
            <div className="flex-1 p-4 overflow-y-auto">
              {(!isMobileOrTablet || activeTab === 'events') && (
                <EventContent events={events || []} loading={loading} />
              )}
              {isMobileOrTablet && activeTab === 'interested' && (
                <EventsSidebar />
              )}
            </div>
            {!isMobileOrTablet && (
              <div className="w-[300px] p-4 overflow-y-auto">
                <EventsSidebar />
              </div>
            )}
          </div>
        </main>
      </div>
      <NewEventModal 
        isOpen={isNewEventModalOpen}
        onClose={() => setIsNewEventModalOpen(false)}
        onCreateEvent={handleCreateEvent}
      />
    </div>
  );
};

export default Events;