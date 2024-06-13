import Carousel from "../components/Carousel/Carousel";
import { carouselImageData } from "../assets/inputData/carouselImage";

const InspirationPage = () => {
    return (
        <div>
            <Carousel data={carouselImageData} />

            <h1 class>InspirationPageg</h1>
        </div>
    );
};
export default InspirationPage;
