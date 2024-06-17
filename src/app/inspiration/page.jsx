import Carousel from "../components/Carousel/Carousel";
import { carouselImageData } from "../assets/inputData/carouselImage";
import "./inspiration.scss";
const InspirationPage = () => {
    return (
        <>
            <div className="work_sec carousel">
                <div className="blobs">
                    <div className="blob blob-pink" />
                    <div className="blob blob-green" />
                </div>
                <div className="carousel_container">
                    <Carousel data={carouselImageData} />
                </div>
            </div>
        </>
    );
};
export default InspirationPage;
