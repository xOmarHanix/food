import './style.css';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/pexels-ted-f-strassburg-iii-14899491.jpg';
import Img2 from '../../assets/images/pexels-markus-winkler-12481166.jpg';
import Img3 from '../../assets/images/pexels-karl-solano-7282786.jpg';
import Img4 from '../../assets/images/pexels-vincent-rivaud-2876748.jpg';





function Cuisine() {
  return (
    <div className='cuisine'>
        <div className="cuisine-text">
            <h2>Our Cuisines</h2>
            <h4>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</h4>
            <Link to='/cuisines'>
                <button>View Full Cuisines</button>
            </Link>
        </div>
        <div className="cuisine-imgs">
            <div className="img-box">
                <img src={Img1} alt="" />
            </div>
            <div className="img-box">
                <img src={Img2} alt="" />
            </div>                
            <div className="img-box">
                <img src={Img3} alt="" />
            </div>                
            <div className="img-box">
                <img src={Img4} alt="" />
            </div>        
        </div>
    </div>
  )
}

export default Cuisine