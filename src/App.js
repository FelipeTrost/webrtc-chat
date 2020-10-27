import React, {useEffect, useRef} from 'react';

let stream = null;

function App() {
  const videoRef = useRef();
  
  async function getMedia(constraints) {
  
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      videoRef.current.srcObject = stream
      videoRef.current.onloadedmetadata = function(e) {
        // videoRef.current.play();
      };
      /* use the stream */
    } catch(err) {
      /* handle the error */
    }
  }

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div className="App">
        <video ref={videoRef} height="400px" width="400px" />
    </div>
  );
}

export default App;
