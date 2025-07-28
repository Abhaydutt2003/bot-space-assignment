import { Box, Button, Radio, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { MobileContext } from "../../Providers/contexts";

const exampleComments = ["Price", "Link", "Shop"];

const CommentSection = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) return null;

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    mobileContext.setCurrentComment(e.target.value);
  };

  return (
    <Box
      marginTop="22px"
      display={"flex"}
      flexDirection={"column"}
      gap={"0.6rem"}
    >
      <Typography variant="h6" fontWeight="bold">
        And this comment has
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
        {/* Radio Option */}
        <Box display="flex" alignItems="center" gap={0.6}>
          <Radio
            value="a"
            name="radio-buttons"
            sx={{ p: 0 }}
            checked
            readOnly
          />
          <Typography>a specific word or words</Typography>
        </Box>

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          size="small"
          value={mobileContext.currentComment}
          onChange={handleCommentChange}
          fullWidth
          sx={{ bgcolor: "background.paper" }}
        />

        <Typography sx={{ color: "grey.600" }} fontSize="small">
          Use commas to separate words
        </Typography>

        {/* Example Buttons */}
        <Box display="flex" gap={1} alignItems="center">
          <Typography sx={{ color: "grey.600" }}>For example:</Typography>
          {exampleComments.map((comment) => (
            <Button
              key={comment}
              variant="outlined"
              size="small"
              onClick={() => mobileContext.setCurrentComment(comment)}
              sx={{ maxWidth: 0, borderRadius: "999px" }}
            >
              {comment}
            </Button>
          ))}
        </Box>
      </Box>
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
        <Box display="flex" alignItems="center" gap={0.6}>
          <Radio value="a" name="radio-buttons" sx={{ p: 0 }} readOnly />
          <Typography>any word</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentSection;
