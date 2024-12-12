import { useCommunities } from '../hooks/useCommunities';
import CommunityItem from './CommunityItem';
import ExploreCommunitiesArrow from '../../../assets/feed/communities/explore-communities-arrow.svg';

const Community = () => {
  const { communities, loading, error, joinCommunity } = useCommunities();

  if (loading) return <div className="text-center">Loading communities...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className='overflow-hidden'>
      <h2 className="text-xl font-semibold mb-6">Communities</h2>
      <div className="space-y-6 mb-6">
        {communities.map((community) => (
          community && <CommunityItem key={community.id} community={community} onJoin={joinCommunity} />
        ))}
      </div>
      <div className="flex justify-end">
        <button className="flex items-center text-sm font-semibold" style={{ color: '#2B3660' }}>
          <span className="mr-2">Explore Communities</span>
          <img src={ExploreCommunitiesArrow} alt="Explore" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Community;