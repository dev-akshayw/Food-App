import RestaurantCard from "./RestaurantCard"; 
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState();
    const [searchText, setSearchText] = useState("");

    useEffect(()=> {
      fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"   
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ); 
        const json = await data.json();
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
  
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">

      <div className="filter">

      <div className="search">
          <input type="text" className="search-box" value={searchText} 
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
          />
          <button onClick={() => {
              const filterRest= listOfRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              );
              setFilterRestaurant(filterRest);
          }}>  
            search
          </button>

      </div>

      <button className="filter-btn" onClick={() => {
          let filterList = listOfRestaurants.filter( (res) => res?.info?.avgRating > 4.4 );
          setFilterRestaurant(filterList);
      }
      }>
          Top Rated Customers
      </button>
      </div>

        
        <div className="res-container">
          {filterRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div> 
      </div>
    );
  };

export default Body;