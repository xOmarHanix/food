import './style.css';
import Header from '../../components/header/Header';

function MealBanner({title, img}) {
  return (
    <div className='meal-banner'>
        <div className="overlay">
            <Header />
            <h1>{title}</h1>
        </div>
        <img src={img} />
    </div>
  )
}

export default MealBanner