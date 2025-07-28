import { createContext } from "react";

type Views =
  | "Home"
  | "User"
  | "UserProfile"
  | "Workflow"
  | "Messages"
  | "IncomingMessages"
  | "SentMessages"
  | "Settings";

interface AppContextType {
  currentView: Views;
  setCurrentView: (view: Views) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
export type { Views, AppContextType };

type MobileViews = "Chat" | "Comment" | "Post";

interface MobileContextType {
  currentMobileView: MobileViews;
  setCurrentMobileView: (mobileView: MobileViews) => void;
}

export const MobileContext = createContext<MobileContextType | undefined>(
  undefined
);
export type { MobileViews, MobileContextType };
