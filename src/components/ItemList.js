import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return(
        <>
            {items.map( (item) => 
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-400 border-b-1 items-center flex gap-8">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹ { item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 } </span>
                        </div>
                         <p> {item?.card?.info?.description} </p>
                     </div> 
                    <div className="w-3/12">
                        <img src={CDN_URL + item?.card?.info?.imageId} className="rounded-xl " />
                    </div>
                </div>
            )}
        </>
    )
}

export default ItemList;