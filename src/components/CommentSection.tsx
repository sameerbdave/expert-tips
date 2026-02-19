'use client';

import { Comment as CommentType } from '@/types';
import { useState } from 'react';

interface CommentSectionProps {
  tipId: string;
  initialComments?: CommentType[];
}

export default function CommentSection({ tipId, initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    
    // Simulate adding comment (replace with API call later)
    const comment: CommentType = {
      id: `comment-${Date.now()}`,
      content: newComment,
      author: {
        id: 'current-user',
        email: 'user@example.com',
        name: 'You',
        socialProvider: 'google',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      tipId,
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      replies: [],
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setIsSubmitting(false);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8 bg-gray-50 p-4 rounded-lg">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts on this tip..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
        />
        <div className="mt-3 flex justify-end">
          <button
            type="submit"
            disabled={!newComment.trim() || isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-l-4 border-blue-200 pl-4 py-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{comment.author.name}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{comment.content}</p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <button className="text-gray-500 hover:text-blue-600 transition">
                  👍 Like
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition">
                  💬 Reply
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
}
