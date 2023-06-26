import { Box } from "@chakra-ui/react";
import React from "react";
import InputField from "./InputField";
import Temp from "./Temp";
import MoreTemp from "./MoreTemp";

function Home() {
  return (
    <Box
      width={["90%", "80%", "60%", "50%", "40%", "30%"]}
      height={["70vh", "50vh"]}
      color="white"
      borderRadius="49px"
      bgColor="#292929"
      boxShadow="13px 13px 20px #171717,
    -20px -20px 27px #3b3b3b"
    >
      <InputField />
      <Temp />
      <MoreTemp />
    </Box>
  );
}

export default Home;
