import  { useEffect } from 'react'
import validation from "../../utils/scripts";
import Preloader from "../../components/home/Preloader";
import Navbar from "../../components/home/Navbar";
import HomeSlider from "../../components/home/HomeSlider"


export default function HomeDefaultL() {
      useEffect(() => {
        validation();
      }, []);
    
  return (
    <div data-spy="scroll" data-offset="80">
        <Preloader/>
        <Navbar/>
        <HomeSlider/>
    </div>
  )
}
