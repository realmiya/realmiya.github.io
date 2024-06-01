import React from "react";
import styles from "./banner.module.scss";

const Banner = (props) => {
    return (
        <>
            <div className={styles.banner}>{props.name}</div>
            <div className={styles["banner-desc"]}>{props.desc}</div>
        </>
    );
};

export default Banner;
