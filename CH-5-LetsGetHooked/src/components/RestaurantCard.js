  import CDN_URL from "../utils/constants"
  import resList from "../utils/MockData";

  const RestaurantCard = (props) => {
    const { resData, } = props;

    const {
      name,
      cloudinaryImageId,
      rating,
      cuisines,
      costForTwo,
      
      deliveryTime,

    } = resData;

    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="cardImg" src={CDN_URL + cloudinaryImageId} />

        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating:{rating}</h4>
        <h4>{costForTwo} for Two</h4>
        <h4>DeliveryTime:{deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;
