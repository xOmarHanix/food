import './style.css';
import WelcomeImg from '../../assets/images/pexels-maria-tyutina-954599.jpg'
import WelcomeImg2 from '../../assets/images/pexels-alleksana-7471083.jpg'

function Welcome() {
  return (
    <div className='welcome'>
        <div className="welcome-text">
            <h2>Welcome!</h2>
            <h3>To Food Hub</h3>
            <div className="welcome-desc">
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>
            <div className="developer">
                <hr />
                <h4>Developed By</h4>
                <hr />
            </div>
            <span className="Signature">Omar Hani Kamal</span>
        </div>
        <div className="welcome-img">
            <div className="img-box">
                <img src={WelcomeImg2} />
                <img src={WelcomeImg} className='img-position' />
            </div>
        </div>
    </div>
  )
}

export default Welcome