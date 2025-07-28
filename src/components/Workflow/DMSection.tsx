import { Box, Switch, TextField, Typography } from "@mui/material";

const DMSection = () => {
  return (
    <Box
      marginTop="22px"
      display={"flex"}
      flexDirection={"column"}
      gap={"0.6rem"}
    >
      <Typography variant="h6" fontWeight="bold">
        They will get
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        sx={{ bgcolor: "background.default" }}
        p={0.6}
        alignItems="start"
        gap={0.6}
        borderRadius={2}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
        >
          an opening DM
          <Switch defaultChecked />
        </Box>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          size="small"
          fullWidth
          sx={{ bgcolor: "background.paper" }}
        />
      </Box>
    </Box>
  );
};

export default DMSection;
