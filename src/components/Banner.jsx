import React from 'react';
import { Player } from 'video-react';

function Banner() {
  return (
    <div>
      <style jsx>{`
    .video {
      z-index: -100;
      width:100%;
      height:75%;
      overflow:hidden;
      position:absolute;
      top:0;
      left:0;
    }
  `}</style>
      <div className='video'>
        <Player autoPlay loop muted>
          <source type='video/webm' src="https://www.tesla.com/ns_videos/careers-video-071017.webm" />
        </Player>

      </div>
    </div>
  );
}

export default Banner;