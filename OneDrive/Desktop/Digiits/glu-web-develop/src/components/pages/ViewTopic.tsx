import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../shared/navbar/components/Navbar';
import Sidebar from '../shared/sidebar/components/Sidebar';
import ForumSidebar from '../../features/forums/components/ForumsSidebar';
import NotificationIcon from '../../assets/feed/icons/notifications-icon.svg';
import ForumsItem from '../../features/forums/components/ForumsItem';
import CommentSection from '../../features/comments/components/CommentSection';
import TabSelector from '../shared/tab-selector/components/TabSelector';
import BackButton from '../shared/back-button/BackButton';
import { useForums } from '../../features/forums/hooks/useForums';
import { useTopThreads } from '../../features/forums/hooks/useTopThreads';
import { Forum } from '../../features/forums/interfaces/ForumsInterfaces';
import { mockComments } from '../../data/mockComments';

const ViewTopic = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { forums } = useForums();
  const { topThreads, loading: topThreadsLoading } = useTopThreads();
  const [currentForum, setCurrentForum] = useState<Forum | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('main');

  useEffect(() => {
    const fetchForum = async () => {
      setLoading(true);
      const forum = forums.find(f => f.id === topicId);
      if (forum) {
        setCurrentForum(forum);
      }
      setLoading(false);
    };
    fetchForum();
  }, [forums, topicId]);

  const tabs = [
    { key: 'main', label: 'Main Content' },
    { key: 'sidebar', label: 'Top Threads' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar className="z-10" isLoggedIn={true} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="bg-white p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center">
                <Link to='/forums'>
                    <BackButton />
                </Link>
              <h1 className="text-xl font-semibold">View Topic</h1>
            </div>
            <img src={NotificationIcon} alt="Notifications" className="h-12 w-12" />
          </div>
          
          <div className="lg:hidden">
            <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className={`flex-1 p-4 overflow-y-auto ${activeTab === 'main' ? 'block' : 'hidden lg:block'}`}>
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <p className="text-lg text-gray-600">Loading Topic...</p>
                </div>
              ) : (
                currentForum && (
                  <>
                    <ForumsItem forum={currentForum} />
                    <CommentSection comments={mockComments} />
                  </>
                )
              )}
            </div>
            <div className={`w-full lg:w-[300px] p-4 overflow-y-auto ${activeTab === 'sidebar' ? 'block' : 'hidden lg:block'}`}>
              <ForumSidebar topThreads={topThreads} loading={topThreadsLoading} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewTopic;