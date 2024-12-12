import { ICommentSection } from '../interfaces/CommentInterfaces';
import BirthdayIcon from '../../../assets/feed/icons/birthday-icon.svg';
import LikeIcon from '../../../assets/feed/icons/like-icon.svg'; 
import EmptyLikeIcon from '../../../assets/feed/icons/empty-like-icon.svg';
import ReplyIcon from '../../../assets/feed/icons/comment-icon.svg';
import EmojiIcon from '../../../assets/feed/icons/emoji-icon.svg';
import AttachmentIcon from '../../../assets/feed/icons/attach-icon.svg';
import SendIcon from '../../../assets/feed/icons/send-icon.svg';
import ArrowDown from '../../../assets/feed/icons/arrow-down.svg';
import More from '../../../assets/feed/icons/more-icon.svg';
import ReportIcon from '../../../assets/feed/icons/report-icon.svg';
import PostComment from '../../posts/components/PostComment';
import { useState, useRef, useEffect } from 'react';

const CommentSection = ({ comments }: ICommentSection) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-600">All Comments</h3>
        <div className="flex items-center text-gray-500">
          <span>Most Recent</span>
          <img src={ArrowDown} alt="dropdown" className="w-4 h-4 ml-1" />
        </div>
      </div>
      {comments.map((comment, index) => (
        <div key={comment.id} className="mb-4 relative">
          <div className="flex items-center mb-2">
            <img src={comment.user.profileImage} alt={comment.user.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <div className="flex items-center">
                <span className="font-semibold text-sm">{comment.user.name}</span>
              </div>
              <div className="text-xs text-gray-500 flex items-center">
                <img src={BirthdayIcon} alt="birthday icon" className="w-3 h-3 mr-1" />
                <span>{comment.birthdate}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 relative ml-auto">
              <span className='text-xs text-gray-500'>{comment.timestamp}</span>
              <button onClick={() => toggleDropdown(comment.id)}>
                <img src={More} alt='more button' className='w-5 h-5' />
              </button>
              {openDropdown === comment.id && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <img src={ReportIcon} alt="Report" className="w-4 h-4 mr-2" />
                      Report
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-sm mb-2">{comment.content}</p>
          <div className="flex items-center text-xs text-gray-500">
            <img src={comment.id === 2 ? EmptyLikeIcon : LikeIcon} alt="likes" className="w-4 h-4 mr-1" />
            <span className="mr-4">{comment.likes} Likes</span>
            <button className="flex items-center text-blue-500">
              <img src={ReplyIcon} alt="comment" className="w-4 h-4 mr-1" />
              Reply
            </button>
          </div>
          {comment.id === 1 && (
            <div className="flex items-center text-gray-500">
              <div className='w-0.5 h-5 bg-[#7D7E80] mr-4 mt-3'></div>
              <button className="text-[#1770B8] mt-2 underline">View Replies (11)</button>
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-10 mt-4">
              {comment.replies.map(reply => (
                <div key={reply.id} className="mb-4 relative">
                  <div className="flex items-center mb-2">
                    <img src={reply.user.profileImage} alt={reply.user.name} className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <span className="font-semibold text-sm">{reply.user.name}</span>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <img src={BirthdayIcon} alt="birthday icon" className="w-3 h-3 mr-1" />
                        <span>{reply.birthdate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 relative ml-auto">
                      <span className='text-xs text-gray-500'>{reply.timestamp}</span>
                      <button onClick={() => toggleDropdown(reply.id)}>
                        <img src={More} alt='more button' className='w-5 h-5' />
                      </button>
                      {openDropdown === reply.id && (
                        <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                          <div className="py-1">
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                            >
                              <img src={ReportIcon} alt="Report" className="w-4 h-4 mr-2" />
                              Report
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm mb-2">{reply.content}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <img src={LikeIcon} alt="likes" className="w-4 h-4 mr-1" />
                    <span className="mr-4">{reply.likes} Likes</span>
                    <button className="flex items-center text-blue-500">
                      <img src={ReplyIcon} alt="comment" className="w-4 h-4 mr-1" />
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {index === comments.length - 1 && (
            <>
              <div className="absolute left-5 top-[130px] bottom-2 w-0.5 bg-gray-300"></div>
              <div className="mt-4">
                <div className="relative ml-10">
                  <textarea
                    className="w-full p-3 pr-24 border border-[#1770B8] rounded-md bg-light-blue h-20"
                    placeholder="Reply to Dennis Washington"
                  />
                  <div className="absolute bottom-3 right-3 flex items-center">
                    <button className="ml-2">
                      <img src={EmojiIcon} alt="Emoji" className="w-5 h-5" />
                    </button>
                    <button className="ml-2">
                      <img src={AttachmentIcon} alt="Attachment" className="w-5 h-5" />
                    </button>
                    <span className="mx-2 text-gray-300">|</span>
                    <button>
                      <img src={SendIcon} alt="Send" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      <button className="text-[#1770B8] mt-4 underline">Load More</button>
      <PostComment/>
    </div>
  );
};

export default CommentSection;