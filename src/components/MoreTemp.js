import { Box, Text } from "@chakra-ui/react";
import React from "react";

function MoreTemp() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      mt="7rem"
    >
      <Box>
        <Text>Humidity: 80</Text>
      </Box>
      <Box>
        <Text>MaxTemp: 30</Text>
        <Text>MinTemp: 20</Text>
      </Box>
    </Box>
  );
}

export default MoreTemp;
