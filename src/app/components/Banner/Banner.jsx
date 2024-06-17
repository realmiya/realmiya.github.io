import React from "react";
import styles from "./banner.module.scss";

const Banner = (props) => {
    return (
        <>
            <div className={styles.banner_sec}>
                <div className={styles.banner}>{props.name}</div>
                <div className={styles["banner-desc"]}>{props.desc}</div>
            </div>
        </>
    );
};

export default Banner;
