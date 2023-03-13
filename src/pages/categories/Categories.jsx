import NavBanner from '../../components/navBanner/NavBanner';
import CategoriesBox from '../../components/categoriesBox/CategoriesBox';
import Footer from '../../components/footer/Footer';
import Img1 from '../../assets/images/categories/pexels-andrea-piacquadio-3756050.jpg';
import Img2 from '../../assets/images/categories/Fotolia_108383681_Subscription_Monthly_M.jpg';
import Img3 from '../../assets/images/categories/pexels-nataliya-vaitkevich-5078615.jpg';
import Img4 from '../../assets/images/categories/pexels-jill-wellington-327131.jpg';
import Img5 from '../../assets/images/categories/pexels-min-an-1482803.jpg';
import Img6 from '../../assets/images/categories/pexels-polina-tankilevitch-4187779.jpg';
import Img7 from '../../assets/images/categories/seafood-platter-taste-156004-2.jpg';
import Img8 from '../../assets/images/categories/pexels-madison-inouye-1405761.jpg';
import { useEffect } from 'react';

function Categories() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <div>
        <NavBanner title={'Ingredients'} img1={Img1} img2={Img2} img3={Img3} img4={Img4} img5={Img5} img6={Img6} img7={Img7} img8={Img8} />
        <CategoriesBox />
        <Footer />
    </div>
  )
}

export default Categories