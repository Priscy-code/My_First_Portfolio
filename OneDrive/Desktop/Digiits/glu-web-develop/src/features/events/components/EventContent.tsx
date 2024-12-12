import React, { useState, useEffect, useRef } from 'react';
import { EventContentProps } from '../interfaces/EventsInterfaces';
import EventItem from './EventItem';
import SearchIcon from '../../../assets/feed/forums/search-icon.svg';
import DateIcon from '../../../assets/feed/events/date-icon.svg';
import { ChevronDown } from 'lucide-react';
import UpcomingIcon from '../../../assets/feed/events/upcoming-icon.svg';
import InterestedIcon from '../../../assets/feed/events/interested-icon.svg';

const EventContent = ({ events, loading }: EventContentProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOption, setFilterOption] = useState('Upcoming');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectFilterOption = (option: string) => {
    setFilterOption(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return <div className="text-center">Loading events...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img src={SearchIcon} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <button
              className="flex items-center pl-10 pr-4 py-2 border rounded-lg bg-white"
              onClick={() => document.getElementById('date-input')?.click()}
            >
              <img src={DateIcon} alt="Date" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
              <span className="text-gray-500">{selectedDate || 'Select Date'}</span>
            </button>
            <input
              id="date-input"
              type="date"
              className="hidden"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center justify-between w-38 px-4 py-2 bg-white border rounded-lg ${
                dropdownOpen ? 'border-custom-blue border-2' : ''
              }`}
              onClick={toggleDropdown}
            >
              {filterOption}
              <ChevronDown className="text-gray-500" />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 w-38 mt-1 bg-white border-2 rounded-lg shadow-lg">
                <button
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => selectFilterOption('Upcoming')}
                >
                  <img src={UpcomingIcon} alt="Upcoming" className="w-5 h-5 mr-2" />
                  Upcoming
                </button>
                <button
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => selectFilterOption('Interested')}
                >
                  <img src={InterestedIcon} alt="Interested" className="w-5 h-5 mr-2" />
                  Interested
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventContent;