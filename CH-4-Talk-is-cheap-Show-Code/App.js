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

const resList = [
  {
  name:'krishna hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
  id:3 

},
{
  name:'her hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
    id:2

},

{
  name:'my hotel',
  rating:'4.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
    id:0

},
{
  name:'yadav hotel',
  rating:'7.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
    id:11

},
{
  name:'narpat hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
      id:12


},
{
  name:'anuj hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
      id:34


},
{
  name:'narpat hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
    id:30

},
{
  name:'narpat hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
      id:29


},
{
  name:'narpat hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'
    id:27

},
{
  name:'narpat hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
      id:23

  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'

},
{
  name:'narpat hotel',
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
    id:22
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'

},
{
  name:'narpat hotel',
  id:21,
  rating:'5.0 ⭐',
  cuisines:['palak paneer','burger','daal makni'],
  deliveryTime:'30 mins',
  costForTwo:'400 rupees',
  // cloudinaryImageId:'fda9ad56b9d62070fec105cd93693129'

},


]
 
const RestaurantCard = (props) => {
 const {resData} = props;

const {
  cloudinaryImageId,
  name,
  rating,
  cuisines,
  costForTwo,
  deliveryTime
 
} = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek"
        // src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ " + props.resData.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>Rating:{rating}</h4>
      <h4>{costForTwo} for Two</h4>
      <h4>DeliveryTime:{deliveryTime}</h4>
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
      {
        resList.map(
          (restaurant) =>{
               return  <RestaurantCard key={restaurant.id} resData = {restaurant}/>

          }
)
      }
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

        <p>&copy; 2024 Pune Foods MH12. All rights reserved.</p>

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


