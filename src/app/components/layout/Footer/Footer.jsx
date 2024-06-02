import React from "react";
import styles from "./footer.module.scss";
import { menuItems } from "../../../assets/inputData/menuItemsData";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.ribbon}></div>
                <div className={styles.brand_intro}>
                    <div
                        className={styles.footer_Logo}
                        href="//www.tiptop-foodservice.com.au/"
                    ></div>

                    <div className={styles.right}>
                        <div className={styles.footer_desc}>
                            Tip Top Foodservice is the specialist foodservice
                            bakery division of George Weston Foods, offering an
                            extensive product portfolio from some of Australia's
                            most trusted brands.
                        </div>
                        <div className={styles.follow}>Follow us</div>
                    </div>
                </div>
                <div className={styles.subscription}>
                    <div className={styles.subscription_header}>
                        Sign up to our monthly newsletter
                    </div>
                    <div className={styles.emailInput}></div>
                </div>

                <div className={styles.footer_column}>
                    {Object.keys(menuItems).map((item, index) => (
                        <div className={styles.columnItem} key={index}>
                            <div className={styles.columnItem_header}>
                                {item}
                            </div>
                            {menuItems[item]
                                .slice(1)
                                .map((menuitems, menuindex) => (
                                    <div
                                        className={styles.columnItem_item}
                                        key={`${menuindex}`}
                                    >
                                        {menuitems.title}
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </footer>
        </>
    );
}
