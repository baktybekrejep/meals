import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import MealCard from "./MealCard";

const Main = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/latest.php")
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        meals.map(it => {
                            return (
                               <MealCard key={it.idMeal} meal={it}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Main;