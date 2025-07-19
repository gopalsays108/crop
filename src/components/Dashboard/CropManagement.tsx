import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Plus,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react';
import { Crop, RiskAssessment } from '../../types';

const CropManagement: React.FC = () => {
  const { t } = useTranslation();
  const [showAddForm, setShowAddForm] = useState(false);
  const [showRiskAssessment, setShowRiskAssessment] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const crops: Crop[] = [
    {
      id: '1',
      farmerId: '1',
      landId: '1',
      cropType: 'Wheat',
      variety: 'HD-2967',
      sowingDate: '2024-01-15',
      expectedHarvestDate: '2024-04-15',
      area: 2.5,
      estimatedYield: 15,
      currentStage: 'Flowering',
      riskLevel: 'medium',
      lastAssessment: '2024-01-25'
    },
    {
      id: '2',
      farmerId: '2',
      landId: '2',
      cropType: 'Rice',
      variety: 'Basmati-1121',
      sowingDate: '2024-01-10',
      expectedHarvestDate: '2024-05-10',
      area: 3.0,
      estimatedYield: 20,
      currentStage: 'Vegetative',
      riskLevel: 'high',
      lastAssessment: '2024-01-24'
    }
  ];

  const [formData, setFormData] = useState({
    farmerId: '',
    landId: '',
    cropType: '',
    variety: '',
    sowingDate: '',
    expectedHarvestDate: '',
    area: '',
    estimatedYield: ''
  });

  const [riskData, setRiskData] = useState({
    weatherRisk: 0,
    pestRisk: 0,
    diseaseRisk: 0,
    recommendations: ''
  });

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return CheckCircle;
      case 'medium': return Clock;
      case 'high': return AlertTriangle;
      default: return Clock;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Crop added:', formData);
    setShowAddForm(false);
    setFormData({
      farmerId: '',
      landId: '',
      cropType: '',
      variety: '',
      sowingDate: '',
      expectedHarvestDate: '',
      area: '',
      estimatedYield: ''
    });
  };

  const handleRiskAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Risk assessment:', riskData);
    setShowRiskAssessment(false);
    setSelectedCrop(null);
    setRiskData({
      weatherRisk: 0,
      pestRisk: 0,
      diseaseRisk: 0,
      recommendations: ''
    });
  };

  const filteredCrops = crops.filter(crop =>
    crop.cropType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.variety.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">{t('crops')}</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          {t('addCrop')}
        </button>
      </div>

      {/* Search and Filter */}
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
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="h-5 w-5 mr-2" />
          {t('filter')}
        </button>
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => {
          const RiskIcon = getRiskIcon(crop.riskLevel);
          return (
            <div key={crop.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">
                      {crop.cropType.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{crop.cropType}</h3>
                    <p className="text-sm text-gray-500">{crop.variety}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(crop.riskLevel)}`}>
                  <RiskIcon className="h-3 w-3 inline mr-1" />
                  {t(crop.riskLevel)}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  Area: {crop.area} acres
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Stage: {crop.currentStage}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Expected: {crop.estimatedYield} quintals
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Last assessed: {new Date(crop.lastAssessment).toLocaleDateString()}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setSelectedCrop(crop);
                        setShowRiskAssessment(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Assess Risk
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Crop Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{t('addCrop')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('cropType')} *
                    </label>
                    <select
                      required
                      value={formData.cropType}
                      onChange={(e) => setFormData({...formData, cropType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select Crop</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Rice">Rice</option>
                      <option value="Maize">Maize</option>
                      <option value="Cotton">Cotton</option>
                      <option value="Sugarcane">Sugarcane</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('variety')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.variety}
                      onChange={(e) => setFormData({...formData, variety: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('sowingDate')} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.sowingDate}
                      onChange={(e) => setFormData({...formData, sowingDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('harvestDate')} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.expectedHarvestDate}
                      onChange={(e) => setFormData({...formData, expectedHarvestDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('landArea')} *
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('estimatedYield')} *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.estimatedYield}
                      onChange={(e) => setFormData({...formData, estimatedYield: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {t('save')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Risk Assessment Modal */}
      {showRiskAssessment && selectedCrop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {t('riskAssessment')} - {selectedCrop.cropType}
              </h3>
              <form onSubmit={handleRiskAssessment} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('weatherRisk')} (0-100)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={riskData.weatherRisk}
                      onChange={(e) => setRiskData({...riskData, weatherRisk: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">
                      {riskData.weatherRisk}%
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('pestRisk')} (0-100)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={riskData.pestRisk}
                      onChange={(e) => setRiskData({...riskData, pestRisk: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">
                      {riskData.pestRisk}%
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('diseaseRisk')} (0-100)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={riskData.diseaseRisk}
                      onChange={(e) => setRiskData({...riskData, diseaseRisk: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">
                      {riskData.diseaseRisk}%
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('recommendations')}
                  </label>
                  <textarea
                    rows={4}
                    value={riskData.recommendations}
                    onChange={(e) => setRiskData({...riskData, recommendations: e.target.value})}
                    placeholder="Enter recommendations for the farmer..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">{t('overallRisk')}</h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          Math.max(riskData.weatherRisk, riskData.pestRisk, riskData.diseaseRisk) > 70
                            ? 'bg-red-500'
                            : Math.max(riskData.weatherRisk, riskData.pestRisk, riskData.diseaseRisk) > 40
                            ? 'bg-orange-500'
                            : 'bg-green-500'
                        }`}
                        style={{
                          width: `${Math.max(riskData.weatherRisk, riskData.pestRisk, riskData.diseaseRisk)}%`
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {Math.max(riskData.weatherRisk, riskData.pestRisk, riskData.diseaseRisk)}%
                    </span>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowRiskAssessment(false);
                      setSelectedCrop(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {t('save')} Assessment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropManagement;