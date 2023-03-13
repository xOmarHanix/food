import './style.css';
import Header from '../header/Header';

function IngredientBanner({title, img}) {
  return (
    <div>
        <div className='ingredient-banner'>
            <div className="overlay">
                <Header />
                <h1>{title}</h1>
            </div>
            <img src={img} />
        </div>
    </div>
  )
}

export default IngredientBanner