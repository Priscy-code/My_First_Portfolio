import { useState } from 'react';
import { Community } from '../../communities/interfaces/CommunitiesInterfaces';
import CommunityItem from '../../communities/components/CommunityItem';
import ExploreCommunitiesArrow from '../../../assets/feed/communities/explore-communities-arrow.svg';
import NewCommunityGroupModal from '../../../components/layouts/modal/NewCommunityGroupModal';
import { Link } from 'react-router-dom';

const MyCommunitiesSidebar = ({ communities }: { communities: Community[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const managedCommunities = communities.slice(3, 4);
  const joinedCommunities = communities.slice(0, 3);

  const handleCreateCommunity = (newCommunity: Partial<Community>) => {
    // Handle the creation of a new community here
    console.log('New community:', newCommunity);
  };

  const handleJoin = (id: number) => {
    console.log(`Joining community with id: ${id}`);
  };

  const handleSettings = (id: number) => {
    console.log(`Opening settings for community with id: ${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-red-600 mb-4">My Communities</h3>
      <div className="border-b border-gray-200 mb-4"></div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Communities You Manage</h4>
        {managedCommunities.map((community) => (
          <CommunityItem key={community.id} community={community} isManaged={true} onSettings={handleSettings} />
        ))}
        <div className="flex justify-end mt-2">
          <button
            className="flex items-center text-sm font-semibold"
            style={{ color: '#2B3660' }}
            onClick={() => setIsModalOpen(true)}
          >
            <span className="mr-2">Create New</span>
            <img src={ExploreCommunitiesArrow} alt="Explore" className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-lg font-semibold mb-3">Communities You Joined</h4>
        {joinedCommunities.map((community) => (
          <CommunityItem key={community.id} community={community} onJoin={handleJoin} />
        ))}
        <Link to="/my-communities">
          <div className="flex justify-end mt-2">
            <button className="flex items-center text-sm font-semibold" style={{ color: '#2B3660' }}>
              <span className="mr-2">Show All</span>
              <img src={ExploreCommunitiesArrow} alt="Explore" className="w-4 h-4" />
            </button>
          </div>
        </Link>
      </div>
      <NewCommunityGroupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreateCommunity={handleCreateCommunity} 
      />
    </div>
  );
};

export default MyCommunitiesSidebar;