import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FilterSearch from "./components/FilterSearch";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <FilterSearch />
      <Body />
      <Footer />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
