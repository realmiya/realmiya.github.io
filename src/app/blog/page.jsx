import React from "react";
import Banner from "../components/Banner/Banner";
const page = () => {
    return (
        <>
            <div className="container__fullwidth header">
                <div
                    className="banner_container"
                    style={{
                        paddingTop: "230px !important",
                    }}
                >
                    <Banner name="Coming Soon..." desc="under construction" />
                </div>
            </div>
        </>
    );
};
export default page;
