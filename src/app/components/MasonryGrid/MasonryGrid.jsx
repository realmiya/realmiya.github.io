// import "./masonryGrid.scss";
"use client";
import React from "react";
import { grid_images } from "../../assets/inputData/gridData";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 4,
};
// import { useEffect, useState } from "react";

const MasonryGrid = () => {
    return (
        <>
            <div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {grid_images.map((item, index) => (
                        <img key={item.id} src={item.download_url} />
                    ))}
                </Masonry>
            </div>
        </>
    );
};

export default MasonryGrid;
