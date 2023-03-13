import './style.css';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/diets-box/Nikki.png';
import Img2 from '../../assets/images/diets-box/What_Is_The_Keto_Diet_PHOTO.jpeg.jpg';
import Img3 from '../../assets/images/diets-box/Vegan-diet.jpg';
import Img4 from '../../assets/images/diets-box/vegetarian1561525585.jpg';
import Img5 from '../../assets/images/diets-box/shutterstock_1560053969.jpg';
import Img6 from '../../assets/images/diets-box/PescatarianFB.jpg';
import Img7 from '../../assets/images/diets-box/images.jpg';
import Img8 from '../../assets/images/diets-box/ibs-low-fodmap-diet-guide-food-list-7-day-sample-menu-1440x810.jpg';
import Img9 from '../../assets/images/diets-box/050316_whole30_THUMB_LARGE.jpg';
import Img10 from '../../assets/images/diets-box/pexels-photo-218844-900x674.jpeg';
import Img11 from '../../assets/images/diets-box/warm-mediterranean-tuna-and-risoni-salad-65488-1.jpeg';
import Img12 from '../../assets/images/diets-box/images012.jpg';

function DietBox() {
  return (
    <div className='diet-box'>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Gluten Free'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img1} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Gluten Free Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Ketogenic'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img2} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Ketogenic Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Vegetarian'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img3} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Vegetarian Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Lacto-Vegetarian'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img4} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Lacto-Vegetarian Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Ovo-Vegetarian'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img5} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Ovo-Vegetarian Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Pescetarian'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img6} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Pescetarian Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Paleo'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img7} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Paleo Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Low FODMAP'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img8} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Low FODMAP Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Whole30'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img9} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Whole30 Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Omnivore'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img10} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Omnivore Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/Mediterranean'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img11} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>Mediterranean Diet</h2>
            </div>
        </div>
        <div className="diet-items">
            <div className="diet-link">
                <Link to={'/diet/GAPS'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img12} />
                </Link>
            </div>
            <div className="diet-text">
                <h2>GAPS Diet</h2>
            </div>
        </div>
    </div>
  )
}

export default DietBox