import './style.css';
import Header from '../header/Header';

function DietBanner({title, img}) {
  return (
    <div className='diet-banner'>
        <div className="overlay">
            <Header />
            <h1>{title}</h1>
        </div>
        <img src={img} />
    </div>
  )
}

export default DietBanner