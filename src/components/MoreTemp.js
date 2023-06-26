import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ApiContext } from "./context/context-api";

function MoreTemp() {
  const { data } = useContext(ApiContext);
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      mt="5rem"
    >
      {data && (
        <>
          <Box>
            <Text fontSize={["xl", "xl", "2xl"]}>
              Humidity: {data.main.humidity}
            </Text>
          </Box>
          ||
          <Box>
            <Text fontSize={["xl", "xl", "2xl"]}>
              MaxTemp: {data.main.temp_max}°C
            </Text>
            <Text fontSize={["xl", "xl", "2xl"]}>
              MinTemp: {data.main.temp_min}°C
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default MoreTemp;
