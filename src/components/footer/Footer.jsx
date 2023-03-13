import './style.css';
import { GiKnifeFork } from 'react-icons/gi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineGoogle } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
        <h5>&copy; 2023 Food Hub. All Rights Reserved</h5>
        <GiKnifeFork className='fork' />
        <ul>
            <li>
                <FaFacebookF />
            </li>
            <li>
                <FaTwitter />
            </li>
            <li>
                <AiFillInstagram />
            </li>
            <li>
                <AiOutlineGoogle />
            </li>
        </ul>
    </div>
  )
}

export default Footer