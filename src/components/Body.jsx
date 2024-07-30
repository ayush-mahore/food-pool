import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6297811&lng=73.7997094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const datat =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurant(datat);
    setFilteredListOfRestaurant(datat);
  };

  return filteredListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link
            className="restaurant-card-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
