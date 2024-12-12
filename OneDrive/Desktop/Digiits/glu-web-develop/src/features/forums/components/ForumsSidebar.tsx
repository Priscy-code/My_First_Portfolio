import { ForumSidebarProps } from '../interfaces/ForumsInterfaces';
import TagBadge from './TagBadge';

const ForumSidebar = ({ topThreads, loading }: ForumSidebarProps) => {
  if (loading) {
    return <div className="bg-white rounded-lg shadow p-4">Loading top threads...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Top Threads</h2>
      <div className="space-y-4">
        {topThreads.map((thread) => (
          <div key={thread.id} className="pb-4 last:pb-0">
            <h3 className="font-semibold text-sm mb-1">{thread.title}</h3>
            <p className="text-xs text-gray-600 mb-2">{thread.content}</p>
            <TagBadge tagName={thread.tag.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumSidebar;