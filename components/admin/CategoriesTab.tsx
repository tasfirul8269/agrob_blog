'use client';

import { useState } from 'react';
import { Search, Plus, Edit, Trash2, MoreVertical } from 'lucide-react';

const mockCategories = [
  {
    id: '1',
    name: 'Sustainability',
    slug: 'sustainability',
    description: 'Articles about sustainable farming practices and environmental conservation',
    postsCount: 45,
    color: '#10B981',
    createdDate: '2024-01-15',
    isActive: true,
  },
  {
    id: '2',
    name: 'Technology',
    slug: 'technology',
    description: 'Smart farming technologies and agricultural innovations',
    postsCount: 32,
    color: '#3B82F6',
    createdDate: '2024-01-20',
    isActive: true,
  },
  {
    id: '3',
    name: 'Organic',
    slug: 'organic',
    description: 'Organic farming methods and certification processes',
    postsCount: 28,
    color: '#8B5CF6',
    createdDate: '2024-02-01',
    isActive: true,
  },
  {
    id: '4',
    name: 'Climate',
    slug: 'climate',
    description: 'Climate change impacts and adaptation strategies for agriculture',
    postsCount: 19,
    color: '#F59E0B',
    createdDate: '2024-02-10',
    isActive: false,
  },
  {
    id: '5',
    name: 'Innovation',
    slug: 'innovation',
    description: 'Latest innovations and research in agricultural science',
    postsCount: 15,
    color: '#EF4444',
    createdDate: '2024-02-15',
    isActive: true,
  },
];

export default function CategoriesTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredCategories = mockCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Categories Management</h2>
          <p className="text-gray-600 mt-1">Organize your content with categories</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>Add Category</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Categories</p>
              <p className="text-2xl font-bold text-gray-900">{mockCategories.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Categories</p>
              <p className="text-2xl font-bold text-gray-900">{mockCategories.filter(c => c.isActive).length}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-xl">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">{mockCategories.reduce((sum, cat) => sum + cat.postsCount, 0)}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-xl">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Most Popular</p>
              <p className="text-2xl font-bold text-gray-900">Sustainability</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-xl">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">/{category.slug}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                  <Edit size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{category.postsCount}</div>
                  <div className="text-xs text-gray-500">Posts</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg font-semibold ${category.isActive ? 'text-green-600' : 'text-gray-400'}`}>
                    {category.isActive ? 'Active' : 'Inactive'}
                  </div>
                  <div className="text-xs text-gray-500">Status</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Created</div>
                <div className="text-sm font-medium text-gray-900">{category.createdDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowAddModal(false)}></div>
          <div className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Category</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="category-slug"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Category description"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <input
                  type="color"
                  className="w-full h-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                  defaultValue="#10B981"
                />
              </div>
              <div className="flex items-center justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}