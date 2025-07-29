import { Button, Stack } from "@mui/material";
import PostSection from "./PostSection";
import { MobileContext } from "../../Providers/contexts";
import { useContext } from "react";
import CommentSection from "./CommentSection";
import DMSection from "./DMSection";

const WorkflowCreator = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }
  const { currentMobileView, setCurrentMobileView } = mobileContext;
  return (
    <Stack display={"flex"} flexDirection={"column"} gap={"8px"}>
      <PostSection />
      {currentMobileView === "Post" && (
        <Button
          variant="outlined"
          size="small"
          sx={{
            maxWidth: "0px",
          }}
          onClick={() => setCurrentMobileView("Comment")}
        >
          Next
        </Button>
      )}

      {(currentMobileView === "Comment" || currentMobileView === "Chat") && (
        <CommentSection />
      )}
      {currentMobileView === "Comment" && (
        <Button
          variant="outlined"
          size="small"
          sx={{
            maxWidth: "0px",
          }}
          onClick={() => setCurrentMobileView("Chat")}
        >
          Next
        </Button>
      )}
      {currentMobileView === "Chat" && <DMSection />}
    </Stack>
  );
};

export default WorkflowCreator;
