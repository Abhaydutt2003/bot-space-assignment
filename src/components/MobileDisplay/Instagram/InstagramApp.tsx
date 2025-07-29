import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Navbar from "./Navbar";
import Body from "./Body";
import Comments from "./Comments";
import { MobileContext } from "../../../Providers/contexts";
import { useContext } from "react";
import DM from "./DM";

const InstagramApp = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }
  const { currentMobileView } = mobileContext;
  return (
    <>
      {mobileContext.currentMobileView === "Chat" ? (
        <DM />
      ) : (
        <>
          <Box
            width={"100%"}
            flexGrow={1}
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            marginY={1}
            sx={{
              color: "background.default",
              position: "relative",
            }}
            gap={2}
            position={"relative"}
          >
            <Navbar />
            <Body />
            <NavigationBar />
            {currentMobileView === "Comment" && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    zIndex: 10,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 20,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Comments />
                </Box>
              </>
            )}
          </Box>
          <Box>
            <Box
              sx={{
                width: 100,
                height: 4,
                bgcolor: "background.default",
                borderRadius: 3,
              }}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default InstagramApp;
