import { Box } from "@mui/material";
import InstagramApp from "./Instagram/InstagramApp";
import { useContext } from "react";
import { MobileContext } from "../../Providers/contexts";

const MobileDisplay = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }
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
      <Box>
        <Box
          sx={{
            width: 100,
            height: 4,
            bgcolor: "background.default",
            borderRadius: 3,
          }}
        />
      </Box>
    </Box>
  );
};

export default MobileDisplay;

{
  /* <Box
          height={56}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          borderBottom="1px solid #eee"
        >
          <Box fontWeight="bold" fontSize={24} fontFamily="cursive">
            Instagram
          </Box>
          <Box></Box>
        </Box>

        
        <Box flex={1} overflow="auto" bgcolor="#fafafa">
        </Box>


        <Box
          height={56}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          borderTop="1px solid #eee"
          bgcolor="#fff"
        >

        </Box> */
}
