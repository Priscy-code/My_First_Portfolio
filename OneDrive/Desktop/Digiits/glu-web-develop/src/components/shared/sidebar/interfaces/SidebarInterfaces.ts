export interface MenuItem {
    icon: string;
    label: string;
    expandable?: boolean;
    badge?: number;
    arrowIcon?: string;
    link?: string;
  }
    
  export interface TabletMenuItemProps {
    item: MenuItem;
    isActive: boolean | undefined;
    onClick: () => void;
  }