import { Clock, CalendarCheck } from "lucide-react"; 
import { Link } from "react-router-dom";
export default function SpecialOffer() {
  return (
    <section
      className="special_offer"
      style={{
        backgroundImage: "url('assets/img/bg/how-it-work.jpg')",
      }}
    >
      <div className="special_container">
        {/* Offer Card */}
        <div className="card_box offer">
          <div className="icon_wrap">
            <CalendarCheck size={36} />
          </div>
          <h3>Get your special offer today</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="#">Make an appointment</Link>
        </div>

        {/* Opening Hours Card */}
        <div className="card_box opening_hour">
          <div className="icon_wrap">
            <Clock size={36} />
          </div>
          <h3>Monalisa Open Hours</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              Monday - Friday <span>8:00 AM - 5:00 PM</span>
            </li>
            <li>
              Saturday <span>12:00 PM - 5:00 PM</span>
            </li>
            <li>
              Sunday <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
