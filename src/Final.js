import React from 'react';
import './Final.css'; // Import the CSS file for styling

function Final() {
    return (
        <div className="container-final">
          <div className="center-text">Are you ready to walk the path of Inner Self-Recovery?</div>
          <div className="button-container">
            
            {/* Register Button Wrapper */}
            <div className="register-wrapper">
              <a href='http://risewhileyouraise.rpy.club/course/aOtfIi6iGa'>
                <button className="register-button">Register</button>
              </a>
              <div className="price-text">Only INR 2,999</div>
            </div>

            {/* Other Courses Button Wrapper */}
            <div className="other-courses-wrapper">
              <a href='https://risewhileyouraise.com/courses.php'>
                <button className="other-courses-button">Other Courses</button>
              </a>
              
            </div>

          </div>
        </div>
    );
}

export default Final;
