import { Content } from '../interfaces/PostInterfaces';
import { MediaItem } from '../interfaces/PostInterfaces';

const PostContent = ({ content, media }: { content: Content; media?: (string | MediaItem)[] }) => {
  const maxDisplayedMedia = 3;
  const additionalMediaCount = media && media.length > maxDisplayedMedia ? media.length - maxDisplayedMedia : 0;

  return (
    <div className="mb-4">
      <p className="text-sm mb-2">{content.text}</p>
      {content.hastag && (
        <div className="text-[#1770B8] mb-2">
          {content.hastag}
        </div>
      )}
      {media && media.length > 0 && (
        <div className={`grid ${media.length === 1 ? 'grid-cols-1' : 'grid-cols-3'} relative`}>
          {media.slice(0, maxDisplayedMedia).map((item, index) => (
            <div
              key={index}
              className={`${media.length === 1 ? 'aspect-w-16 aspect-h-9' : 'aspect-square'} overflow-hidden rounded-lg`}
            >
              {typeof item === 'string' ? (
                <img 
                  src={item} 
                  alt={`media-${index}`} 
                  className="w-full h-full object-cover"
                />
              ) : item.type === 'video' ? (
                <video controls className="w-full h-full object-cover">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          ))}
          {additionalMediaCount > 0 && (
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
              +{additionalMediaCount}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostContent;