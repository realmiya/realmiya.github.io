"use client";
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "./name_logo.svg";
import Search from "../../Search/Search.jsx";
import DropDownButton from "../../DropDownButton/DropDownButton";
import { menuItems } from "../../../assets/inputData/menuItemsData.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
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
                                fill="true"
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

            <header className={styles.header_mobile}>
                <div className={styles.navHeader}>
                    <a href="/">
                        <div className={styles.appLogo_container}>
                            <Image
                                // src="/md/white_md.jpeg"
                                src="/vercel.svg"
                                fill="true"
                                alt="M-logo"
                            />
                        </div>
                    </a>

                    <div className={styles.topnav}>
                        {menuVisible ? null : (
                            <div className="menuicon_container">
                                <GiHamburgerMenu
                                    style={{
                                        color: "white",
                                        backgroundColor: "transparent",
                                        fontSize: "2.2rem",
                                        marginBottom: "13px",
                                    }}
                                    onClick={() => setMenuVisible(true)}
                                />
                            </div>
                        )}
                        {menuVisible ? (
                            <div
                                className="overlay"
                                onClick={() => setMenuVisible(false)}
                            />
                        ) : null}
                    </div>
                    {menuVisible ? (
                        <div className={styles.slidemenu}>
                            <a href="/works/projects">Projects</a>
                            <a href="/works">Experience</a>

                            <a href="/about">About</a>
                            <a href="#footer">Contact</a>
                        </div>
                    ) : null}
                </div>
            </header>
        </>
    );
}
export { Header };
