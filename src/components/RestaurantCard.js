import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
      resData?.info;
  
    return (
      <div className="res-card break-words relative " style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL  +cloudinaryImageId
          }
        />
        <div className="absolute bg-slate-900 py-1 px-2 text-white top-[0px] left-[0px] ">
          {/* {isOpen ? "Open" : "Closed"} */}
        </div>
        <h3>{name}</h3>
        <p> {cuisines.join(',')} </p>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

// Higher Order Component 

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-900 py-1 px-2 text-white top-[0px] left-[0px]"> Promoted </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

  export default RestaurantCard;