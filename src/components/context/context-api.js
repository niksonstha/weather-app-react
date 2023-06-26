import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiContext = React.createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("kathmandu");
  let timeout;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=633507c31bea1f22fb71174fc6fd6c62&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL]);

  const handleLocationChange = (newLocation) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setLocation(newLocation);
    }, 500);
  };

  return (
    <ApiContext.Provider value={{ data, setLocation: handleLocationChange }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
export { ApiContext };
