import './style.css';
import { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import DietBanner from '../../components/dietBanner/DietBanner';
import GF from '../../assets/images/diet-ai/16ef7d61-b340-4fe0-bde2-97b50b8b00c2.jpg';
import KE from '../../assets/images/diet-ai/4f964860-f745-4e38-8b5c-6df142ca8c59.jpg';
import VE from '../../assets/images/diet-ai/9cb3746a-e4b2-40cd-949d-7afd23b8f757.jpg';
import LV from '../../assets/images/diet-ai/f0bfb4a2-2b85-4dd4-ab3a-eaffa2f72d53.jpg';
import OV from '../../assets/images/diet-ai/3404d7ee-1d06-45dd-9406-f4141c428abf.jpg';
import PE from '../../assets/images/diet-ai/ffa62424-d87e-4ff4-a6e4-8740e22c5c02.jpg';
import PA from '../../assets/images/diet-ai/6e458004-07f1-455b-a8b9-864d0bd4f095.jpg';
import LF from '../../assets/images/diet-ai/26cc6ec3-de53-43c7-bbc9-88dbbdc0ea91.jpg';
import WH from '../../assets/images/diet-ai/6e458004-07f1-455b-a8b9-864d0bd4f095.jpg';
import OM from '../../assets/images/diet-ai/135f4403-26ef-4124-a88b-18eac1d15c0f.jpg';
import ME from '../../assets/images/diet-ai/43b90b7d-98ec-415e-88ff-6e9076b0f96e.jpg';
import GA from '../../assets/images/diet-ai/b18cf298-8cd0-4aed-8137-41d7a0640bc7.jpg';




function Diet() {

    const params = useParams()
    const [diet, setDiet] = useState([])

    const fetchDiet = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=26507f348df346a5aa7216406329363e&diet=${name}&number=99`)
        const data = await api.json()
        setDiet(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchDiet(params.Kind)
    }, [params.Kind])

  return (
    <>

        {
            params.Kind === 'Gluten Free' ? <DietBanner title={`${params.Kind}`} img={GF} /> :
            params.Kind === 'Ketogenic' ? <DietBanner title={`${params.Kind}`} img={KE} /> :
            params.Kind === 'Vegetarian' ? <DietBanner title={`${params.Kind}`} img={VE} /> :
            params.Kind === 'Lacto-Vegetarian' ? <DietBanner title={`${params.Kind}`} img={LV} /> :
            params.Kind === 'Ovo-Vegetarian' ? <DietBanner title={`${params.Kind}`} img={OV} /> :
            params.Kind === 'Pescetarian' ? <DietBanner title={`${params.Kind}`} img={PE} /> :
            params.Kind === 'Paleo' ? <DietBanner title={`${params.Kind}`} img={PA} /> :
            params.Kind === 'Low FODMAP' ? <DietBanner title={`${params.Kind}`} img={LF} /> :
            params.Kind === 'Whole30' ? <DietBanner title={`${params.Kind}`} img={WH} /> :
            params.Kind === 'Omnivore' ? <DietBanner title={`${params.Kind}`} img={OM} /> :
            params.Kind === 'Mediterranean' ? <DietBanner title={`${params.Kind}`} img={ME} /> :
            params.Kind === 'GAPS' ? <DietBanner title={`${params.Kind}`} img={GA} /> :
            <DietBanner title={`${params.Kind}`} />
        }

        <div className='diet-box'>
            {diet.map((result) => (
            <div className="diet-items" key={result.id}>
                <div className="diet-links">
                <Link to={'/details/' +result.id}>
                    <div className="diet-overlay">
                    <button>See Details</button>
                    </div>
                    <img src={result.image} />
                </Link>
                </div>
                <div className="diet-text">
                <h3>{result.title}</h3>
                </div>
            </div>
            ))}
        </div>

        <Footer />

    </>
  )
}

export default Diet