import './style.css';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Welcome from '../../components/welcome/Welcome';
import Services from '../../components/services/Services';
import Cuisine from '../../components/cuisine/Cuisine';
import Dishes from '../../components/dishes/Dishes';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div className='home'>
        <Banner />
        <Welcome />
        <About />
        <Services />
        <Cuisine />
        <Dishes />
        <Footer />
    </div>
  )
}

export default Home