import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPanel from './components/Auth/LoginPanel';
import './i18n';
import { 
  Sprout, 
  Shield, 
  CloudRain, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Smartphone,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('problem');
  const [showLogin, setShowLogin] = useState(false);

  const handleGetCoverage = () => {
    setShowLogin(true);
  };

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleBackToLanding = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    navigate('/');
  };
  if (showLogin) {
    return <LoginPanel onLogin={handleLogin} onBack={handleBackToLanding} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">CropShield</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problem" className="text-gray-700 hover:text-green-600 transition-colors">Problem</a>
              <a href="#government" className="text-gray-700 hover:text-green-600 transition-colors">Government</a>
              <a href="#solutions" className="text-gray-700 hover:text-green-600 transition-colors">Solutions</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Protecting India's
              <span className="text-green-600 block">Agricultural Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Bridging the gap in crop insurance adoption through technology, education, and accessible solutions for farmers across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={handleGetCoverage}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Coverage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Challenge We Face</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Despite agriculture being the backbone of India's economy, crop insurance adoption remains critically low.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weather Unpredictability</h3>
              <p className="text-gray-600">
                Unusual weather patterns disrupt crop growth, leading to widespread damage across multiple states.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <TrendingDown className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Impact</h3>
              <p className="text-gray-600">
                Farmers face severe financial challenges when expected crop income gets severely impacted by failures.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Low Insurance Adoption</h3>
              <p className="text-gray-600">
                Lack of awareness and accessibility leads to minimal crop insurance coverage among farmers.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">60% of India's population depends on agriculture</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Only 23% of farmers have crop insurance coverage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Agricultural losses due to extreme weather: ₹90,000 crores annually</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">23%</div>
                <p className="text-gray-600">Current Insurance Coverage</p>
                <div className="mt-4 text-4xl font-bold text-blue-600">77%</div>
                <p className="text-gray-600">Farmers Still Unprotected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Initiatives */}
      <section id="government" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Government Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive schemes and measures to support farmers with accessible crop insurance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Pradhan Mantri Fasal Bima Yojana</h3>
              </div>
              <p className="text-gray-600 mb-6">
                The flagship crop insurance scheme aimed at bringing more farmers under protection and helping them recover from crop failures.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Subsidized premium rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Wide crop coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Quick claim settlement</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Involved Ministries</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Ministry of Agriculture and Farmers Welfare</h4>
                  <p className="text-gray-600 text-sm">Primary policy formulation and implementation</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Ministry of Finance</h4>
                  <p className="text-gray-600 text-sm">Financial support and subsidy allocation</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Ministry of Chemicals and Fertilisers</h4>
                  <p className="text-gray-600 text-sm">Input cost management and farmer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technology-driven approaches to make crop insurance accessible, affordable, and effective for all farmers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Self-Help Groups</h3>
              <p className="text-gray-600 text-sm">
                Forming organizations that provide crop insurance at minimal premiums through collective bargaining.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Farmer Education</h3>
              <p className="text-gray-600 text-sm">
                Educational initiatives to spread awareness about crop insurance benefits and application processes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <CloudRain className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Weather Forecasting</h3>
              <p className="text-gray-600 text-sm">
                Advanced weather prediction and remote sensing technology to forecast crop yields accurately.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Assessment</h3>
              <p className="text-gray-600 text-sm">
                AI-powered tools for calculating crop risk coverage and determining fair premium rates.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Impact of Our Solutions</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span>Make agriculture an attractive sector again</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span>Increase farmland output and productivity</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span>Reduce farmer financial distress</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    <span>Strengthen rural economy resilience</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Smartphone className="h-20 w-20 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">Mobile-First Approach</h4>
                <p className="opacity-90">
                  Accessible solutions designed for smartphones to reach farmers in remote areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in revolutionizing crop insurance adoption and protecting India's farming community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">For Farmers</h3>
              <p className="text-gray-600 mb-6">
                Learn about crop insurance options and get connected with trusted providers.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Providers</h3>
              <p className="text-gray-600 mb-6">
                Partner with us to reach more farmers and expand your coverage network.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Partner With Us
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Solutions</h3>
              <p className="text-gray-600 mb-6">
                Collaborate on developing innovative solutions for crop risk assessment.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Collaborate
              </button>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Helpline</p>
                  <p className="text-gray-600">1800-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">support@cropshield.in</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Coverage</p>
                  <p className="text-gray-600">All India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">CropShield</span>
              </div>
              <p className="text-gray-400">
                Protecting India's agricultural future through innovative crop insurance solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Crop Insurance</li>
                <li>Weather Forecasting</li>
                <li>Risk Assessment</li>
                <li>Farmer Education</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Government</h4>
              <ul className="space-y-2 text-gray-400">
                <li>PMFBY Scheme</li>
                <li>Ministry Contacts</li>
                <li>Policy Updates</li>
                <li>Claim Process</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1800-XXX-XXXX</li>
                <li>support@cropshield.in</li>
                <li>New Delhi, India</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CropShield. All rights reserved. Empowering farmers across India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;