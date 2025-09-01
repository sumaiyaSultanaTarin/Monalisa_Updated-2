import  { useEffect } from 'react'
import Preloader from '../components/Preloader';
import validation from '../utils/scripts';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Counter from '../components/Counter';
import Gallary from '../components/Gallary';
import SpecialOffer from '../components/SpecialOffer';
import Feature from '../components/Feature';
import Team from '../components/Team';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import PartnerLogo from '../components/PartnerLogo';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
	validation();
  }, []);

  return (
    <div data-spy="scroll" data-offset="80">

		<Preloader/>
		<Navbar/>	
		<Slider/>
		<AboutUs/>
		<WhyChooseUs/>
		<Counter/>
		<Gallary/>
		<SpecialOffer/>
		<Feature/>
		<Team/>
		<HowItWorks/>
		<Pricing/>
		<Testimonial/>
		<Blog/>
		<PartnerLogo/>
		<ContactForm/>
		<Footer/>
		
    </div>
  )
}
