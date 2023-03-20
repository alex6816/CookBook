import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Categories from "./components/Categories";
import Homepage from './components/Homepage';
import Layout from './components/Layout'; 
import Category from './components/Category';
import Recipe from './components/Recipe';

import './styles/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="cats" element={<Categories />}> </Route> 
          <Route path="cats/:id" element={<Category />}> </Route>
          <Route path="cats/recipe/:id" element={<Recipe />}> </Route>
        </Route> 
      </Routes>
    </>
      
  );
}

export default App;