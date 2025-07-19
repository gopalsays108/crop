import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Bell,
  AlertTriangle,
  CloudRain,
  Bug,
  Thermometer,
  CheckCircle,
  X,
  Filter,
  Search
} from 'lucide-react';
import { Notification } from '../../types';

const NotificationPanel: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'unread' | 'critical'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'weather',
      title: 'Heavy Rainfall Alert',
      message: 'Heavy rainfall expected in next 24 hours. Protect crops from waterlogging.',
      severity: 'critical',
      farmerId: '1',
      cropId: '1',
      date: '2024-01-25T10:30:00Z',
      read: false
    },
    {
      id: '2',
      type: 'pest',
      title: 'Pest Attack Warning',
      message: 'Brown plant hopper detected in nearby fields. Monitor rice crops closely.',
      severity: 'warning',
      farmerId: '2',
      cropId: '2',
      date: '2024-01-25T08:15:00Z',
      read: false
    },
    {
      id: '3',
      type: 'disease',
      title: 'Fungal Disease Risk',
      message: 'High humidity levels increase risk of fungal diseases in wheat crops.',
      severity: 'warning',
      farmerId: '1',
      cropId: '1',
      date: '2024-01-24T16:45:00Z',
      read: true
    },
    {
      id: '4',
      type: 'harvest',
      title: 'Harvest Reminder',
      message: 'Wheat crop in Plot #234 is ready for harvest within next week.',
      severity: 'info',
      farmerId: '1',
      cropId: '1',
      date: '2024-01-24T14:20:00Z',
      read: true
    },
    {
      id: '5',
      type: 'insurance',
      title: 'Insurance Claim Update',
      message: 'Crop insurance claim for Plot #156 has been approved. Amount: ₹25,000',
      severity: 'info',
      farmerId: '2',
      date: '2024-01-23T11:30:00Z',
      read: false
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'weather': return CloudRain;
      case 'pest': return Bug;
      case 'disease': return Thermometer;
      case 'harvest': return CheckCircle;
      case 'insurance': return Bell;
      default: return Bell;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'warning': return 'border-orange-500 bg-orange-50';
      case 'info': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getSeverityTextColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-700';
      case 'warning': return 'text-orange-700';
      case 'info': return 'text-blue-700';
      default: return 'text-gray-700';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && !notif.read) ||
      (filter === 'critical' && notif.severity === 'critical');
    
    const matchesSearch = notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-gray-900">{t('notifications')}</h2>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setNotifications(notifications.map(notif => ({ ...notif, read: true })));
            }}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Mark all as read
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder={t('search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-green-600 text-white' 
                : 'border border-gray-300 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'unread' 
                ? 'bg-green-600 text-white' 
                : 'border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Unread ({unreadCount})
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'critical' 
                ? 'bg-green-600 text-white' 
                : 'border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Critical
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = getNotificationIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border-l-4 ${getSeverityColor(notification.severity)} ${
                  !notification.read ? 'shadow-md' : 'shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className={`p-2 rounded-lg ${
                      notification.severity === 'critical' ? 'bg-red-100' :
                      notification.severity === 'warning' ? 'bg-orange-100' : 'bg-blue-100'
                    }`}>
                      <Icon className={`h-5 w-5 ${getSeverityTextColor(notification.severity)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className={`font-semibold ${getSeverityTextColor(notification.severity)}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{new Date(notification.date).toLocaleString()}</span>
                        {notification.farmerId && (
                          <span>Farmer ID: {notification.farmerId}</span>
                        )}
                        {notification.cropId && (
                          <span>Crop ID: {notification.cropId}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Critical Alerts</p>
              <p className="text-xl font-bold text-gray-900">
                {notifications.filter(n => n.severity === 'critical').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <CloudRain className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Weather Alerts</p>
              <p className="text-xl font-bold text-gray-900">
                {notifications.filter(n => n.type === 'weather').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Bug className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pest Alerts</p>
              <p className="text-xl font-bold text-gray-900">
                {notifications.filter(n => n.type === 'pest').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Notifications</p>
              <p className="text-xl font-bold text-gray-900">{notifications.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;