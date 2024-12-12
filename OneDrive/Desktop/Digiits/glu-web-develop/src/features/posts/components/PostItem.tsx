import { useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { Post } from '../../../features/posts/interfaces/PostInterfaces';
import ViewPostModal from '../../../components/layouts/modal/ViewPostModal';

const PostItem = ({ post }: { post: Post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPost = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <PostHeader user={post.user} timestamp={post.timestamp} location={post.location} onViewPost={handleViewPost} />
      <div className="my-6">
        <PostContent content={post.content} media={post.media} />
      </div>
      <div className="mt-7">
        <PostFooter likes={post.likes} comments={post.comments} shares={post.shares} likedBy={post.likedBy} likedByCount={post.likedByCount} />
      </div>
      <ViewPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} post={post} />
    </div>
  );
};

export default PostItem;