import CreateCommunityIcon from '../../../../assets/manage-communities/create-communities.svg';

const CreatingCommunitiesCard = () => {
  return (
    <div className="bg-[#2B3660] text-white p-4 rounded-lg">
      <h4 className="text-lg font-semibold mb-2">Creating Communities</h4>
      <img src={CreateCommunityIcon} alt="Creating Communities" className="w-full h-32 object-cover rounded-lg mb-2" />
      <p className="text-sm">
        Create and cultivate communities tailored to your unique experiences and interests. Connect with fellow immigrants, share tips, and build meaningful relationships. Start creating your community today and join our diverse immigrant community!
        <div className="my-3 border-t border-gray-200" />
      </p>
    </div>
  );
};

export default CreatingCommunitiesCard;