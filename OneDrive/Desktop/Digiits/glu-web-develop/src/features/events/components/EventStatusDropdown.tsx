import { useState, useRef, useEffect } from 'react';
import { EventStatusDropdownProps } from '../interfaces/EventsInterfaces';
import { ChevronUp, ChevronDown } from 'lucide-react';
import InterestedIcon from '../../../assets/feed/events/interested-icon-active.svg';
import GoingIcon2 from '../../../assets/feed/events/going-icon-2.svg';
import InterestedInactive from '../../../assets/feed/events/interested-icon-inactive.svg';
import Checked from '../../../assets/feed/events/check.svg';
import UnChecked from '../../../assets/feed/events/unchecked.svg';

const EventStatusDropdown = ({ selectedOption, onOptionSelect, orientation = 'up'} : EventStatusDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionSelect = (option: string) => {
    onOptionSelect(option);
    setIsDropdownOpen(false);
  };

  const getOptionIcon = (option: string) => {
    switch (option) {
      case 'I am interested':
        return InterestedIcon;
      case 'I am going':
        return GoingIcon2;
      case 'I am not interested':
        return InterestedInactive;
      default:
        return InterestedIcon;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center justify-between w-full px-4 py-2 rounded-md bg-gray-100 text-gray-600 ${
          isDropdownOpen ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'
        }`}
        onClick={toggleDropdown}
      >
        <img 
          src={selectedOption ? getOptionIcon(selectedOption) : InterestedIcon} 
          alt="Status" 
          className="w-5 h-5 mr-2" 
        />
        {selectedOption || 'Interested'}
        <div className="flex flex-col ml-2 justify-between h-6">
          <ChevronUp className={`w-4 h-4 ${isDropdownOpen ? 'text-white' : 'text-gray-400'}`} />
          <ChevronDown className={`w-4 h-4 ${isDropdownOpen ? 'text-white' : 'text-gray-400'}`} />
        </div>
      </button>
      {isDropdownOpen && (
        <div className={`absolute z-10 w-52 bg-white rounded-md shadow-lg ${
          orientation === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
        } left-0`}>
          <div className="py-1">
            {['I am interested', 'I am going', 'I am not interested'].map((option) => (
              <button
                key={option}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleOptionSelect(option)}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    <img src={getOptionIcon(option)} alt={option} className="w-5 h-5" />
                  </span>
                  {option}
                </div>
                <img
                  src={selectedOption === option ? Checked : UnChecked}
                  alt={selectedOption === option ? "Checked" : "Unchecked"}
                  className="w-5 h-5"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventStatusDropdown;