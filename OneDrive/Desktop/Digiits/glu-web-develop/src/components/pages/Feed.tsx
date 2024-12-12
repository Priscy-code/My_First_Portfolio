import Navbar from '../shared/navbar/components/Navbar';
import Sidebar from '../shared/sidebar/components/Sidebar';
import Members from '../shared/members/components/Members';
import Communities from '../../features/communities/components/Communities';
import Community from '../../features/communities/components/Community';
import FeedTitle from '../layouts/FeedTitle';
import FeedTabs from '../layouts/FeedTabs';
import { ActiveCommunityProvider } from '../../features/communities/components/ActiveCommunity';

const Feed = () => {
  return (
    <ActiveCommunityProvider>
      <div className="flex flex-col h-screen">
        <Navbar className="z-10" isLoggedIn={true} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto flex flex-col">
            <FeedTitle />
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 p-4 pr-0 md:pr-4">
                <Communities />
                <FeedTabs />
              </div>
              <div className="w-[420px] flex-col overflow-y-auto hidden lg:flex">
                <div className="flex-1 bg-white rounded-t-lg shadow-md p-4">
                  <Community />
                  <hr className="my-6 border-t border-gray-200" />
                  <Members />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ActiveCommunityProvider>
  );
};

export default Feed;