import React from "react";
import styles from "./header.module.scss";
// import Head from "next/head";
import Image from "next/image";
// import logo from "./m_logo_flower.svg";
import logo from "./name_logo.svg";

import Search from "../../Search/Search.jsx";
import DropDownButton from "../../DropDownButton/DropDownButton";
import { navMenuItems } from "../../../assets/inputData/navMenuItemsData.js";
import { menuItems } from "../../../assets/inputData/menuItemsData.js";

function Header() {
    return (
        <>
            {/* <div className="container--fullwidth "> */}
            <header className={styles.header}>
                <div className={styles.navHeader}>
                    <a href="/">
                        <div className={styles.appLogo_letter}>Miya Dong</div>
                        {/* <Image
                            src={logo}
                            alt="Logo"
                            className={styles.appLogo}
                        /> */}
                    </a>
                    <div className={styles.rightHeader}>
                        <Search />
                        <div className="dropdown">
                            <DropDownButton
                                menuType="nav"
                                menuItems={navMenuItems}
                            />
                        </div>
                    </div>
                </div>
                <div className="dropdown main">
                    <DropDownButton menuType="main" menuItems={menuItems} />
                </div>
            </header>
            {/* </div> */}
        </>
    );
}
export { Header };
