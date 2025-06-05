import React from 'react';

function DoomGame() {
  return (
    <div style={{
      width: '800px',
      height: '580px',
      margin: '0 auto', 
      border: '2px solid #333', 
      overflow: 'hidden' 
    }}>
      <iframe 
        src="/doom/index.html" 
        width="100%"
        height="100%"
        sandbox="allow-same-origin allow-scripts"
        frameBorder="0"
        title="DOOM Game"
        scrolling="no" 
      />
    </div>
  );
}

export default DoomGame;