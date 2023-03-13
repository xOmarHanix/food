import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Details() {

    const params = useParams()

    const [details, setDetails] = useState({})




    const getRecipe = async () => {
        const api = await fetch (`https://api.spoonacular.com/recipes/${params.Id}/information?apiKey=26507f348df346a5aa7216406329363e`)
        const data = await api.json()
        console.log(data)
        setDetails(data)
    }

    useEffect(() => {
        getRecipe()
    }, [])

  return (
    <>
        <div className="special-header">
            <Header />
        </div>

        <div className="details">
            <div className="details-left">
                <div className="recipe-img">
                    <img src={details.image} alt="" />
                </div>
            </div>
            <div className="details-right">
                <h1>Ricepe Name: {details.title}</h1>
                <div className="info">
                    <div className="ingredients">
                        <h2>ingredients</h2>
                        <ol>
                            {details?.extendedIngredients?.map((ingredient) => (
                                <li key={ingredient?.id}>
                                    {ingredient?.name}
                                </li>
                            ))}
                        </ol>
                    </div>
                   <div className="summary">
                        <h2>instructions</h2>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                   </div>
                </div>
            </div>
        </div>
        <div className="special-footer">
            <Footer  /> 
        </div>
    </>
  )
}

export default Details