import { useState } from 'react';
import Location from '../../../assets/feed/communities/location.svg';
import Posts from '../../../assets/feed/members/posts.svg';
import { Community } from '../../../features/communities/interfaces/CommunitiesInterfaces';
import AddCommunityButton from '../../../assets/feed/communities/add-community.svg';
import SettingsIcon from '../../../assets/manage-communities/comm-settings.svg';
import ViewCommunityModal from '../../../components/layouts/modal/ViewCommunityModal';

const CommunityCard = ({ community, isManaged, isSidebar = false }: { community: Community; isManaged: boolean; isSidebar?: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isSidebar) {
    return (
      <div className="flex items-center">
        <img src={community.image} alt={community.name} className="w-10 h-10 rounded-full mr-3" />
        <div className="flex-grow">
          <h3 className="font-semibold text-sm">{community.name}</h3>
          <p className="text-xs text-gray-500">{community.location} • {community.membersCount} Members</p>
        </div>
        <button className="ml-2">
          <img src={AddCommunityButton} alt="Join Community" className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden" onClick={handleOpenModal}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center flex-grow mr-2">
              <img src={community.image} alt={community.name} className="w-12 h-12 rounded-full mr-3 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold text-lg truncate">{community.name}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <img src={Location} alt="Location" className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="truncate mr-3">{community.location}</span>
                  <img src={Posts} alt="Posts" className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{community.postsCount} Posts</span>
                </div>
              </div>
            </div>
            <button className="flex-shrink-0 ml-2">
              <img 
                src={isManaged ? SettingsIcon : AddCommunityButton} 
                alt={isManaged ? "Settings" : "Join Community"} 
                className={isManaged ? "w-7 h-7" : "w-6 h-6"}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px">
          {community.contentImages.slice(0, 3).map((img, index) => (
            <img key={index} src={img} alt={`Content ${index + 1}`} className="w-full h-24 object-cover" />
          ))}
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="flex -space-x-2 overflow-hidden">
              {community.memberImages.slice(0, 5).map((img, index) => (
                <img key={index} src={img} alt={`Member ${index + 1}`} className="inline-block h-6 w-6 rounded-full ring-2 ring-white" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">+{community.membersCount} Members</span>
          </div>
        </div>
      </div>
      <ViewCommunityModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        community={community} 
      />
    </>
  );
};

export default CommunityCard;