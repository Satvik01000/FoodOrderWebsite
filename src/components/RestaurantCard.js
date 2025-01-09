import {RESTAURANT_CARD_IMAGE} from "../utils/ImageLinks";
import React from "react";

const RestaurantCard = (props) => {
    const { resData } = props;
    const cloudinaryImageId = resData.info.cloudinaryImageId;
    return (
        <div className="Res-Card">
            <div className="imgContainer">
                <img
                    src={RESTAURANT_CARD_IMAGE+cloudinaryImageId}
                    alt={resData.info.name}
                />
            </div>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating + " ⭐️"}</h4>
            <h4>{resData.info.sla.deliveryTime + " min"}</h4>
        </div>
    );
};

export default RestaurantCard;