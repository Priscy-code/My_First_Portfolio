import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../shared/navbar/components/Navbar';
import Sidebar from '../shared/sidebar/components/Sidebar';
import ForumSidebar from '../../features/forums/components/ForumsSidebar';
import ForumsContent from '../../features/forums/components/ForumsContent';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import { useForums } from '../../features/forums/hooks/useForums';
import { useTopThreads } from '../../features/forums/hooks/useTopThreads';
import ForumsIcon from '../../assets/feed/forums/forum-icon.svg';
import { FiPlus } from 'react-icons/fi';
import NewTopicModal from '../layouts/modal/NewTopicModal';
import { INewTopicModalProps } from '../layouts/modal/interfaces/IModal';

const Forums = () => {
  const { forums, loading: forumsLoading } = useForums();
  const { topThreads, loading: topThreadsLoading } = useTopThreads();
  const [activeTab, setActiveTab] = useState('forums');
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const [isNewTopicModalOpen, setIsNewTopicModalOpen] = useState(false);

  const tabs = [
    { key: 'forums', label: 'Forums' },
    { key: 'top-threads', label: 'Top Threads' },
  ];

  const handleCreateTopic: INewTopicModalProps['onCreateTopic'] = (topic) => {
    // Implement your logic to create a new topic
    console.log('New topic:', topic);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar className="z-10" isLoggedIn={true} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto flex flex-col p-4">
          <div className="flex items-center p-4">
            <img src={ForumsIcon} alt="Forums" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-semibold">Forums</h1>
            {isMobileOrTablet ? (
              <button 
                className="bg-custom-red text-white p-2 rounded-2xl ml-auto"
                onClick={() => setIsNewTopicModalOpen(true)}
              >
                <FiPlus size={24} />
              </button>
            ) : (
              <button 
                className="bg-custom-red text-white px-4 py-2 rounded ml-auto"
                onClick={() => setIsNewTopicModalOpen(true)}
              >
                New Topic
              </button>
            )}
          </div>
          
          {isMobileOrTablet && (
            <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}

          <hr className="my-2 mx-4 border-t border-gray-200" />
          
          <div className={`flex flex-1 overflow-hidden ${isMobileOrTablet ? 'pb-24' : ''}`}>
            <div className="flex-1 p-4 overflow-y-auto">
              {(!isMobileOrTablet || activeTab === 'forums') && (
                <ForumsContent forums={forums} loading={forumsLoading} isMobileOrTablet={isMobileOrTablet} />
              )}
              {isMobileOrTablet && activeTab === 'top-threads' && (
                <ForumSidebar topThreads={topThreads} loading={topThreadsLoading} />
              )}
            </div>
            {!isMobileOrTablet && (
              <div className="w-[300px] p-4 overflow-y-auto">
                <ForumSidebar topThreads={topThreads} loading={topThreadsLoading} />
              </div>
            )}
          </div>
        </main>
      </div>
      <NewTopicModal
        isOpen={isNewTopicModalOpen}
        onClose={() => setIsNewTopicModalOpen(false)}
        onCreateTopic={handleCreateTopic}
      />
    </div>
  );
};

export default Forums;