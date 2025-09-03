import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeTextSlider from "./pages/HomeTextSlider";
import HomeParallax from "./pages/HomeParallax";
import HomeDefault from "./pages/HomeDefault";
import HomeHtml5Video from "./pages/HomeHtml5Video";
import HomeTextRotator from "./pages/HomeTextRotator";
import HomeYoutube from "./pages/HomeYoutube";

import HomeDefaultL from "./pages/light/HomeDefaultL";
import HomeParallaxL from "./pages/light/HomeParallaxL";
import HomeTextRotatorL from "./pages/light/HomeTextRotatorL";
import HomeTextSliderL from "./pages/light/HomeTextSliderL";
import HomeHtml5VideoL from "./pages/light/HomeHtml5VideoL";
import HomeYoutubeL from "./pages/light/HomeYoutubeL";
import Monalisa from "./pages/Monalisa";
import DarkLayout from "./layouts/DarkLayout";
import LightLayout from "./layouts/LightLayout";

import RouteWrapper from './utils/RouteWrapper';



function App() {

  return (
    <BrowserRouter>
    <RouteWrapper>
       <Routes>
        {/* Landing */}
        <Route path="/" element={<Monalisa/>}/>

        {/* Dark Layout Pages */}
        <Route path="/HomeDefault" element={<DarkLayout><HomeDefault/></DarkLayout>}/>
        <Route path="/HomeParallax" element={<DarkLayout><HomeParallax/></DarkLayout>}/> 
        <Route path="/HomeTextSlider" element={<DarkLayout><HomeTextSlider/></DarkLayout>}/>
        <Route path="/HomeTextRotator" element={<DarkLayout><HomeTextRotator/></DarkLayout>}/> 
        <Route path="/HomeHtml5Video" element={<DarkLayout><HomeHtml5Video/></DarkLayout>}/>
        <Route path="/HomeYoutube" element={<DarkLayout><HomeYoutube/></DarkLayout>}/>

        {/* Light Layout Pages */}
        <Route path="/HomeDefaultL" element={<LightLayout><HomeDefaultL/></LightLayout>}/>
        <Route path="/HomeParallaxL" element={<LightLayout><HomeParallaxL/></LightLayout>}/>
        <Route path="/HomeTextRotatorL" element={<LightLayout><HomeTextRotatorL/></LightLayout>}/>
        <Route path="/HomeTextSliderL" element={<LightLayout><HomeTextSliderL/></LightLayout>}/>
        <Route path="/HomeHtml5VideoL" element={<LightLayout><HomeHtml5VideoL/></LightLayout>}/>
        <Route path="/HomeYoutubeL" element={<LightLayout><HomeYoutubeL/></LightLayout>}/>
      </Routes>
      </RouteWrapper>
    </BrowserRouter>

  );
}

export default App;
