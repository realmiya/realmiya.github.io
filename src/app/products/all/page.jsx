import React from "react";
import "./productPage.module.scss";
import Banner from "../../components/Banner/Banner.jsx";

import Brands from "../../components/Brands/Brands";

import TitlebarBelowImageList from "../../components/ImageBar/ImageBar";

// import AddressForm from "../../components/AddressForm"

function Product() {
    return (
        <>
            <div className="Product">
                <Banner name="OUR PRODUCTS" />
                <TitlebarBelowImageList />
            </div>
        </>
    );
}
export default Product;
