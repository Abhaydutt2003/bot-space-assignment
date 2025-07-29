import { Box, Button, Typography } from "@mui/material";
import { MobileDisplay, WorkflowCreator, Workspace } from "../components";
import MobileProvider from "../Providers/MobileProvider";
import WorkflowControl from "../components/Workflow/WorkflowControl";

const Workflow = () => {
  return (
    <MobileProvider>
      <Workspace>
        <WorkflowCreator />
      </Workspace>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        flexGrow={1}
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          position="absolute"
          top={0}
          left={0}
          right={0}
          zIndex={1}
        >
          <Typography
            sx={{
              color: "grey.700",
            }}
          >
            Preview
          </Typography>
          <Button variant="outlined" size="small">
            Go Live
          </Button>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={2}
        >
          <MobileDisplay />
          <WorkflowControl />
        </Box>
      </Box>
    </MobileProvider>
  );
};

export default Workflow;
