import './style.css';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/pexels-suzy-hazelwood-1126359.jpg';
import Img2 from '../../assets/images/pexels-julie-aagaard-2097090.jpg';
import Img3 from '../../assets/images/pexels-navada-ra-1703272.jpg';
import Img4 from '../../assets/images/pexels-photomix-company-103566.jpg';


function Dishes() {

  return (
    <div className='dishes'>
        <div className="dishes-imgs">
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
        <div className="dishes-text">
            <h2>Our Meals</h2>
            <h4>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</h4>
            <Link to='/meals'>
                <button>View Full Meals</button>
            </Link>
        </div>
      </div>
  )
}

export default Dishes