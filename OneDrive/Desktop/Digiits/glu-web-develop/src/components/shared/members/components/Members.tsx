import { useMembers } from '../hooks/useMembers';
import Arrow from '../../../../assets/feed/members/right-arrow.svg';
import MemberItem from './MemberItem';
import AddButton from '../../../../assets/feed/members/add-button.svg';

const Members = () => {
  const { members, loading, error, addMember, showAllMembers } = useMembers();

  if (loading) return <div className="text-center">Loading members...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className='overflow-hidden'>
      <h2 className="text-lg font-semibold mb-6">Members ({members.length})</h2>
      <div className="space-y-4 mb-6">
        {members.slice(0, 3).map((member) => (
          <MemberItem key={member.id} {...member} onAdd={() => addMember(member.id)} buttonImageSrc={AddButton} />
        ))}
      </div>
      <div className='flex justify-end'>
        <button
          onClick={showAllMembers}
          className="flex items-center text-sm font-semibold"
          style={{ color: '#2B3660' }}
        >
          <span className="mr-2">Show All</span>
          <img src={Arrow} alt="Arrow" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Members;
