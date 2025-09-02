import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomeTextSlider from "./pages/HomeTextSlider";
// import HomeParallax from "./pages/HomeParallax";
import HomeDefault from "./pages/HomeDefault";
// import HomeHtml5Video from "./pages/HomeHtml5Video";
// import HomeYoutube from "./pages/HomeYoutube";
function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        {/* <Route path="/" element={<HomeParallax />} /> */}
        {/* <Route path="/" element={<HomeTextSlider />} /> */}
        {/* <Route path="/" element={<HomeTextRotator />} /> */}
        {/* <Route path="/" element={<HomeHtml5Video />} /> */}
        {/* <Route path="/" element={<HomeYoutube />} /> */}

        {/* <Route path="/HomeTwo" element={<HomeTwo />} /> */}

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
