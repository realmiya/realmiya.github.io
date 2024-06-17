import React from "react";
// import styles from "./about.module.scss";
import Image from "next/image";
const AboutPage = () => {
    return (
        <>
            <div className="work_sec container__fullwidth blobs header">
                <div className="download">
                    <div className="text_button">
                        <div className="text">
                            Hi there, I am Miya Dong.
                            <br></br>I started my career as a full-stack
                            developer after graduating from UNSW<br></br>with a
                            Master's Degree in Artificial Intelligence.<br></br>
                            I studied and worked in Sydney from 2020 to 2024,
                            and now I am in Toronto.
                        </div>
                        <div className="btn_set">
                            <a
                                href="/Resume_miyadong_ca.pdf"
                                download="cv"
                                target="_blank"
                            >
                                <button>DOWNLOAD RESUME / CV</button>
                            </a>
                            <button>DOWNLOAD COVER LETTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutPage;
