import { useState, type ReactNode } from "react";
import { MobileContext, type MobileViews } from "./contexts";

interface MobileProviderProps {
  children: ReactNode;
}

const MobileProvider = ({ children }: MobileProviderProps) => {
  const [currentMobileView, setCurrentMobileView] =
    useState<MobileViews>("Post");

  const [currentPostId, setCurrentPostId] = useState<number>(1);
  const [currentComment, setCurrentComment] = useState<string>("Price");
  const [openingDM, setOpeningDM] = useState<string>(
    "Hey there! I'm so happy you're here , thanks so much for your interest😊 Click below and I'll send you the link in just a sec ✨"
  );
  const value = {
    currentMobileView,
    setCurrentMobileView,
    currentPostId,
    currentComment,
    openingDM,
    setOpeningDM,
    setCurrentComment: (newComment: string) => {
      setCurrentComment(newComment);
      setCurrentMobileView("Comment");
    },
    setCurrentPostId: (newPostId: number) => {
      setCurrentPostId(newPostId);
      setCurrentMobileView("Post");
    },
  };
  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};

export default MobileProvider;
