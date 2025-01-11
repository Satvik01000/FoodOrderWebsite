import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [searchRes, setSearchRes] = useState("");

    const fetchData = async () => {
        const data = await fetch(restaurantData);
        const json = await data.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);
        setOriginalList(restaurants);
    };

    useEffect(() => {
        fetchData().then();
    }, []);

    const handleFilterClick = () => {
        if (listOfRestaurants.length === originalList.length) {
            const filteredList = originalList.filter(
                (resData) => resData.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
        } else {
            setListOfRestaurants(originalList);
        }
    };

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearchRes(searchTerm);
        const filteredList = originalList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setListOfRestaurants(filteredList.length > 0 ? filteredList : originalList);
    };

    return listOfRestaurants && listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    className="search"
                    value={searchRes}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="filter">
                <button className="filterBtn" onClick={handleFilterClick}>
                    Top Rated Restaurants
                </button>
                <hr className="filter-line"/>
            </div>
            <div className="Restaurant-Container">
                {listOfRestaurants.length > 0 ? (
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                ) : (
                    <p>No restaurants found</p>
                )}
            </div>
        </div>
    );
};

export default Body;