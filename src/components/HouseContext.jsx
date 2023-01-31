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

  const handleClick = () => {
    setLoading(true);

    // create a function that checks if the string includes (any)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first and the second value of price and parse it to number
    const minPrice = parseInt(price.split("-")[0]);
    const maxPrice = parseInt(price.split("-")[1]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      let newHouse;

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        newHouse = house;
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        // return house;
        newHouse = house;
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        if (house.country === country) {
          newHouse = house;
        }
      }

      // if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        if (house.type === property) {
          newHouse = house;
        }
      }

      // if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          newHouse = house;
        }
      }

      // if country and property are not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        if (house.country === country && house.type === property) {
          newHouse = house;
        }
      }

      // if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.country === country
        ) {
          newHouse = house;
        }
      }

      // if price and property is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.type === property
        ) {
          newHouse = house;
        }
      }

      return newHouse;
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

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
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
