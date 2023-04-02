import React from 'react'
import ReactDOM from 'react-dom/client';
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
    React.createElement("h1", {}, "This is React 🚀"),
    React.createElement("h2", {}, "by Nikhil Kulkarni"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I'm H1 tag from Div 2"),
    React.createElement("h2", {}, "I'm H2 tag from Div 2"),
  ]),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
