import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import GlobalLinkUp from '../../../../assets/feed/images/globallinkup-icon.svg';
import GlobalLinkUpMobile from '../../../../assets/feed/images/GlobalLinkUp-mobile.svg';
import Notification from '../../../../assets/feed/icons/notifications-icon.svg';
import Message from '../../../../assets/feed/icons/chat-icon.svg';
import ArrowDown from '../../../../assets/feed/icons/arrow-down.svg';
import UserProfile from '../../profile/components/UserProfile';
import { NavbarProps } from '../interfaces/NavbarInterfaces';
import NotificationDropdown from '../../notifications/components/NotificationDropdown';
import CommunityDropdown from './CommunitiesDropdown';
import ServicesDropdown from './ServicesDropdown';

const Navbar = ({ className, isLoggedIn, userImage }: NavbarProps) => {
  const [communitiesOpen, setCommunitiesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: 'communities' | 'services') => {
    if (dropdown === 'communities') {
      setCommunitiesOpen(!communitiesOpen);
      setServicesOpen(false);
    } else {
      setServicesOpen(!servicesOpen);
      setCommunitiesOpen(false);
    }
  };

  const toggleNotifications = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setNotificationsOpen(prev => !prev);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCommunitiesOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`bg-[#FDFEFF] shadow-md ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button className="lg:hidden p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Vertical line for tablet and mobile */}
            <div className='lg:hidden'>
              <div className='w-0.5 h-5 bg-[#7D7E80] mr-4'></div>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:space-x-8" ref={dropdownRef}>
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('communities')}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    communitiesOpen 
                      ? 'text-custom-blue bg-light-blue' 
                      : 'text-[#060911] hover:text-gray-700'
                  }`}
                >
                  Communities
                  <img src={ArrowDown} alt="Menu" className="w-4 h-4 ml-1" />
                </button>
                <CommunityDropdown isOpen={communitiesOpen} onClose={() => setCommunitiesOpen(false)} />
              </div>
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('services')}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    servicesOpen 
                      ? 'text-custom-blue bg-light-blue' 
                      : 'text-[#060911] hover:text-gray-700'
                  }`}
                >
                  Services
                  <img src={ArrowDown} alt="Menu" className="w-4 h-4 ml-1" />
                </button>
                <ServicesDropdown isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
              </div>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center absolute left-1/2 transform -translate-x-1/2">
            <img className="h-9 w-auto hidden sm:block" src={GlobalLinkUp} alt="Global LinkUp" />
            <img className="h-6 w-auto sm:hidden" src={GlobalLinkUpMobile} alt="Global LinkUp" />
          </Link>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hidden sm:block lg:block" onClick={toggleNotifications}>
              <img src={Notification} alt="Notifications" className="h-12 w-12" />
            </button>
            <button className="p-2 hidden sm:block lg:block">
              <img src={Message} alt="Messages" className="h-6 w-6" />
            </button>
            <div className='w-0.5 h-5 bg-[#7D7E80] mr-4'></div>
              <UserProfile isLoggedIn={isLoggedIn} userImage={userImage} />
          </div>
        </div>
      </div>
      <NotificationDropdown isOpen={notificationsOpen} onClose={closeNotifications} />
    </nav>
  );
};

export default Navbar;