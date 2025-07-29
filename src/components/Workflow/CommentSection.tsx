import { Box, Button, Radio, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react"; // Import useState
import { MobileContext } from "../../Providers/contexts";

const exampleComments = ["Price", "Link", "Shop"];

const CommentSection = () => {
  const [selectedValue, setSelectedValue] = useState<string>("specific");

  const mobileContext = useContext(MobileContext);
  if (!mobileContext) return null;

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    mobileContext.setCurrentComment(e.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === "any") {
      mobileContext.setCurrentComment("any word");
    } else {
      mobileContext.setCurrentComment("Price");
    }
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
        padding={"0.6rem"}
        alignItems="start"
        gap={0.6}
        borderRadius={2}
      >
        {/* Radio Option: a specific word or words */}
        <Box display="flex" alignItems="center" gap={0.6}>
          <Radio
            name="comment-type"
            sx={{ p: 0 }}
            value="specific"
            checked={selectedValue === "specific"}
            onChange={handleRadioChange}
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
          // Disable TextField if "any word" is selected
          disabled={selectedValue === "any"}
        />

        <Typography sx={{ color: "grey.600" }} fontSize="small">
          Use commas to separate words
        </Typography>

        <Box display="flex" gap={1} alignItems="center">
          <Typography sx={{ color: "grey.600" }}>For example:</Typography>
          {exampleComments.map((comment) => (
            <Button
              key={comment}
              variant="outlined"
              size="small"
              onClick={() => {
                mobileContext.setCurrentComment(comment);
                setSelectedValue("specific");
              }}
              sx={{ maxWidth: 0, borderRadius: "999px" }}
              disabled={selectedValue === "any"}
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
        alignItems="start"
        gap={0.6}
        borderRadius={2}
        padding={"0.6rem"}
      >
        {/* Radio Option: any word */}
        <Box display="flex" alignItems="center" gap={0.6}>
          <Radio
            value="any"
            name="comment-type"
            sx={{ p: 0 }}
            checked={selectedValue === "any"}
            onChange={handleRadioChange}
          />
          <Typography>any word</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentSection;
