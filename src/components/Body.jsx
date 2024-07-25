import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
