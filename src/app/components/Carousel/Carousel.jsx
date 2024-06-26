"use client"; // This is a client component
import React, { useState, useEffect } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./carousel.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
let cx = classNames.bind(styles);

const Carousel = (props) => {
    const { data } = props;
    const transitionInterval = 4000;

    const [slide, setSlide] = useState(0);
    const [transition, setTransition] = useState(false);

    const nextSlide = () => {
        setSlide((prev) => (prev + 1) % data.length);
        setTransition(true);
        // console.log(slide);
    };

    const prevSlide = () => {
        setSlide((prev) => (prev - 1 + data.length) % data.length);
        setTransition(true);
    };
    const handleDotClick = (index) => {
        console.log(index);
        setSlide(index);
        setTransition(true);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, transitionInterval); //auto slide in interval
        return () => clearInterval(timer);
    }, [slide]);

    const handleTransitionEnd = () => {
        setTransition(false);
    };

    return (
        <>
            <div className={styles.carouselWapper}>
                <NavigateBeforeIcon
                    className={`${styles.arrowIcon} ${styles.left}`}
                    onClick={prevSlide}
                />
                <div
                    style={{
                        display: "flex",
                        transition: transition
                            ? "transform 0.5s ease-in-out"
                            : "none",
                        transform: `translateX(-${slide * 100}%)`,
                    }}
                >
                    {data.map((image, idx) => (
                        <img
                            src={image.imgURL}
                            alt={image.label}
                            fill="true"
                            key={idx}
                            loading="lazy"
                            onTransitionEnd={handleTransitionEnd}
                        />
                    ))}
                </div>
                <NavigateNextIcon
                    className={`${styles.arrowIcon} ${styles.right}`}
                    onClick={nextSlide}
                />

                <div className={styles.dotsContainer}>
                    {data.map((eachDot, index) => (
                        <div
                            id={index}
                            key={index}
                            className={cx(
                                "dot",
                                index == slide ? "clicked" : ""
                            )}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Carousel;
