import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //   console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cost, costForTwoMessage } =
    resInfo.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      {/* <h1>Hotel Dolphin - HTML</h1> */}
      <p>
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price || item.card.info.defaultprice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
