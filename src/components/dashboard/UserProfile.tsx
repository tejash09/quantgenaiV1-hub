
import React from 'react';
import { User, FileText, Book, Video, Brain, Settings, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/');
  };

  const handleMenuClick = (title: string) => {
    const route = getRouteForTitle(title);
    navigate(route);
    toast({
      title: `${title} Selected`,
      description: `You've navigated to the ${title} section`,
    });
  };

  const getRouteForTitle = (title: string) => {
    switch(title) {
      case 'Research Papers':
        return '/topic/research-papers';
      case 'Learning Resources':
        return '/topic/learning-resources';
      case 'Video Tutorials':
        return '/topic/video-tutorials';
      case 'AI Assistant':
        return '/dashboard?openChat=true';
      case 'Settings':
        return '/settings';
      default:
        return '/dashboard';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden sticky top-24">
      <div className="p-6 bg-gradient-to-r from-quantum-700 to-quantum-900 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">{user?.name}</h3>
            <p className="text-sm text-quantum-100">{user?.email}</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/dashboard" 
              className="flex items-center p-3 rounded-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
              onClick={() => handleMenuClick('Dashboard')}
            >
              <div className="w-8 h-8 rounded-lg bg-quantum-100 dark:bg-quantum-900 text-quantum-500 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/topic/research-papers" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleMenuClick('Research Papers')}
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <FileText className="w-4 h-4" />
              </div>
              <span>Research Papers</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/topic/learning-resources" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleMenuClick('Learning Resources')}
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Book className="w-4 h-4" />
              </div>
              <span>Learning Resources</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/topic/video-tutorials" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleMenuClick('Video Tutorials')}
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Video className="w-4 h-4" />
              </div>
              <span>Video Tutorials</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard?openChat=true" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleMenuClick('AI Assistant')}
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Brain className="w-4 h-4" />
              </div>
              <span>AI Assistant</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleMenuClick('Settings')}
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Settings className="w-4 h-4" />
              </div>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <LogOut className="w-4 h-4" />
              </div>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserProfile;
