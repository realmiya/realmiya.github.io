// import "./masonryGrid.scss";
"use client";
import React from "react";
import { grid_images } from "../../assets/inputData/gridData";
import Masonry from "react-masonry-css";
import "./masonryGrid.scss";
// import Image from "next/image";
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 4,
};

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
                        <a href={item.url} key={item.id}>
                            <img
                                className="masonry_img"
                                key={item.id}
                                src={item.download_url}
                                fill="true"
                            />
                        </a>
                    ))}
                </Masonry>
            </div>
        </>
    );
};

export default MasonryGrid;
