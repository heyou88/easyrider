// import logo from './logo.svg';
import React, { useEffect,useState } from 'react';
import './App.css';
import mute from './mute.png';
import tree from './tree.png';
import save from './save.png';
import share from './share.png';
import avatar from './avatar.png';

function App() {
  const soundURL = 'https://vocal-belekoy-a2bce4.netlify.app/chat.mp3';
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    // Play the sound automatically when the component mounts
    const audio = new Audio(soundURL);
    if (!muted) {
      audio.play();
    } else {
      audio.pause();
    }


    // Optionally, you can also pause the sound when the component unmounts
    return () => audio.pause();
  }, [muted, soundURL]);
  const handleToggleMute = () => {
    setMuted(!muted);
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
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className='bottom'>
        <div className="mute" onClick={handleToggleMute}>
            {muted ? 'MUTE' : 'UNMUTE'}
            <img src={mute} className="toggle-button" alt="mute" />
          </div>
            <div>
              <button className='leave-button'>leave</button>
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
