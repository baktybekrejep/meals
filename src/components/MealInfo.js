import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const MealInfo = () => {
    const [meal, setMeal] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(({data}) => {
                const mealWithIngs = {...data.meals[0]}
                const ings = []
                for (let i = 1; i <= 20; i++) {
                    const ing = mealWithIngs[`strIngredient${i}`]
                    if (ing) ings.push(ing)
                }
                mealWithIngs.ings = ings
                setMeal(mealWithIngs)
            },)


    }, [id])
    return (
        <div>
            <img width="300" src={meal.strMealThumb} alt=""/>
            <h3>{meal.strMeal}</h3>
            <div>{meal.strInstructions}</div>
            <div>{meal.ings?.map((it, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/ings/${it}`}>
                            <img src={`https://www.themealdb.com/images/ingredients/${it}-Small.png`} alt=""/>
                            <div>{it}</div>
                        </Link>

                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default MealInfo;