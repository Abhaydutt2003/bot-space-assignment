import { useState, type ReactNode } from "react";
import { MobileContext, type MobileViews } from "./contexts";

interface MobileProviderProps {
  children: ReactNode;
}

//this state management can be much better( eg -> normalization, useReducer etc), but this was built in a hurry
const MobileProvider = ({ children }: MobileProviderProps) => {
  const [currentMobileView, setCurrentMobileView] =
    useState<MobileViews>("Post");

  const [currentPostId, setCurrentPostId] = useState<number>(1);
  const [currentComment, setCurrentComment] = useState<string>("Price");
  const [openingDM, setOpeningDM] = useState<string>(
    "Hey there! I'm so happy you're here , thanks so much for your interest😊 Click below and I'll send you the link in just a sec ✨"
  );
  const [openingDmLink, setOpeningDmLink] =
    useState<string>("Send me the Link");
  const [dms, setDms] = useState<string[]>(["Link"]);

  const value = {
    currentMobileView,
    setCurrentMobileView,
    currentPostId,
    currentComment,
    openingDM,
    setOpeningDM,
    openingDmLink,
    dms,
    addDm: (newDm: string) => setDms((prev) => [...prev, newDm]),
    setDm: (newDm: string, index: number) =>
      setDms((prev) => {
        const newDms = [...prev];
        newDms[index] = newDm;
        return newDms;
      }),
    setOpeningDmLink,
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
