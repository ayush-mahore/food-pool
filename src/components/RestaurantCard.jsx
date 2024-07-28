import { CDN_URL } from "../utils/configMap";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Meghna foods"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100 + " Rs. for two people"}</h4>
      <h4>{deliveryTime + " Minutes Estimated"}</h4>
    </div>
  );
};

export default ResturantCard;
