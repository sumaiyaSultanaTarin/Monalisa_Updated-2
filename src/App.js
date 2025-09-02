import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTextSlider from "./pages/HomeTextSlider";
import HomeParallax from "./pages/HomeParallax";
import HomeDefault from "./pages/HomeDefault";
import HomeHtml5Video from "./pages/HomeHtml5Video";
import HomeTextRotator from "./pages/HomeTextRotator";
import HomeYoutube from "./pages/HomeYoutube";

function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        <Route path="/HomeParallax" element={<HomeParallax />} /> 
        <Route path="/HomeTextSlider" element={<HomeTextSlider />} />
         <Route path="/HomeTextRotator" element={<HomeTextRotator />} /> 
         <Route path="/HomeHtml5Video" element={<HomeHtml5Video />} />
        <Route path="/HomeYoutube " element={<HomeYoutube />} />

        {/* <Route path="/HomeTwo" element={<HomeTwo />} /> */}

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
