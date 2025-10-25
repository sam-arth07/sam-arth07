'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FileText, Home, User, Briefcase, Code, Phone, Menu, X } from 'lucide-react';

interface ExplorerItem {
  id: string;
  label: string;
  type: 'folder' | 'file';
  icon?: any;
  children?: ExplorerItem[];
}

const explorerStructure: ExplorerItem[] = [
  {
    id: 'project',
    label: 'AndroidPortfolio',
    type: 'folder',
    children: [
      {
        id: 'app',
        label: 'app',
        type: 'folder',
        children: [
          {
            id: 'home',
            label: 'Home.kt',
            type: 'file',
            icon: Home,
          },
          {
            id: 'about',
            label: 'AboutMe.kt',
            type: 'file',
            icon: User,
          },
          {
            id: 'experience',
            label: 'Experience.kt',
            type: 'file',
            icon: Briefcase,
          },
          {
            id: 'projects',
            label: 'Projects.kt',
            type: 'file',
            icon: Code,
          },
          {
            id: 'contact',
            label: 'Contact.xml',
            type: 'file',
            icon: Phone,
          },
        ],
      },
    ],
  },
];

interface ExplorerSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function ExplorerSidebar({ activeSection, onSectionChange, isCollapsed, onToggle }: ExplorerSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['project', 'app']));

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const renderItem = (item: ExplorerItem, depth: number = 0) => {
    const isExpanded = expandedFolders.has(item.id);
    const isActive = activeSection === item.id;
    const Icon = item.icon;

    if (item.type === 'folder') {
      return (
        <div key={item.id}>
          <div
            onClick={() => toggleFolder(item.id)}
            className="flex items-center gap-2 px-2 py-1 hover:bg-[#4A4A4A] cursor-pointer text-[#A9B7C6] text-sm"
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-[#787878]" />
            ) : (
              <ChevronRight className="w-4 h-4 text-[#787878]" />
            )}
            <Folder className="w-4 h-4 text-[#3DDC84]" />
            <span className="font-mono">{item.label}</span>
          </div>
          {isExpanded && item.children && (
            <div>
              {item.children.map((child) => renderItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={item.id}
        onClick={() => onSectionChange(item.id)}
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer text-sm transition-colors ${
          isActive
            ? 'bg-[#4E5254] text-[#3DDC84] border-l-2 border-[#3DDC84]'
            : 'text-[#A9B7C6] hover:bg-[#4A4A4A]'
        }`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        <span className="w-4" />
        {Icon && <Icon className="w-4 h-4" />}
        <span className="font-mono">{item.label}</span>
      </div>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${isCollapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
        fixed lg:relative
        w-64 bg-[#3C3F41] border-r border-[#323232] h-full flex flex-col
        transition-transform duration-300 ease-in-out
        z-50 lg:z-auto
      `}>
        {/* Sidebar Header */}
        <div className="bg-[#2B2B2B] border-b border-[#323232] px-3 py-2 flex items-center justify-between">
          <p className="text-[#787878] text-xs font-mono uppercase">Project</p>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 hover:bg-[#4A4A4A] rounded transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4 text-[#787878]" />
          </button>
        </div>

        {/* Explorer Tree */}
        <div className="flex-1 overflow-y-auto">
          {explorerStructure.map((item) => renderItem(item, 0))}
        </div>

        {/* Bottom Info */}
        <div className="bg-[#2B2B2B] border-t border-[#323232] px-3 py-2">
          <p className="text-[#787878] text-xs font-mono">Android Developer Portfolio</p>
        </div>
      </div>
    </>
  );
}
