import React from 'react';
import './KeyTakeaways.css';
import image from "./assets/images/takeaway.svg";

function KeyTakeaways() {
    return (
        <div className="key-takeaways">
            <h2>Key Takeaways from this Program</h2>
            <div className="container-takeaway">
                <div className="left">
                    <ul>
                        <li>1. Understanding your <bold>coping mechanisms</bold></li>
                        <li>2. Understanding the <bold>root cause</bold> of your triggers</li>
                        <li>3. Shedding your old <bold>limiting beliefs and patterns</bold></li>
                        <li>4. Adoption of new <bold>empowering beliefs</bold></li>
                        <li>5. Manifesting <bold>long-held visions and desires</bold></li>
                        <li>6. <bold>Calming down</bold> of the nervous system naturally</li>
                        <li>7. <bold>Healing yourself</bold> at subconscious level</li>
                        <li>8. Breaking free from <bold>generational emotional patterns</bold></li>
                        <li>9. Learning a <bold>“Trigger Release Framework”</bold> to navigate your emotions for life</li>
                        <li>10. Strengthening your <bold>spiritual connection</bold> through healing</li>
                        <li>11. <bold>Deep self-discovery</bold> and emotional mastery</li>
                    </ul>
                </div>
                <div className="right">
                    <img src={image} className='svg-image'/>
                </div>
            </div>
        </div>
    );
}

export default KeyTakeaways;