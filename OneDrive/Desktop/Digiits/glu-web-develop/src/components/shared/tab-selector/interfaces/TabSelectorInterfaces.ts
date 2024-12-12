export interface Community {
    id: number;
    name: string;
    image: string;
    location: string;
    membersCount: number;
    postsCount: number;
    contentImages: string[];
    memberImages: string[];
  }
  
  export type TabType = 'explore' | 'my';
  
  export interface TabItem {
    key: string;
    label: string;
    count?: number;
  }
  
  export interface TabSelectorProps {
    tabs: TabItem[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
  