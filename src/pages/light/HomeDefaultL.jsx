import  { useEffect } from 'react'
import validation from "../../utils/scripts";

//Components
import HomeSlider from "../../components/home/HomeSlider"
import MainLayout from '../../layouts/MainLayout';

export default function HomeDefaultL() {
      useEffect(() => {
        validation();
      }, []);
    
  return (
    <div data-spy="scroll" data-offset="80">
      <MainLayout>
          <HomeSlider/>
      </MainLayout>
    </div>
  )
}
