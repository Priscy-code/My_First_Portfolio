import BadgeIcon from '@/assets/icons/xplora-badge.svg';

const Badge = () => {
  return (
    <div className="fixed bottom-0 left-0 z-[1000] ">
      <img src={BadgeIcon} alt="Badge Icon" className="w-20 sm:w-36 lg:w-60" />
    </div>
  );
};

export default Badge;
