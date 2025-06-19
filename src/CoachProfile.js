import React from "react";
import "./CoachProfile.css";
import image from './assets/images/namrata.jpeg'

const CoachProfile = () => {
  return (
    <div className="coach-container">
        
      {/* Left - Image */}
      <div className="coach-image">
        <img src={image} alt="Namrata Dhruve" className="unselectable"/>
      </div>
      
      {/* Right - Text */}
      <div className="coach-text">
        
        <p>
          Namrata Dhruve is an Emotional Healer and Parenting Coach, dedicated to helping parents
          break free from unhealthy emotional habits to raise emotionally resilient children with
          strong relationships.
        </p>
        <p>
          After 14 years as a Chartered Accountant, Namrata’s personal struggles with low
          self-esteem, anger, and people-pleasing, particularly after becoming a mother, led her to
          explore emotional healing. Her journey began when her child’s behavior triggered
          unresolved emotions, inspiring her to seek deeper understanding and healing. Through
          various courses and practices, she transformed her relationship with herself and her son,
          discovering her higher purpose — ensuring no one has to grow up burdened by unresolved emotional wounds like she did. 
        </p>
        <p>Despite facing skepticism as a woman in her field, Namrata stayed committed to her mission. Once someone who lacked confidence and struggled to speak up, healing her inner child empowered her to build a fulfilling family life and confidently support other parents. For Namrata, success lies not in a destination but in staying true to her purpose and helping others along their journey. </p>
        <p>This course, Awaken and Heal is a product of her higher purpose to make sure that the solution of emotional health is easily accessible to everyone.</p>
      </div>
    </div>
  );
};  

export default CoachProfile;