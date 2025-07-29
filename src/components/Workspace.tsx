import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface WorkspaceProps {
  children: ReactNode;
}

const Workspace = ({ children }: WorkspaceProps) => {
  return (
    <Box
      width="30%"
      sx={{
        bgcolor: "background.paper",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      boxSizing="border-box"
      padding="1rem"
      overflow={"scroll"}
    >
      {children}
    </Box>
  );
};
export default Workspace;
