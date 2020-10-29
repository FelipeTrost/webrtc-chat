import React, {useEffect, useRef, useState} from 'react';

let stream = null;

function App() {
  const peer = useRef();
  const videoRef = useRef();
  const partnerVideoRef = useRef();
  const [iceCandidatesList, setIceCandidatesList] = useState([])
  const [makingOffer, setMakingOffer] = useState(undefined);
  const copyRef = useRef();

  const [input, setInput] = useState("");
  const [iceCList, setIceCList] = useState("");

  const createPeer = offering => {
    const peerInstance = new RTCPeerConnection({
      iceServers: [
          {
              urls: "stun:stun.stunprotocol.org"
          },
          {
              urls: 'turn:numb.viagenie.ca',
              credential: 'muazkh',
              username: 'webrtc@live.com'
          },
      ]
    });

    stream.getTracks().forEach(track => peerInstance.addTrack(track, stream));

    if(offering)
      peerInstance.onnegotiationneeded = () => {
        peerInstance.createOffer()
        .then(offer => peerInstance.setLocalDescription(offer))
        .then(() => {
          copy("offer", "paste it into the target user" ,JSON.stringify(peerInstance.localDescription))
        }).catch(e => console.log(e));
      };

    peerInstance.ontrack = e => {
      console.log("got track", e.streams);
      e.streams[0].oninactive = alert("inactive")
      partnerVideoRef.current.srcObject = e.streams[0]
    };

    peerInstance.onicecandidate = e => {
      if (e.candidate) {
          // copy("ice candidate", "paste it to the ice candidate manager from the other user", JSON.stringify(e.candidate));
          setIceCandidatesList(l => [...l, e.candidate])
      }
    }

    peerInstance.createDataChannel("hola", {

    });

     peer.current = peerInstance;
  }

  const recieveOffer = offer => {
    const desc = new RTCSessionDescription(offer);

    peer.current.setRemoteDescription(desc)
    .then(() => peer.current.createAnswer())
    .then(answer =>  peer.current.setLocalDescription(answer))
    .then(() => {
        copy("answer", "paste the answer into the initiator", JSON.stringify(peer.current.localDescription));
    })
  }

  const handleIceCantidates = list => {
    for(const candidate of list){
      peer.current.addIceCandidate(new RTCIceCandidate(candidate))
          .catch(e => console.log(e));
    }
  }

  const recieveAnser = answer => {
    const desc = new RTCSessionDescription(answer);
    peer.current.setRemoteDescription(desc).catch(e => console.log(e));
}

  const copy = (title, insturction, text) => {
    copyRef.current.value = text;
    copyRef.current.select();
    document.execCommand('copy');

    alert(`Copied ${title} to your clipboard\n${insturction}`)
  }

  async function getMedia(constraints) {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      videoRef.current.srcObject = stream
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => { getMedia() }, []);

  return (
    <div className="App">
        <video ref={videoRef} height="400px" width="400px" autoPlay muted />
        <video ref={partnerVideoRef} height="400px" width="400px" autoPlay />
        <br />

        {makingOffer === undefined && (<>
          <button onClick={() => {
            setMakingOffer(true)
            createPeer(true)
          }}>
            Make offer
          </button>
          
          <button onClick={() => {
            setMakingOffer(false)
            createPeer(false)
          }}>
            Recieve offer
          </button>
        </>)}

        {makingOffer !== undefined &&( makingOffer ? (<>
          <p>Recieve answer</p>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={() => recieveAnser(JSON.parse(input))}>
            Recieve answer
          </button>
        </>) : (<>
          <p>Recieve offer</p>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={() => recieveOffer(JSON.parse(input))}>
            Recieve Offer
          </button>
        </>))}

        {makingOffer !== undefined && (<>
          <p>Recieve ice candidates list</p>
          <input value={iceCList} onChange={e => setIceCList(e.target.value)} />
          <button onClick={() => handleIceCantidates(JSON.parse(iceCList))}>
            handle ice candidates
          </button>
        </>)}

        <p>
          Ice candidates, paste them into the other user
          <button onClick={() => copy("ice-candidates", "", JSON.stringify(iceCandidatesList))}>
            Copy
          </button>
        </p>

        <p> {JSON.stringify(iceCandidatesList)} </p>

        <p>Text to copy</p>
        <input ref={copyRef}/>
    </div>
  );
}

export default App;
