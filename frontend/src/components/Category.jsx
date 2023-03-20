import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import '../styles/Category.css';

const Category = () => {

    const {id} = useParams();

    const catDict = {
        1: "Первое блюдо",
        2: "Основное блюдо",
        3: "Закуски",
        6: "Напитки",
    }
    
    const [recipes, setRecipes] = useState([]);

    if (!recipes.length) {
        axios.get("http://127.0.0.1:8000/recipes/").then(res => {
            setRecipes(res.data);
            console.log(res.data)
        });
    }
   
    return (
        <>
            <div className="one-category">
                <h1>{catDict[`${id}`]}</h1>
                {recipes.map (recipe =>
                    recipe.category ==`${id}` ?
                        <ul>
                            <li><h3>{recipe.title}</h3></li>
                            <li className="content">{recipe.content}</li>
                            <Link to={`/cats/recipe/${recipe.id}`}><button>Подробнее</button></Link>
                        </ul> : ''
                )}
            </div>
         </> 
       )
}

export default Category;