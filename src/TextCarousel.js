import React, { useState, useEffect } from 'react';
import './TextCarousel.css'; // Import the CSS

function TextCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listener for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slides = [
    {
      id: 1,
      content: (
        <div className="carousel__content">
          <p>"Hi Namrata,</p>
                <p>My heartfelt gratitude for the incredible healing session I had with you. Your expertise and compassionate approach truly made a difference. During the session, I felt an immense sense of calm and clarity. Your guidance helped me navigate through my thoughts and emotions, bringing a newfound sense of balance and peace into my life. Your deep understanding a were invaluable, and I am genuinely thankful for the positive impact it has had on me.
                </p>
                <p>Thank you once again for sharing your healing gifts and creating such a transformative experience. I am looking forward to our future sessions.”
                </p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="carousel__content">
          <p>"Hi Namrata,</p>
                <p>When I stumbled across ur insta handle, I would relate to a lot of ur reels. I was overwhelmed, frustrated and had so much anger in me about just everything. I came to u with a chaotic mind having not dealt with so many issues that plagued my life. You helped me heal my longstanding trauma so effortlessly.
                </p>
                <p>I now feel peaceful and happy from within. I am very certain that the tools and tips u have given me in this one and half month long journey will stay with me forever. I feel confident that I will be able to help not just myself but I will also be able to empower my near ones.
                </p>
                <p>Thank you for helping me bring out a renewed version of myself and I assure u that I will keep practicing all my learnings. Please continue to do the awesome work you are doing. I wish u all success!"
                </p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="carousel__content">
          <p>Hi Namrata di, 
                </p>
                <p>I am grateful that I met you as my healing therapist.
She made me feel completely at ease discussing anything that was on my mind and express difficult emotions without judging me was a huge relief. We got to the bottom of damaging generational pattern thoughts which we all have and are unaware of those toxic thoughts and worked through simple methods to deal with them, which I feel confident about dealing with emotions on my own rather than looking for someone everytime to validate my feelings. Her patience, understanding and guidance have enabled me to make me feel confident and accept myself the way I am and not look at myself by standing in others shoes and to be authentic will be lasting with me forever. I would definitely recommend her for the healing sessions to break those toxic generational patterns. Thank you so much once again.
</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="carousel__content">
          <p>You never know how strong you are until being strong is the only option.
But under that strength lies a lot of unresolved trauma. From my childhood, self help books helped me to a certain extent to soothe me but it was not enough.</p>
                <p>Then i stumbled upon Namrata's blogs on PULA and all her articles resonated so well with me that i had to contact her.
I requested my first session should be in person and she agreed. In my first session itself I realised this is exactly the place where i will get the right help.
</p>
<p>Namrata is extremely patient, understanding and an incredibly empathetic person.
She solved all my problems and made me a new and improved human being ready to take the challenges life has to throw my away. She gave me the confidence and right thought process so that i can be at the best of my potential.
</p>
<p>I would be eternally indebted to all the help she has provided me with. Thank you Namrata!</p>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="carousel__content">
          <iframe className= "carousel__video" width="560" height="315" src="https://www.youtube.com/embed/AzSEZDcqocQ?si=tm0AUCda_00pt5WH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      ),
      isVideo: true,
    },
    {
      id: 6,
      content: (
        <div className='carousel__content'>
          <iframe className= "carousel__video" width="560" height="315" src="https://www.youtube.com/embed/MLJ6vapicfw?si=saDFxq6O0qpI8wh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      ),
      isVideo: true,
    },
    {
      id: 7,
      content: (
        <div className='carousel__content'>
          <iframe className= "carousel__video" width="560" height="315" src="https://www.youtube.com/embed/4touiUfXsz0?si=JUrCNIrLTPLb037J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      ),
      isVideo: true,
    }
  ];

  const isVideoSlide = slides[currentSlide].isVideo;

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h2 className="testimonial">Testimonials</h2>

      <section className="carousel" aria-label="Gallery">
        <div className={`carousel__container ${isVideoSlide ? 'has-video' : ''}`}>
          <button
            className="carousel__prev"
            aria-label="Previous Slide"
            onClick={goToPreviousSlide}
          >
            {isMobile ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
            </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
            )}
          </button>
          <div className="carousel__slide">
            {slides[currentSlide].content}
          </div>
          <button
            className="carousel__next"
            aria-label="Next Slide"
            onClick={goToNextSlide}
          >
            {isMobile ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
            </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}

export default TextCarousel;
