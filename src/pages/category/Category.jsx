import './style.css';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import IngredientBanner from '../../components/ingredientBanner/IngredientBanner';
import FL from '../../assets/images/ingredients-ai/mena_flour_72decd46-b14f-478d-a489-8f80d9ac81a6.png';
import TU from '../../assets/images/ingredients-ai/nour154_tuna_41be4286-c077-4430-8876-01c2f55683ba.png';
import TO from '../../assets/images/ingredients-ai/nour154_tomatoes_8b74236b-c25d-4f98-b431-bc81fecd4bdf.png';
import FI from '../../assets/images/ingredients-ai/nour154_cooked_fish_bd4cab91-fcce-4904-a792-c0a8a7b9932a.png';
import CO from '../../assets/images/ingredients-ai/nour154_coffee_e0cb0877-6430-4ab9-89ba-2c085972823a.png';
import PO from '../../assets/images/ingredients-ai/nour154_Potatoes_d6a340d5-1e37-4655-9eb9-f02fe62f6272.png';
import SS from '../../assets/images/ingredients-ai/nour154_Spices__Seasonings_56906b48-a893-4952-9a44-2c8c2da00372.png';
import PR from '../../assets/images/ingredients-ai/6c624c0d-6423-473e-a570-558d65825786.jpg';
import BR from '../../assets/images/ingredients-ai/5eb04df4-a6cb-4764-b5fd-bf6b2a66a18d.jpg';
import NB from '../../assets/images/ingredients-ai/d84ca232-c8da-463b-a001-0b3d6d5fa210.jpg';
import HO from '../../assets/images/ingredients-ai/nour154_Honey_948671bf-b109-4c5d-81c2-9b930f9e5e2f.png';
import ME from '../../assets/images/ingredients-ai/103bd784-d4aa-4e35-9dd9-6a396dcdcbf7.jpg';
import OF from '../../assets/images/ingredients-ai/nour154_Oil_and_Vinegar_03fffaad-ff67-4d84-b233-e3d0cab1b6f5.png';
import SD from '../../assets/images/ingredients-ai/29f97fd1-5266-4d1c-99ac-de58e11e7d1a.jpg'
import TE from '../../assets/images/ingredients-ai/pexels-hasan-albari-1493080.jpg';
import CE from '../../assets/images/ingredients-ai/pexels-ron-lach-7791103.jpg';




function Category() {

    const [category, setCategory] = useState([])

    const params = useParams();

    const fetchCategories = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=8da8f66918a4438ba7c5d4db82ee6a5d&number=99&ingredients=${name}`)
        const data = await api.json()
        setCategory(data)
        console.log(data)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchCategories(params.Group)
    }, [params.Group])

  return (
    <>

        {
            params.Group === 'Flour' ? <IngredientBanner title={`${params.Group}`} img={FL} /> : 
            params.Group === 'Tuna' ? <IngredientBanner title={`${params.Group}`} img={TU} /> :
            params.Group === 'tomatoes' ? <IngredientBanner title={`${params.Group}`} img={TO} /> :
            params.Group === 'Fish' ? <IngredientBanner title={`${params.Group}`} img={FI} /> :
            params.Group === 'Coffee' ? <IngredientBanner title={`${params.Group}`} img={CO} /> :
            params.Group === 'potatoes' ? <IngredientBanner title={`${params.Group}`} img={PO} /> :
            params.Group === 'Spices & Seasonings' ? <IngredientBanner title={`${params.Group}`} img={SS} /> :
            params.Group === 'Pasta & Rice' ? <IngredientBanner title={`${params.Group}`} img={PR} /> :
            params.Group === 'Breads' ? <IngredientBanner title={`${params.Group}`} img={BR} /> :
            params.Group === 'Nut butters' ? <IngredientBanner title={`${params.Group}`} img={NB} /> :
            params.Group === 'Honey' ? <IngredientBanner title={`${params.Group}`} img={HO} /> :
            params.Group === 'Oil & Vinegar' ? <IngredientBanner title={`${params.Group}`} img={OF} /> :
            params.Group === 'Salad Dressing' ? <IngredientBanner title={`${params.Group}`} img={SD} /> :
            params.Group === 'Milk & Eggs & Other Dairy' ? <IngredientBanner title={`${params.Group}`} img={ME} /> :
            params.Group === 'Tea' ? <IngredientBanner title={`${params.Group}`} img={TE} /> :
            params.Group === 'Cereal' ? <IngredientBanner title={`${params.Group}`} img={CE} /> :
            <IngredientBanner title={`${params.Group}`} />
        }

        <div className='category-box'>
            {category.map((result) => (
                <div className="category-items" key={result.id}>
                    <div className="category-links">
                        <Link to={'/details/' + result.id}>
                            <div className="category-overlay">
                            <button>See Details</button>
                            </div>
                            <img src={result.image} />
                        </Link>
                    </div>
                        <div className="category-text">
                        <h3>{result.title}</h3>
                    </div>
                </div>
            ))}
        </div>

        <Footer />
    </>
  )
}

export default Category