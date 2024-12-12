export interface Member {
    id: number;
    image: string;
    name: string;
    friendsCount: number;
    postsCount: number;
    isVerified: boolean;
  }
  
  export interface MemberItemProps extends Omit<Member, 'id'> {
    onAdd: (id: number) => void;
  }
  
  export interface MembersProps {
    members: Member[];
    onShowAll: () => void;
  }

  export interface MemberItemPropsWithButton extends MemberItemProps {
    buttonImageSrc: string;
  }