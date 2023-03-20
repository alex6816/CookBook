import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import '../styles/Recipe.css';

const Recipe = () => {

    const {id} = useParams();

    const [recipes, setRecipes] = useState([]);

    if (!recipes.length) {
        axios.get("http://127.0.0.1:8000/recipes/").then(res => {
            setRecipes(res.data);
            console.log(res.data)
        });
    }

    return (
       
        <div className="recipe-box">
            {recipes.map (recipe =>
                    recipe.id ==`${id}` ?
                        <div>
                            <h1>{recipe.title}</h1>
                            <p>{recipe.content}</p>
                        </div>
                    : ''      
                )}
        </div>
    )
}

export default Recipe; 