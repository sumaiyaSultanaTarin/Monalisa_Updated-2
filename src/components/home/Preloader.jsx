// import React, { useEffect, useState } from "react";
// import "./preloader.css";


// export default function Preloader() {
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const onLoaded = () => setHide(true);
//     window.addEventListener("load", onLoaded);
//     const t = setTimeout(() => setHide(true), 1200);
//     return () => {
//       window.removeEventListener("load", onLoaded);
//       clearTimeout(t);
//     };
//   }, []);

//   return (
//     <div className={`preloader ${hide ? "is-hidden" : ""}`} aria-hidden={hide}>
//       <div className="status">
//         <div className="status-mes">
//           <h4>Monalisa</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for 1 second
    const timer = setTimeout(() => setLoaded(true), 1000); // Reduced time to 1 second
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className={`preloader ${loaded ? "hide" : ""}`}>
      {/* Loader animation and Monalisa name in the center */}
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
        <div className ="status-mes">
          <h4>Monalisa</h4>
        </div>
      </div>
    </div>
  );
}


