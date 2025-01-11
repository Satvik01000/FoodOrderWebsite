import { RESTAURANT_CARD_IMAGE } from "../utils/ImageLinks";
import React from "react";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
    const { deliveryTime } = resData.info.sla;
    return (
        <div className="Res-Card">
            <div className="imgContainer">
                <img
                    src={RESTAURANT_CARD_IMAGE + cloudinaryImageId}
                    alt={resData.info.name}
                />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + " ⭐️"}</h4>
            <h4>{deliveryTime + " min"}</h4>
        </div>
    );
};

export default RestaurantCard;