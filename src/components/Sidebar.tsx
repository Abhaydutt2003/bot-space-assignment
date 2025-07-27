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

import botspaceLogo from "../assets/botspace_logo.jpg";

const iconStyles = {
  color: "grey.600",
  ":hover": {
    color: "primary.main",
  },
  cursor: "pointer",
};

export default function Sidebar() {
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
            src={botspaceLogo}
            alt="BotSpace Logo"
            style={{ width: 30, height: 30 }}
          />
        </Badge>
        <Stack spacing={3} alignItems="center" paddingTop={2}>
          <HomeOutlined sx={iconStyles} />
          <PersonOutlineOutlined sx={iconStyles} />
          <GrainOutlined sx={iconStyles} />
          <Badge color="primary" variant="dot">
            <MessageOutlined sx={iconStyles} />
          </Badge>
          <SendOutlined sx={iconStyles} />
          <SettingsOutlined sx={iconStyles} />
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="center" width="100%">
        <Tooltip title="Profile">
          <Avatar alt="User" src="/avatar.png" sx={{ width: 25, height: 25 }} />
        </Tooltip>
        <HelpOutline sx={iconStyles} />
      </Stack>
    </Box>
  );
}
