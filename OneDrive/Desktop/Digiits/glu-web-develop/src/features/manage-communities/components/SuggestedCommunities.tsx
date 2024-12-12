import CommunityCard from './CommunityCard';
import { Community } from '../../../features/communities/interfaces/CommunitiesInterfaces';

const SuggestedCommunities = ({ communities }: { communities: Community[] }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Suggested</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} isManaged={false} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedCommunities;