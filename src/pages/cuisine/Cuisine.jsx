import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import CuisineBanner from '../../components/cuisineBanner/CuisineBanner';
import Footer from '../../components/footer/Footer';
import AM from '../../assets/images/flags/omar002_American_cuisine_21b1a91b-897b-4dff-8684-125ec7bc3dbd.png';
import BR from '../../assets/images/flags/omar002_British_cuisine_b8f4a7de-97b7-4be8-ac1c-c5af8ee0fa4c.png'
import CH from '../../assets/images/flags/omar002_Chinese_cuisine_cf4745ca-db6e-4461-bd4d-e64ae4529dd3.png';
import EU from '../../assets/images/flags/omar002_European_cuisine_f5f83541-f838-4d3a-9432-5ebd36619b8a.png';
import FR from '../../assets/images/flags/ragab_French_cuisine_0aac72ce-f14d-42ed-aa99-a06597324688.png';
import GR from '../../assets/images/flags/ragab_German_cusine_048d6466-e0dc-4575-813c-8c12734fca3a.png';
import GK from '../../assets/images/flags/ragab_Greek_cuisine_d56a0e27-7389-465f-a328-1e176d38a4e4.png';
import IN from '../../assets/images/flags/ragab_Indian_cuisine_9ae98199-e41a-435e-85f3-0e7f7e7e30bd.png';
import IT from '../../assets/images/flags/ragab_Italian_cuisine_9b3e95e6-ebbe-4f88-a163-76338af7555f.png';
import JA from '../../assets/images/flags/ragab_Japanese_cuisine_f581f39b-5dd0-4544-b2a7-bf24c8b5060f.png';
import KO from '../../assets/images/flags/ragab_Korean_cuisine_7cb84af4-df68-4885-9be4-d4bfb18c7527.png';
import ME from '../../assets/images/flags/ragab_Mexican_cuisine_29cf9938-ee92-4a80-b13d-5503ea6ab2f7.png';
import NO from '../../assets/images/flags/ragab_Nordic_cuisine_d530bc18-864e-4279-924d-7119d02dbb30.png';
import SP from '../../assets/images/flags/ragab_Spanish_cuisine_421cc04d-e93e-49ed-a59a-c8702fadac1c.png';
import TH from '../../assets/images/flags/ragab_Thai_cuisine_b11c57eb-dea2-4697-b9ab-7c56727633c4.png';
import VI from '../../assets/images/flags/ragab_Vietnamese_cuisine_f32519ea-4caf-407f-ac2e-dfc81d6bec1c.png';

function Cuisine() {

    const params = useParams();

    const [cuisine,setCuisine] = useState([]);

    const fetchCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f07de1d093574caa9b9531cda4d2b356&cuisine=${name}&number=99`);
        const data = await api.json()
        setCuisine(data.results)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchCuisine(params.Type)
    }, [params.Type])

  return (
    <>
        {
            params.Type === 'American' ? 
            <CuisineBanner title={`${params.Type}`} img={AM} /> :
            params.Type === 'British' ? 
            <CuisineBanner title={`${params.Type}`} img={BR} /> :
            params.Type === 'Chinese' ? 
            <CuisineBanner title={`${params.Type}`} img={CH} /> :
            params.Type === 'European' ? 
            <CuisineBanner title={`${params.Type}`} img={EU} /> :
            params.Type === 'French' ? 
            <CuisineBanner title={`${params.Type}`} img={FR} /> :
            params.Type === 'German' ? 
            <CuisineBanner title={`${params.Type}`} img={GR} /> :
            params.Type === 'Greek' ? 
            <CuisineBanner title={`${params.Type}`} img={GK} /> :
            params.Type === 'Indian' ? 
            <CuisineBanner title={`${params.Type}`} img={IN} /> :
            params.Type === 'Italian' ? 
            <CuisineBanner title={`${params.Type}`} img={IT} /> :
            params.Type === 'Japanese' ? 
            <CuisineBanner title={`${params.Type}`} img={JA} /> :
            params.Type === 'Korean' ? 
            <CuisineBanner title={`${params.Type}`} img={KO} /> :
            params.Type === 'Mexican' ? 
            <CuisineBanner title={`${params.Type}`} img={ME} /> :
            params.Type === 'Nordic' ? 
            <CuisineBanner title={`${params.Type}`} img={NO} /> :
            params.Type === 'Spanish' ? 
            <CuisineBanner title={`${params.Type}`} img={SP} /> :
            params.Type === 'Thai' ? 
            <CuisineBanner title={`${params.Type}`} img={TH} /> :
            params.Type === 'Vietnamese' ? 
            <CuisineBanner title={`${params.Type}`} img={VI} /> :
            <CuisineBanner title={`${params.Type}`} />
        }
        <div className='cuisine-type-box'>
            {cuisine.map((result) => (
                <div className="cuisine-type-items" key={result.id}>
                    <div className="cuisine-type-links">
                        <Link to={'/details/' + result.id}>
                            <div className="type-overlay">
                                <button>See Details</button>
                            </div>
                            <img src={result.image} />
                        </Link>
                    </div>
                    <div className="cuisine-type-text">
                        <h3>{result.title}</h3>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </>
  )
}

export default Cuisine