import React, { useState } from 'react';
import { Recommendation, MediaItem } from '../interfaces/RecommendationInterfaces';
import MoreIcon from '../../../assets/feed/icons/more-icon.svg';
import LikeIcon from '../../../assets/feed/recommendations/heart-icon.svg';
import CommentIcon from '../../../assets/feed/recommendations/comment-icon.svg';
import ShareIcon from '../../../assets/feed/recommendations/share-icon.svg';
import RecommendationIcon from '../../../assets/feed/recommendations/bookmark-icon.svg';
import PostComment from '../../../features/posts/components/PostComment';
import LocationIcon from '../../../assets/feed/icons/location-icon.svg';
import ViewRecommendationModal from '../../../components/layouts/modal/ViewRecommendationModal';

const RecommendationItem = (props: Recommendation) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const renderMedia = (mediaItem: string | MediaItem) => {
    if (typeof mediaItem === 'string') {
      return <img src={mediaItem} alt="Media content" className="w-full h-auto rounded-md mb-4" />;
    }

    switch (mediaItem.type) {
      case 'image':
        return <img src={mediaItem.url} alt={mediaItem.title || "Image"} className="w-full h-auto rounded-md mb-4" />;
      case 'video':
        return (
          <video controls className="w-full h-auto rounded-md mb-4">
            <source src={mediaItem.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case 'audio':
        return (
          <audio controls className="w-full mb-4">
            <source src={mediaItem.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 relative">
      <div className="flex items-center mb-4">
        <img src={props.user.avatar} alt={props.user.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="font-semibold">{props.user.name}</h3>
          <div className="flex items-center">
            <img src={LocationIcon} alt="Location" className="w-3 h-3 mr-1" />
            <p className="text-sm text-gray-500">{props.user.location}</p>
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-500">{props.timestamp}</span>
        <button className="ml-2" onClick={toggleDropdown}>
          <img src={MoreIcon} alt="More options" className="w-5 h-5" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
            <button
              onClick={openModal}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View Post
            </button>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-700 mb-4">{props.content}</p>
      {props.media && props.media.length > 0 && (
        <div className="mb-4">
          {props.media.map((item, index) => (
            <React.Fragment key={index}>
              {renderMedia(item)}
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center p-2 rounded-md mb-4">
        <div>
          <p className="text-base text-black font-semibold">{props.location}</p>
          <p className="text-sm text-gray-500">{props.address}</p>
        </div>
        <button className="bg-custom-blue text-white px-3 py-1 rounded-3xl">Open Map</button>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <p className="text-base text-black font-semibold">{props.likedBy.join(', ')}</p>
          <p className="text-sm text-gray-500">&amp; {props.likes - props.likedBy.length} others like this</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-500">
            <img src={LikeIcon} alt="Like" className="w-5 h-5" />
            <span className="mr-1">{props.likes}</span>
          </button>
          <button className="flex items-center text-gray-500">
            <img src={CommentIcon} alt="Comment" className="w-5 h-5" />
            <span className="mr-1">{props.comments}</span>
          </button>
          <button className="flex items-center text-gray-500">
            <img src={RecommendationIcon} alt="Recommend" className="w-5 h-5" />
            <span className="mr-1">{props.recommendations}</span>
          </button>
          <button className="flex items-center text-gray-500">
            <img src={ShareIcon} alt="Share" className="w-5 h-5" />
            <span className="mr-1">{props.shares}</span>
          </button>
        </div>
      </div>
      <PostComment />

      <ViewRecommendationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        recommendation={props}
      />
    </div>
  );
};

export default RecommendationItem;
