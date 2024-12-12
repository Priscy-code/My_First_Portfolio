import PostItem from './PostItem';
import { Post } from '../interfaces/PostInterfaces';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;