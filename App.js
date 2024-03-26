import React, { Children } from "react";
import ReactDOM from 'react-dom/client'

const Title = () => (
   (
<>
  <div>
    <h2> hi how are you!</h2>
  </div>
  
   <div>
   <h2>hi you!</h2>
 </div>
 </>
  )
)


const HeadingComponent = () =>{
 return   <bold><Title/></bold>
}



const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(<HeadingComponent/>);
