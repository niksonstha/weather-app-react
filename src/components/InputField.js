import { Box, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ApiContext } from "./context/context-api";

function InputField({ onInputChange }) {
  const [input, setInput] = useState("");
  const { setLocation } = useContext(ApiContext);

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value; // Store the new input value
    setInput(inputValue); // Update the input state
    onInputChange(inputValue); // Pass the new input value to the callback
    setLocation(inputValue);
  };

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
        onChange={inputChangeHandler}
        value={input}
      />
    </Box>
  );
}

export default InputField;
