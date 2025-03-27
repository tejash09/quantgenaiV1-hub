
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Chatbot from '../components/Chatbot';
import { useAuth } from '../context/AuthContext';

// Create pages for each section in dashboard
const ResearchPapers = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Research Papers</h2>
    <p>Browse through our collection of research papers on quantum computing, AI, and more.</p>
    {/* Content would go here */}
  </div>
);

const LearningResources = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
    <p>Explore educational materials to help you understand advanced technologies.</p>
    {/* Content would go here */}
  </div>
);

const VideoTutorials = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
    <p>Watch video tutorials on various technology topics.</p>
    {/* Content would go here */}
  </div>
);

const Settings = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <p>Manage your account settings and preferences.</p>
    {/* Content would go here */}
  </div>
);

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const openChat = searchParams.get('openChat') === 'true';
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If the openChat parameter is true, we would trigger the chatbot to open
    if (openChat) {
      console.log('Chat should be opened');
      const chatEvent = new CustomEvent('openChat', { detail: { open: true } });
      window.dispatchEvent(chatEvent);
    }
  }, [openChat]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <div className="pt-20 px-4">
        <DashboardLayout />
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
