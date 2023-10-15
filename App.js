// React is a Library.(JavaScript Library) and At end-of-the-day "React is JavaScript"
// React can work in Small section of appilcation
// In React, Order of files matters alot!!
// React Element is Object
// ReactDom is responsible for assigning!!

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div",
        { id: "child" },
        [React.createElement("h1", {}, "I'm Sorry"),
        React.createElement("h2", {}, "I'm Sorry")]
    ), React.createElement("div",
        { id: "child2" },
        [React.createElement("h1", {}, "I'm Sorry"),
        React.createElement("h2", {}, "I'm Sorry")]
    )
    ]);

// const heading = React.createElement("h1", { id: "heading"}, "Hello World from React");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// Everything that is in the root we be replaced in the div after using .render function