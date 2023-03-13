import './style.css';
import { Link } from 'react-router-dom';
import Img1 from '../../../assets/images/meals-box/6505068-baked-lemon-butter-chicken-thighs-photo-by-france-c-2000-396f6c3ca61947cc9cf84f96b83d5ba7.jpg'
import Img2 from '../../../assets/images/meals-box/pexels-photo-6461646.jpeg';
import Img3 from '../../../assets/images/meals-box/brownie-dessert-cake-sweet-45202.jpeg';
import Img4 from '../../../assets/images/meals-box/pexels-photo-434283.jpeg';
import Img5 from '../../../assets/images/meals-box/pexels-photo-2862154.jpeg';
import Img6 from '../../../assets/images/meals-box/pexels-mariana-kurnyk-1775043.jpg';
import Img7 from '../../../assets/images/meals-box/chicken-soup-one-dish-kitchen-square-1200.jpg';
import Img8 from '../../../assets/images/meals-box/Hero_sauces_desktop_1260x560.jpg';
import Img9 from '../../../assets/images/meals-box/1214_mj07-marinades-article.jpg';
import Img10 from '../../../assets/images/meals-box/fish-finger-appetizers-with-onion-on-table-TZVK2G6-min-scaled-pb7rpybi4yjg4ahhlhz1la7n5n14tselbyinmgh0xw.jpg';
import Img11 from '../../../assets/images/meals-box/pexels-alexander-mils-2103947.jpg';
import Img12 from '../../../assets/images/meals-box/pexels-julia-zolotova-1320998.jpg';


function DishesBox() {
  return (
    <div className='dishes-box'>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/MainCourses'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img1} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Main Courses</h2>             
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/SideDishes'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img2} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Side Dishes</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Desserts'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img3} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Desserts</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Appetizers'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img4} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Appetizers</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Salads'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img5} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Salads</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Breads'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img6} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Breads</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Soups'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img7} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Soups</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Sauces'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img8} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Sauces</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Marinades'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img9} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Marinades</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/FingerFood'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img10} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Finger Food</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Snacks'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img11} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Snacks</h2>
            </div>
        </div>
        <div className="dishes-items">
            <div className="dishes-link">
                <Link to={'/meal/Drinks'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img12} />
                </Link>
            </div>
            <div className="dishes-text">
                <h2>Drinks</h2>
            </div>
        </div>
    </div>
  )
}

export default DishesBox