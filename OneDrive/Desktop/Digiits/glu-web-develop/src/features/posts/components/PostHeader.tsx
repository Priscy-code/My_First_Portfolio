import { useState, useRef, useEffect } from 'react';
import { User } from '../interfaces/PostInterfaces';
import LocationIcon from '../../../assets/feed/icons/location-icon.svg';
import More from '../../../assets/feed/icons/more-icon.svg';
import Crown from '../../../assets/feed/icons/crown-active.svg';

const PostHeader = ({ user, timestamp, location, onViewPost }: { user: User; timestamp: string; location: string; onViewPost: () => void }) => {
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewPost = () => {
    onViewPost();
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src={user.profileImage} alt="profile image" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <div className='flex items-center'>
            <span className='font-semibold-sm'>{user.name}</span>
            {user.isVerified && (
              <img src={Crown} alt="verified crown" className='w-4 h-4 ml-1' />
            )}
          </div>
          <div className='text-xs text-gray-500 flex items-center'>
            <img src={LocationIcon} alt="location icon" className='w-3 h-3 mr-1' />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 relative">
        <span className='text-xs text-gray-500'>{timestamp}</span>
        <button onClick={toggleDropdown}>
          <img src={More} alt='more button' className='w-5 h-5' />
        </button>
        {isDropdownOpen && (
          <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <button
                onClick={handleViewPost}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                View Post
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostHeader;