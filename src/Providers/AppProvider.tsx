import { useState, type ReactNode } from "react";
import { AppContext, type Views } from "./contexts";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [currentView, setCurrentView] = useState<Views>("Workflow");

  const value = { currentView, setCurrentView };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
