import './style.css';
import { GiKnifeFork } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <Link to='/' className="logo">
            <GiKnifeFork />
            <h3>Food Hub</h3>
        </Link >
        <ul className="lists">
            <li className='list-item'>
                <NavLink to='/cuisines'>Cuisines</NavLink>            
            </li>
            <li className='list-item'>
                <NavLink to='/meals'>Meals</NavLink>
            </li>
            <li className='list-item'>
                <NavLink to='/categories'>Ingredients</NavLink>
            </li>
            <li className='list-item'>
                <NavLink to='/diets'>Diets</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header