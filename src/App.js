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

function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monalisa/>}/>
        <Route path="/HomeDefault" element={<HomeDefault />} />
        <Route path="/HomeParallax" element={<HomeParallax />} /> 
        <Route path="/HomeTextSlider" element={<HomeTextSlider />} />
         <Route path="/HomeTextRotator" element={<HomeTextRotator />} /> 
         <Route path="/HomeHtml5Video" element={<HomeHtml5Video />} />
        <Route path="/HomeYoutube " element={<HomeYoutube />} />

        <Route path="/HomeDefault" element={<HomeDefaultL />} />
        <Route path="/HomeParallaxL" element={<HomeParallaxL />} />
        <Route path="/HomeTextRotatorL" element={<HomeTextRotatorL />} />
        <Route path="/HomeTextSliderL" element={<HomeTextSliderL />} />
        <Route path="/HomeHtml5VideoL" element={<HomeHtml5VideoL />} />
        <Route path="/HomeYoutubeL" element={<HomeYoutubeL />} />


      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
