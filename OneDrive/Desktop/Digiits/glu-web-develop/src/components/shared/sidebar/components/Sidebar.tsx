import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useActiveCommunity } from '../../../../features/communities/hooks/useActiveCommunity';
import FeedIcon from '../../../../assets/feed/icons/feed-icon-2.svg';
import RedEllipse from '../../../../assets/feed/icons/red-ellipse.svg';
import RecommendationsFeedIcon from '../../../../assets/feed/icons/recommendations-feed.svg';
import ForumsIcon from '../../../../assets/feed/icons/forums-feed.svg';
import EventsIcon from '../../../../assets/feed/icons/events-feed.svg';
import ConnectIcon from '../../../../assets/feed/icons/connect-feed.svg';
import ContactSupport from '../../../../assets/feed/icons/contact-support.svg';
import FeedArrowsTablet from '../../../../assets/feed/icons/feed-arrows-tablet.svg';
import { TabletMenuItemProps, MenuItem } from '../interfaces/SidebarInterfaces';

const TabletMenuItem = ({ item, isActive, onClick }: TabletMenuItemProps) => {
  const Content = (
    <>
      <div className="relative">
        <img 
          src={item.icon} 
          alt={item.label} 
          className={`w-6 h-6 mb-1 ${isActive || 'group-hover:brightness-0 group-hover:invert'} ${isActive ? 'brightness-0 invert' : ''}`}
        />
        {item.arrowIcon && (
          <img 
            src={item.arrowIcon} 
            alt="Feed Arrows" 
            className="absolute -bottom-2 -right-2 w-3 h-3 hidden md:block"
          />
        )}
      </div>
      <span className="text-xs md:block hidden">{item.label}</span>
      {item.badge && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {item.badge}
        </span>
      )}
    </>
  );

  const className = `flex flex-col items-center justify-center p-2 relative group hover:bg-custom-blue hover:text-white ${isActive ? 'bg-custom-blue text-white' : ''} ${item.label === 'Feed' ? 'md:w-20' : ''}`;

  return item.link ? (
    <Link to={item.link} className={className}>
      {Content}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {Content}
    </button>
  );
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { activeCommunity, setActiveCommunity } = useActiveCommunity();

  const menuItems: MenuItem[] = [
    { icon: FeedIcon, label: 'Feed', expandable: true, arrowIcon: FeedArrowsTablet },
    { icon: RecommendationsFeedIcon, label: 'Recommendations', badge: 2, link: '/recommendations' },
    { icon: ForumsIcon, label: 'Forums', link: '/forums' },
    { icon: EventsIcon, label: 'Events', link: '/events' },
    { icon: ConnectIcon, label: 'Connect', badge: 2 },
  ];

  const handleItemClick = (item: MenuItem) => {
    if (item.expandable) {
      setActiveItem(activeItem === item.label ? null : item.label);
    } else {
      setActiveItem(null);
    }
  };

  const handleCommunityClick = (community: string) => {
    setActiveCommunity(community);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="bg-light-blue hidden lg:flex flex-col w-64 h-[calc(100vh-64px)] border-r border-gray-200">
        <div className="flex-1 overflow-y-auto">
          <h2 className="text-sm font-semibold p-3 text-gray-500">MENU</h2>
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.link ? (
                <Link
                  to={item.link}
                  className={`flex items-center w-full p-3 text-left group ${
                    item.label === activeItem ? 'bg-custom-blue text-white' : 'hover:bg-custom-blue hover:text-white'
                  }`}
                >
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className={`mr-3 w-5 h-5 ${item.label === activeItem || 'group-hover:brightness-0 group-hover:invert'} ${item.label === activeItem ? 'brightness-0 invert' : ''}`}
                  />
                  <span className="text-sm">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <button
                  className={`flex items-center w-full p-3 text-left group ${
                    item.label === activeItem ? 'bg-custom-blue text-white' : 'hover:bg-custom-blue hover:text-white'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className={`mr-3 w-5 h-5 ${item.label === activeItem || 'group-hover:brightness-0 group-hover:invert'} ${item.label === activeItem ? 'brightness-0 invert' : ''}`}
                  />
                  <span className="text-sm">{item.label}</span>
                  {item.expandable && (
                    <svg
                      className={`ml-auto transform ${item.label === activeItem ? 'rotate-180' : ''}`}
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </button>
              )}
              {item.expandable && item.label === activeItem && (
                <div className="bg-white text-black py-1">
                  <div 
                    className={`flex items-center px-4 py-1 cursor-pointer`}
                    onClick={() => handleCommunityClick('Texas Immigrants')}
                  >
                    <span className="text-sm">Texas Immigrants</span>
                    {activeCommunity === 'Texas Immigrants' && <img src={RedEllipse} alt="Active" className="ml-2 w-2 h-2" />}
                  </div>
                  <div 
                    className={`flex items-center px-4 py-1 cursor-pointer`}
                    onClick={() => handleCommunityClick('USA Home Community')}
                  >
                    <span className="text-sm">USA Home Community</span>
                    {activeCommunity === 'USA Home Community' && <img src={RedEllipse} alt="Active" className="ml-2 w-2 h-2" />}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <div className="border-t border-gray-200 my-2"></div>
          <button className="flex items-center justify-center bg-custom-red text-white p-4 mx-auto mb-2 text-sm rounded-md">
            <img src={ContactSupport} alt="Contact Support" className=" w-16 h-5" />
            Contact Support
          </button>
        </div>
      </div>

      {/* Tablet Menu */}
      <div className="hidden md:block lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-between items-center">
          {menuItems.map((item, index) => (
            <TabletMenuItem
              key={index}
              item={item}
              isActive={item.label === activeItem}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Bottom Menu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-between items-center">
          {menuItems.map((item, index) => (
            <TabletMenuItem
              key={index}
              item={item}
              isActive={item.label === activeItem}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>

      {/* Feed Popup for Tablet/Mobile */}
      {activeItem === 'Feed' && (
        <div className="lg:hidden fixed bottom-16 left-0 right-0 flex justify-start pl-4">
          <div className="bg-black text-white p-4 rounded-t-lg w-64">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Texas Immigrants</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">USA Home Community</span>
              <img src={RedEllipse} alt="Active" className="ml-2 w-2 h-2" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;