import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/navbar/components/Navbar';
import CommunityInfo from '../../features/manage-communities/components/create-new-community/CommunityInfo';
import CreateCommunitySidebar from '../../features/manage-communities/components/create-new-community/CreateNewCommunitySidebar';
import AdminTools from '../../features/manage-communities/components/create-new-community/AdminTools';
import CommunityModerators from '../../features/manage-communities/components/create-new-community/CommunityModerators';
import { Community } from '../../features/communities/interfaces/CommunitiesInterfaces';
import HelpCenter from '../../assets/manage-communities/help-center.svg';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import { TabItem } from '../shared/tab-selector/interfaces/TabSelectorInterfaces';
import Sidebar from '../shared/sidebar/components/Sidebar';
import BackButton from '../shared/back-button/BackButton';

const CreateNewCommunity = () => {
  const [activeTab, setActiveTab] = useState<string>('edit');

  const tabs: TabItem[] = [
    { key: 'edit', label: 'Edit' },
    { key: 'members', label: 'Members', count: 32 },
  ];

  const handleCreateCommunity = (community: Partial<Community>) => {
    console.log('New community created:', community);
  };

  const handleSaveChanges = () => {
    console.log('Saving all changes');
  };

  const handleClear = () => {
    console.log('Clearing all fields');
  };

  return (
    <div className="min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="max-w-[90%] mx-auto py-6 pb-16 md:pb-20">
        <div className="lg:hidden">
          <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="flex items-center mb-4">
          <Link to='/manage-communities'>
            <BackButton />
          </Link>
          <h1 className="text-2xl font-semibold flex-grow">Manage Community</h1>
          <img src={HelpCenter} alt="Help Center" className="w-6 h-6 mr-4" />
          <button className="text-gray-600">Help Center</button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4 xl:w-4/5 space-y-8">
            {/* Desktop view */}
            <div className="hidden lg:block">
              <CommunityInfo onCreateCommunity={handleCreateCommunity} />
              <hr className="my-6 border-t border-gray-200" />
              <AdminTools />
              <CommunityModerators />
              <div className="flex justify-start">
                <button onClick={handleSaveChanges} 
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 mr-4">
                  Save Changes
                </button>
                <button 
                  onClick={handleClear} 
                  className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
                  Clear
                </button>
              </div>
            </div>

            {/* Mobile and tablet view */}
            <div className="lg:hidden">
              {activeTab === 'edit' && (
                <>
                  <CommunityInfo onCreateCommunity={handleCreateCommunity} />
                  <hr className="my-6 border-t border-gray-200" />
                  <AdminTools />
                  <CommunityModerators />
                  <div className="flex justify-start">
                    <button onClick={handleSaveChanges} 
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 mr-4">
                      Save Changes
                    </button>
                    <button 
                      onClick={handleClear} 
                      className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
                      Clear
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={`w-full lg:w-1/4 xl:w-1/5 lg:sticky lg:top-6 lg:self-start ${activeTab === 'edit' ? 'hidden lg:block' : ''}`}>
            <CreateCommunitySidebar />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default CreateNewCommunity;