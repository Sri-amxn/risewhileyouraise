import './Hero.css';
import Image from './assets/images/HeroImage.png';

function Hero() {
  return (
    <div className='container'>
      <p className='HeroFont'>Your Journey from Stuck to Inner Peace</p>
      <p className='HeroFont'>Your Guide towards Self-Healing</p>
      <h1 className='HeroMainFont'>Awaken & Heal</h1>
      <div className='sun'>
        <p className='tag'>The Art of Inner Self-Recovery</p>
        <div className='sun-ray ray1'></div>
        <div className='sun-ray ray2'></div>
        <div className='sun-ray ray3'></div>
        <div className='sun-ray ray4'></div>
        <div className='sun-ray ray5'></div>
        <div className='sun-ray ray6'></div>
        <div className='sun-ray ray7'></div>
        <div className='sun-ray ray8'></div>
        <div className='sun-ray ray9'></div>
        <div className='sun-ray ray10'></div>
        <div className='sun-ray ray11'></div>
        <div className='sun-ray ray12'></div>
        <div className='sun-ray ray13'></div>
        <div className='sun-ray ray14'></div>
        <div className='sun-ray ray15'></div>
        <div className='sun-ray ray16'></div>
        <img src={Image} className='sun-image' alt="Sun" />
      </div>
      <div className='register'>
        <div className='button-and-info'>
          <p className='inline launch'>Launch offer for 15 days</p>
          <a href='http://risewhileyouraise.rpy.club/course/aOtfIi6iGa'>
            <button className='register' >Register</button>
          </a>
          
          <p className='inline'>INR <span className="tilted-strike">5,000</span> 2,999 only</p>
        </div>
        <p className='scroll'>Scroll down to learn more</p>
      </div>
    </div>
  );
}

export default Hero;