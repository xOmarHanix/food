import Header from '../header/Header'
import './style.css'
function NavBanner({title, img1 , img2, img3, img4, img5, img6, img7, img8}) {
  return (
    <div className='nav-banner'>
        <div className="overlay">
            <Header />

            <h1>{title}</h1>
        </div>
        <div className="grid-imgs">
            <div className="box-imgs">
                <img src={img1} />
            </div>
            <div className="box-imgs">
                <img src={img2} />
            </div>                
            <div className="box-imgs">
                <img src={img3} />
            </div>                
            <div className="box-imgs">
                <img src={img4} />
            </div>
            <div className="box-imgs">
                <img src={img5} />
            </div>
            <div className="box-imgs">
                <img src={img6} />
            </div>
            <div className="box-imgs">
                <img src={img7} />
            </div>
            <div className="box-imgs">
                <img src={img8} />
            </div>
        </div>
    </div>
  )
}

export default NavBanner