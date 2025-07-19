import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Users,
  Sprout,
  AlertTriangle,
  Clock,
  TrendingUp,
  CloudRain,
  Bell
} from 'lucide-react';

const Overview: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('totalFarmers'),
      value: '156',
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: t('activeCrops'),
      value: '342',
      icon: Sprout,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: t('highRiskCrops'),
      value: '23',
      icon: AlertTriangle,
      color: 'bg-red-500',
      change: '-5%'
    },
    {
      title: t('pendingAssessments'),
      value: '18',
      icon: Clock,
      color: 'bg-orange-500',
      change: '+3%'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'farmer_registered',
      message: 'New farmer Rajesh Kumar registered',
      time: '2 hours ago',
      icon: Users
    },
    {
      id: 2,
      type: 'risk_assessment',
      message: 'High risk detected for wheat crop in Plot #234',
      time: '4 hours ago',
      icon: AlertTriangle
    },
    {
      id: 3,
      type: 'weather_alert',
      message: 'Heavy rainfall expected in next 48 hours',
      time: '6 hours ago',
      icon: CloudRain
    }
  ];

  const weatherAlerts = [
    {
      id: 1,
      severity: 'high',
      title: 'Heavy Rainfall Warning',
      description: 'Expected 50-80mm rainfall in next 24 hours',
      affectedCrops: 12
    },
    {
      id: 2,
      severity: 'medium',
      title: 'Temperature Drop',
      description: 'Temperature may drop to 8°C affecting winter crops',
      affectedCrops: 8
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">{t('recentActivity')}</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weather Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">{t('weatherAlerts')}</h3>
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {weatherAlerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                alert.severity === 'high' 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-orange-50 border-orange-500'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{alert.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.severity === 'high'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                <p className="text-xs text-gray-500">
                  Affects {alert.affectedCrops} crops
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;