import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { MobileContext } from "../../Providers/contexts";

const WorkflowControl = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }

  const { currentMobileView, setCurrentMobileView } = mobileContext;

  const options = [
    { key: "Post", label: "Post" },
    { key: "Comment", label: "Comments" },
    { key: "Chat", label: "DM" },
  ];

  const handleOptionClick = (optionKey: string) => {
    setCurrentMobileView(optionKey as "Post" | "Comment" | "Chat");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        bgcolor: "grey.200",
        borderRadius: "999px",
        padding: 0.5,
        position: "relative",
        width: "fit-content",
        mx: "auto",
      }}
    >
      {options.map((option) => (
        <Box
          key={option.key}
          onClick={() => handleOptionClick(option.key)}
          sx={{
            px: 1,
            py: 0.5,
            borderRadius: "999px",
            cursor: "pointer",
            position: "relative",
            zIndex: 1,
            transition: "all 0.2s ease",
            ...(currentMobileView === option.key && {
              bgcolor: "white",
            }),
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: currentMobileView === option.key ? "grey.800" : "grey.600",
              transition: "color 0.2s ease",
            }}
          >
            {option.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default WorkflowControl;
