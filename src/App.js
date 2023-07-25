// import logo from './logo.svg';
import React, { useEffect,useState } from 'react';
import MapHeader from './direction.js'
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
import map from './map.png';
import chatSound from './clubhouse.mp3';
import chatSound1 from './clubhouse1.mp3';
import chatSound2 from './clubhouse2.mp3';
const soundFiles = [
  chatSound,chatSound1,chatSound2
];

function App() {
  // const soundURL = {chat};
  const [sound, setSound] = useState(true);
  const [mute, setMute] = useState(true);
  const [leaveScreen, setLeaveScreen] = useState(false);
  useEffect(() => {
    // Play the sound automatically when the component mounts
    const getRandomSoundURL = () => {
      const randomIndex = Math.floor(Math.random() * soundFiles.length);
      return soundFiles[randomIndex];
    };
    const audio = new Audio(getRandomSoundURL());
    if (!sound) {
      audio.play();
    } else {
      audio.pause();
    }


    // Optionally, you can also pause the sound when the component unmounts
    return () => audio.pause();
  }, [sound, mute]);

  const handleToggleSound = () => {
    setSound(!sound);
  };
  const handleToggleMute = () => {
    setMute(!mute);
  };
  const handleLeave = () => {
    setLeaveScreen(!leaveScreen);;
  };
  const handleBackToChat = () => {
    setLeaveScreen(false);
  };
  // if (leaveScreen) {
  //   return <MapScreen onBackToChat={handleBackToChat} />;
  // }
  return (
    <div className= "App">
      {
        leaveScreen ?
          <MapHeader onBackToChat={handleBackToChat} />
        :

      <header className="App-header">
        <div className="tree-name-container">
          <h3 className="tree-name">Gossip Willow</h3>
          <img src={save} className="save" alt="Save" />
          <img src={share} className="share" alt="Share" />
          <img src={avatar} className="avatar" alt="Avatar" />
        </div>

        <img src={leaveScreen ? map : tree} className={leaveScreen ?'map':"tree"} alt="logo" />
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
            <button className="leave-button" onClick={handleLeave}>{leaveScreen ? 'Back to Chat' : 'Go There'} </button>
          </div>
        </div>
      </header>

      }
    </div>
  );
}

export default App;
