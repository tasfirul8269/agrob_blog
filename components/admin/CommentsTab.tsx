'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Eye, Trash2, CheckCircle, XCircle } from 'lucide-react';

const mockComments = [
  {
    id: '1',
    author: 'John Smith',
    email: 'john@example.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Great article! I\'ve been implementing some of these practices on my farm and have seen significant improvements in soil health.',
    postTitle: 'Sustainable farming practices for better yields',
    status: 'Approved',
    date: '2024-12-15',
    replies: 2,
  },
  {
    id: '2',
    author: 'Maria Garcia',
    email: 'maria@example.com',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The section on water conservation is particularly helpful. We\'re dealing with drought conditions and need to optimize our irrigation.',
    postTitle: 'Smart irrigation systems revolutionizing agriculture',
    status: 'Pending',
    date: '2024-12-14',
    replies: 0,
  },
  {
    id: '3',
    author: 'Anonymous User',
    email: 'spam@fake.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'This is spam content with inappropriate links and promotional material.',
    postTitle: 'Organic pest control methods that actually work',
    status: 'Spam',
    date: '2024-12-13',
    replies: 0,
  },
  {
    id: '4',
    author: 'Lisa Brown',
    email: 'lisa@example.com',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Thank you for sharing these insights. I\'m particularly interested in the organic certification process.',
    postTitle: 'Organic pest control methods that actually work',
    status: 'Approved',
    date: '2024-12-12',
    replies: 1,
  },
];

export default function CommentsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredComments = mockComments.filter(comment => {
    const matchesSearch = comment.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comment.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         comment.postTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || comment.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Comments Management</h2>
          <p className="text-gray-600 mt-1">Moderate and manage user comments</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Comments</p>
              <p className="text-2xl font-bold text-gray-900">8,932</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-gray-900">8,456</p>
            </div>
            <div className="p-3 bg-green-100 rounded-xl">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">234</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-xl">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Spam</p>
              <p className="text-2xl font-bold text-gray-900">242</p>
            </div>
            <div className="p-3 bg-red-100 rounded-xl">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search comments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Spam">Spam</option>
          </select>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {filteredComments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{comment.author}</div>
                  <div className="text-sm text-gray-500">{comment.email}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  comment.status === 'Approved' 
                    ? 'bg-green-100 text-green-800'
                    : comment.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {comment.status}
                </span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-2">{comment.content}</p>
              <div className="text-sm text-gray-500">
                On: <span className="font-medium">{comment.postTitle}</span>
                {comment.replies > 0 && (
                  <span className="ml-4">{comment.replies} replies</span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors">
                  <CheckCircle size={16} />
                  <span className="text-sm">Approve</span>
                </button>
                <button className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors">
                  <XCircle size={16} />
                  <span className="text-sm">Reject</span>
                </button>
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                  <Eye size={16} />
                  <span className="text-sm">View Post</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}