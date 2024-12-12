export interface Forum {
    id: string;
    title: string;
    author: {
      name: string;
      avatar: string;
      location: string;
    };
    content: string;
    category: string;
    tags: string[];
    likes: string | number;
    dislikes: string | number;
    comments: string | number;
    createdAt: string;
  }
  
  export interface TopThread {
    id: string;
    title: string;
    content: string;
    tag: {
      name: string;
      color: string;
    };
  }
  
  export interface ForumSidebarProps {
    topThreads: TopThread[];
    loading: boolean;
  }
  
  export interface ForumsContentProps {
    forums: Forum[];
    loading: boolean;
    isMobileOrTablet: boolean;
  }
  
  export interface ForumsItemProps {
    forum: Forum;
  }