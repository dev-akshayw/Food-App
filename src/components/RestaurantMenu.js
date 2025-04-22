import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestarantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =() => {
    
    // const [resInfo, setResInfo] =  useState(null);
    const { resId } = useParams();

    const resInfo =  useRestaurantMenu(resId);

    // useEffect(() =>{
    //     fetchData();
    // },[])

    // const fetchData = async () => {
    //     const data = await fetch( MENU_API + resId );
    //     const json = await data.json();
    //     setResInfo(json.data);
    // }
    // console.log(resInfo);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) return <Shimmer />

    const {name, totalRatings,cuisines, avgRating, costForTwoMessage }= resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.['@type'] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

    return(
        <div>
            <div className="menu text-center pb-4">
                <h1 className="font-semibold text-3xl pb-3"> {name}</h1> 
                <p className="pb-2 font-medium text-xl"> {cuisines.join(", ")} </p>
                <h2 className=" text-2xl font-semibold"> Menu </h2>
            </div>
            <div>
                {/* { itemCards.map(item => <li> {item?.card?.info?.name} </li>) } */}
                {
                    categories.map( (category,index) => 
                    <RestarantCategory 
                        key={ category?.card?.card?.categoryId }
                        data={ category?.card?.card }
                        showItems = {index === showIndex ? true : false}
                        setShowIndex = {() => setShowIndex(index)}
                    />  
                    )
                }
            </div>
        </div>

    )
}

export default RestaurantMenu;