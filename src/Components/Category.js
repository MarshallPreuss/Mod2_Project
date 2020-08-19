import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CategoriesPage from '../Pages/CategoriesPage';

export const Category = ({category}) => {

  function selectCat() {
    //a.title.classList.add("selected");
  
    console.log("a");
  }

  return(
    <article className="Article">
        <h2 className="artTitle">{category.title}</h2>
        <p className="artPar">{category.description.substring(0, 100)}</p>
    </article>
  )
}
