
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Chatbot from '../components/Chatbot';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const openChat = searchParams.get('openChat') === 'true';
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If the openChat parameter is true, we would trigger the chatbot to open
    // This depends on the implementation of the Chatbot component
    if (openChat) {
      // This is a placeholder - the actual implementation would depend on
      // how the Chatbot component is designed to be opened
      console.log('Chat should be opened');
      // For example, you might dispatch an event or set a state in a global store
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
