
import React from 'react';
import UserProfile from './UserProfile';
import DashboardStats from './DashboardStats';
import TopicsSection from './TopicsSection';
import FeaturedPapers from './FeaturedPapers';

const DashboardLayout = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <UserProfile />
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <DashboardStats />
          <TopicsSection />
          <FeaturedPapers />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
