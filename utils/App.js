// 1) writing first line using react
/* 
const heading = React.createElement("h1", {}, "hello world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 
*/

//2) Adding css
// {}object-place where we will give attribute tags
/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


//3)creating nested elements in React
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
  
      //to pass more than one childer - create array
  
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]
    )
  );
  
  //JSX-code simple kardeta h tags likhne m (later)
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  */

import React from "react";
import ReactDOM from "react-dom";
import Header from "../src/components/Header";
import Body from "../src/components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = document.getElementById("root");

ReactDOM.render(<AppLayout />, root);
