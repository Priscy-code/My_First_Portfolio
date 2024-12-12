import { Community } from '../../../communities/interfaces/CommunitiesInterfaces';
import CommunityItem from '../../../communities/components/CommunityItem';
import CreatingCommunitiesCard from './CreatingCommmunitiesCard';

const SuggestedCommunitiesSidebar = ({ communities }: { communities: Community[] }) => {
  const handleJoin = (id: number) => {
    console.log(`Joining community with id: ${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-4">Suggested Communities</h3>
      <div className="mb-4">
        {communities.map((community) => (
          <CommunityItem key={community.id} community={community} onJoin={handleJoin} />
        ))}
      </div>
      <CreatingCommunitiesCard />
    </div>
  );
};

export default SuggestedCommunitiesSidebar;