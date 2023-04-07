import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav links (Home, About us)
 * Body
 *  - Search component
 *  - Restaurant container
 *    - Restaurant card
 *       - Image
 *       - Name restaurant, star ratings, Cuisines, Delivery time
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  //console.log(props);

  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="rest-card" style={{ backgroundColor: "#ffebcd" }}>
      <img
        className="rest-logo"
        alt="rest-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
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
      <h4>{resData.data.avgRating} stars</h4>
      <h4>{avgRating} stars</h4>

      {/* <h4>{resData.data.costForTwo / 100}</h4> */}
      <h4>{costForTwo / 100}</h4>

      {/* <h4>{props.deliveryTime}</h4> */}
      {/* <h4>{resObj.data.deliveryTime}</h4> */}
      {/* <h4>{resData.data.deliveryTime} minutes</h4> */}
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// const resObj = {
//   type: "restaurant",
//   data: {
//     type: "F",
//     id: "71042",
//     name: "NEW Mahesh friends food center",
//     uuid: "4b562172-019f-4ac2-9a01-7185a0397ab3",
//     city: "1",
//     area: "BTM Layout",
//     totalRatingsString: "5000+ ratings",
//     cloudinaryImageId: "w2rjn1jnaz4obj2nexaq",
//     cuisines: ["Chinese", "North Indian"],
//     tags: [],
//     costForTwo: 20000,
//     costForTwoString: "₹200 FOR TWO",
//     deliveryTime: 36,
//     minDeliveryTime: 36,
//     maxDeliveryTime: 36,
//     slaString: "36 MINS",
//     lastMileTravel: 4.099999904632568,
//     slugs: {
//       restaurant:
//         "mahesh-friends-food-center-13th-a-main-ns-palya-btm-layout-2nd-stage-btm",
//       city: "bangalore",
//     },
//     cityState: "1",
//     address: "397 16th main 7th Cross Btm layout 2nd stage Bangalore,560068",
//     locality: "2nd Stage",
//     parentId: 16767,
//     unserviceable: false,
//     veg: false,
//     select: false,
//     favorite: false,
//     tradeCampaignHeaders: [],
//     aggregatedDiscountInfo: {
//       header: "50% off",
//       shortDescriptionList: [
//         {
//           meta: "50% off | Use TRYNEW",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "50% off up to ₹100 | Use code TRYNEW",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     aggregatedDiscountInfoV2: {
//       header: "50% OFF",
//       shortDescriptionList: [
//         {
//           meta: "Use TRYNEW",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "50% off up to ₹100 | Use code TRYNEW",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     chain: [],
//     feeDetails: {
//       fees: [
//         {
//           name: "time",
//           fee: 0,
//           message: "",
//         },
//         {
//           name: "distance",
//           fee: 4600,
//           message: "",
//         },
//         {
//           name: "special",
//           fee: 0,
//           message: "",
//         },
//       ],
//       totalFees: 4600,
//       message: "",
//       title: "Delivery Charge",
//       amount: "4600",
//       icon: "",
//     },
//     availability: {
//       opened: true,
//       nextOpenMessage: "",
//       nextCloseMessage: "",
//     },
//     longDistanceEnabled: 0,
//     rainMode: "NONE",
//     thirdPartyAddress: false,
//     thirdPartyVendor: "",
//     adTrackingID: "",
//     badges: {
//       imageBased: [],
//       textBased: [],
//       textExtendedBadges: [],
//     },
//     lastMileTravelString: "4 kms",
//     hasSurge: false,
//     sla: {
//       restaurantId: "71042",
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       lastMileTravel: 4.099999904632568,
//       lastMileDistance: 0,
//       serviceability: "SERVICEABLE",
//       rainMode: "NONE",
//       longDistance: "NOT_LONG_DISTANCE",
//       preferentialService: false,
//       iconType: "EMPTY",
//     },
//     promoted: false,
//     avgRating: "3.2",
//     totalRatings: 5000,
//     new: false,
//   },
//   subtype: "basic",
// };
const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "577441",
      name: "NOTO - Healthy Ice Cream",
      uuid: "83186d8f-912d-4012-a042-2eb4d12882f5",
      city: "1",
      area: "BTM layout",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "51bd9c7efcc0e05c614c0e0674434e62",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 3.5999999046325684,
      slugs: {
        restaurant: "noto-healthy-ice-cream-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "No 63, 2nd Main Rd, 4th Cross, KEB Colony, BTM 1st Stage, BTM, Bengaluru, Karnataka 560029",
      locality: "1st  Stage",
      parentId: 7158,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6382923~p=1~eid=00000187-53c5-6c16-0d55-fecb00d6011a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "577441",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 3.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "71042",
      name: "NEW Mahesh friends food center",
      uuid: "4b562172-019f-4ac2-9a01-7185a0397ab3",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "w2rjn1jnaz4obj2nexaq",
      cuisines: ["Chinese", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant:
          "mahesh-friends-food-center-13th-a-main-ns-palya-btm-layout-2nd-stage-btm",
        city: "bangalore",
      },
      cityState: "1",
      address: "397 16th main 7th Cross Btm layout 2nd stage Bangalore,560068",
      locality: "2nd Stage",
      parentId: 16767,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4600,
        message: "",
        title: "Delivery Charge",
        amount: "4600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "71042",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "346181",
      name: "Al Bawarchi Biryani",
      uuid: "71bcf9ee-0737-4732-ae90-83162c33eb48",
      city: "1",
      area: "HSR Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "n3b5laiwozelmrfy388v",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant: "al-bawarchi-biryani-hsr-hsr",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "No 226, Anugraha Ground Floor, 17th B Main Road, 4th Sector, HSR Layout, Bangalore, BTM Layout, B.B.M.P",
      locality: "4th Sector",
      parentId: 29010,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4600,
        message: "",
        title: "Delivery Charge",
        amount: "4600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "346181",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "79795",
      name: "Bombay Kulfi",
      uuid: "a7db1304-08ed-4dc3-908b-17bc35f826f7",
      city: "1",
      area: "Jayanagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "hthtsda6wjs0oyeztezm",
      cuisines: ["Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 5.5,
      slugs: {
        restaurant: "bombaykulfi-paltan-bazar-pb_do-not-use",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Bombay Stoned Ice Cream Opposite Rolls On Wheels/CCD Royal  Ventures 1014/44, 26th Main Road , 38th Cross 4th T Block , Jaynagar , Bengaluru 560041",
      locality: "4th T Block",
      parentId: 4900,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT100 off",
        shortDescriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6419072~p=4~eid=00000187-53c5-6c16-0d55-fecc00d60460",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "79795",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 5.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "582585",
      name: "Donne Biriyani House",
      uuid: "4aef855b-263f-4e83-b8cb-2214e5d3f31e",
      city: "1",
      area: "HSR Layout",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "bnrsjsyn8ep2250kyxw1",
      cuisines: ["Biryani", "Indian", "Snacks"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 5.800000190734863,
      slugs: {
        restaurant: "donne-biriyani-house-hsr-hsr-3",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "1444, 25th D Cross Rd, 2nd Sector, BDA Layout, HSR Layout, Bengaluru, Karnataka 560102, India",
      locality: "2nd Sector",
      parentId: 11367,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "582585",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 5.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.0",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132622",
      name: "Marwadi Chaat & Tiffin Services Shanti nagar",
      uuid: "8797a981-9a80-4f22-835e-8ccfdc8e6def",
      city: "1",
      area: "Shanthi Nagar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "e8f48a82caf1cdc428448f64dba7b61e",
      cuisines: ["Rajasthani", "North Indian", "Snacks", "Chaat"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "marwadi-chaat-tiffin-services-shantinagar-shantinagar",
        city: "bangalore",
      },
      cityState: "1",
      address: "No :9 5 th Cross Lakshmi road shantinagar Bangalore-560027",
      locality: "Lakshmi road",
      parentId: 20091,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 5400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5400,
        message: "",
        title: "Delivery Charge",
        amount: "5400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132622",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "495055",
      name: "Afghani Tandoori Hub",
      uuid: "654a2f81-f8b8-47c8-a81b-c1a2de0c792e",
      city: "1",
      area: "Btm Layout",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "s2guefjyf6zplthuzkzg",
      cuisines: ["Biryani", "Chinese", "North Indian", "Snacks"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "afghani-tandoori-hub-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "39, 1 St 'C' Cross, Opp Swaraj Hyper Market, Chocolate Factory Road, Tavarekere BTM Bangalore",
      locality: "Chocolate Factory Road",
      parentId: 293550,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "495055",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496423",
      name: "Dum Biryani Hub",
      uuid: "c288878b-f9d0-4a4f-959a-c19bb039d91e",
      city: "1",
      area: "Btm Layout",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "dzfnv4xnrfnchnmnffyd",
      cuisines: ["Biryani", "North Indian", "Chinese", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "dum-biryani-hub-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "39, 1 St 'C' Cross, Opp Swaraj Hyper Market, Chocolate Factory Road, Tavarekere BTM Bangalore- 560068",
      locality: "Tavarekere",
      parentId: 297555,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496423",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "580691",
      name: "Rollsking",
      uuid: "ff723013-9943-4fa5-9972-a5e9de1b7de1",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "vzhxq7jvtpx1qllxdbpp",
      cuisines: ["North Indian", "Fast Food", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "rolls-king-koramangala-koramangala",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "1ST AND 2ND FLOOR, MUNICIPAL NO.114, INDUSTRIAL LAYOUT, BANGALORE., BTM Layout , B.B.M.P South, Karnataka, 560095",
      locality: "5th Block",
      parentId: 4697,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "580691",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "307013",
      name: "TEXAS BURGERS",
      uuid: "aab14a27-3134-4901-b4c6-eb1849447ed1",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ev4lnwhisjpxsepcavts",
      cuisines: ["American", "Desserts", "Continental"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "texas-burgers-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "NO 7, 16TH MAIN ROAD, OPPOSITE TO IAS  PARK, BTM 2ND STAGE, BANGALORE,  KARNATAKA, INDIA, B.B.M.P South,  Karnataka 560076",
      locality: "2nd Stage",
      parentId: 203768,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "307013",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "446562",
      name: "Dairy Day Ice Creams",
      uuid: "8ce7fdf5-a456-4950-847b-b1d0f5ae3d8a",
      city: "1",
      area: "Btm Layout",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "lxgmvelachgrcih5uab2",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "dairy-day-ice-creams-whitefield-whitefield",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Shri chats & Sweets, #107, 1st main, 1st cross, Narayanappa garden, Tavarekere, Bangalore 29",
      locality: "Narayanappa garden",
      parentId: 68031,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "446562",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.7",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "548710",
      name: "Samosa Party",
      uuid: "80d3be14-b107-4247-9dd5-c0f4948f3586",
      city: "1",
      area: "HSR Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "we0elbvzhfs8kpvqtchv",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant: "samosa-party-hsr-hsr-2",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "UPPER GROUND FLOOR PORTION OF NO.1216,14TH MAIN,3RD SECTOR, HSR LAYOUT BANGLORE, KARNATAKA, INDIA",
      locality: "3rd Sector",
      parentId: 6364,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 on select items | Use code SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 on select items | Use code SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4600,
        message: "",
        title: "Delivery Charge",
        amount: "4600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "548710",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "654841",
      name: "HFC Call Me Kabab",
      uuid: "fb9ff33d-8633-49c7-9132-1fb6d2aec74b",
      city: "1",
      area: "RS Building, Ilyas Nagar, 100 Feet Rin JP Ng Road ",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "90012597629321295211c3881c8bb0af",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 53,
      minDeliveryTime: 53,
      maxDeliveryTime: 53,
      slaString: "53 MINS",
      lastMileTravel: 8.600000381469727,
      slugs: {
        restaurant:
          "hfc-call-me-kabab-kumaraswamy-layout-&-uttarahalli-kumaraswamy-layout-&-uttarahalli",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "NO.229, ILLYAS NAGAR, 100 FEET RING ROAD, JP NAGAR POST, BANGALORE, Jayanagar, B.B.M.P South, Karnataka-560078",
      locality: "girias",
      parentId: 393896,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 8000,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8000,
        message: "",
        title: "Delivery Charge",
        amount: "8000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "654841",
        deliveryTime: 53,
        minDeliveryTime: 53,
        maxDeliveryTime: 53,
        lastMileTravel: 8.600000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "232214",
      name: "Selena Food Center",
      uuid: "397ffc13-9ede-4855-a294-94014dcec546",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "o1hif3zpephumj6rz7fi",
      cuisines: ["Indian", "Chinese", "Thalis", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant: "selena-food-center-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address: "397 16th main 7th Cross Btm layout 2nd stage Bangalore,560068",
      locality: "2nd Stage",
      parentId: 14718,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4600,
        message: "",
        title: "Delivery Charge",
        amount: "4600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "232214",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "305684",
      name: "SRI SAPANA DHABA",
      uuid: "f0f606fb-c973-42e2-8e4d-cd2489d3244c",
      city: "1",
      area: "Btm Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "e67mqzpslp7ajxzdylpb",
      cuisines: ["Indian", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "sri-sapana-dhaba-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address: "H.NO 267, 7th cross road 26th main EWS Layout",
      locality: "2nd Stage",
      parentId: 194561,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4600,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4600,
        message: "",
        title: "Delivery Charge",
        amount: "4600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "305684",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

// not using keys (not acceptable) <<< index as key <<< unique id (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" />
      </div>
      <div className="rest-container">
        {/* <RestaurantCard
          // resName="Meghana Foods"
          // cusine="North Indian, Chineese"
          // rating="4.4"
          // deliveryTime="30 minutes"
          resData={resList[0]}
        /> */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
        <RestaurantCard resData={resList[12]} />
        <RestaurantCard resData={resList[13]} /> */}
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<Applayout />);
