import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  isGetStartedModalOpen: boolean;
  openGetStartedModal: () => void;
  closeGetStartedModal: () => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  isGetStartedModalOpen: false,
  openGetStartedModal: () => {},
  closeGetStartedModal: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const openGetStartedModal = () => {
    setIsGetStartedModalOpen(true);
  };

  const closeGetStartedModal = () => {
    setIsGetStartedModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        isGetStartedModalOpen,
        openGetStartedModal,
        closeGetStartedModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};