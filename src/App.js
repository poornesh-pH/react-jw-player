import React,{useState} from 'react';
import './style.css';
import ReactJWPlayer from 'react-jw-player';

export default function App() {
  const [file, setFile] = useState('https://player.vimeo.com/external/516552026.hd.mp4?s=0d1041793bdb9276ab1748962ead2ecaf19498a5&profile_id=175&oauth2_token_id=57447761')
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ReactJWPlayer
      isAutoPlay={true}
        playerId="jw-player"
        playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
        file={file}
        onThreeSeconds={()=>setFile(' https://player.vimeo.com/external/371079615.sd.mp4?s=2fab6a7bade5bba912a253900a7bd9b6ca9fc977&profile_id=139&oauth2_token_id=57447761')}
      />
    </div>
  );
}
