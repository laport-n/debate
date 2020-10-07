import React from 'react';
import './Debate.css';
import Webcam from "react-webcam";


function App() {
  const videoConstraints = {
    width: { min: 720 },
    height: { min: 900 },
    aspectRatio: 0.6666666667
  };

  const onUserMediaError = (error) => {
  }
  return (
    <div className="DebateContainer">
      <div className="DisplayCamContainer">
          <div className="CamContainer">
          <Webcam
            onUserMediaError={onUserMediaError}
            videoConstraints={videoConstraints}
            width={700}
            height={600}
           />
         </div>
         <div className="CamContainer">
         <Webcam
           onUserMediaError={onUserMediaError}
           videoConstraints={videoConstraints}
           width={700}
           height={600}
          />
        </div>
      </div>
      <div className="ChatContainer">
        chat
      </div>
    </div>
  );
}

export default App;
