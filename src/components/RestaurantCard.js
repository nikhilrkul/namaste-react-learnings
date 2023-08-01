import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log(props);

  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    // deliveryTime,
  } = resData?.info;

  return (
    <div className="rest-card" style={{ backgroundColor: "#ffebcd" }}>
      <img
        className="rest-logo"
        alt="rest-logo"
        src={
          CDN_URL + cloudinaryImageId

          //resData.data.cloudinaryImageId
        }
      />
      {/* <h3>{props.resName}</h3> */}
      {/* 1st Option : */}
      {/* <h3>{resObj.data.name}</h3> */}
      <h3>{name}</h3>
      {/* 1st Option : */}
      {/* <h4>{props.cusine}</h4> */}
      {/* <h4>{resObj.data.cuisines}</h4> */}
      {/* <h4>{resData.data.cuisines.join(", ")}</h4> */}
      <h4>{cuisines.join(", ")}</h4>

      {/* 1st Option : */}
      {/* <h4>{props.rating}</h4> */}
      {/* <h4>{resObj.data.avgRating}</h4> */}
      {/* <h4>{resData.data.avgRating} stars</h4> */}

      {/* After Swiggy API change */}
      <h4>{avgRating} stars</h4>

      {/* <h4>{resData.data.costForTwo / 100}</h4> */}
      <h4>{costForTwo}</h4>
      {/* <h4>{props.deliveryTime}</h4> */}
      {/* <h4>{resObj.data.deliveryTime}</h4> */}
      {/* <h4>{resData.data.deliveryTime} minutes</h4> */}
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
