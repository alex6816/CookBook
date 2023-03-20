import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import '../styles/Categories.css';

function Categories() {
    
    const [categories, setCategories] = useState([]);

    if (!categories.length) {
        axios.get("http://127.0.0.1:8000/").then(res => {
            setCategories(res.data);
            console.log(res.data)
        });
    }
    
    return (
        <div className="cat-list">
            {categories.map(category => 
                <ul>
                    <li><Link key={category.id} to={`/cats/${category.id}`}>{category.name}</Link></li>
                </ul>
            )}
        </div>
    )
}

export default Categories;
