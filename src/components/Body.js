import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurant = [
    {
      data: {
        id: "577441",
        name: "NOTO - Healthy Ice Cream",
        cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
        cuisines: ["Ice Cream"],
        costForTwo: 25000,
        deliveryTime: 25,
        avgRating: "3.6",
      },
    },
    {
      data: {
        id: "577442",
        name: "The Doorway cafe",
        cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
        cuisines: ["Pasta"],
        costForTwo: 25000,
        deliveryTime: 25,
        avgRating: "4.3",
      },
    },
    {
      data: {
        id: "577443",
        name: "Mc Dowell",
        cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
        cuisines: ["Burger"],
        costForTwo: 25000,
        deliveryTime: 25,
        avgRating: "4.1",
      },
    },
  ];

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
            listOfRestaurant = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRestaurant);
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
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
