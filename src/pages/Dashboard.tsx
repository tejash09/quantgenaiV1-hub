
import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, BellRing, Settings, LogOut, MessageSquare, FileText, Book, Video, Brain, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import TopicCard from '../components/TopicCard';
import Chatbot from '../components/Chatbot';
import { useAuth } from '../context/AuthContext';
import { getAllTopics } from '../utils/mockData';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const topics = getAllTopics();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
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
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Welcome Section */}
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
                    
                    <div className="mt-4 md:mt-0 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <BellRing className="w-4 h-4 mr-2" />
                        <span>Notifications</span>
                      </Button>
                      <Button size="sm" className="bg-quantum-500 hover:bg-quantum-600 text-white flex items-center">
                        <Search className="w-4 h-4 mr-2" />
                        <span>Search</span>
                      </Button>
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
              
              {/* Topics Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Explore Technologies
                  </h2>
                  <Link to="#" className="text-quantum-500 hover:text-quantum-600 text-sm font-medium">
                    View all
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topics.map((topic, index) => (
                    <TopicCard key={topic.id} topic={topic} index={index} />
                  ))}
                </div>
              </motion.div>
              
              {/* Featured Papers Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Featured Research Papers
                  </h2>
                  <Link to="#" className="text-quantum-500 hover:text-quantum-600 text-sm font-medium">
                    Browse library
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {topics.slice(0, 3).flatMap(topic => 
                    topic.papers.slice(0, 1).map(paper => (
                      <div 
                        key={paper.id}
                        className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow"
                      >
                        <div className="md:w-1/4 flex-shrink-0">
                          <div className="h-24 bg-quantum-100 dark:bg-quantum-900 rounded-lg flex items-center justify-center">
                            <FileText className="w-10 h-10 text-quantum-500" />
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">{paper.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{paper.authors} ({paper.year})</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{paper.abstract}</p>
                          <div className="mt-3 flex items-center">
                            <Link 
                              to={paper.link} 
                              className="text-quantum-500 hover:text-quantum-600 text-sm font-medium"
                            >
                              Read paper
                            </Link>
                            <span className="mx-2 text-gray-300 dark:text-gray-700">•</span>
                            <Link 
                              to={`/topic/${topic.slug}`}
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm"
                            >
                              {topic.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white py-6 text-center text-sm mt-16">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} QuantGenAILabs. All rights reserved.</p>
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Dashboard;
