import './App.css';
import Hero from './Hero.js' ;
import Offerings from './Offerings.js'
import KeyTakeaways from './KeyTakeaways.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from './Quote.js';
import ProgramAudience from './ProgramAudience.js';
import CoachProfile from './CoachProfile.js';
import Final from './Final.js';
import TextCarousel from './TextCarousel.js';
import VideoComponent from './VideoSection.js';

function App() {
  return (
    <div className="App">
      <div className="Hero">
        
        <Hero/>
      </div>
      <VideoComponent/>
      <Offerings/>
      <KeyTakeaways/>
      <TextCarousel/>
      <Quote/>
      <ProgramAudience/>
      <h2 className='about-coach'>About the Coach - Namrata Dhruve</h2>
      <CoachProfile/>
      <Final/> 
    </div>
  );
}

export default App;
