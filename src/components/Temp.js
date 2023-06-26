import { Box } from "@chakra-ui/react";
import React from "react";

function Temp() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="7rem"
    >
      <Box fontSize={["6xl", "7xl", "8xl"]}>24°C</Box>
      <Box fontSize="2xl">Kathmandu</Box>
    </Box>
  );
}

export default Temp;
