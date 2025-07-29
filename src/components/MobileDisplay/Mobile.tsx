import { Box } from "@mui/material";
import InstagramApp from "./Instagram/InstagramApp";

const MobileDisplay = () => {
  return (
    <Box
      width={280}
      height={570}
      borderRadius={10}
      boxShadow={3}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingY={"0.6rem"}
      flexDirection="column"
      position="relative"
      sx={{
        border: "8px solid",
        borderColor: "grey.900",
        bgcolor: "black",
      }}
      overflow={"hidden"}
    >
      <Box
        sx={{
          width: 40,
          height: 6,
          bgcolor: "grey.800",
          borderRadius: 3,
          opacity: 0.5,
        }}
      />
      <InstagramApp />
    </Box>
  );
};

export default MobileDisplay;
