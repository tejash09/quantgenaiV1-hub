
import React from 'react';
import { User, FileText, Book, Video, Brain, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

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
              to="#" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <FileText className="w-4 h-4" />
              </div>
              <span>Research Papers</span>
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Book className="w-4 h-4" />
              </div>
              <span>Learning Resources</span>
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Video className="w-4 h-4" />
              </div>
              <span>Video Tutorials</span>
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Brain className="w-4 h-4" />
              </div>
              <span>AI Assistant</span>
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center mr-3">
                <Settings className="w-4 h-4" />
              </div>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <button 
              onClick={() => logout()}
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
