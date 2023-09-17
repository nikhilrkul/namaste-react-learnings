import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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

// not using keys (not acceptable) <<< index as key <<< unique id (best practice)

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);
