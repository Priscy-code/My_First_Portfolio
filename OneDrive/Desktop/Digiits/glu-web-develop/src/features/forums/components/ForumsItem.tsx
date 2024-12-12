import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumsItemProps } from '../interfaces/ForumsInterfaces';
import LikeIcon from '../../../assets/feed/forums/like-icon.svg';
import DislikeIcon from '../../../assets/feed/forums/dislike-icon.svg';
import CommentIcon from '../../../assets/feed/forums/message-icon.svg';
import ShareIcon from '../../../assets/feed/forums/share-icon.svg';
import MoreIcon from '../../../assets/feed/icons/more-icon.svg';
import TagBadge from './TagBadge';

const ForumsItem = ({ forum }: ForumsItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleViewForum = () => {
    navigate(`/view-topic/${forum.id}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <img
          src={forum.author.avatar}
          alt={forum.author.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="font-semibold">{forum.author.name}</h3>
          <p className="text-sm text-gray-500">{forum.author.location}</p>
        </div>
        <div className="ml-auto flex items-center">
          <span className="text-sm text-gray-500 mr-2">{forum.createdAt}</span>
          <div className="relative" ref={dropdownRef}>
            <img 
              src={MoreIcon} 
              alt="More options" 
              className="w-5 h-5 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleViewForum}
                  >
                    View Forum
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">{forum.title}</h2>
      <p className="mb-4 text-gray-700">{forum.content}</p>
      <div className="flex items-center justify-between mb-2">
        <TagBadge tagName={forum.tags[0]} />
        <div className="flex items-center cursor-pointer">
          <img src={ShareIcon} alt="Share" className="w-5 h-5 mr-1" />
          <span className="text-sm text-gray-600">Share</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="flex items-center"><img src={LikeIcon} alt='like icon' className="mr-1"/> {forum.likes}</span>
        <span className="flex items-center"><img src={DislikeIcon} alt='dislike icon' className="mr-1"/> {forum.dislikes}</span>
        <span className="flex items-center"><img src={CommentIcon} alt='comment icon' className="mr-1"/> {forum.comments}</span>
      </div>
    </div>
  );
};

export default ForumsItem;