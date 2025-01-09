import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="filter">
                <button className="filterBtn" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (resData) => resData.info.avgRating > 4.5
                        );
                        setListOfRestaurants(filteredList);
                    }
                }>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="Restaurant-Container">
                {listOfRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;