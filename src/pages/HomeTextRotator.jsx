import { useEffect } from "react";
import validation from '../utils/scripts';

//Components
import TextRotator from "../components/homeTextRotator/TextRotator";
import MainLayout from '../layouts/MainLayout';


export default function HomeTextRotator() {
useEffect(() => {
validation();
}, []);

return(
<div data-spy="scroll" data-offset="80">
    <MainLayout>
         <TextRotator />
    </MainLayout>
</div>
);
}
