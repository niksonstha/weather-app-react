import { Box, Text } from "@chakra-ui/react";
import React from "react";

function MoreTemp() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      mt="5rem"
    >
      <Box>
        <Text fontSize={["xl", "xl", "2xl"]}>Humidity: 80</Text>
      </Box>
      ||
      <Box>
        <Text fontSize={["xl", "xl", "2xl"]}>MaxTemp: 30°C</Text>
        <Text fontSize={["xl", "xl", "2xl"]}>MinTemp: 20°C</Text>
      </Box>
    </Box>
  );
}

export default MoreTemp;
