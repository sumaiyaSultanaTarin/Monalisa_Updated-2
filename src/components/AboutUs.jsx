import { Info, Star, Heart } from "lucide-react"; 

export default function AboutUs() {
  return (
    <section id="about" className="about-us section-padding" 
	>
      <div className="about_container">
        {/* Left Image */}
        <div className="about_img">
          <img src="assets/img/about.jpg" alt="About Monalisa" />
        </div>

        {/* Right Content */}
        <div className="about_content card_box">
          <div className="icon_wrap">
            <Info size={36} />
          </div>
          <h2>
            About our <span>Monalisa</span>
          </h2>
          <div className="about-line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            perferendis magnam ea necessitatibus, officiis voluptas odit!
            Aperiam omnis, cupiditate laudantium velit nostrum, exercitationem
            accusamus, possimus soluta illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            perferendis magnam ea necessitatibus, officiis voluptas odit! Aperiam
            omnis, cupiditate laudantium velit nostrum.
          </p>

          {/* Feature icons like Special Offer */}
          <div className="about_features">
            <div className="feature_item">
              <Star size={24} /> Quality Service
            </div>
            <div className="feature_item">
              <Heart size={24} /> Customer Care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
