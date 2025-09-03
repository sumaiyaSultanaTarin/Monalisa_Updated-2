import { useEffect } from "react";
import validation from '../utils/scripts';

//Components
import Home from "../components/homeParallax/Home";
import MainLayout from '../layouts/MainLayout';



export default function HomeParallax() {
useEffect(() => {
validation();
}, []);

return(
<div data-spy="scroll" data-offset="80">
    <MainLayout>
       <Home />
    </MainLayout>
</div>
);
}
