import CommunityCard from '../CommunityCard';
import { Community } from '../../../communities/interfaces/CommunitiesInterfaces';

const CommunitiesYouManage = ({ communities }: { communities: Community[] }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Communities You Manage ({communities.length})</h2>
      <div className="grid grid-cols-1 gap-4">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} isManaged={true} />
        ))}
      </div>
    </section>
  );
};

export default CommunitiesYouManage;