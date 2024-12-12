import { Community } from '../../../features/communities/interfaces/CommunitiesInterfaces';
import CommunityCard from './CommunityCard';
import MapIcon from '../../../assets/manage-communities/map-icon.svg';

const ExploreCommunities = ({ communities }: { communities: Community[] }) => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-2xl font-bold mb-2 sm:mb-0">Explore Communities</h2>
        <div className="flex items-center">
          <img src={MapIcon} alt="Map Icon" className="w-6 h-6 mr-2" />
          <span className="mr-2 font-semibold">USA</span>
          <input type="text" placeholder="Search..." className="border rounded px-3 py-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} isManaged={false} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-red-600 text-white px-4 py-2 rounded">Load More</button>
      </div>
    </section>
  );
};

export default ExploreCommunities;