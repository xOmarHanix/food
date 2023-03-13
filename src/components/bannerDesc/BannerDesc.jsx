import { Link } from 'react-router-dom';
import './style.css';

function BannerDesc() {
  return (
    <div className='banner-desc'>'
        <h1>your Gute for learning how to make your favorite restaurent's dishes</h1>
        <h3>it's even better than an expensive cookery books</h3>
        <Link to={'/cuisines'}>
            <button>Explore Our Menu</button>
        </Link>
    </div>
  )
}

export default BannerDesc