import  { useEffect } from 'react'
import validation from '../utils/scripts';

//Components
import HtmlVideo from '../components/homeHtml5Video/HtmlVideo';
import MainLayout from '../layouts/MainLayout';


export default function HomeHtml5Video() {
  useEffect(() => {
    validation();
  }, []);

  return (
    <div data-spy="scroll" data-offset="80">
    <MainLayout>
			<HtmlVideo/>
		</MainLayout>
    </div>
  )
}
