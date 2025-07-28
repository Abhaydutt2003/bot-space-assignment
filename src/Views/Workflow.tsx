import { Box } from "@mui/material";
import { MobileDisplay, WorkflowCreator, Workspace } from "../components";
import MobileProvider from "../Providers/MobileProvider";

const Workflow = () => {
  return (
    <MobileProvider>
      <Workspace>
        <WorkflowCreator />
      </Workspace>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexGrow={1}
      >
        <MobileDisplay />
      </Box>
    </MobileProvider>
  );
};

export default Workflow;
