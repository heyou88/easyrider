// import logo from './logo.svg';
import React, { useEffect,useState } from 'react';
import './App.css';
import muteButton from './mute.png';
import muteicon from './mute.svg';
import unmuteicon from './unmute.svg';
import unmuteButton from './unmute.png';
import tree from './merge tree.png';
import save from './star.svg';
import share from './share.svg';
import avatar from './avatar.png';
import speakers from './speakers.png';
import soundOn from './soundon.png';
import soundOff from './soundoff.png';

function App() {
  const soundURL = 'https://vocal-belekoy-a2bce4.netlify.app/chat.mp3';
  const [sound, setSound] = useState(true);
  const [mute, setMute] = useState(true);
  useEffect(() => {
    // Play the sound automatically when the component mounts
    const audio = new Audio(soundURL);
    if (!sound) {
      audio.play();
    } else {
      audio.pause();
    }


    // Optionally, you can also pause the sound when the component unmounts
    return () => audio.pause();
  }, [sound, soundURL]);
  const handleToggleSound = () => {
    setSound(!sound);
  };
  const handleToggleMute = () => {
    setMute(!mute);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="tree-name-container">
          <h3 className="tree-name">Tree Name</h3>
          <img src={save} className="save" alt="Save" />
          <img src={share} className="share" alt="Share" />
          <img src={avatar} className="avatar" alt="Avatar" />
        </div>

        <img src={tree} className="tree" alt="logo" />
        <div className="speakers">
          <img
            src={sound ? soundOn : soundOff}
            className="sound-button"
            onClick={handleToggleSound}
            alt="mute"
          />
          <img src={speakers} className="speaker-avatar" alt="logo" />
        </div>

        <div className="bottom">
          <div className="mute">
            <img
              src={mute ? muteicon : unmuteicon}
              className="mute-icon"
              alt="mute"
            />
            <img
              src={mute ? muteButton : unmuteButton}
              className="toggle-button"
              onClick={handleToggleMute}
              alt="mute"
            />
          </div>
          <div>
            <button className="leave-button">Leave</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
// function mute(){
//   return(
//     <img src={logo} className="App-logo" alt="logo" />
//   )
// }
