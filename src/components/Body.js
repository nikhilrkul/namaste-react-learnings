import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // {
  //   data: {
  //     id: "577441",
  //     name: "NOTO - Healthy Ice Cream",
  //     cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
  //     cuisines: ["Ice Cream"],
  //     costForTwo: 25000,
  //     deliveryTime: 25,
  //     avgRating: "3.6",
  //   },
  // },
  // {
  //   data: {
  //     id: "577442",
  //     name: "The Doorway cafe",
  //     cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
  //     cuisines: ["Pasta"],
  //     costForTwo: 25000,
  //     deliveryTime: 25,
  //     avgRating: "4.3",
  //   },
  // },
  // {
  //   data: {
  //     id: "577443",
  //     name: "Mc Dowell",
  //     cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
  //     cuisines: ["Burger"],
  //     costForTwo: 25000,
  //     deliveryTime: 25,
  //     avgRating: "4.1",
  //   },
  // },
  //);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Old Data : const jsonData = json.data.cards[2].data.data.cards;

    console.log(json);
    const jsonData =
      json.data.cards[5].card.card?.gridElements?.infoWithStyle?.restaurants;

    // json?.data?.cards[2]?.data?.data?.cards;

    console.log(jsonData);
    // console.log(json.data.cards[2].data.data.cards);
    setListOfRestaurant(jsonData);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input type="search" />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //console.log("Button Clicked");
            // listOfRestaurantJS = listOfRestaurantJS.filter(
            //   (res) => res.data.avgRating > 4
            // );
            const filtered = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filtered);
            setListOfRestaurant(filtered);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {/* <RestaurantCard
            // resName="Meghana Foods"
            // cusine="North Indian, Chineese"
            // rating="4.4"
            // deliveryTime="30 minutes"
            resData={resList[0]}
          /> */}
        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))} */}
        {/* {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))} */}

        {/* For debugging to view the contents of listOfRestaurant cards.<h4>
          {console.log(
            listOfRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} />
            ))
          )}
        </h4> */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
