import { Stack } from "@mui/material";
import { lazy, Suspense, useContext } from "react";
import { Sidebar } from "../components";
import { AppContext } from "../Providers/contexts";
const Home = lazy(() => import("./Home"));
const User = lazy(() => import("./User"));
const UserProfile = lazy(() => import("./UserProfile"));
const Workflow = lazy(() => import("./Workflow"));
const IncomingMessages = lazy(() => import("./IncomingMessages"));
const SentMessages = lazy(() => import("./SentMessages"));
const Settings = lazy(() => import("./Settings"));

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
      <Suspense fallback={<>Loading...</>}>{renderView()}</Suspense>
    </Stack>
  );
};

export default BaseView;
