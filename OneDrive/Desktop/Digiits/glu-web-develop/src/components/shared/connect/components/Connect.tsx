import { useMembers } from '../../members/hooks/useMembers';
import ConnectItem from './ConnectItem';

const Connect = () => {
  const { members, loading, error, addMember } = useMembers();

  if (loading) return <div className="text-center">Loading connect members...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className='w-full'>
      <h2 className="text-sm font-semibold p-4 text-gray-500">Connect</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {members.slice(0, 3).map((member) => (
          <ConnectItem key={member.id} {...member} onAdd={() => addMember(member.id)} />
        ))}
      </div>
    </div>
  );
};

export default Connect;