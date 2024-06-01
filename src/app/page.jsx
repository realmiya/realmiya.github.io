// import React from "react";
// import "./home/homePage.module.scss";
// // import withModal from "../../components/withModal";
// import Carousel from "./components/Carousel/Carousel";
// import Brands from "./components/Brands/Brands";
// import Banner from "./components/Banner/Banner";
// import { carouselImageData } from "./assets/inputData/carouselImage";
// // import Search from '../../components/Search/oldsearch';
// // import RootLayout from "../components/RootLayout";
// function HomePage() {
//     return (
//         <>
//             <Carousel data={carouselImageData} />
//             <Brands />
//             <Banner name="Our top picks" />
//             <Banner name="Interested in ordering?" />
//             <Banner name="What’s new" />
//             <Banner name="Supplying quality baked goods." />

//             <Banner name="Food Channel" />
//         </>
//     );
// }
// export default HomePage;
// import Image from "next/image";

// import styles from "./page.module.scss";

// import { Header } from "./components/layout/Header";
// import Footer from "./components/layout/Footer/Footer";
// import { menuItems } from "./assets/inputData/menuItemsData.js";
// import DropDownButton from "./components/DropDownButton/DropDownButton";

// import TitlebarBelowImageList from "./components/ImageBar/ImageBar";
// // import ExchangeRatesPage from "./ExchangeRatesPage";
// // import "./assets/fonts/alegre-sans-nc.ttf";
// import theme from "./assets/styles/global/_variables.jsx";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// // import { library } from "@fortawesome/fontawesome-svg-core";
// import Link from "next/link";
import "./globals.scss";

import Carousel from "./components/Carousel/Carousel";
import Brands from "./components/Brands/Brands";
import Banner from "./components/Banner/Banner";
import { carouselImageData } from "./assets/inputData/carouselImage";

function App() {
    return (
        <>
            <Carousel data={carouselImageData} />
            <div className="container--fullwidth ">
                <Brands />
            </div>
            <div className="container--fullwidth ">
                <Banner
                    name="Our top picks"
                    desc="Hand-picked baked goods that we think you’ll love."
                />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="Interested in ordering?" />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="What’s new" />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="Supplying quality baked goods." />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="Food Channel" />
            </div>
        </>
    );
}

export default App;
