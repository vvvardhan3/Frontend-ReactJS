// React is a Library.(JavaScript Library) and At end-of-the-day "React is JavaScript"
// React can work in Small section of appilcation
// In React, Order of files matters alot!!
// React Element is Object
// ReactDom is responsible for assigning!!

import React from "react";
import ReactDOM from "react-dom/client";

// Class-1&2:

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div",
//         { id: "child" },
//         [React.createElement("h1", {}, "I'm Sorry"),
//         React.createElement("h2", {}, "I'm Sorry")]
//     ), React.createElement("div",
//         { id: "child2" },
//         [React.createElement("h1", {}, "I'm Sorry"),
//         React.createElement("h2", {}, "I'm Sorry")]
//     )
//     ]);

// const heading = React.createElement("h1", { id: "heading"}, "Hello World from React");
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// Everything that is in the root we be replaced in the div after using .render function

// Core React coding, Which is not developer friendly!
// React.createElement => ReactElement, Which is JS Object at end-of-day => HTMLElement, While Rendering!
// const heading = React.createElement("h1",{ id: "heading"},"Namaste, Madam!");

// JSX - HTML-like Syntax or XML-like Syntax
// JSX is transpiled even before it reaches the JS engine by Parcel with the help of Babel (JS Compiler)
// JSX => React.createElement => ReactElement, Which is JS Object at end-of-day => HTMLElement, While Rendering!
// How JSX is different from HTML; In HTML we write just "Class" but in JSX, We write it as "ClassName"
// Attributes to JSX, We have to use "CamelCase"
const Title = () => (
    <h1 id="heading">
        Vishnu Vardhan Foundation
    </h1>
); // We are using round-brakets because babel needs to understand this as a JSX

// React Component
// Everything in React is a component.
// two types of Components =>
// Class based - OLD way to write the code. It uses JS Classes
// Functional based - New way to write the code. It uses JS Functions

// Component Composition
const HeadingComponet = () => (
    <dic id="container">
        <Title/>
        <h1>Namaste!</h1>
    </dic>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet/>);