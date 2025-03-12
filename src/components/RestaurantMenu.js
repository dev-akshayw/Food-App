import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

    if(resInfo === null) return <Shimmer />

    const {name, totalRatings,cuisines, avgRating, costForTwoMessage }= resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards);

    return(
        <div>
            <h1>{name}</h1>
            <h2>{avgRating} ({totalRatings} ratings) - {costForTwoMessage} </h2> 
            <h3>{cuisines.join(", ")}</h3>

            <h2>Menu Iteams</h2>
            <ul>
                {/* { itemCards.map(item => <li> {item?.card?.info?.name} </li>) } */}
                <li>{itemCards[0]?.card?.info?.name}</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;