import { useState } from "react";
import ItemList from "./ItemList";

const RestarantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data);

    const handleClick = () => {
        setShowIndex();
    }
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg"> {data.title} demo </span>
            <span> 
                ⬇
            </span>
        </div>
        { 
            showItems && <ItemList items={data?.itemCards} /> 
        }
        </div>
    )
}

export default RestarantCategory;