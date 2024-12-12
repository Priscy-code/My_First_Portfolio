export interface EventSectionHeaderProps {
  title?: string;
  highlightText?: string;
}

export interface HeroProps {
  backgroundImage: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export interface AvatarProps {
  imageSrc: string;
  label: string;
}

export interface EventCardProps {
  imageSrc: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  viewAll?:string;
}

export interface EventSectionHeaderProps {
  title?: string;
  highlightText?: string;
  viewAll?:string;
  items: EventCardProps[]; 
}
