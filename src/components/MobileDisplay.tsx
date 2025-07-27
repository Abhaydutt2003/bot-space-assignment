import { Box } from "@mui/material";
import botspaceLogo from "../assets/botspace_logo.jpg";

const MobileDisplay = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexGrow={1}
    >
      <Box
        width={280}
        height={570}
        borderRadius={10}
        boxShadow={3}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"0.6rem"}
        flexDirection="column"
        position="relative"
        sx={{
          border: "8px solid",
          borderColor: "grey.900",
          bgcolor: "black",
        }}
      >
        {/* Speaker */}
        <Box
          sx={{
            width: 40,
            height: 6,
            bgcolor: "grey.800",
            borderRadius: 3,
            opacity: 0.5,
          }}
        />
        <Box
          width={"100%"}
          flexGrow={1}
          display={"flex"}
          alignItems={"end"}
          padding={"0.6rem"}
        >
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            marginBottom={"0.6rem"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6901 2.27629C12.3038 1.9079 11.6962 1.9079 11.3099 2.27629L2.30989 10.8585C2.11199 11.0472 2 11.3087 2 11.5822V21C2 21.5523 2.44772 22 3 22H9V17C9 15.8954 9.5 14 12 14C14.5 14 15 15.8954 15 17V22H21C21.5523 22 22 21.5523 22 21V11.5822C22 11.3087 21.888 11.0472 21.6901 10.8585L12.6901 2.27629Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7618 17.176C14.3145 18.3183 12.4869 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4869 18.3183 14.3145 17.176 15.7618L21.6569 20.2426C22.0474 20.6332 22.0474 21.2663 21.6569 21.6569C21.2663 22.0474 20.6332 22.0474 20.2426 21.6569L15.7618 17.176ZM17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0055 2C9.61949 1.99999 8.51721 1.99999 7.62839 2.0738C6.71811 2.14939 5.94253 2.30755 5.23415 2.67552C4.1383 3.24477 3.24477 4.1383 2.67552 5.23415C2.30755 5.94253 2.14939 6.71811 2.0738 7.62839C1.99999 8.51721 1.99999 9.61948 2 11.0055V12.9945C1.99999 14.3805 1.99999 15.4828 2.0738 16.3716C2.14939 17.2819 2.30755 18.0575 2.67552 18.7658C3.24477 19.8617 4.1383 20.7552 5.23415 21.3245C5.94253 21.6925 6.71811 21.8506 7.62839 21.9262C8.5172 22 9.61946 22 11.0054 22H12.9945C14.3805 22 15.4828 22 16.3716 21.9262C17.2819 21.8506 18.0575 21.6925 18.7658 21.3245C19.8617 20.7552 20.7552 19.8617 21.3245 18.7658C21.6925 18.0575 21.8506 17.2819 21.9262 16.3716C22 15.4828 22 14.3805 22 12.9946V11.0055C22 9.61955 22 8.5172 21.9262 7.62839C21.8506 6.71811 21.6925 5.94253 21.3245 5.23415C20.7552 4.1383 19.8617 3.24477 18.7658 2.67552C18.0575 2.30755 17.2819 2.14939 16.3716 2.0738C15.4828 1.99999 14.3805 1.99999 12.9945 2H11.0055ZM6.1561 4.45035C6.53142 4.25538 7.00955 4.13208 7.79391 4.06694C8.59025 4.0008 9.60949 4 11.05 4H12.95C14.3905 4 15.4097 4.0008 16.2061 4.06694C16.9905 4.13208 17.4686 4.25538 17.8439 4.45035C18.5745 4.82985 19.1702 5.42553 19.5497 6.1561C19.7446 6.53142 19.8679 7.00955 19.9331 7.79391C19.9992 8.59025 20 9.60949 20 11.05V12.95C20 14.3905 19.9992 15.4097 19.9331 16.2061C19.8679 16.9905 19.7446 17.4686 19.5497 17.8439C19.1702 18.5745 18.5745 19.1702 17.8439 19.5497C17.4686 19.7446 16.9905 19.8679 16.2061 19.9331C15.4097 19.9992 14.3905 20 12.95 20H11.05C9.60949 20 8.59025 19.9992 7.79391 19.9331C7.00955 19.8679 6.53142 19.7446 6.1561 19.5497C5.42553 19.1702 4.82985 18.5745 4.45035 17.8439C4.25538 17.4686 4.13208 16.9905 4.06694 16.2061C4.0008 15.4097 4 14.3905 4 12.95V11.05C4 9.60949 4.0008 8.59025 4.06694 7.79391C4.13208 7.00955 4.25538 6.53142 4.45035 6.1561C4.82985 5.42553 5.42553 4.82985 6.1561 4.45035Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8 14.1322C15.0667 14.2957 15.0667 14.7043 14.8 14.8678L10.6 17.4425C10.3333 17.6059 10 17.4016 10 17.0747L10 11.9253C10 11.5984 10.3333 11.3941 10.6 11.5575L14.8 14.1322Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2H8ZM16 4H14.7663L16.5663 7H19.874C19.4299 5.27477 17.8638 4 16 4ZM20 9H4V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V9ZM4.12602 7H8.23381L6.58769 4.25647C5.3805 4.71213 4.45161 5.73497 4.12602 7ZM10.5662 7H14.2339L12.4339 4H8.76619L10.5662 7Z"
                fill="white"
              />
            </svg>
            <img
              src={botspaceLogo}
              alt="BotSpace Logo"
              style={{ width: 25, height: 25, borderRadius: "50%" }} // Smaller and round
            />
          </Box>
        </Box>
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
