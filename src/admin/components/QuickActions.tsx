import React from 'react';
import {
  Plus,
  UserPlus,
  FileText,
  Settings,
  Download,
  Upload,
} from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Plus,
      label: 'New Project',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: UserPlus,
      label: 'Add User',
      color: 'bg-green-600 hover:hover:bg-green-700',
    },
    {
      icon: FileText,
      label: 'Generate Report',
      color: 'bg-purple-600 hover:hover:bg-purple-700',
    },
    {
      icon: Download,
      label: 'Export Data',
      color: 'bg-orange-600 hover:hover:bg-orange-700',
    },
    {
      icon: Upload,
      label: 'Import Data',
      color: 'bg-teal-600 hover:hover:bg-teal-700',
    },
    {
      icon: Settings,
      label: 'Settings',
      color: 'bg-gray-600 hover:hover:bg-gray-700',
    },
  ];

  return (
    <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>
        Quick Actions
      </h3>
      <div className='grid grid-cols-2 gap-3'>
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-colors ${action.color}`}
            >
              <Icon size={18} />
              <span className='text-sm font-medium'>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
