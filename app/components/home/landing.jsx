// "use client";
// import React, { useEffect, useRef, useState } from "react";

// function Landing() {
//   const [showVideo, setShowVideo] = useState(false);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [videoSrc, setVideoSrc] = useState(null);
//   const timerRef = useRef(null);
//   useEffect(() => {
//     // Determine network speed and select video quality
//     const connection =
//       navigator.connection ||
//       navigator.mozConnection ||
//       navigator.webkitConnection;
//     const downlink = connection?.downlink || 10; // default to 10 Mbps if not available

//     // Simple threshold, adjust as needed
//     if (downlink < 2) {
//       setVideoSrc("/videos/main.webm"); // low quality video
//     } else {
//       setVideoSrc("/videos/main.webm"); // high quality video
//     }

//     // Start 5-second splash timer
//     timerRef.current = setTimeout(() => {
//       setShowVideo(true);
//     }, 2000);

//     return () => clearTimeout(timerRef.current);
//   }, []);

//   const videoRef = useRef(null);

//   // Flag to ensure we only set currentTime once
//   const hasSetTime = useRef(false);

//   const onLoadedMetadata = () => {
//     if (videoRef.current && !hasSetTime.current) {
//       hasSetTime.current = true;
//       // Try setting currentTime to 3 seconds
//       videoRef.current.currentTime = 3;
//     }
//   };

//   const onSeeked = () => {
//     // After seek is done, play the video
//     if (videoRef.current && !videoRef.current.paused) return; // already playing

//     videoRef.current.play().catch(() => {
//       // autoplay might be blocked, handle if needed
//     });
//   };
//   return (
//     <div className="w-full h-screen bg-white pt-14 sm:pt-20 flex flex-col">
//       <div className="relative w-full h-full pb-20">
//         <video
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             videoLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           src={videoSrc}
//           ref={videoRef}
//           type="video/webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           onLoadedMetadata={onLoadedMetadata}
//           onSeeked={onSeeked}
//           onCanPlay={() => setVideoLoaded(true)}
//           onError={() => setVideoLoaded(false)}
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// }

// export default Landing;

"use client";
import React, { useEffect, useRef, useState } from "react";

function Landing() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/videos/main.webm"); // default src
  const videoRef = useRef(null);

  useEffect(() => {
    // Optional: network-based video selection
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const downlink = connection?.downlink || 10;

    if (downlink < 2) {
      setVideoSrc("/videos/main.webm"); // low quality
    } else {
      setVideoSrc("/videos/main.webm"); // high quality
    }
  }, []);

  // Optional: start from 3s
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
    }
  }, [videoSrc]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        className={`w-full h-full max-w-full max-h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
      />
    </div>
  );
}

export default Landing;
