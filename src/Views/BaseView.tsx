import { Stack } from "@mui/material";
import { useContext } from "react";
import { Sidebar } from "../components";
import { AppContext } from "../Providers/contexts";
import Home from "./Home";
import User from "./User";
import UserProfile from "./UserProfile";
import Workflow from "./Workflow";
import IncomingMessages from "./IncomingMessages";
import SentMessages from "./SentMessages";
import { Settings } from "@mui/icons-material";

const BaseView = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("BaseView must be used within AppProvider");
  }

  const { currentView } = appContext;

  const renderView = () => {
    switch (currentView) {
      case "Home":
        return <Home />;
      case "User":
        return <User />;
      case "UserProfile":
        return <UserProfile />;
      case "Workflow":
        return <Workflow />;
      case "IncomingMessages":
        return <IncomingMessages />;
      case "SentMessages":
        return <SentMessages />;
      case "Messages":
        return <IncomingMessages />;
      case "Settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      <Sidebar />
      <Stack sx={{ flex: 1, p: 2 }}>{renderView()}</Stack>
    </Stack>
  );
};

export default BaseView;
