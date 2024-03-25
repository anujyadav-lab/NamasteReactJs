import React, { Children } from "react";
import ReactDOM from 'react-dom/client'

// React.createElement -> object -> HTMLElement(render on dom).

const heading = React.createElement( //In the core of react this how we create a ract element.But as it is not developer friendly we use jsx to create react elements.
    
    "h1",

    {id:'heading'},


    "Namaste React 🚀🚀🚀"

    )
    console.log(heading)
    
    const jsxHeading = <h1 id="heading">Namaste React Using Jsx </h1>;

    console.log(jsxHeading)
// const root = ReactDOM.createRoot('root') made mistake here.
// root.render(heading);
     


const root = ReactDOM.createRoot(document.getElementById('root')); //This root is the root for our react app,so whatever happens in react that will happen in this root,suppose if i want to render something that will render inside the root.

root.render(jsxHeading);

