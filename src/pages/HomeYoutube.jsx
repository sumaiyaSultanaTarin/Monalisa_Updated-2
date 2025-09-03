import  { useEffect } from 'react'
import validation from '../utils/scripts';

//Components
import Youtube from '../components/homeYoutube/Youtube';
import MainLayout from '../layouts/MainLayout';

export default function HomeYoutube() {
  useEffect(() => {
    validation();
  }, []);

  return (
    <div data-spy="scroll" data-offset="80">
      <MainLayout>
        <Youtube/>
      </MainLayout>
    </div>
  )
}
