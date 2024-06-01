import React from "react";
import "./homePage.module.scss";
// import withModal from "../../components/withModal";
import Carousel from "../../app/components/Carousel/Carousel";
import Brands from "../../app/components/Brands/Brands";
import Banner from "../../app/components/Banner/Banner";
import { carouselImageData } from "../../app/assets/inputData/carouselImage";
// import Search from '../../components/Search/oldsearch';
// import RootLayout from "../components/RootLayout";
function HomePage() {
    return (
        <>
            <Carousel data={carouselImageData} />
            <Brands />
            <Banner name="Our top picks" />
            <Banner name="Interested in ordering?" />
            <Banner name="What’s new" />
            <Banner name="Supplying quality baked goods." />

            <Banner name="Food Channel" />
        </>
    );
}
export default HomePage;
