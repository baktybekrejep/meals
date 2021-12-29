import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const FromIngs = () => {
    const {ing} = useParams()
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
            .then(({data}) => setMeals(data.meals))
    }, [ing])
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="ingredient">
                        <img  className="ingredient-pic" src={`http://www.themealdb.com/images/ingredients/${ing}.png`} alt=""/>
                        <h3 className="ingredient-pic-title">{ing}</h3>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            meals.map(item => {
                                return (
                                    <div className="col-3">
                                        <Link to={`/meals/${item.idMeal}`} className="meal-card-fromIngs">
                                            <img width="200" className="meal-pic-fromIngs" src={item.strMealThumb} alt=""/>
                                            <div className="meal-link"> {item.strMeal}</div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromIngs;