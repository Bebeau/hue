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
        <a href="/join">Join Community</a>
      </header>
      <div className="videoWrap">
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
      </div>
      <footer>
        <div>©</div>
        <div><span>{year}</span> HUE UNLIMITED</div>
      </footer>
    </>
  )
}

export default Homepage;
