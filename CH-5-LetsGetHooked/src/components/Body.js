import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";




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
  
export default Body;
