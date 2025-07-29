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

//Mobile context
type MobileViews = "Chat" | "Comment" | "Post";

interface MobileContextType {
  currentMobileView: MobileViews;
  setCurrentMobileView: (mobileView: MobileViews) => void;
  currentPostId: number;
  currentComment: string;
  openingDM: string;
  openingDmLink: string;
  dms: string[];
  setDm: (newDm: string, index: number) => void;
  addDm: (newDm: string) => void;
  setOpeningDmLink: (openingDmLink: string) => void;
  setOpeningDM: (newOpeningDm: string) => void;
  setCurrentPostId: (newPostId: number) => void;
  setCurrentComment: (newComment: string) => void;
}

export const MobileContext = createContext<MobileContextType | undefined>(
  undefined
);
export type { MobileViews, MobileContextType };
