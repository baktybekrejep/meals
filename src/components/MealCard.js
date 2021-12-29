import React from 'react';
import {Link} from "react-router-dom";

const MealCard = ({meal}) => {
    return (
        <div  className="col-5">
            <div className="box">
                <Link to={`/meals/${meal.idMeal}`}>
                    <img className="photo" src={meal.strMealThumb} alt=""/>
                    <h3>{meal.strMeal}</h3>
                </Link>
            </div>
        </div>
    );
};

export default MealCard;