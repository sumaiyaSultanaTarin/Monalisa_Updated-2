import  { useEffect } from 'react'
import validation from "../../utils/scripts";

//Components
import Navbar from "../../components/home/Navbar";
import TextSlider from "../../components/homeTextSlider/TextSlider";
import AboutUs from '../../components/home/AboutUs';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Counter from '../../components/home/Counter';
import Gallary from '../../components/home/Gallary';
import SpecialOffer from '../../components/home/SpecialOffer';
import Feature from '../../components/home/Feature';
import Team from '../../components/home/Team';
import HowItWorks from '../../components/home/HowItWorks';
import Pricing from '../../components/home/Pricing';
import Testimonial from '../../components/home/Testimonial';
import Blog from '../../components/home/Blog';
import PartnerLogo from '../../components/home/PartnerLogo';
import ContactForm from '../../components/home/ContactForm';
import Footer from '../../components/home/Footer';

export default function HomeTextSliderL() {
 useEffect(() => {
 validation();
 }, []);
 
 return(
 <div data-spy="scroll" data-offset="80">
     <Navbar />
     <TextSlider />
     <AboutUs />
     <WhyChooseUs />
     <Counter />
     <Gallary />
     <SpecialOffer />
     <Feature />
     <Team />
     <HowItWorks />
     <Pricing />
     <Testimonial />
     <Blog />
     <PartnerLogo />
     <ContactForm />
     <Footer />
 
 
 </div>
  )
}
