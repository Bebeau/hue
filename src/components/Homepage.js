import React, { useRef, useState, useEffect } from "react";

import hueMp4 from '../assets/videos/hue.mp4';
import still from '../assets/videos/still.jpg';

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const Homepage = () => {
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  const [year] = useState((new Date().getFullYear()));
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    if (isSafari() && videoParentRef.current) {

      const player = videoParentRef.current.children[0];

      if (player) {
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;

        setTimeout(() => {
          const promise = player.play();
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);

      }

    }
  }, []);

  return (
    <>
      <header>
        <a href="https://hue.fm" target="_blank" rel="noopener noreferrer" onClick={() => setShowSignUp(false)}>EXPERIENCE<br className="break" />HUE FM</a>
        <button className="textRight" onClick={() => setShowSignUp(!showSignUp)}>Join Our<br className="break" />Community</button>
      </header>
      <div className={showSignUp ? 'videoWrap show' : 'videoWrap'}>
        {shouldUseImage ? (
          <img className="video" src={still} alt="Muted Video" />
        ) : (
          <div 
            ref={videoParentRef}
            dangerouslySetInnerHTML={{ __html: `
              <video 
                loop 
                muted 
                autoplay 
                playsinline
                preload="metadata"
              >
                <source src=${hueMp4} type="video/mp4" />
              </video>`
            }}
          />
        )}
          <div id="signUp">
            <iframe src="https://laylo.com/laylo-8bc6b/profile/embed?theme=dark&emailPlusSms=true&" frameborder="0" scrolling="no" allowtransparency="true" width="100%" height="220" title="Laylo Widget" />
          </div>
        </div>
      <footer>
        <a href="https://linktr.ee/huesound" target="_blank" rel="noopener noreferrer" onClick={() => setShowSignUp(false)}>LISTEN TO<br className="break" />HUE SOUND</a>
        <article className="legal">
          <section>
          © <span>{year}</span> HUE UNLIMITED
          </section>
        </article>
        <a href="mailto:info@hueunlimited.com?subject=Hue Website Inquiry" className="textRight" onClick={() => setShowSignUp(false)}>TALK<br className="break" />TO HUE</a>
      </footer>
    </>
  )
}

export default Homepage;
