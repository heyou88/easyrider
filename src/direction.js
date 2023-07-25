import React, { useEffect,useState } from 'react';
import map from './map.png';
import './App.css';

const MapHeader = ({ onBackToChat }) => {
  return (
    <div className="map-header">
      <img src={map} className='map' alt="logo" />
      <button className="leave-button" onClick={onBackToChat}>
        Back to Chat
      </button>
    </div>
  );
};

export default MapHeader;
