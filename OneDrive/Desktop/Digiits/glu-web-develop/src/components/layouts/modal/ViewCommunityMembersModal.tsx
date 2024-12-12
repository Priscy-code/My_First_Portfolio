import Modal from './Modal';
import { IViewCommunityMembersModal } from './interfaces/IModal';
import MemberItem from '../../shared/members/components/MemberItem';
import SearchIcon from '../../../assets/feed/members/search-icon.svg';
import AddCommunityButton from '../../../assets/feed/communities/add-community.svg';

const ViewCommunityMembersModal = ({ isOpen, onClose, communityName, topMembers, allMembers }: IViewCommunityMembersModal) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={communityName} 
      horizontalLine={false}
      Searchbar={
        <div className="flex items-center justify-between">
          <img src={SearchIcon} alt="Search" className="w-5 h-5" />
          <input type="text" placeholder="Search..." className="w-full mx-3" />
        </div>
      }
    >
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Top</h3>
          <div className="space-y-4">
            {topMembers.map((member) => (
              <MemberItem key={member.id} {...member} onAdd={() => {}} buttonImageSrc={AddCommunityButton} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">All</h3>
          <div className="space-y-4">
            {allMembers.map((member) => (
              <MemberItem key={member.id} {...member} onAdd={() => {}} buttonImageSrc={AddCommunityButton} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewCommunityMembersModal;