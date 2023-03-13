import NavBanner from '../../components/navBanner/NavBanner';
import DishesBox from '../../components/dishes/dishesBox/DishesBox';
import Footer from '../../components/footer/Footer';
import Img1 from '../../assets/images/meals/download.jpg';
import Img2 from '../../assets/images/meals/Hasselback-Potatoes-a818dcb.jpg';
import Img3 from '../../assets/images/meals/pexels-photo-1346345.jpeg';
import Img4 from '../../assets/images/meals/easy-appetizers-1.jpg';
import Img5 from '../../assets/images/meals/pexels-olena-bohovyk-3323687.jpg';
import Img6 from '../../assets/images/meals/pexels-mariana-kurnyk-1775039.jpg';
import Img7 from '../../assets/images/meals/chicken-soup-recipe-3.jpg';
import Img8 from '../../assets/images/meals/pexels-toni-cuenca-616840.jpg';
import { useEffect } from 'react';





function Meals() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <div>
        <NavBanner title={'Meals'} img1={Img1} img2={Img2} img3={Img3} img4={Img4} img5={Img5} img6={Img6} img7={Img7} img8={Img8} />
        <DishesBox />
        <Footer />
    </div>
  )
}

export default Meals