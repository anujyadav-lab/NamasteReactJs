import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Designer.png";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={Logo}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>             
    </div>
  );
};

const resObject = {
  name:'krishna hotel',
  rating:'5.0 ⭐',
  cuisines:'palak paneer',
  deliveryTime:'30 mins'

}

 
const RestaurantCard = (props) => {
//  const {resData} = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek"
      />
      <h3>{props.resData.name}</h3>
      <h4>{props.resData.cuisines}</h4>
      <h4>Rating:{props.resData.rating}</h4>
      <h4>DeliveryTime:{props.resData.deliveryTime}</h4>
    </div>
  );
};

const Search = () =>{
    return(
        <div className="search">
        <input className="searchInput" type="text"></input>
        <button id="btn-1"> Search</button>
      </div>
    )
}
const Body = () => {
  return (
    <div className="body">

     

      <div className="res-container">
        <RestaurantCard resData = {resObject}/>
      </div>
    </div>
  );
};

const Footer = () => {
    return (
        <>
        <div className="main-footer">
      <div className="footerAbout">
        <h2>About Us</h2>

        <p>
          Your go-to menu for ordering delicious food from your favorite
          restaurants, delivered right to your doorstep.
        </p>

      </div>
      <div className="footerContact">
      <h2>Contact Us</h2>
        <p>Email: punefoods.com</p>
        <p>Phone: +91 83048867890</p>
        <p>Address: 77 Main Street, New Delhi, India 110047</p>
      </div>
      <div className="footerBottom">

        <p><bold>&copy;</bold> 2024 Pune Foods MH12. All rights reserved.</p>

      </div>
      </div>
      </>
    );
  };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Search/>
      <Body />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


