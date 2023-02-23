import React, {useState, useEffect} from 'react';

import hueWebm from '../assets/videos/hue.webm';
import hueMp4 from '../assets/videos/hue.mp4';

const Homepage = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear((new Date().getFullYear()));
  }, []);

  return (
    <>
      <header>
        <a href="/community" target="_BLANK">Join Community</a>
      </header>
      <body>
        <video autoPlay muted loop playsInline>
          <source src={hueWebm} type="video/webm" />
          <source src={hueMp4} type="video/mp4" />
        </video>
      </body>
      <footer class="color">
        <div class="text-right">©</div>
        <div><span id="fullYear">{year}</span> HUE UNLIMITED</div>
      </footer>
    </>
  )
}

export default Homepage;
