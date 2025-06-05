import React from 'react';
import './loadingDoom.css';

export default function LoadingDoom() {
  return (
    <div className="loading-doom">
      <div className="doom-bars">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
      </div>
      <h1 className="doom-text">LOADING...</h1>
    </div>
  );
}
