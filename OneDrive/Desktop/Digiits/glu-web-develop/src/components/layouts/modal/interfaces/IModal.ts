import { Post } from '../../../../features/posts/interfaces/PostInterfaces';
import { Member } from '../../../shared/members/interfaces/MembersInterfaces';
import { Community } from '../../../../features/communities/interfaces/CommunitiesInterfaces';
import { Recommendation } from '../../../../features/recommendations/interfaces/RecommendationInterfaces';
import { NewEvent } from '../../../../features/events/interfaces/EventsInterfaces';
import { JobBoard } from '../../../../features/job-board/interfaces/JobBoardInterfaces';

export interface IModal {
  title: string;
//   content: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  horizontalLine?: boolean;
  leftContent?: React.ReactNode;
  Searchbar?: React.ReactNode;
  onAction?: () => void;
  icon?: boolean

}

export interface IViewPostModal {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

export interface IViewCommunityMembersModal {
  isOpen: boolean;
  onClose: () => void;
  communityName: string;
  topMembers: Member[];
  allMembers: Member[];
}

export interface IViewCommunityModal {
  isOpen: boolean;
  onClose: () => void;
  community: Community;
}

export interface INewCommunityGroupModal {
  isOpen: boolean;
  onClose: () => void;
  onCreateCommunity: (community: Partial<Community>) => void;
}
export interface NewRecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export interface IViewRecommendationModal {
  isOpen: boolean;
  onClose: () => void;
  recommendation: Recommendation;
}

export interface IOpenFiltersModdal {
  isOpen: boolean;
  onClose: () => void;
}

export interface INewTopicModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface INewTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTopic: (topic: { title: string; category: string; content: string }) => void;
}

export interface INewEventModal {
  isOpen: boolean;
  onClose: () => void;
  onCreateEvent: (event: Partial<NewEvent>) => void;
}

export interface IViewAppliedJobsModal {
  isOpen: boolean;
  onClose: () => void;
  jobs: JobBoard[];
  selectedJobId?: string | null
}

