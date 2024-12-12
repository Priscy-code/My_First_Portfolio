import { useState } from 'react';
import FeedIcon from '../../assets/feed/icons/feed-icon-2.svg';
import CommunityIcon from '../../assets/feed/icons/member-group.svg';
import { useActiveCommunity } from '../../features/communities/hooks/useActiveCommunity';
import ViewCommunityMembersModal from '../layouts/modal/ViewCommunityMembersModal';
import { mockMembers } from '../../data/mockMembers';

const FeedTitle = () => {
  const { activeCommunity } = useActiveCommunity();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-white pl-6">
      <header className="flex justify-between items-center py-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={FeedIcon} alt="Feed" className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Feed</h1>
        </div>
        <button 
          className="flex items-center space-x-2 bg-light-blue px-3 py-2 rounded-md"
          onClick={handleOpenModal}
        >
          <img src={CommunityIcon} alt="Community" className="w-6 h-6" />
          <span className="text-sm text-gray-600">
            {activeCommunity.length > 15 ? `${activeCommunity.slice(0, 15)}...` : activeCommunity}
          </span>
        </button>
      </header>
      <ViewCommunityMembersModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        communityName={activeCommunity} 
        topMembers={mockMembers.slice(0, 3)} 
        allMembers={mockMembers.slice(3)} 
      />
    </div>
  );
};

export default FeedTitle;