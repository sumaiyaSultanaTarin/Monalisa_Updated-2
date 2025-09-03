import  { useEffect } from 'react'
import validation from '../utils/scripts';


import MainLayout from '../layouts/MainLayout';
import Slider from '../components/home/HomeSlider';


export default function HomeDefault() {
  useEffect(() => {
	validation();
  }, []);

  return (
    <div data-spy="scroll" data-offset="80">
		<MainLayout>
			<Slider/>
		</MainLayout>

    </div>
  )
}
