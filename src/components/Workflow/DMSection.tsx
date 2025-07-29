import { Box, Button, Switch, TextField, Typography } from "@mui/material";
import { MobileContext } from "../../Providers/contexts";
import { useContext } from "react";

const DMSection = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) return <></>;
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
          defaultValue={mobileContext.openingDM}
          id="outlined-basic"
          label=""
          variant="outlined"
          size="small"
          fullWidth
          multiline
          minRows={2}
          maxRows={6}
          sx={{ bgcolor: "background.paper" }}
          onChange={(e) => mobileContext.setOpeningDM(e.target.value)}
        />
        <TextField
          defaultValue={mobileContext.openingDmLink}
          label=""
          variant="outlined"
          size="small"
          fullWidth
          sx={{ bgcolor: "background.paper" }}
          onChange={(e) => mobileContext.setOpeningDmLink(e.target.value)}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        sx={{ bgcolor: "background.default" }}
        px={0.6}
        py={1.5}
        alignItems="start"
        gap={0.6}
        borderRadius={2}
      >
        a DM with a link
        {mobileContext.dms.map((dm, index) => {
          return (
            <TextField
              id={`dm-${index}`}
              label=""
              variant="outlined"
              size="small"
              fullWidth
              multiline
              minRows={2}
              maxRows={6}
              sx={{ bgcolor: "background.paper" }}
              defaultValue={dm}
              onChange={(e) => mobileContext.setDm(e.target.value, index)}
            />
          );
        })}
        <Button
          variant="outlined"
          onClick={() => {
            mobileContext.addDm("Link");
          }}
          fullWidth
          startIcon={<>+</>}
        >
          Add A Link
        </Button>
      </Box>
    </Box>
  );
};

export default DMSection;
