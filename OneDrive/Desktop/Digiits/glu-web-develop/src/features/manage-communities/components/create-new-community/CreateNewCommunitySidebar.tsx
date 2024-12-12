import { useState, useEffect, useRef } from 'react';
import { mockMembers } from '../../../../data/mockMembers';
import Arrow from '../../../../assets/feed/members/right-arrow.svg';
import AddButton from '../../../../assets/feed/members/add-button.svg';
import MemberItem from '../../../../components/shared/members/components/MemberItem';
import ShareMenu from '../../../../components/shared/share-menu/components/ShareMenu';

const CreateCommunitySidebar = () => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const addMember = (id: number) => {
    console.log(`Add member with id: ${id}`);
  };

  const showAllMembers = () => {
    console.log("Show all members");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsInviteOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownItemClick = (option: string) => {
    console.log(`Clicked: ${option}`);
    setIsInviteOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
      <div className="relative mb-6">
        <button 
          className="bg-light-bluee text-custom-red px-4 py-2 rounded w-full"
          onClick={() => setIsInviteOpen(!isInviteOpen)}
        >
          Invite
        </button>
        {isInviteOpen && (
          <div ref={dropdownRef} className="absolute z-10 mt-2 w-full">
            <ShareMenu 
              onClose={() => setIsInviteOpen(false)} 
              onShareOptionClick={handleDropdownItemClick}
              showSendToFriend={false}
            />
          </div>
        )}
      </div>
      <h2 className="text-lg font-semibold mb-6">Members ({mockMembers.length})</h2>
      <div className="space-y-4 mb-6">
        {mockMembers.slice(0, mockMembers.length).map((member) => (
          <MemberItem 
            key={member.id} 
            {...member} 
            onAdd={() => addMember(member.id)}
            buttonImageSrc={AddButton}
          />
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

export default CreateCommunitySidebar;