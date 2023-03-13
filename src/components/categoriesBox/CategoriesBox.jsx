import './style.css';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/categories-box/flour-in-bowl-bread-flour-vs-all-purpose-flour-1611940896.jpg';
import Img2 from '../../assets/images/categories-box/pexels-towfiqu-barbhuiya-12001951.jpg';
import Img3 from '../../assets/images/categories-box/pexels-karolina-grabowska-4198928.jpg';
import Img4 from '../../assets/images/categories-box/20599_sfs-rice-and-pasta-pilaf-29.jpg';
import Img5 from '../../assets/images/categories-box/pexels-geraud-pfeiffer-6605208.jpg';
import Img6 from '../../assets/images/categories-box/pexels-pixabay-53588.jpg';
import Img7 from '../../assets/images/categories-box/pexels-antony-trivet-12884006.jpg';
import Img8 from '../../assets/images/categories-box/baking.jpg';
import Img9 from '../../assets/images/categories-box/pexels-pixabay-33783.jpg';
import Img10 from '../../assets/images/categories-box/pexels-pixabay-266755.jpg';
import Img11 from '../../assets/images/categories-box/Potatoes-shutterstock-1721688538.jpg';
import Img12 from '../../assets/images/categories-box/T125AE008_chai_brewed_loose_leaf.jpg';
import Img13 from '../../assets/images/categories-box/homemade-nut-butter-RU355222-cc1a5d33609d41eda5e3e12f3531cd1e.jpg';
import Img14 from '../../assets/images/categories-box/pexels-roman-odintsov-6422029.jpg';
import Img15 from '../../assets/images/categories-box/I-Heart-Naptime-olive-garden-salad-dressing-recipe-5.jpg';
import Img16 from '../../assets/images/categories-box/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg';

function CategoriesBox() {
  return (
    <div className='categories-box'>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Flour'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img1} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Flour</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Tuna'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img2} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Tuna</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/tomatoes'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img6} />
                </Link>
            </div>
            <div className="category-text">
                <h2>tomatoes</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Fish'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img7} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Fish</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Coffee'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img10} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Coffee</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/potatoes'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img11} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Potatoes</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Spices & Seasonings'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img3} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Spices & Seasonings</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Pasta & Rice'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img4}/>
                </Link>
            </div>
            <div className="category-text">
                <h2>Pasta and Rice</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Breads'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img5} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Breads</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Nut butters'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img13} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Nut butters</h2> 
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Honey'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img14} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Honey</h2> 
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Oil & Vinegar'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img9} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Oil, Vinegar</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Salad Dressing'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img15} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Salad Dressing</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Milk & Eggs & Other Dairy'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img8} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Milk & Eggs & Other Dairy</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Tea'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img12} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Tea</h2>
            </div>
        </div>
        <div className="category-items">
            <div className="category-links">
                <Link to={'/category/Cereal'}>
                    <div className="overlay">
                        <button>Vist Now</button>
                    </div>
                    <img src={Img16} />
                </Link>
            </div>
            <div className="category-text">
                <h2>Cereal</h2>
            </div>
        </div>
    </div>
  )
}

export default CategoriesBox