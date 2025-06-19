import React from 'react';
import './ProgramAudience.css'; // Import the CSS file for styling
import tick from './assets/images/tick.svg';
import cross from './assets/images/cross.svg'

function ProgramAudience() {
  return (
    <div className="program-audience">
      {/* First Section: Who is this program for? */}
      <h2>Who is this program for?</h2>
      <div className="card-container">
        {[
          { title: 'Young Adults (18+)', text: 'For every young adult (18+) who faced childhood comparison, punishment, or pressure and now struggles with self-doubt, low confidence, and fear of decision-making.' },
          { title: 'Homemakers', text: 'It is for those homemakers who have lost their identity in family roles, feel stuck in toxic relationships, or struggle to step out of their comfort zone to find clarity.' },
          { title: "Individuals with Emotionally Unavailable Parents", text: 'It is designed for those who had emotionally distant parents or witnessed verbal or physical conflicts at home.' },
          { title: 'Working Professionals', text: 'This program is ideal for every individual who hesitates to stand up for themselves, struggle with low self-esteem, overthink, or engage in negative self-talk—believing they are not good enough for better relationships or opportunities.' },
          { title: 'Young Adults in Unfulfilling Relationships', text: 'Tailored for those young adults who feel stuck in relationships that no longer serve them, repeatedly attract emotionally unavailable or controlling partners, and struggle to break the cycle.' },
          { title: 'Mothers Struggling with Rage & Discipline', text: 'It is for mothers who find it hard to control their anger in front of their children and feel torn between disciplining them and nurturing a loving bond.' },
          { title: 'Husbands Who Feel Emotionally Unavailable', text: 'Designed for those husbands who recognize emotional disconnection in their relationships but are struggling to change.' },
          { title: 'Wives Who Struggle with Control & Expectations', text: 'Intended for the wives who have high expectations from their husbands and tend to micromanage or control them.' },
          { title: 'Anyone on the Path of Self-Discovery', text: 'For anyone who resonates with these experiences, this program serves as a pathway to emotional healing and transformation.' }
        ].map((item, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              <img src={tick} alt="tick icon" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Second Section: Who is this program NOT for? */}
      <h2>Who is this program <span>NOT</span> for?</h2>
      <div className="card-container">
        {[
          {text: 'Those who think only watching the program will heal them' },
          {text: 'Those who are looking for “quick solutions” to their emotional challenges' },
          {text: 'Those who think that others need to change themselves' }
        ].map((item, index) => (
          <div className="card black" key={index}>
            <div className="card-icon">
              <img src={cross} alt="cross icon" />
            </div>
            <h3>{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramAudience;