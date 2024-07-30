import { CDN_URL } from "../utils/configMap";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Restaurant image"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime + " Minutes Estimated"}</h4>
    </div>
  );
};

export default ResturantCard;
