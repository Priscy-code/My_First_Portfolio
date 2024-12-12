import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../shared/navbar/components/Navbar';
import Sidebar from '../shared/sidebar/components/Sidebar';
import { Event } from '../../features/events/interfaces/EventsInterfaces';
import { mockEvents } from '../../data/mockEvents';
import BackButton from '../shared/back-button/BackButton';
import NotificationIcon from '../../assets/feed/icons/notifications-icon.svg';
import ViewEventSidebar from '../../features/events/components/ViewEventSidebar';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import ViewEventMainContent from '../../features/events/components/ViewEventMainContent';

const ViewEvent = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event] = useState<Event | undefined>(
    mockEvents.find(e => e.id === eventId)
  );
  const [activeTab, setActiveTab] = useState('details');
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  if (!event) {
    return <div>Event not found</div>;
  }

  const tabs = [
    { key: 'details', label: 'Discussions' },
    { key: 'info', label: 'Event Info' },
  ];

  return (
    <div className="flex flex-col h-screen" style={{'--sidebar-width': '320px'} as React.CSSProperties}>
      <Navbar className="z-10" isLoggedIn={true} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto flex flex-col p-4">
          <div className="bg-white p-4 flex items-center justify-between shadow-sm">
            <div className='flex items-center'>
              <Link to="/events" className="">
                <BackButton />
              </Link>
              <h1 className="text-xl font-semibold">View Event</h1>
            </div>
            <img src={NotificationIcon} alt="Notifications" className="w-12 h-12" />
          </div>

          {isMobileOrTablet && (
            <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow lg:pr-4 mb-4 lg:mb-0">
              {(!isMobileOrTablet || activeTab === 'details') && <ViewEventMainContent event={event} />}
              {isMobileOrTablet && activeTab === 'info' && (
                <ViewEventSidebar event={event} />
              )}
            </div>
            {!isMobileOrTablet && (
              <div className="lg:block hidden" style={{width: 'var(--sidebar-width)'}}>
                <ViewEventSidebar event={event} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewEvent;