import './style.css';
import Header from '../header/Header';

function CuisineBanner({title, img}) {
  return (
    <div className='cuisine-banner'>
        <div className="overlay">
            <Header />
            <h1>{title}</h1>
        </div>
        <img src={img} />
    </div>
  )
}

export default CuisineBanner