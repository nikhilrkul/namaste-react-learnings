import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  //   console.log(data);
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = (index) => {
    // setShowItems(!showItems);
    // console.log(showItems, index);
    setShowIndex();
    // setShowIndex((prevShowIndex) => !prevShowIndex);
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
