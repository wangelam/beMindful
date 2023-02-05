import React, { useState } from 'react';
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isCaptureButtonFaded, setCaptureButtonFaded] = useState(false);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = 'webcam-capture.jpeg';
      document.body.appendChild(link);
      link.click();
      setCaptureButtonFaded(true);
      setTimeout(() => {
        setCaptureButtonFaded(false);
      }, 250);
    },
    [webcamRef]
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      </div>
      <div style={{
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "1px"
      }}>
        <Webcam
          audio={false}
          height={250}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          style={{
            borderRadius: "5px",
            overflow: "hidden"
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={capture} style={{
          backgroundColor: "transparent",
          border: "7px solid white",
          borderRadius: "50%",
          height: 70,
          width: 70,
          position: "relative",
          opacity: isCaptureButtonFaded ? 0.5 : 1,
          transition: "opacity 250ms ease-in-out",
        }}
          onMouseOver={() => {
            if (!isCaptureButtonFaded) {
              setCaptureButtonFaded(true);
            }
          }}
          onMouseOut={() => {
            if (isCaptureButtonFaded) {
              setCaptureButtonFaded(false);
            }
          }}
        >
          <div style={{
            backgroundColor: "transparent",
            borderRadius: "50%",
            height: "64px",
            width: "64px",
            position: "absolute",
            top: "3px",
            left: "3px"
          }} />

        </button>
      </div>
    </div>
  );
};

export default WebcamCapture;
