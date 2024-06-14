import React from "react";
import styles from "./header.module.scss";
// import Head from "next/head";
import Image from "next/image";
// import logo from "./m_logo_flower.svg";
import logo from "./name_logo.svg";

import Search from "../../Search/Search.jsx";
import DropDownButton from "../../DropDownButton/DropDownButton";
import { menuItems } from "../../../assets/inputData/menuItemsData.js";
import { FileTextOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Button, Flex } from "antd";

function Header() {
    return (
        <>
            {/* <div className="container--fullwidth "> */}
            <header className={styles.header}>
                <div className={styles.navHeader}>
                    <a href="/">
                        <div className={styles.appLogo_container}>
                            {/* <img
                                src="M-logo.svg"
                                height="100"
                                width="100"
                            ></img> */}
                            <img src="md/white_md.jpeg"></img>
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

                        <a href="/contact" className={styles.button}>
                            CONTACT
                        </a>
                    </div>
                </div>
                <div className="dropdown main">
                    <DropDownButton menuType="main" menuItems={menuItems} />
                </div>
                <div className={styles.download}>
                    {/* <div className={styles.name_logo_style}>
                        <img src="md/white_md.jpeg"></img>
                    </div>
                    <div className={styles.second_line}>
                        developer / designer
                    </div> */}
                    <div className={styles.text_button}>
                        <div className={styles.text}>
                            Hi there, I am Miya Dong.
                            <br></br>I started my career as a full-stack
                            developer after graduating from UNSW<br></br>with a
                            master's degree in artificial intelligence.<br></br>
                            I studied and worked in Sydney from 2020 to 2024,
                            and now I am in Toronto.
                        </div>

                        <div className={styles.btn_set}>
                            <button>DOWNLOAD RESUME / CV</button>
                            <button>DOWNLOAD COVER LETTER</button>
                        </div>
                    </div>

                    {/* <Button>Default Button</Button> */}

                    {/* <FloatButton
                        icon={<FileTextOutlined />}
                        description="DOWNLOAD CV"
                        shape="square"
                        style={{
                            width: 120,
                            right: 24,
                        }}
                    /> */}
                </div>
            </header>
            {/* </div> */}
        </>
    );
}
export { Header };
