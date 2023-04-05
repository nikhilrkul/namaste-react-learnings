import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Use case : Create Nested div within browser
 *
 * <div id="parent">
 *   <div id="child">
 *      <h1>I'm h1 tag</h1>
 *   </div>
 * </div>
 *
 * React.createElement => ReactElement(Object) => HTML(render) HTML(browser understands)
 *
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child-1" }, [
//     React.createElement("h1", {}, "This is React 🚀"),
//     React.createElement("h2", {}, "by Nikhil Kulkarni"),
//   ]),
//   React.createElement("div", { id: "child-2" }, [
//     React.createElement("h1", {}, "I'm H1 tag from Div 2"),
//     React.createElement("h2", {}, "I'm H2 tag from Div 2"),
//   ]),
// ]);

// console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is React 🚀"
// );

// console.log(heading);

// ------------------- JSX Elements------------------------//

// JSX (transplied before it reaches JS) - Parcel -> Babel

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
// const jsxHeading = (
//   <h1 className="head" tabIndex="5">
//     React using JSX 🚀
//   </h1>
// );

// ------------------- Functional components ------------------------//
// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     React using JSX 🚀
//   </h1>
// );
// console.log(jsxHeading);

// Functional Components
const HeadingComponent = () => {
  return <h1 className="heading1">React Functional components</h1>;
};

const number = 1000000;

// Component composition
const HeadingComponet2 = () => (
  <div id="container">
    <h1 className="heading2">React Functional Components </h1>
  </div>
);

const HeadingComponent3 = () => {
  return (
    <div>
      <Title />
      <h2>{100 + 200}</h2>
      <h1 className="heading3">React Functional Components 2</h1>
    </div>
  );
};

const elem = <span>React element - span</span>;

const Title1 = () => (
  <h1 className="head" tabIndex="2">
    React using JSX 🚀
  </h1>
);

const HeadingComponent4 = () => {
  return (
    <>
      <div id="container">
        {/* {title1} */}
        {/* {elem} */}
        <Title1 />
        <h1 className="heading3">React Functional Components 2</h1>
      </div>
      <div id="container-2"></div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent4 />);
