import Navbar from '../shared/navbar/components/Navbar';
import { mockCommunities } from '../../data/mockCommunities';
import CommunitiesYouManage from '../../features/manage-communities/components/my-communities/CommunitiesYouManage';
import CommunitiesYouJoined from '../../features/manage-communities/components/my-communities/CommunitiesYouJoined';
import SuggestedCommunitiesSidebar from '../../features/manage-communities/components/my-communities/SuggestedCommunitiesSidebar';
import { Link } from 'react-router-dom';
import BackButton from '../shared/back-button/BackButton';

const ManageCommunities = () => {
  const managedCommunities = mockCommunities.slice(0, 1);
  const joinedCommunities = mockCommunities.slice(0, 4);
  const suggestedCommunities = mockCommunities.slice(0, 3);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="max-w-[90%] mx-auto py-6">
        <div className="flex items-center mb-4">
          <Link to="/manage-communities">
            <BackButton />
          </Link>
          <h1 className="text-2xl font-semibold flex-grow">My Communities</h1>
          <Link to='/create-new-community'>
            <button 
            className="bg-red-600 text-white px-4 py-2 rounded">
              Create New
            </button>
          </Link>
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 xl:w-4/5 lg:pr-4">
            <CommunitiesYouManage communities={managedCommunities} />
            <CommunitiesYouJoined communities={joinedCommunities} />
          </div>
          <div className="w-full lg:w-1/4 xl:w-1/5 lg:sticky lg:top-6 lg:self-start mt-6 lg:mt-0">
            <SuggestedCommunitiesSidebar communities={suggestedCommunities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCommunities;