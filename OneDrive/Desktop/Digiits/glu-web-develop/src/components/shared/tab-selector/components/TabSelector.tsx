import { TabSelectorProps, TabItem } from '../interfaces/TabSelectorInterfaces';

const TabSelector = ({ tabs, activeTab, setActiveTab }: TabSelectorProps) => (
  <div className="flex border-b border-gray-200 mb-4">
    {tabs.map((tab: TabItem) => (
      <button
        key={tab.key}
        className={`flex-1 py-2 text-center relative ${
          activeTab === tab.key ? 'border-b-2 border-custom-blue text-custom-blue' : 'text-gray-500'
        }`}
        onClick={() => setActiveTab(tab.key)}
      >
        {tab.label}
        {tab.count !== undefined && (
          <span className="absolute top-1/2 -translate-y-1/2 ml-1 inline-flex items-center justify-center bg-custom-red text-white text-xs rounded-full w-5 h-5">
            {tab.count}
          </span>
        )}
      </button>
    ))}
  </div>
);

export default TabSelector;