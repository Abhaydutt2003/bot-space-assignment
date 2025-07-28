import { useContext } from "react";
import { MobileContext } from "../../../Providers/contexts";
import posts from "../../../data";
import { Box, Typography } from "@mui/material";

const PostOwner = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingX={"0.6rem"}
      marginBottom={"0.3rem"}
    >
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <img
          src={"/botspace_logo.jpg"}
          alt="BotSpace Logo"
          style={{ width: 25, height: 25, borderRadius: "50%" }}
        />
        <Typography sx={{ fontSize: "0.6rem" }} fontWeight={"bold"}>
          botspacehq
        </Typography>
      </Box>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13.5C7.82843 13.5 8.5 12.8284 8.5 12C8.5 11.1716 7.82843 10.5 7 10.5C6.17157 10.5 5.5 11.1716 5.5 12C5.5 12.8284 6.17157 13.5 7 13.5Z"
          fill="white"
        />
        <path
          d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
          fill="white"
        />
        <path
          d="M18.5 12C18.5 12.8284 17.8284 13.5 17 13.5C16.1716 13.5 15.5 12.8284 15.5 12C15.5 11.1716 16.1716 10.5 17 10.5C17.8284 10.5 18.5 11.1716 18.5 12Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

const PostActions = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingX={"0.6rem"}
      marginTop={"5px"}
    >
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Box display={"flex"} alignItems={"center"}>
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
          <Typography
            sx={{
              fontSize: "0.6rem",
            }}
          >
            18
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C10.3137 16 11.54 15.6391 12.5886 15.0116C12.8209 14.8726 13.0995 14.8337 13.361 14.9037L15.4741 15.4699L14.9074 13.3548C14.8374 13.0937 14.8762 12.8153 15.0148 12.5833C15.6403 11.5358 16 10.3114 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 10.528 17.6184 11.9694 16.9449 13.2316L17.8543 16.6253C17.9468 16.9704 17.8481 17.3386 17.5955 17.5913C17.3428 17.8439 16.9746 17.9426 16.6295 17.8501L13.2382 16.9414C11.9745 17.6171 10.5307 18 9 18C4.02944 18 0 13.9706 0 9Z"
              fill="white"
            />
          </svg>
          <Typography
            sx={{
              fontSize: "0.6rem",
            }}
          >
            0
          </Typography>
        </Box>

        <svg
          width="16"
          height="16"
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

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 15.1111L19.271 21.1702C19.5605 21.4115 20 21.2056 20 20.8288V2.22217H4V20.8288C4 21.2056 4.43949 21.4115 4.72897 21.1702L12 15.1111ZM6 17.5076L10.7196 13.5746C11.4613 12.9565 12.5387 12.9565 13.2804 13.5746L18 17.5076V4.22217H6V17.5076Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

const Body = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) {
    return <></>;
  }
  const currentPost =
    posts.find((p) => p.id === mobileContext.currentPostId) || posts[0];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      flexGrow={1}
    >
      <PostOwner />
      <Box width="100%" height="250px" overflow="hidden" position="relative">
        <img
          src={currentPost.image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <PostActions />
      <Box
        flexGrow={1}
        paddingX={"0.6rem"}
        maxHeight={"105px"}
        overflow={"hidden"}
        marginTop={"5px"}
      >
        <Typography
          sx={{
            fontSize: "0.6rem",
          }}
        >
          <b>botspacehq</b> {currentPost.postInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default Body;
