import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import MealBanner from '../../components/mealBanner/MealBanner';  
import MC from '../../assets/images/meal-ai/ragab_Main_Courses_840fb75d-7342-4208-8245-0686324a9158.png';
import SD from '../../assets/images/meal-ai/mena_SideDishes_a4f3cb31-541e-456f-b6e8-b774e47f01f5.png';
import DE from '../../assets/images/meal-ai/mena_Desserts_d4105cb7-abe4-425c-83a6-dd91ee87aa6f.png';
import AP from '../../assets/images/meal-ai/mena_Appetizers_88c26636-2dfb-4a4c-a14c-e2396360959a.png';
import SA from '../../assets/images/meal-ai/mena_Salads_b87c3785-2c06-4f28-ae76-b97e47d60985.png';
import BR from '../../assets/images/meal-ai/mena_Breads_0aa13f54-2405-4d13-8f2b-32bb638620c7.png';
import SO from '../../assets/images/meal-ai/mena_Soups_28fff2c5-acde-4cef-94b7-35a763fb4455.png';
import SU from '../../assets/images/meal-ai/mena_Sauces_a147fc56-d1d6-4439-a7bf-fc0567e47364.png';
import MA from '../../assets/images/meal-ai/mena_Marinades_c51e137b-d9da-4de9-b36c-c7f4ef9e4106.png';
import FF from '../../assets/images/meal-ai/mena_French_Fries_fb094016-3851-4da2-94aa-f69243c0168e.png';
import SN from '../../assets/images/meal-ai/mena_Snacks_34780c39-43a8-42cb-bb90-febf26345877.png';
import DR from '../../assets/images/meal-ai/mena_Drinks_6dc1dcaa-ce0b-4e02-a761-9d51bdb84d98.png';



function Meal() {

    const params = useParams();

    const [meal,setMeal] = useState([])

    const fetchMeals = async (name) => {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=26507f348df346a5aa7216406329363e&type=${name}&number=99`);
      const data = await api.json();
      setMeal(data.results)
      console.log(data.result)
    }

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      fetchMeals(params.Sort)

    }, [params.Sort])

  return (
    <>
      {
        params.Sort === 'MainCourses' ? 
        <MealBanner title={`${params.Sort}`} img={MC} /> :
        params.Sort === 'SideDishes' ? 
        <MealBanner title={`${params.Sort}`} img={SD} /> :
        params.Sort === 'Desserts' ? 
        <MealBanner title={`${params.Sort}`} img={DE} /> :
        params.Sort === 'Appetizers' ? 
        <MealBanner title={`${params.Sort}`} img={AP} /> :
        params.Sort === 'Salads' ? 
        <MealBanner title={`${params.Sort}`} img={SA} /> :
        params.Sort === 'Breads' ? 
        <MealBanner title={`${params.Sort}`} img={BR} /> :
        params.Sort === 'Soups' ? 
        <MealBanner title={`${params.Sort}`} img={SO} /> :
        params.Sort === 'Sauces' ? 
        <MealBanner title={`${params.Sort}`} img={SU} /> :
        params.Sort === 'Marinades' ? 
        <MealBanner title={`${params.Sort}`} img={MA} /> :
        params.Sort === 'FingerFood' ? 
        <MealBanner title={`${params.Sort}`} img={FF} /> :
        params.Sort === 'Snacks' ? 
        <MealBanner title={`${params.Sort}`} img={SN} /> :
        params.Sort === 'Drinks' ? 
        <MealBanner title={`${params.Sort}`} img={DR} /> :
        <MealBanner title={`${params.Sort}`} />
      }

      <div className='meal-box'>
        {meal.map((result) => (
          <div className="meal-items" key={result.id}>
            <div className="meal-links">
              <Link to={'/details/' + result.id}>
                <div className="meal-overlay">
                  <button>See Details</button>
                </div>
                <img src={result.image} />
              </Link>
            </div>
            <div className="meal-text">
              <h3>{result.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </>
  )
}

export default Meal