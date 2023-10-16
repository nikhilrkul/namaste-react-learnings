import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variable changes, react triggers reconciliation cycle(re-renders the component)
  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Old Data : const jsonData = json.data.cards[2].data.data.cards;

    // console.log(json);

    const jsonData =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // json?.data?.cards[2]?.data?.data?.cards;

    // console.log(jsonData);
    // console.log(json.data.cards[2].data.data.cards);
    setListOfRestaurant(jsonData);
    setfilteredRestaurant(jsonData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offline, Please check your internet connectivity!!!</h1>;

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      {/* <div className="search">
        <input type="search" /> 
      </div> */}
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the list of restaurants and update the UI
              // searchtext

              console.log(searchText);

              let filteredRestaurant = listOfRestaurant.filter((res) =>
                // res.data.name.includes(searchText)
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-top-rated p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //console.log("Button Clicked");
              // listOfRestaurantJS = listOfRestaurantJS.filter(
              //   (res) => res.data.avgRating > 4
              // );
              const filtered = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              console.log(filtered);
              // setListOfRestaurant(filtered);
              setfilteredRestaurant(filtered);
            }}
          >
            Top rated Restaurant
          </button>
        </div>
        <div className="filter-top-rated p-4 m-4 flex items-center ">
          <label>User name :</label>
          <input
            className="border border-black rounded-lg p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
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
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            {/* {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
