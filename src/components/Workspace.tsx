import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface WorkspaceProps {
  children?: ReactNode;
}

const Workspace = ({ children }: WorkspaceProps) => {
  return (
    <Box
      width="30%"
      sx={{ bgcolor: "background.paper" }}
      boxSizing="border-box"
      padding="1rem"
    >
      {children}
    </Box>
  );
};
export default Workspace;
