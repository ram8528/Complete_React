import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an H1 Tag")
  )
);

//console.log(parent);

const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child2" }, [
    // Creating Array of Children
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
    React.createElement("h3", {}, "I am an H3 Tag"),
  ])
);

const parent3 = React.createElement("div", { id: "parent3" }, [     //Creating Array of DIV Tag
  React.createElement("div", { id: "child3a" }, [
    // Creating Array of Children
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
    React.createElement("h3", {}, "I am an H3 Tag"),
  ]),
  React.createElement("div", { id: "child3b" }, [
    // Creating Array of Children
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
    React.createElement("h3", {}, "I am an H3 Tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World from React"
);

//console.log(heading); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // render method is converting object into h1 tag

// root.render(parent);

// root.render(parent2);

root.render(parent3);
