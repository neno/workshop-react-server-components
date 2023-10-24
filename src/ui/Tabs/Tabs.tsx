'use client'

import { ReactNode, useState, cloneElement } from 'react';
import { clsx } from 'clsx';

interface TabProps {
  name: string;
  count?: number;
  children: ReactNode;
}

interface ITabs {
  children: React.ReactElement<TabProps>[];
  defaultTab?: string;
}

export const Tabs = ({ children, defaultTab }: ITabs) => {
  const [activeTab, setActiveTab] = useState(defaultTab || (children[0]?.props?.name || ''));

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-neutral-800 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {children.map((child, index) => (
            <option key={child.props?.name}>{child.props?.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-neutral-200">
          <ul className="-mb-px flex space-x-8">
            {children.map((child, index) => (
              <li key={child.props?.name}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(child.props?.name);
                  }}
                  className={clsx(
                    child.props?.name === activeTab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-neutral-600 hover:border-neutral-200 hover:text-neutral-200',
                    'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={child.props?.name === activeTab ? 'page' : undefined}
                >
                  {child.props?.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Render tab content */}
      <div className="tab-panels mt-6">
        {children.map((child) => {
          if (child.props?.name === activeTab) {
            return cloneElement(child, { key: child.props?.name });
          }
          return null;
        })}
      </div>
    </>
  );
};
