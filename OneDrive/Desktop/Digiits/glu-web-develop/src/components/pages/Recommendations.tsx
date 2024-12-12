import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../shared/navbar/components/Navbar';
import Sidebar from '../shared/sidebar/components/Sidebar';
import RecommendationsSidebar from '../../features/recommendations/components/RecommendationsSidebar';
import RecommendationsContent from '../../features/recommendations/components/RecommendationsContent';
import SavedRecommendations from '../../features/recommendations/components/SavedRecommendations';
import NewRecommendationModal from '../../components/layouts/modal/NewRecommendationModal';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import RecommendationsIcon from '../../assets/feed/recommendations/recommendations-icon.svg';
import { FiPlus } from 'react-icons/fi';

const Recommendations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('recommendations');
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const tabs = [
    { key: 'recommendations', label: 'Recommendations' },
    { key: 'saved', label: 'Saved' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar className="z-10" isLoggedIn={true} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto flex flex-col p-4">
          <div className="flex items-center p-4">
            <img src={RecommendationsIcon} alt="Recommendations" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-semibold">Recommendations</h1>
            {isMobileOrTablet ? (
              <button 
                className="bg-custom-red text-white p-2 rounded-2xl ml-auto"
                onClick={openModal}
              >
                <FiPlus size={24} />
              </button>
            ) : (
              <button 
                className="bg-custom-red text-white px-4 py-2 rounded ml-auto"
                onClick={openModal}
              >
                Add New
              </button>
            )}
          </div>
          
          {isMobileOrTablet && (
            <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          <hr className="my-2 mx-4 border-t border-gray-200" />
          
          <div className={`flex flex-1 overflow-hidden ${isMobileOrTablet ? 'pb-24' : ''}`}>
            <div className="flex-1 p-4 overflow-y-auto">
              {(!isMobileOrTablet || activeTab === 'recommendations') && (
                <RecommendationsContent isMobileOrTablet={isMobileOrTablet} />
              )}
              {isMobileOrTablet && activeTab === 'saved' && <SavedRecommendations />}
            </div>
            {!isMobileOrTablet && (
              <div className="w-[300px] p-4 overflow-y-auto">
                <RecommendationsSidebar />
              </div>
            )}
          </div>
        </main>
      </div>
      <NewRecommendationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Recommendations;
