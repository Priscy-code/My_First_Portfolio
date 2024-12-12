export interface Community {
    id: number;
    name: string;
    location: string;
    membersCount: string;
    postsCount: string;
    image: string;
    memberImages: string[];
    contentImages: string[];
    description: string;
    createdAt: string;
    backgroundImage: string;
    galleryImages: string[];
    tags: string[];
}

export interface CommunityItemProps {
    community: Community;
    isManaged?: boolean;
    onJoin?: (id: number) => void;
    onSettings?: (id: number) => void;
}