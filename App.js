/**
 * Use case : Create Nested div within browser
 *
 * <div id="parent">
 *   <div id="child">
 *      <h1>I'm h1 tag</h1>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(browser understands)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I'm H1 tag from Div 2"),
    React.createElement("h2", {}, "I'm H2 tag from Div 2"),
  ]),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// *********** Previous code ***********//

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Namaste Everyone !"
// );

// const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);

// console.log(heading);
// console.log(heading1);
// console.log(heading2);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //   const container = ReactDOM.createRoot(
// //     document.getElementById("container")
// //   );

// root.render(heading);
// root.render(container);
