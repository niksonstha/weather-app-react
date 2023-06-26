import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ApiContext } from "./context/context-api";

function Temp({ inputLocation }) {
  const { data } = useContext(ApiContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="7rem"
    >
      {data && (
        <>
          <Box fontSize={["6xl", "7xl", "8xl"]}>{data.main.temp}°C</Box>
          <Box fontSize="2xl">{data.name}</Box>
        </>
      )}
    </Box>
  );
}

export default Temp;
