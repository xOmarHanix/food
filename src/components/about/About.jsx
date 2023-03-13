import './style.css';
import AboutImg from '../../assets/images/AI/open book existing from it a lot of recipes.jpg';
import AboutImg2 from '../../assets/images/AI/glperris_pomegranate_cinematic_hyper-detailed_8k_backlight_a4354013-246d-4e7c-8f62-cea508c44af6.png';

function About() {
  return (
    <div className='about'> 
      <div className="about-img">
        <div className="img-box">
          <img src={AboutImg} />
          <img src={AboutImg2} className='img-position ' />
        </div>
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <h3>“WE KNOW YOU DON'T WANT TO BE LIMITED.”</h3>
        <div className="text-desc">
          <p>Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes. We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and many more</p>
        </div>
      </div>
    </div>
  )
}

export default About