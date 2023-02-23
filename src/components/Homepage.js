import React, {useState, useEffect} from 'react';

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
      <div className="videoWrap">
        <video autoPlay muted loop playsInline>
          <source src={hueMp4} type="video/mp4" />
        </video>
      </div>
      <footer>
        <div>©</div>
        <div><span>{year}</span> HUE UNLIMITED</div>
      </footer>
    </>
  )
}

export default Homepage;
