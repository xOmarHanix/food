import './style.css';
import Icon1 from '../../assets/icons/2648918.png';
import Icon2 from '../../assets/icons/2081949.png';
import Icon3 from '../../assets/icons/3480718.png';
import Icon4 from '../../assets/icons/1141106.png';

function Services() {
  return (
    <div className='services'>
        <h2>Our Services</h2>
        <div className="services-desc">
            <h3>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</h3>   
        </div>
        <div className="period-box">
            <div className="box-item">
                <div className="box-icon">
                    <img src={Icon1} alt="" />
                </div>
                <h1>Breakfast</h1>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum</p>
            </div>
            <div className="box-item">
                <div className="box-icon">
                    <img src={Icon2} alt="" />
                </div>
                <h1>Lunch</h1>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum</p>
            </div>
            <div className="box-item">
                <div className="box-icon">
                    <img src={Icon3} alt="" />
                </div>
                <h1>Dinner</h1>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum</p>
            </div>
            <div className="box-item">
                <div className="box-icon">
                    <img src={Icon4} alt="" />
                </div>
                <h1>All The Day</h1>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum</p>
            </div>
        </div>
    </div>
  )
}

export default Services