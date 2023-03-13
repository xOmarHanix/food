import './style.css';
import { Link } from 'react-router-dom';
import Img1 from '../../../assets/images/cuisine-box/Corndogs-7832ef6.jpg';
import Img2 from '../../../assets/images/cuisine-box/pexels-sebastian-coman-photography-3649535.jpg';
import Img3 from '../../../assets/images/cuisine-box/image.jpg';
import Img4 from '../../../assets/images/cuisine-box/Homemade-Anglesey-Eggs.png';
import Img5 from '../../../assets/images/cuisine-box/pexels-chevanon-photography-323682.jpg';
import Img6 from '../../../assets/images/cuisine-box/schintzel-min.jpg';
import Img7 from '../../../assets/images/cuisine-box/pexels-pixabay-434258.jpg';
import Img8 from '../../../assets/images/cuisine-box/pexels-marvin-ozz-2474661.jpg';
import Img9 from '../../../assets/images/cuisine-box/pexels-vincent-rivaud-2295285.jpg';
import Img10 from '../../../assets/images/cuisine-box/pexels-pixabay-357756.jpg';
import Img11 from '../../../assets/images/cuisine-box/pexels-roman-odintsov-5338144.jpg';
import Img12 from '../../../assets/images/cuisine-box/pexels-roman-odintsov-4958530.jpg';
import Img13 from '../../../assets/images/cuisine-box/pexels-arthouse-studio-4344431.jpg';
import Img14 from '../../../assets/images/cuisine-box/160929095729-essential-spanish-dish-fideua-brindisa-full-169.jpg';
import Img15 from '../../../assets/images/cuisine-box/pad-thai.jpg';
import Img16 from '../../../assets/images/cuisine-box/pexels-tranmautritam-98874.jpg';

function CuisineBox() {
  return (
    <div className='cuisine-box'>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/American'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img1} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>American Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/British'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img2} />
               </Link>
            </div>
            <div className="cuisine-text">
                <h2>British Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Chinese'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img3} />
               </Link>
            </div>
            <div className="cuisine-text">
                <h2>Chinese Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/European'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img4} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>European Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/French'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img5} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>French Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/German'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img6} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>German Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Greek'}>
                    <div className="overlay">
                        <button>Vist Now</button>  
                    </div>
                    <img src={Img7} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Greek Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Indian'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img8} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Indian Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Italian'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img9} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Italian Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Japanese'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img10} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Japanese Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Korean'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img11} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Korean Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Mexican'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img12} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Mexican Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Nordic'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img13} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Nordic Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Spanish'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img14} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Spanish Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Thai'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img15}/>
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Thai Cuisine</h2>
            </div>
        </div>
        <div className="cuisine-items">
            <div className="cuisine-links">
                <Link to={'/cuisine/Vietnamese'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img16} />
                </Link>
            </div>
            <div className="cuisine-text">
                <h2>Vietnamese Cuisine</h2>
            </div>
        </div>
    </div>
  )
}

export default CuisineBox