import validation from '../utils/scripts';
import { useEffect } from "react";

//Components
import TextSlider from "../components/homeTextSlider/TextSlider";
import MainLayout from '../layouts/MainLayout';



export default function HomeTextSlider() {
useEffect(() => {
validation();
}, []);

return(
<div data-spy="scroll" data-offset="80">
    <MainLayout>
        <TextSlider />
    </MainLayout>
</div>
);
}
