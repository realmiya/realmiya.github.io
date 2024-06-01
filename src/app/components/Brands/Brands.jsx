import React from "react";
import { BrandsItems } from "./brandsData";
import styles from "./brands.module.scss";

const Brands = () => {
    return (
        <>
            <div className={styles.brands}>
                {BrandsItems.map((item, index) => (
                    <div className={styles.brandItem} key={index}>
                        <div className={styles.brandImg}></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Brands;
