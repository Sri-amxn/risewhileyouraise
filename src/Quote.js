import React from 'react';
import './Quote.css'; // Import the CSS file for styling

function Quote() {
  return (
    <div className="quote-container">
      <blockquote className="quote-text">
        This journey is not just about healing - it's about <bold>reclaiming your power, breaking free from what holds you back, and awakening to your true self.</bold>
      </blockquote>
      <a href='http://risewhileyouraise.rpy.club/course/aOtfIi6iGa'>
        <button>Register</button>
      </a>
      
      <p className='cost'>At INR 2,999 only</p>
    </div>
  );
}

export default Quote;