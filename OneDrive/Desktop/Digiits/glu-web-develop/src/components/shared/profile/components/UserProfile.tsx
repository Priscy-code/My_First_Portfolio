import { UserProfileProps } from '../interfaces/UserProfileInterfaces';
import LoggedOutProfile from '../../../../assets/feed/images/not-logged-in.svg';
import LoggedInProfile from '../../../../assets/feed/images/profile.svg';

const UserProfile = ({ isLoggedIn, userImage }: UserProfileProps) => {
  const profileImage = isLoggedIn ? (userImage || LoggedInProfile) : LoggedOutProfile;

  return (
    <div className="relative">
      <div className="flex items-center">
        <img className="h-8 w-8 rounded-full" src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default UserProfile;