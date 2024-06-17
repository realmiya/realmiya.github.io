import React from "react";
import styles from "./footer.module.scss";
import { menuItems } from "../../../assets/inputData/menuItemsData";
import Banner from "../../Banner/Banner";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer} id="footer">
                <div className="ribbon" style={{ width: "100%" }}></div>
                <Banner name="LET'S CHAT" desc="or drop me a message" />

                <div className={styles.footer_text}>
                    {/* <div className={styles.footer_desc}></div> */}
                    <div className={styles.footer_desc}>(+1) 4374357168</div>
                    <div className={styles.footer_desc}>
                        miyatungtung@gmail.com
                    </div>
                </div>

                <div className={styles.footer_column}>
                    {Object.keys(menuItems).map((item, index) => (
                        <div className={styles.columnItem} key={index}>
                            <a href={menuItems[item][0].path} key={index}>
                                <div className={styles.columnItem_header}>
                                    {item}
                                </div>
                            </a>
                            {menuItems[item]
                                .slice(1)
                                .map((menuitems, menuindex) => (
                                    <a href={menuitems.path} key={menuindex}>
                                        <div
                                            className={styles.columnItem_item}
                                            key={menuindex}
                                        >
                                            {menuitems.title}
                                        </div>
                                    </a>
                                ))}
                        </div>
                    ))}
                </div>
            </footer>
        </>
    );
}
