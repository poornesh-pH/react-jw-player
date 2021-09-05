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
      />
    </div>
  );
}
