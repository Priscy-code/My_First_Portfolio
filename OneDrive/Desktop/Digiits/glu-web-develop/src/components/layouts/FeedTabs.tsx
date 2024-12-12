import { useState } from "react";
import Connect from '../shared/connect/components/Connect';
import Posts from '../../features/posts/components/Posts';
import { usePosts } from '../../features/posts/hooks/usePosts';

const FeedTabs = () => {
  const [activeTab, setActiveTab] = useState('Activities');
  const followingCount = 18; // This has to be modified later based on the data
  const { posts, loading, error } = usePosts();

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-2 text-center ${activeTab === 'Activities' ? 'border-b-2 border-[#2B3660] text-[#2B3660]' : 'text-black-500'}`}
          onClick={() => setActiveTab('Activities')}
        >
          Activities
        </button>
        <button
          className={`flex-1 py-2 text-center relative ${activeTab === 'Following' ? 'border-b-2 border-[#2B3660] text-[#2B3660]' : 'text-black-500'}`}
          onClick={() => setActiveTab('Following')}
        >
          Following
          {followingCount > 0 && (
            <span className="absolute top-1/2 -translate-y-1/2 ml-1 inline-flex items-center justify-center bg-custom-red text-white text-xs rounded-full w-5 h-5">
              {followingCount}
            </span>
          )}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'Activities' && (
          <div className="p-4">
            {/* Activities content here */}
            Activities
          </div>
        )}
        {activeTab === 'Following' && (
          <div className="p-4 space-y-8">
            <Connect />
            {loading && <div>Loading posts...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && <Posts posts={posts} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedTabs;