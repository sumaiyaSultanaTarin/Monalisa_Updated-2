import  { useEffect } from 'react'
import validation from "../../utils/scripts";

//Components
import TextSlider from "../../components/homeTextSlider/TextSlider";
import MainLayout from '../../layouts/MainLayout';

export default function HomeTextSliderL() {
 useEffect(() => {
 validation();
 }, []);
 
 return(
 <div data-spy="scroll" data-offset="80">
    <MainLayout>
      <TextSlider />
    </MainLayout>
 </div>
  )
}
