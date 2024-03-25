import React, { Children } from "react";
import ReactDOM from 'react-dom/client'

// React.createElement -> object -> HTMLElement(render on dom).

const Title = () => (  //In the core of react this how we create a ract element.But as it is not developer friendly we use jsx to create react elements.
    
    <h1 className="head">
        Namaste React Using Jsx.
    </h1>

    );
 

// React Functional component
// const HeadingComponent = () =>{
//      <h1>Namaste React Functional component </h1>
// };



const HeadingComponent = () => (
    <div id = "container">
        <Title/>
            <h1 className="heading">Namaste Reactjs</h1>

    </div>
);







const root = ReactDOM.createRoot(document.getElementById('root')); //This root is the root for our react app,so whatever happens in react that will happen in this root,suppose if i want to render something that will render inside the root.

root.render(<HeadingComponent/>);
