import NavBanner from "../../components/navBanner/NavBanner";
import DietBox from "../../components/dietBox/DietBox";
import Footer from '../../components/footer/Footer';
import Img1 from '../../assets/images/diets/gluten-free-diet-thumb-1.jpg';
import Img2 from '../../assets/images/diets/issa_ketodiet_blogheader.jpg';
import Img3 from '../../assets/images/diets/vegan-diet-copy.jpg';
import Img4 from '../../assets/images/diets/What-Vegan-means-76.jpg';
import Img5 from '../../assets/images/diets/The-Whole30-Diet-FINAL.jpg';
import Img6 from '../../assets/images/diets/Low-FODMAP-diet-plan.jpg';
import Img7 from '../../assets/images/diets/Pescatarian-diet.jpg';
import Img8 from '../../assets/images/diets/what-is-the-paleo-diet-0.jpg';
import { useEffect } from "react";



function Diets() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <div>
        <NavBanner title={'Diets'} img1={Img1} img2={Img2} img3={Img3} img4={Img4} img5={Img5} img6={Img6} img7={Img7} img8={Img8} />
        <DietBox />
        <Footer />
    </div>
  )
}

export default Diets