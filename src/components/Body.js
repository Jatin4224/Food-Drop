/*import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
  // Initialize listOfRestaurants with an empty array
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //fetching  Api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //optional chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer/>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Example filtering logic, you may need to modify this
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.rating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            resName={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
  );
        };

export default Body;
*/

///updated code
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Initialize listOfRestaurants with an empty array
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Fetching API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      // Optional chaining
      setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Example filtering logic, you may need to modify this
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.rating > 4
            );
            setListOfRestaurants(filteredList); // Fixed a typo here
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            resName={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
