import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { MobileContext } from "../../../Providers/contexts";

const Comments = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }
  return (
    <Box
      position={"absolute"}
      bgcolor={"#323232"}
      bottom={"-25px"}
      width={"100%"}
      height={"70%"}
      borderRadius={"20px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      boxSizing={"border-box"}
      paddingBottom={"3px"}
      paddingTop={"10px"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
        width={"100%"}
        position={"relative"}
      >
        <Box position={"absolute"} right={15} top={15}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.32435 5.09454C1.64037 4.33808 2.10065 3 3.2445 3L21 3C21.3548 3 21.6831 3.18803 21.8626 3.49409C22.0421 3.80016 22.0459 4.17843 21.8728 4.48811L12.9951 20.3621C12.4461 21.3437 11.0257 21.1444 10.7185 20.1049L8.20479 11.5981L2.32435 5.09454ZM10.2783 11.5575L12.1276 17.8158L18.304 6.77187L10.2783 11.5575ZM17.3704 5L4.93521 5L9.29121 9.81757L17.3704 5Z"
              fill="white"
            />
          </svg>
        </Box>

        <Box
          sx={{
            width: 40,
            height: 5,
            bgcolor: "grey.400",
            borderRadius: 3,
          }}
        />
        <Typography fontSize={"small"} fontWeight={"bold"}>
          Comments
        </Typography>
        <Divider sx={{ bgcolor: "grey.700", width: "100%" }} />
        <Box
          width={"100%"}
          paddingX={"0.6rem"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={1}>
            <Avatar alt="Remy Sharp" src="/insta-default.jpg" />
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} flexDirection={"column"}>
                <Box display={"flex"} gap={1}>
                  <Typography fontSize={"small"} fontWeight={"bold"}>
                    Username{" "}
                  </Typography>
                  <Typography
                    fontSize={"small"}
                    sx={{
                      color: "grey.600",
                    }}
                  >
                    Now
                  </Typography>
                </Box>
                <Typography fontSize={"small"}>
                  {mobileContext.currentComment}
                </Typography>
              </Box>
              <Typography
                fontSize={"small"}
                sx={{
                  color: "grey.600",
                }}
              >
                Reply
              </Typography>
            </Box>
          </Box>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9513 21.0026C11.6913 21.0026 11.4313 20.9426 11.2113 20.7726C8.55131 18.8326 5.78131 16.6926 3.73131 13.7526C3.01131 12.7126 2.04131 11.1026 2.00131 9.06261C1.95131 6.61261 3.34131 4.36261 5.46131 3.44261C7.59131 2.52261 10.1213 3.06261 11.9113 4.82261L11.9913 4.90261C12.0713 4.82261 12.1513 4.74261 12.2313 4.67261C14.2313 2.85261 17.0213 2.49261 19.1513 3.77261C21.3613 5.10261 22.4413 7.84261 21.8013 10.4526C21.2313 12.7426 19.8313 14.4826 18.5313 15.8926C16.7513 17.8126 14.6713 19.4126 12.8713 20.7226C12.6513 20.8826 12.3013 21.0126 11.9413 21.0126L11.9513 21.0026ZM7.62131 5.00261C7.15131 5.00261 6.69131 5.09261 6.26131 5.28261C4.88131 5.88261 3.97131 7.38261 4.00131 9.02261C4.02131 10.1726 4.45131 11.2826 5.37131 12.6126C7.14131 15.1626 9.60131 17.1126 12.0013 18.8826C13.7213 17.6226 15.5113 16.2226 17.0713 14.5326C18.2513 13.2526 19.4113 11.8126 19.8713 9.97261C20.3113 8.21261 19.5913 6.37261 18.1313 5.49261C16.7413 4.65261 14.9513 4.91261 13.5813 6.16261C13.3913 6.33261 13.2113 6.53261 13.0413 6.72261L12.0513 7.76261L10.5113 6.26261C9.68131 5.45261 8.63131 5.01261 7.61131 5.01261L7.62131 5.00261Z"
              fill="white"
            />
          </svg>
        </Box>
      </Box>
      <Stack
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        padding={"0.6rem"}
      >
        <Stack
          direction={"row"}
          spacing={1}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <span>❤️</span>
          <span>🙌</span>
          <span>🔥</span>
          <span>👏</span>
          <span>😢</span>
          <span>😍</span>
          <span>😮</span>
          <span>🤣</span>
        </Stack>
        <Box
          display={"flex"}
          paddingY={"0.6rem"}
          width={"100%"}
          gap={1}
          alignItems={"center"}
        >
          <img
            src={"/botspace_logo.jpg"}
            alt="BotSpace Logo"
            style={{ width: 30, height: 30, borderRadius: "50%" }}
          />
          <Box
            flexGrow={1}
            display={"flex"}
            paddingY={"0.6rem"}
            fontSize={"x-small"}
            fontWeight={"bold"}
            sx={{
              color: "grey.700",
              border: "1px solid",
              borderColor: "grey.700",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            Add a comment for username...
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            width: 100,
            height: 4.5,
            bgcolor: "background.default",
            borderRadius: 3,
          }}
        />
      </Stack>
    </Box>
  );
};

export default Comments;
