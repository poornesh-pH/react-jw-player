import React from 'react';
import './style.css';
import ReactJWPlayer from 'react-jw-player';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ReactJWPlayer
        playerId="jw-player"
        playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
        file="https://player.vimeo.com/external/516552026.hd.mp4?s=0d1041793bdb9276ab1748962ead2ecaf19498a5&profile_id=175&oauth2_token_id=57447761"
        generatePrerollUrl = {
          URL : 
        }
        advertising={{
          client: 'googima',
          schedule: {
            pre: {
              offset: 'pre',
              tag:
                'https://pubads.g.doubleclick.net/gampad/live/ads?iu=/14008522/video-jwp&description_url=https%3A%2F%2Flookandcook.com&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=400x300|640x480|970x90&min_ad_duration=10000&max_ad_duration=15000&unviewed_position_start=1'
            }
          },
          vpaidmode: 'insecure'
        }}
      />
    </div>
  );
}
