import { useRef, useEffect } from 'react';
import { useActiveCommunity } from '../../../../features/communities/hooks/useActiveCommunity';
import SearchIcon from '../../../../assets/feed/members/search-icon.svg';
import CommunityIcon from '../../../../assets/feed/icons/member-group.svg';
import { Link } from 'react-router-dom';
import ForwardButton from '../../forward-button/ForwardButton';

const CommunityDropdown = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { activeCommunity, setActiveCommunity } = useActiveCommunity();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommunityClick = (community: string) => {
    setActiveCommunity(community);
    onClose();
  };

  const CommunityButton = ({ name }: { name: string }) => (
    <button 
      onClick={() => handleCommunityClick(name)} 
      className={`flex items-center w-1/2 p-2 text-left ${
        activeCommunity === name 
          ? 'text-custom-blue bg-blue-100 relative' 
          : 'text-gray-700'
      }`}
    >
      {activeCommunity === name && (
        <div className="absolute left-0 top-1 bottom-1 w-1 bg-custom-blue"></div>
      )}
      <img src={CommunityIcon} alt="Community" className="w-4 h-4 mr-2 flex-shrink-0" />
      <span className="text-sm truncate">{name}</span>
    </button>
  );

  return (
    <div ref={dropdownRef} className="absolute z-10 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="p-4">
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Find Communities" 
            className="w-full px-10 pr-10 py-2 border rounded" 
          />
          <img 
            src={SearchIcon} 
            alt="Search" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
          />
          <ForwardButton />
        </div>
        <div className="flex flex-wrap">
          <CommunityButton name="Texas Immigrants" />
          <CommunityButton name="USA Home Community" />
          <CommunityButton name="Immigrant Texasians" />
        </div>
        <Link to='/manage-communities'>
          <button className="mt-4 w-full py-2 bg-red-600 text-white rounded-md">
            Browse Communities
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default CommunityDropdown;