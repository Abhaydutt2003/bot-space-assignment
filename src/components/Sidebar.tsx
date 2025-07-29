import AirlinesOutlinedIcon from "@mui/icons-material/AirlinesOutlined";
import { Box, Stack, Avatar, Tooltip, Badge, Divider } from "@mui/material";
import {
  HomeOutlined,
  PersonOutlineOutlined,
  MessageOutlined,
  SendOutlined,
  SettingsOutlined,
  GrainOutlined,
  HelpOutline,
} from "@mui/icons-material";
import { useContext } from "react";
import { AppContext, type Views } from "../Providers/contexts";

const iconStyles = {
  color: "grey.600",
  ":hover": {
    color: "primary.main",
  },
  cursor: "pointer",
};

export default function Sidebar() {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("Sidebar must be used within AppProvider");
  }

  const { currentView, setCurrentView } = appContext;

  const handleViewChange = (view: string) => {
    setCurrentView(view as Views);
  };

  return (
    <Box
      sx={{
        width: 70,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        width="100%"
        divider={<Divider sx={{ bgcolor: "grey.300", width: "100%" }} />}
      >
        <AirlinesOutlinedIcon sx={{ fontSize: 35 }} />

        <Badge
          badgeContent="FREE"
          color="info"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "8px",
              height: "12px",
              minWidth: "12px",
              padding: "0 4px",
            },
          }}
        >
          <img
            src={"/botspace_logo.jpg"}
            alt="BotSpace Logo"
            style={{ width: 30, height: 30 }}
          />
        </Badge>
        <Stack spacing={3} alignItems="center" paddingTop={2}>
          <HomeOutlined
            sx={{
              ...iconStyles,
              color: currentView === "Home" ? "primary.main" : "grey.600",
            }}
            onClick={() => handleViewChange("Home")}
          />
          <PersonOutlineOutlined
            sx={{
              ...iconStyles,
              color: currentView === "User" ? "primary.main" : "grey.600",
            }}
            onClick={() => handleViewChange("User")}
          />
          <GrainOutlined
            sx={{
              ...iconStyles,
              color: currentView === "Workflow" ? "primary.main" : "grey.600",
            }}
            onClick={() => handleViewChange("Workflow")}
          />
          <Badge color="primary" variant="dot">
            <MessageOutlined
              sx={{
                ...iconStyles,
                color:
                  currentView === "IncomingMessages"
                    ? "primary.main"
                    : "grey.600",
              }}
              onClick={() => handleViewChange("IncomingMessages")}
            />
          </Badge>
          <SendOutlined
            sx={{
              ...iconStyles,
              color:
                currentView === "SentMessages" ? "primary.main" : "grey.600",
            }}
            onClick={() => handleViewChange("SentMessages")}
          />
          <SettingsOutlined
            sx={{
              ...iconStyles,
              color: currentView === "Settings" ? "primary.main" : "grey.600",
            }}
            onClick={() => handleViewChange("Settings")}
          />
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="center" width="100%">
        <Tooltip title="Profile">
          <Avatar
            alt="User"
            src="/avatar.png"
            sx={{
              width: 25,
              height: 25,
              cursor: "pointer",
              ":hover": { opacity: 0.8 },
            }}
            onClick={() => handleViewChange("UserProfile")}
          />
        </Tooltip>
        <HelpOutline sx={iconStyles} />
      </Stack>
    </Box>
  );
}
