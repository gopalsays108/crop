import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      farmers: 'Farmers',
      crops: 'Crops',
      notifications: 'Notifications',
      settings: 'Settings',
      logout: 'Logout',
      
      // Dashboard
      totalFarmers: 'Total Farmers',
      activeCrops: 'Active Crops',
      highRiskCrops: 'High Risk Crops',
      pendingAssessments: 'Pending Assessments',
      recentActivity: 'Recent Activity',
      weatherAlerts: 'Weather Alerts',
      
      // Farmer Management
      registerFarmer: 'Register Farmer',
      farmerName: 'Farmer Name',
      phoneNumber: 'Phone Number',
      email: 'Email',
      address: 'Address',
      village: 'Village',
      district: 'District',
      state: 'State',
      
      // Land Management
      addLand: 'Add Land',
      landArea: 'Land Area (Acres)',
      soilType: 'Soil Type',
      irrigationType: 'Irrigation Type',
      surveyNumber: 'Survey Number',
      coordinates: 'Coordinates',
      
      // Crop Management
      addCrop: 'Add Crop',
      cropType: 'Crop Type',
      variety: 'Variety',
      sowingDate: 'Sowing Date',
      harvestDate: 'Expected Harvest Date',
      estimatedYield: 'Estimated Yield (Quintals)',
      currentStage: 'Current Stage',
      
      // Risk Assessment
      riskAssessment: 'Risk Assessment',
      weatherRisk: 'Weather Risk',
      pestRisk: 'Pest Risk',
      diseaseRisk: 'Disease Risk',
      overallRisk: 'Overall Risk',
      recommendations: 'Recommendations',
      
      // Common
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      export: 'Export',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      critical: 'Critical',
    }
  },
  hi: {
    translation: {
      // Navigation
      dashboard: 'डैशबोर्ड',
      farmers: 'किसान',
      crops: 'फसलें',
      notifications: 'सूचनाएं',
      settings: 'सेटिंग्स',
      logout: 'लॉगआउट',
      
      // Dashboard
      totalFarmers: 'कुल किसान',
      activeCrops: 'सक्रिय फसलें',
      highRiskCrops: 'उच्च जोखिम फसलें',
      pendingAssessments: 'लंबित मूल्यांकन',
      recentActivity: 'हाल की गतिविधि',
      weatherAlerts: 'मौसम चेतावनी',
      
      // Farmer Management
      registerFarmer: 'किसान पंजीकरण',
      farmerName: 'किसान का नाम',
      phoneNumber: 'फोन नंबर',
      email: 'ईमेल',
      address: 'पता',
      village: 'गांव',
      district: 'जिला',
      state: 'राज्य',
      
      // Land Management
      addLand: 'भूमि जोड़ें',
      landArea: 'भूमि क्षेत्र (एकड़)',
      soilType: 'मिट्टी का प्रकार',
      irrigationType: 'सिंचाई का प्रकार',
      surveyNumber: 'सर्वे नंबर',
      coordinates: 'निर्देशांक',
      
      // Crop Management
      addCrop: 'फसल जोड़ें',
      cropType: 'फसल का प्रकार',
      variety: 'किस्म',
      sowingDate: 'बुआई की तारीख',
      harvestDate: 'अपेक्षित कटाई की तारीख',
      estimatedYield: 'अनुमानित उपज (क्विंटल)',
      currentStage: 'वर्तमान चरण',
      
      // Risk Assessment
      riskAssessment: 'जोखिम मूल्यांकन',
      weatherRisk: 'मौसम जोखिम',
      pestRisk: 'कीट जोखिम',
      diseaseRisk: 'रोग जोखिम',
      overallRisk: 'समग्र जोखिम',
      recommendations: 'सिफारिशें',
      
      // Common
      save: 'सेव करें',
      cancel: 'रद्द करें',
      edit: 'संपादित करें',
      delete: 'हटाएं',
      view: 'देखें',
      search: 'खोजें',
      filter: 'फिल्टर',
      export: 'निर्यात',
      low: 'कम',
      medium: 'मध्यम',
      high: 'उच्च',
      critical: 'गंभीर',
    }
  },
  bn: {
    translation: {
      // Navigation
      dashboard: 'ড্যাশবোর্ড',
      farmers: 'কৃষক',
      crops: 'ফসল',
      notifications: 'বিজ্ঞপ্তি',
      settings: 'সেটিংস',
      logout: 'লগআউট',
      
      // Dashboard
      totalFarmers: 'মোট কৃষক',
      activeCrops: 'সক্রিয় ফসল',
      highRiskCrops: 'উচ্চ ঝুঁকিপূর্ণ ফসল',
      pendingAssessments: 'অমীমাংসিত মূল্যায়ন',
      recentActivity: 'সাম্প্রতিক কার্যকলাপ',
      weatherAlerts: 'আবহাওয়া সতর্কতা',
      
      // Farmer Management
      registerFarmer: 'কৃষক নিবন্ধন',
      farmerName: 'কৃষকের নাম',
      phoneNumber: 'ফোন নম্বর',
      email: 'ইমেইল',
      address: 'ঠিকানা',
      village: 'গ্রাম',
      district: 'জেলা',
      state: 'রাজ্য',
      
      // Land Management
      addLand: 'জমি যোগ করুন',
      landArea: 'জমির এলাকা (একর)',
      soilType: 'মাটির ধরন',
      irrigationType: 'সেচের ধরন',
      surveyNumber: 'সার্ভে নম্বর',
      coordinates: 'স্থানাঙ্ক',
      
      // Crop Management
      addCrop: 'ফসল যোগ করুন',
      cropType: 'ফসলের ধরন',
      variety: 'জাত',
      sowingDate: 'বপনের তারিখ',
      harvestDate: 'প্রত্যাশিত ফসল কাটার তারিখ',
      estimatedYield: 'আনুমানিক ফলন (কুইন্টাল)',
      currentStage: 'বর্তমান পর্যায়',
      
      // Risk Assessment
      riskAssessment: 'ঝুঁকি মূল্যায়ন',
      weatherRisk: 'আবহাওয়া ঝুঁকি',
      pestRisk: 'কীটপতঙ্গের ঝুঁকি',
      diseaseRisk: 'রোগের ঝুঁকি',
      overallRisk: 'সামগ্রিক ঝুঁকি',
      recommendations: 'সুপারিশ',
      
      // Common
      save: 'সংরক্ষণ করুন',
      cancel: 'বাতিল',
      edit: 'সম্পাদনা',
      delete: 'মুছুন',
      view: 'দেখুন',
      search: 'অনুসন্ধান',
      filter: 'ফিল্টার',
      export: 'রপ্তানি',
      low: 'কম',
      medium: 'মাঝারি',
      high: 'উচ্চ',
      critical: 'গুরুতর',
    }
  },
  kn: {
    translation: {
      // Navigation
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      farmers: 'ರೈತರು',
      crops: 'ಬೆಳೆಗಳು',
      notifications: 'ಅಧಿಸೂಚನೆಗಳು',
      settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
      logout: 'ಲಾಗ್‌ಔಟ್',
      
      // Dashboard
      totalFarmers: 'ಒಟ್ಟು ರೈತರು',
      activeCrops: 'ಸಕ್ರಿಯ ಬೆಳೆಗಳು',
      highRiskCrops: 'ಹೆಚ್ಚಿನ ಅಪಾಯದ ಬೆಳೆಗಳು',
      pendingAssessments: 'ಬಾಕಿ ಮೌಲ್ಯಮಾಪನಗಳು',
      recentActivity: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
      weatherAlerts: 'ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು',
      
      // Farmer Management
      registerFarmer: 'ರೈತ ನೋಂದಣಿ',
      farmerName: 'ರೈತನ ಹೆಸರು',
      phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
      email: 'ಇಮೇಲ್',
      address: 'ವಿಳಾಸ',
      village: 'ಗ್ರಾಮ',
      district: 'ಜಿಲ್ಲೆ',
      state: 'ರಾಜ್ಯ',
      
      // Land Management
      addLand: 'ಭೂಮಿ ಸೇರಿಸಿ',
      landArea: 'ಭೂಮಿ ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)',
      soilType: 'ಮಣ್ಣಿನ ಪ್ರಕಾರ',
      irrigationType: 'ನೀರಾವರಿ ಪ್ರಕಾರ',
      surveyNumber: 'ಸರ್ವೆ ಸಂಖ್ಯೆ',
      coordinates: 'ನಿರ್ದೇಶಾಂಕಗಳು',
      
      // Crop Management
      addCrop: 'ಬೆಳೆ ಸೇರಿಸಿ',
      cropType: 'ಬೆಳೆಯ ಪ್ರಕಾರ',
      variety: 'ಪ್ರಭೇದ',
      sowingDate: 'ಬಿತ್ತನೆ ದಿನಾಂಕ',
      harvestDate: 'ನಿರೀಕ್ಷಿತ ಸುಗ್ಗಿ ದಿನಾಂಕ',
      estimatedYield: 'ಅಂದಾಜು ಇಳುವರಿ (ಕ್ವಿಂಟಲ್)',
      currentStage: 'ಪ್ರಸ್ತುತ ಹಂತ',
      
      // Risk Assessment
      riskAssessment: 'ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ',
      weatherRisk: 'ಹವಾಮಾನ ಅಪಾಯ',
      pestRisk: 'ಕೀಟ ಅಪಾಯ',
      diseaseRisk: 'ರೋಗ ಅಪಾಯ',
      overallRisk: 'ಒಟ್ಟಾರೆ ಅಪಾಯ',
      recommendations: 'ಶಿಫಾರಸುಗಳು',
      
      // Common
      save: 'ಉಳಿಸಿ',
      cancel: 'ರದ್ದುಗೊಳಿಸಿ',
      edit: 'ಸಂಪಾದಿಸಿ',
      delete: 'ಅಳಿಸಿ',
      view: 'ವೀಕ್ಷಿಸಿ',
      search: 'ಹುಡುಕಿ',
      filter: 'ಫಿಲ್ಟರ್',
      export: 'ರಫ್ತು',
      low: 'ಕಡಿಮೆ',
      medium: 'ಮಧ್ಯಮ',
      high: 'ಹೆಚ್ಚು',
      critical: 'ಗಂಭೀರ',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;