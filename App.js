import React, { Children } from "react";
import ReactDOM from 'react-dom/client'


const Title =  () =>( 
    
    <h1 className="head">
        Namaste React Using Jsx.
    </h1>
    

    );


// const data = <h1>alert('you are safe')</h1>

const number = 1000;

const HeadingComponent = () => (
    <div id = "container">
        {/* {data} */}
{Title()}
<Title/>
<Title></Title>

            <h1 className="heading">Namaste Reactjs</h1>

    </div>
);







const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(<HeadingComponent/>);
