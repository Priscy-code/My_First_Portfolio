import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/navbar/components/Navbar';
import { mockCommunities } from '../../data/mockCommunities';
import SuggestedCommunities from '../../features/manage-communities/components/SuggestedCommunities';
import ExploreCommunities from '../../features/manage-communities/components/ExploreCommunities';
import MyCommunitiesSidebar from '../../features/manage-communities/components/MyCommunitiesSidebar';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import { TabItem } from '../shared/tab-selector/interfaces/TabSelectorInterfaces';
import HeroImage from '../../assets/manage-communities/header-image.svg';
import { Community } from '../../features/communities/interfaces/CommunitiesInterfaces';
import Sidebar from '../shared/sidebar/components/Sidebar';
import BackButton from '../shared/back-button/BackButton';

const ManageCommunities = () => {
  const [activeTab, setActiveTab] = useState<string>('explore');
  const suggestedCommunities: Community[] = mockCommunities.slice(0, 4);
  const exploreCommunities: Community[] = mockCommunities;

  const tabs: TabItem[] = [
    { key: 'explore', label: 'Explore Communities' },
    { key: 'my', label: 'My Communities', count: 5 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="max-w-[90%] mx-auto py-6 pb-16 md:pb-20">
        <div className="lg:hidden">
          <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="flex items-center mb-4">
          <Link to="/feed">
            <BackButton />
          </Link>
          <h1 className="text-2xl font-semibold flex-grow">Communities</h1>
          <Link to='/create-new-community'>
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Create New
            </button>
          </Link>
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className="flex flex-col lg:flex-row">
          {activeTab === 'explore' ? (
            <div className="w-full lg:w-3/4 xl:w-4/5 lg:pr-4">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img src={HeroImage} alt="Discover Vibrant Communities" className="w-full h-48 object-cover opacity-90" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-4 sm:p-6 text-white">
                  <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Discover Vibrant Communities:</h2>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Connect with Like-Minded Individuals</h3>
                  <p className="text-xs sm:text-sm">Join or create communities based on nationality, language, or interests. Connect with like-minded individuals, exchange ideas, and build meaningful relationships. Start exploring and connecting today!</p>
                </div>
              </div>
              <SuggestedCommunities communities={suggestedCommunities} />
              <hr className="my-6 border-t border-gray-200" />
              <ExploreCommunities communities={exploreCommunities} />
            </div>
          ) : (
            <div className="w-full lg:w-1/4 xl:w-1/5 lg:sticky lg:top-6 lg:self-start mt-6 lg:mt-0">
              <MyCommunitiesSidebar communities={mockCommunities} />
            </div>
          )}
          <div className="hidden lg:block lg:w-1/4 xl:w-1/5 lg:sticky lg:top-6 lg:self-start mt-6 lg:mt-0">
            <MyCommunitiesSidebar communities={mockCommunities} />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default ManageCommunities;