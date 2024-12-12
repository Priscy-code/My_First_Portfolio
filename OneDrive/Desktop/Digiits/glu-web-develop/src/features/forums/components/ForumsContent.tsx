import { useState, useRef, useEffect } from 'react';
import { ForumsContentProps } from '../interfaces/ForumsInterfaces';
import ForumsItem from './ForumsItem';
import CategoriesDropdown from './CategoriesDropdown';
import SearchIcon from '../../../assets/feed/forums/search-icon.svg';
import CategoryIcon from '../../../assets/feed/forums/filter-list.svg';
import LocationIcon from '../../../assets/feed/forums/location-icon.svg';

const ForumsContent = ({ forums, loading }: ForumsContentProps) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return <div>Loading forums...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-4">
        <div className="relative flex-grow w-full md:w-auto lg:max-w-md xl:max-w-lg">
          <input
            type="text"
            placeholder="Search topic..."
            className="w-full px-4 py-2 pl-10 border rounded-md"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={SearchIcon} alt="Search" className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
          <div className="relative" ref={dropdownRef}>
            <button 
              className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                isCategoriesOpen
                  ? 'bg-light-blueee text-custom-blue border border-custom-blue'
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <img 
                src={CategoryIcon} 
                alt="Categories" 
                className={`w-4 h-4 mr-2 ${isCategoriesOpen ? 'filter-custom-blue' : ''}`} 
              />
              Categories
            </button>
            <CategoriesDropdown 
              isOpen={isCategoriesOpen} 
              onClose={() => setIsCategoriesOpen(false)}
            />
          </div>
          <div className="flex items-center px-3 py-2 border rounded-md text-sm">
            <img src={LocationIcon} alt="All Locations" className="w-4 h-4 mr-2" />
            <span className="mr-2">All Locations</span>
          </div>
          <select className="p-2 border rounded-md text-sm bg-white">
            <option>Most Recent</option>
          </select>
        </div>
      </div>
      {forums.map((forum) => (
        <ForumsItem key={forum.id} forum={forum} />
      ))}
    </div>
  );
};

export default ForumsContent;