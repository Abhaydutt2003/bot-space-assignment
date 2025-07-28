// import { Box, Radio, Stack, Typography } from "@mui/material";
// import posts from "../data";
// import { useState } from "react";
// import useMobileContextHook from "../hooks/useMobileContext";

// const SpecificPostSelector = () => {
//   const { selectedPostId, setSelectedPostId } = useMobileContextHook();
//   const [showAll, setShowAll] = useState<boolean>(false);
//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       flexWrap="wrap"
//       sx={{ bgcolor: "background.default" }}
//       padding="0.6rem"
//       alignItems="start"
//       gap={"0.6rem"}
//     >
//       <Box display="flex" alignItems="center" gap="0.6rem">
//         <Radio
//           value="a"
//           name="radio-buttons"
//           sx={{
//             padding: "0",
//           }}
//           checked={true}
//         />
//         <Typography>a specific post or reel </Typography>
//       </Box>
//       <Box display="flex" flexWrap={"wrap"} gap="0.5rem">
//         {posts.map((p, index) => {
//           if (!showAll && index > 3) return;
//           return (
//             <Box
//               onClick={() => setSelectedPostId(p.id)}
//               key={p.id}
//               sx={{
//                 width: 80,
//                 height: 100,
//                 overflow: "hidden",
//                 borderRadius: "5px",
//                 border: selectedPostId === p.id ? "3px solid" : "none",
//                 borderColor:
//                   selectedPostId === p.id ? "primary.main" : "transparent",
//                 "& img": {
//                   transition: "transform 0.3s ease",
//                 },
//                 "&:hover img": {
//                   transform: "scale(1.1)",
//                 },
//                 cursor: "pointer",
//               }}
//             >
//               <img
//                 src={p.image}
//                 style={{
//                   transition: "transform 0.3s ease",
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           );
//         })}
//       </Box>
//       {!showAll && posts.length > 3 && (
//         <Typography
//           color="primary"
//           margin={"0.2rem"}
//           sx={{ cursor: "pointer" }}
//           onClick={() => setShowAll(true)}
//         >
//           Show all
//         </Typography>
//       )}
//     </Box>
//   );
// };

// const WorkflowCreator = () => {
//   return (
//     <Box
//       width="30%"
//       sx={{ bgcolor: "background.paper" }}
//       boxSizing="border-box"
//       padding="1rem"
//     >
//       <Stack>
//         <Typography variant="h6" fontWeight="bold">
//           When someone comments on
//         </Typography>
//         <SpecificPostSelector />
//         <Box></Box>
//         <Box></Box>
//       </Stack>
//     </Box>
//   );
// };

// export default WorkflowCreator;
