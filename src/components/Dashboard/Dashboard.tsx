import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Overview from './Overview';
import FarmerManagement from './FarmerManagement';
import CropManagement from './CropManagement';
import NotificationPanel from './NotificationPanel';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'farmers':
        return <FarmerManagement />;
      case 'crops':
        return <CropManagement />;
      case 'notifications':
        return <NotificationPanel />;
      case 'settings':
        return (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      default:
        return <Overview />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;