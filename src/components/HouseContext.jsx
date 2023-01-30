import React, { useState, useEffect, createContext } from "react";

// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any) ");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    // console.log(allCountries);

    // remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // console.log(uniqueCountries);

    // set countries
    setCountries(uniqueCountries);
  }, [houses]);

  // return all types of proprieties
  useEffect(() => {
    const allPropertyType = houses.map((house) => house.type);
    // console.log(allCountries);

    // remove duplicates
    const uniqueTypes = ["Property type (any)", ...new Set(allPropertyType)];
    // console.log(uniqueCountries);

    // set countries
    setProperties(uniqueTypes);
  }, [houses]);

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
