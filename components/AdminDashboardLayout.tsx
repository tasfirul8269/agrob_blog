'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageCircle, 
  Settings, 
  LogOut,
  Menu,
  X,
  BarChart3,
  Shield,
  Tags,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import tab components
import UsersTab from '@/components/admin/UsersTab';
import PostsTab from '@/components/admin/PostsTab';
import CommentsTab from '@/components/admin/CommentsTab';
import CategoriesTab from '@/components/admin/CategoriesTab';
import AnalyticsTab from '@/components/admin/AnalyticsTab';
import SettingsTab from '@/components/admin/SettingsTab';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    component: null,
  },
  {
    name: 'Users',
    icon: Users,
    component: UsersTab,
  },
  {
    name: 'Posts',
    icon: FileText,
    component: PostsTab,
  },
  {
    name: 'Comments',
    icon: MessageCircle,
    component: CommentsTab,
  },
  {
    name: 'Categories',
    icon: Tags,
    component: CategoriesTab,
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    component: AnalyticsTab,
  },
  {
    name: 'Settings',
    icon: Settings,
    component: SettingsTab,
  },
];

export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/admin-login');
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    if (activeTab === 'Dashboard') {
      return children;
    }
    
    const activeItem = sidebarItems.find(item => item.name === activeTab);
    if (activeItem && activeItem.component) {
      const Component = activeItem.component;
      return <Component />;
    }
    
    return children;
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-gradient-to-r from-primary-400 to-primary-500">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Admin Panel</span>
                <p className="text-xs text-green-100">Agrob Dashboard</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 text-white hover:text-green-100 transition-colors"
          >
            {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleTabClick(item.name)}
              className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                activeTab === item.name
                  ? 'bg-primary-50 text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={sidebarCollapsed ? item.name : ''}
            >
              <item.icon className={`h-5 w-5 ${sidebarCollapsed ? 'mx-auto' : 'mr-3'}`} />
              {!sidebarCollapsed && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center px-3 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
              sidebarCollapsed ? 'justify-center' : ''
            }`}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <LogOut className={`h-5 w-5 ${sidebarCollapsed ? 'mx-auto' : 'mr-3'}`} />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Admin User</div>
                <div className="text-xs text-gray-500">admin@agrob.com</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}