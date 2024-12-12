import CommunityCard from '../CommunityCard';
import { Community } from '../../../communities/interfaces/CommunitiesInterfaces';
import MapIcon from '../../../../assets/manage-communities/map-icon.svg';

const CommunitiesYouJoined = ({ communities }: { communities: Community[] }) => {
  return (
    <section className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl font-semibold mb-2 sm:mb-0">Communities You Joined ({communities.length})</h2>
        <div className="flex items-center">
          <img src={MapIcon} alt="Map Icon" className="w-6 h-6 mr-2" />
          <span className="mr-2 font-semibold">USA</span>
          <input type="text" placeholder="Search..." className="border rounded px-3 py-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} isManaged={false} />
        ))}
      </div>
    </section>
  );
};

export default CommunitiesYouJoined;