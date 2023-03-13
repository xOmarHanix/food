import React, { useEffect } from 'react'
import NavBanner from '../../components/navBanner/NavBanner';
import Img1 from '../../assets/images/cuisines/pexels-anna-guerrero-1765005.jpg';
import Img2 from '../../assets/images/cuisines/pexels-chopsticks-and-coffee-9109745.jpg';
import Img3 from '../../assets/images/cuisines/pexels-cup-of-couple-8472637.jpg';
import Img4 from '../../assets/images/cuisines/pexels-momo-king-5409023.jpg';
import Img5 from '../../assets/images/cuisines/pexels-denys-gromov-7780023.jpg';
import Img6 from '../../assets/images/cuisines/pexels-denys-gromov-7780027.jpg';
import Img7 from '../../assets/images/cuisines/pexels-engin-akyurt-1438672.jpg';
import Img8 from '../../assets/images/cuisines/pexels-polina-tankilevitch-4518703.jpg';
import CuisineBox from '../../components/cuisine/cuisineBox/CuisineBox';
import Footer from '../../components/footer/Footer'

function Cuisines() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <div>
      <NavBanner title={'cuisines'} img1={Img3} img2={Img5} img3={Img8} img4={Img4} img5={Img2} img6={Img6} img7={Img7} img8={Img1}  />
      <CuisineBox />
      <Footer />
    </div>
  )
}

export default Cuisines