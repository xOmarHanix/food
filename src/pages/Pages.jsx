import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home'
import Cuisines from './cuisines/Cuisines';
import Meals from './meals/Meals';
import Diets from './diets/Diets';
import Categories from './categories/Categories';
import Cuisine from './cuisine/Cuisine';
import Meal from './meal/Meal';
import Category from './category/Category';
import Diet from './diet/Diet';
import Details from './details/Details';

function Pages() {
  return (
    <div>
        <Routes>
            <Route path='/food' element={<Navigate to='/' />} />
            <Route path='/' element={<Home />} />
            <Route path='/cuisines' element={<Cuisines />} />
            <Route path='/cuisine/:Type' element={<Cuisine />} />
            <Route path='/meals' element={<Meals />} />
            <Route path='/meal/:Sort' element={<Meal />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/category/:Group' element={<Category />} />
            <Route path='/diets' element={<Diets />} />
            <Route path='/diet/:Kind' element={<Diet />} />
            <Route path='/details/:Id' element={<Details />} />
        </Routes>
    </div>
  )
}

export default Pages