import { useState, useRef, useEffect } from 'react';
import Modal from './Modal';
import { IViewCommunityModal } from './interfaces/IModal';
import CreatedAtIcon from '../../../assets/manage-communities/created-at.svg';
import LocationIcon from '../../../assets/feed/communities/location.svg';
import PostsIcon from '../../../assets/feed/members/posts.svg';
import ReportIcon from '../../../assets/manage-communities/report-button.svg';
import JoinNowIcon from '../../../assets/manage-communities/join-now.svg';
import ShareIcon from '../../../assets/manage-communities/share.svg';
import RulesIcon from '../../../assets/manage-communities/rules.svg';
import ShareMenu from '../../shared/share-menu/components/ShareMenu';
import BackButton from '../../shared/back-button/BackButton';

const ViewCommunityModal = ({ isOpen, onClose, community }: IViewCommunityModal) => {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setIsShareMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShareClick = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const handleShareOptionClick = (option: string) => {
    console.log(`Sharing via ${option}`);
    setIsShareMenuOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="flex flex-col">
        <div className="relative mb-4">
          <img src={community.backgroundImage} alt={community.name} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="absolute top-4 right-4">
            <button className="text-white px-3 py-1 rounded-full flex items-center">
              <img src={ReportIcon} alt="Report" className="w-8 h-8 mr-1" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            {community.galleryImages.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-1/4 h-20 object-cover rounded-lg" />
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">{community.name}</h2>
        <p className="text-gray-600 mb-4">{community.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {community.tags.map((tag, index) => (
            <span key={index} className="bg-light-blue text-gray-700 rounded-md px-2 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <img src={CreatedAtIcon} alt="Created At" className="w-4 h-4 mr-1" />
            <span>Created: {community.createdAt}</span>
          </div>
          <div className="flex items-center">
            <img src={LocationIcon} alt="Location" className="w-4 h-4 mr-1" />
            <span>{community.location}</span>
          </div>
          <div className="flex items-center">
            <img src={PostsIcon} alt="Posts" className="w-4 h-4 mr-1" />
            <span>{community.postsCount} Posts</span>
          </div>
        </div>

        <hr className="my-3 border-t border-gray-200" />
        <div className="flex items-center mb-6">
          <div className="flex -space-x-2 overflow-hidden mr-2">
            {community.memberImages.slice(0, 5).map((img, index) => (
              <img key={index} src={img} alt={`Member ${index + 1}`} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
            ))}
          </div>
          <span className="text-gray-600">+{community.membersCount} Members</span>
          <BackButton />
        </div>
        <hr className="my-3 border-t border-gray-200" />

        <div className="flex justify-between items-center">
          <button className="bg-custom-red text-white px-4 py-2 flex items-center rounded-md">
            <img src={JoinNowIcon} alt="Join Now" className="w-4 h-4 mr-2" />
            Join Now
          </button>
          <button className="flex items-center text-gray-600">
            <img src={RulesIcon} alt="Rules" className="w-4 h-4 mr-1" />
            Rules
          </button>
          <div className="relative">
            <button className="flex items-center text-gray-600" onClick={handleShareClick}>
              <img src={ShareIcon} alt="Share" className="w-4 h-4 mr-1" />
              Share
            </button>
            {isShareMenuOpen && (
              <div ref={shareMenuRef} className="absolute z-10 right-0 bottom-full mb-2">
                <ShareMenu 
                onClose={() => setIsShareMenuOpen(false)} 
                onShareOptionClick={handleShareOptionClick} 
                showSendToFriend={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewCommunityModal;