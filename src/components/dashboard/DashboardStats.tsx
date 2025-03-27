
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Search, FileText, Book, MessageSquare } from 'lucide-react';

const DashboardStats = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, {user?.name.split(' ')[0]}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Here's what's new in the world of AI and quantum technologies
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 rounded-lg bg-quantum-100 dark:bg-quantum-900 text-quantum-500 flex items-center justify-center mr-4">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Research Papers</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 rounded-lg bg-quantum-100 dark:bg-quantum-900 text-quantum-500 flex items-center justify-center mr-4">
              <Book className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Learning Resources</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center">
            <div className="w-12 h-12 rounded-lg bg-quantum-100 dark:bg-quantum-900 text-quantum-500 flex items-center justify-center mr-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">AI Chat Sessions</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardStats;
