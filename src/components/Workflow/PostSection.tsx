import posts from "../../data";
import { useContext, useState } from "react";
import { MobileContext } from "../../Providers/contexts";
import { Box, Radio, Typography } from "@mui/material";

const SpecificPostSelector = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }
  const { setCurrentPostId, currentPostId } = mobileContext;
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      sx={{ bgcolor: "background.default" }}
      padding="0.6rem"
      alignItems="start"
      gap={"0.6rem"}
      borderRadius={"8px"}
    >
      <Box display="flex" alignItems="center" gap="0.6rem">
        <Radio
          value="a"
          name="radio-buttons"
          sx={{
            padding: "0",
          }}
          checked={true}
        />
        <Typography>a specific post or reel </Typography>
      </Box>
      <Box display="flex" flexWrap={"wrap"} gap="0.5rem">
        {posts.map((p, index) => {
          if (!showAll && index > 3) return;
          return (
            <Box
              onClick={() => setCurrentPostId(p.id)}
              key={p.id}
              sx={{
                width: 80,
                height: 100,
                overflow: "hidden",
                borderRadius: "5px",
                border: currentPostId === p.id ? "3px solid" : "none",
                borderColor:
                  currentPostId === p.id ? "primary.main" : "transparent",
                "& img": {
                  transition: "transform 0.3s ease",
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                cursor: "pointer",
              }}
            >
              <img
                src={p.image}
                style={{
                  transition: "transform 0.3s ease",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          );
        })}
      </Box>
      {!showAll && posts.length > 3 && (
        <Typography
          color="primary"
          margin={"0.2rem"}
          sx={{ cursor: "pointer" }}
          onClick={() => setShowAll(true)}
        >
          Show all
        </Typography>
      )}
    </Box>
  );
};

const PostSection = () => {
  return (
    <>
      <Typography variant="h6" fontWeight="bold">
        When someone comments on
      </Typography>
      <SpecificPostSelector />
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{ bgcolor: "background.default" }}
        padding="0.6rem"
        alignItems="center"
        justifyContent={"space-between"}
        gap={"0.6rem"}
        borderRadius={"8px"}
      >
        <Box display="flex" alignItems="center" gap="0.6rem">
          <Radio
            value="a"
            name="radio-buttons"
            disabled
            sx={{
              padding: "0",
            }}
          />
          <Typography>any post or reel </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "background.default",
            fontSize: "0.6rem",
            paddingX: "3px",
            borderRadius: "3px",
          }}
        >
          PRO
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{ bgcolor: "background.default" }}
        padding="0.6rem"
        alignItems="center"
        justifyContent={"space-between"}
        gap={"0.6rem"}
        borderRadius={"8px"}
      >
        <Box display="flex" alignItems="center" gap="0.6rem">
          <Radio
            value="a"
            name="radio-buttons"
            sx={{
              padding: "0",
            }}
            disabled
          />
          <Typography>next post or reel </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "background.default",
            fontSize: "0.6rem",
            paddingX: "3px",
            borderRadius: "3px",
          }}
        >
          PRO
        </Box>
      </Box>
    </>
  );
};

export default PostSection;
