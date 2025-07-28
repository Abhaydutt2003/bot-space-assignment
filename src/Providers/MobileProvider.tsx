import { useState, type ReactNode } from "react";
import { MobileContext, type MobileViews } from "./contexts";

interface MobileProviderProps {
  children: ReactNode;
}

const MobileProvider = ({ children }: MobileProviderProps) => {
  const [currentMobileView, setCurrentMobileView] =
    useState<MobileViews>("Post");
  const value = { currentMobileView, setCurrentMobileView };
  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};

export default MobileProvider;
