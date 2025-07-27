import { useState } from "react";

export type MobileDisplays = "Chat" | "Comment" | "Post";

const useMobileContextHook = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(1);
  const [selectedDisplay, setSelectedDisplay] =
    useState<MobileDisplays>("Post");
  return {
    selectedPostId,
    selectedDisplay,
    setSelectedDisplay,
    setSelectedPostId,
  };
};
export default useMobileContextHook;
