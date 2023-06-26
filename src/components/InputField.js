import { Box, Input } from "@chakra-ui/react";
import React from "react";

function InputField() {
  return (
    <Box display="flex" justifyContent="center">
      <Input
        mt={9}
        padding={6}
        width="90%"
        color="white"
        fontSize={["0.8rem", "0.8rem", "1rem"]}
        placeholder="Please enter city name"
        outline="none"
        border="none"
        _placeholder={{ opacity: 0.5, color: "#ffffff" }}
        focusBorderColor="none"
        borderRadius="20px"
        background="#292929"
        boxShadow="inset 3px 15px 20px #1f1f1f,
            inset -6px -6px 5px #333333"
      />
    </Box>
  );
}

export default InputField;
