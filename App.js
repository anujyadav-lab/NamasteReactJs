import React, { Children } from "react";
import ReactDOM from 'react-dom/client'

// React.createElement -> object -> HTMLElement(render on dom).

const heading = React.createElement(
    
    "h1",

    {id:'heading'},

    "Namaste React 🚀🚀🚀"

    )
    
    console.log(heading)
    
// const root = ReactDOM.createRoot('root') made mistake here.
// root.render(heading);
     


const root = ReactDOM.createRoot(document.getElementById('root')); //This root is the root for our react app,so whatever happens in react that will happen in this root,suppose if i want to render something that will render inside the root.
console.log(root)

root.render(heading);
    
    
    
    
    
     