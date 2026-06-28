'use client';
import { createContext, useContext, useMemo, useState } from 'react';

type SidebarContextValue = {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const value = useMemo(
    () => ({
      selectedTag,
      setSelectedTag,
      isMobileSidebarOpen,
      toggleMobileSidebar: () => setMobileSidebarOpen((prev) => !prev),
      closeMobileSidebar: () => setMobileSidebarOpen(false),
    }),
    [selectedTag, isMobileSidebarOpen]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
}
