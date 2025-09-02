import React, { useState } from "react";

export default function HowItWorks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="how_it_works"
      className="about_video"
      style={{
        backgroundImage: "url('/assets/img/bg/how-it-work.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="video-container">
        <h3>How it Works</h3>

        {/* Play Button */}
        <div className="play-video" onClick={() => setIsOpen(true)}>
          <i className="fa fa-play"></i>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div className="video-wrapper" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </span>
            <iframe
  src="https://www.youtube.com/embed/EWan2YcodSM?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1"
  title="How it Works"
  allow="autoplay; fullscreen"
  allowFullScreen
></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
