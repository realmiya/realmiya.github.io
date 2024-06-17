import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "./name_logo.svg";
import Search from "../../Search/Search.jsx";
import DropDownButton from "../../DropDownButton/DropDownButton";
import { menuItems } from "../../../assets/inputData/menuItemsData.js";

function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.navHeader}>
                    <a href="/">
                        <div className={styles.appLogo_container}>
                            {/* <img
                                src="M-logo.svg"
                                height="100"
                                width="100"
                            > */}
                            <Image
                                // src="/md/white_md.jpeg"
                                src="/vercel.svg"
                                fill
                                alt="M-logo"
                            />
                        </div>
                    </a>
                    <div className={styles.rightHeader}>
                        <Search />

                        <a
                            className={styles.button}
                            style={{
                                borderRight: "1px white solid",
                            }}
                            href="/about"
                        >
                            ABOUT
                        </a>

                        <a href="#footer" className={styles.button}>
                            CONTACT
                        </a>
                    </div>
                </div>
                <div className="dropdown main">
                    <DropDownButton menuType="main" menuItems={menuItems} />
                </div>
            </header>
        </>
    );
}
export { Header };
