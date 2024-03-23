import MealItem from "./MealItem";
import useHttp from "../../hooks/useHttp";
import Error from '../Error.jsx';

const requestConfig = {}; // {} is a js object and is recreated everytime which causes infinite loop. To avoid it we are storing it in a const.

export default function Meals() {
   const {
    data: loadedMeals, 
    isLoading, 
    error 
    } = useHttp('http://localhost:3000/meals',requestConfig,[]);

    if(isLoading) {
        return <p className="center">Fetching Meals...</p>;
    }

    if(error) {
        return <Error title="Failed to fetch meals" message={error} />;
    }

    return (
    <ul id="meals" >
        {loadedMeals && loadedMeals.length > 0 && loadedMeals.map((meal)=>(
           <MealItem meal={meal} key={meal.id} ></MealItem>
          //<li key={meal.id}>{meal.name}</li>
        ))}
        
    </ul>
    );
}