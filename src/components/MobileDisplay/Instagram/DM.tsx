import { Box, Typography, IconButton } from "@mui/material";
import { useContext } from "react";
import { MobileContext } from "../../../Providers/contexts";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const DM = () => {
  const mobileContext = useContext(MobileContext);
  if (!mobileContext) return <></>;
  return (
    <Box
      width={"100%"}
      flexGrow={1}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        backgroundColor: "black",
        color: "white",
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "0.6rem",
          py: 1,
          borderBottom: "1px solid ",
          borderColor: "grey.900",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29289 11.312C5.90237 11.7025 5.90237 12.3356 6.29289 12.7262C6.32736 12.7606 6.36373 12.7921 6.40165 12.8205C6.42838 12.8554 6.45774 12.889 6.48971 12.921L13.2928 19.726C13.6833 20.1166 14.3164 20.1167 14.707 19.7263C15.0976 19.3358 15.0977 18.7026 14.7072 18.312L8.41512 12.0181L14.9762 5.45711C15.3667 5.06658 15.3667 4.43342 14.9762 4.04289C14.5856 3.65237 13.9525 3.65237 13.562 4.04289L6.29289 11.312Z"
              fill="white"
            />
          </svg>
          <img
            src={"/botspace_logo.jpg"}
            alt="BotSpace Logo"
            style={{ width: 25, height: 25, borderRadius: "50%" }}
          />

          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "0.6rem" }}
          >
            botspacehq
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ color: "white", p: 0.5 }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </IconButton>
          <IconButton sx={{ color: "white", p: 0.5 }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: "0.6rem",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "flex-end",
          }}
        >
          <img
            src={"/botspace_logo.jpg"}
            alt="BotSpace Logo"
            style={{ width: 18, height: 18, borderRadius: "50%" }}
          />
          <Box
            sx={{
              backgroundColor: "grey.900",
              borderRadius: "8px 8px 8px 4px",
              padding: "0.6rem",
              maxWidth: "85%",
            }}
          >
            <Typography
              sx={{
                color: "background.default",
                mb: 1,
                fontSize: "0.65rem",
                fontWeight: "bold",
              }}
            >
              {mobileContext.openingDM}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#444",
                borderRadius: "8px",
                p: "0.3rem",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "background.default",
                  fontSize: "0.65rem",
                  fontWeight: "bold",
                }}
              >
                {mobileContext.openingDmLink}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* User's message */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              backgroundColor: "#8B5CF6",
              borderRadius: "8px 8px 4px 8px",
              p: "0.6rem",
              maxWidth: "70%",
            }}
          >
            <Typography
              sx={{
                color: "background.default",
                fontSize: "0.65rem",
                fontWeight: "bold",
              }}
            >
              {mobileContext.openingDmLink}
            </Typography>
          </Box>
        </Box>
        {mobileContext.dms.map((dm) => {
          return (
            <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
              <img
                src={"/botspace_logo.jpg"}
                alt="BotSpace Logo"
                style={{ width: 18, height: 18, borderRadius: "50%" }}
              />
              <Box
                sx={{
                  backgroundColor: "#333",
                  borderRadius: "8px 8px 8px 4px",
                  p: "0.6rem",
                  maxWidth: "70%",
                }}
              >
                <Typography
                  sx={{
                    color: "background.default",
                    fontSize: "0.65rem",
                    fontWeight: "bold",
                  }}
                >
                  {dm}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          m: "0.6rem",
          bgcolor: "grey.900",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "0.3rem",
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={"0.6rem"}>
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: "#1976d2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CameraAltIcon
              sx={{
                fontSize: "1rem",
                color: "white",
              }}
            />
          </Box>
          <Typography sx={{ color: "grey.500", fontSize: "0.8rem" }}>
            Message...
          </Typography>
        </Box>
        <Box display={"flex"} gap={"8px"}>
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.39646 2H14.6035C15.7056 1.99999 16.5944 1.99998 17.3138 2.05972C18.0547 2.12125 18.7049 2.25126 19.3049 2.56293C20.2181 3.03731 20.9627 3.78191 21.4371 4.69513C21.7487 5.29513 21.8788 5.94535 21.9403 6.68616C22 7.40556 22 8.29444 22 9.39649V14.6035C22 15.7056 22 16.5944 21.9403 17.3138C21.8788 18.0547 21.7487 18.7049 21.4371 19.3049C20.9627 20.2181 20.2181 20.9627 19.3049 21.4371C18.7049 21.7487 18.0547 21.8788 17.3138 21.9403C16.5944 22 15.7056 22 14.6035 22H9.39649C8.29444 22 7.40557 22 6.68616 21.9403C5.94535 21.8788 5.29513 21.7487 4.69513 21.4371C3.78191 20.9627 3.03731 20.2181 2.56293 19.3049C2.25126 18.7049 2.12125 18.0547 2.05972 17.3138C1.99998 16.5944 1.99999 15.7056 2 14.6035V9.39646C1.99999 8.29442 1.99998 7.40556 2.05972 6.68616C2.12125 5.94535 2.25126 5.29513 2.56293 4.69513C3.03731 3.78191 3.78191 3.03731 4.69513 2.56293C5.29513 2.25126 5.94535 2.12125 6.68616 2.05972C7.40556 1.99998 8.29442 1.99999 9.39646 2ZM6.85168 4.05286C6.23678 4.10393 5.88403 4.19909 5.61708 4.33776C5.06915 4.62239 4.62239 5.06915 4.33776 5.61708C4.19909 5.88403 4.10393 6.23678 4.05286 6.85168C4.0008 7.47856 4 8.28423 4 9.44V14.56C4 15.7158 4.0008 16.5214 4.05286 17.1483C4.10393 17.7632 4.19909 18.116 4.33776 18.3829C4.62239 18.9309 5.06915 19.3776 5.61708 19.6622C5.88403 19.8009 6.23678 19.8961 6.85168 19.9471C7.47856 19.9992 8.28423 20 9.44 20H14.56C15.7158 20 16.5214 19.9992 17.1483 19.9471C17.7632 19.8961 18.116 19.8009 18.3829 19.6622C18.9309 19.3776 19.3776 18.9309 19.6622 18.3829C19.8009 18.116 19.8961 17.7632 19.9471 17.1483C19.9992 16.5214 20 15.7158 20 14.56V9.44C20 8.28423 19.9992 7.47856 19.9471 6.85168C19.8961 6.23678 19.8009 5.88403 19.6622 5.61708C19.3776 5.06915 18.9309 4.62239 18.3829 4.33776C18.116 4.19909 17.7632 4.10393 17.1483 4.05286C16.5214 4.0008 15.7158 4 14.56 4H9.44C8.28423 4 7.47856 4.0008 6.85168 4.05286Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0002 11C17.2654 11 17.5197 11.1054 17.7073 11.2929L21.9142 15.5L20.5 16.9142L17.0001 13.4142L11.7071 18.7071C11.5114 18.9028 11.2433 19.0087 10.9667 18.9994C10.6901 18.9902 10.4297 18.8668 10.2474 18.6585L7.45846 15.4711L4.00719 18.9929C3.62063 19.3873 2.9875 19.3937 2.59305 19.0072C2.19859 18.6206 2.19219 17.9875 2.57875 17.593L6.78578 13.3001C6.98073 13.1011 7.24981 12.9925 7.52823 13.0004C7.80664 13.0083 8.06917 13.1319 8.25258 13.3415L11.0487 16.5371L16.2931 11.2929C16.4806 11.1053 16.735 11 17.0002 11Z"
              fill="white"
            />
            <path
              d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z"
              fill="white"
            />
          </svg>
          <TextsmsOutlinedIcon
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          ></TextsmsOutlinedIcon>
          <AddCircleOutlineOutlinedIcon
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          ></AddCircleOutlineOutlinedIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default DM;
