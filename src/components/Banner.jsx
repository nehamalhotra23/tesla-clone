import React from 'react';
import { Player } from 'video-react';

function Banner(){
  return(
    <div>
      <h1>Tesla!</h1>
      <Player autoPlay loop muted>
     
          <source type='video/webm' src="https://www.tesla.com/ns_videos/careers-video-071017.webm" />
     
    </Player>
      
    </div>
  );
} 

export default Banner;