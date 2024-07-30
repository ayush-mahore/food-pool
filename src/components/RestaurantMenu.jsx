import { useState, useEffect } from "react";
import { MENU_API } from "../utils/configMap";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenuItems, setResMenuItems] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResMenuItems(json.data);
  };

  if (resMenuItems === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRatingString, sla } =
    resMenuItems?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h3>{name}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString}</h3>
      <h3>{sla.deliveryTime + " minutes"}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"₹ "}
            {+item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
