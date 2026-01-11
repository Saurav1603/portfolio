import { motion } from 'framer-motion';
import { Gauge, Zap, Shield, Search, TrendingUp } from 'lucide-react';

const getScoreColor = (score) => {
  if (score >= 90) return 'text-green-500';
  if (score >= 70) return 'text-orange-500';
  return 'text-red-500';
};

const CircularProgress = ({ score, label, icon: Icon }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={getScoreColor(score)}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xl font-bold ${getScoreColor(score)}`}>{score}</span>
        </div>
      </div>
      <div className="flex items-center space-x-1 mt-2">
        {Icon && <Icon size={16} className={getScoreColor(score)} />}
        <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
      </div>
    </div>
  );
};

const PerformanceMetrics = ({ 
  lighthouse = { performance: 94, accessibility: 97, bestPractices: 95, seo: 100 },
  bundleSize = '145 KB',
  loadTime = '1.2s',
  webVitals = { lcp: '1.8s', fid: '12ms', cls: '0.05' },
  compact = false,
}) => {
  if (compact) {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <Gauge size={16} className="text-green-500" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {lighthouse.performance}
          </span>
        </div>
        <span className="text-gray-400">•</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{bundleSize}</span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
        <TrendingUp size={24} className="text-blue-600 dark:text-blue-400" />
        <span>Performance Metrics</span>
      </h3>

      {/* Lighthouse Scores */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Lighthouse Scores</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CircularProgress score={lighthouse.performance} label="Performance" icon={Zap} />
          <CircularProgress score={lighthouse.accessibility} label="Accessibility" icon={Shield} />
          <CircularProgress score={lighthouse.bestPractices} label="Best Practices" icon={Gauge} />
          <CircularProgress score={lighthouse.seo} label="SEO" icon={Search} />
        </div>
      </div>

      {/* Bundle Size & Load Time */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Bundle Size</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{bundleSize}</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Load Time</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{loadTime}</p>
        </div>
      </div>

      {/* Web Vitals */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Web Vitals</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <span className="text-sm text-gray-700 dark:text-gray-300">LCP</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{webVitals.lcp}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <span className="text-sm text-gray-700 dark:text-gray-300">FID</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{webVitals.fid}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <span className="text-sm text-gray-700 dark:text-gray-300">CLS</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{webVitals.cls}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
