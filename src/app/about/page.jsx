import React from "react";
// import styles from "./about.module.scss";
import Image from "next/image";
const AboutPage = () => {
    return (
        <>
            <div className="work_sec top">
                <div className="download">
                    <div className="text_button">
                        {/* <div className="text">
                            Hi there, I am Miya Dong.
                            <br></br>I started my career as a full-stack
                            developer after graduating from UNSW<br></br>with a
                            Master's Degree in Artificial Intelligence.<br></br>
                            I studied and worked in Sydney from 2020 to 2024,
                            and now I am in Toronto.
                        </div> */}


                        <div className="text">
                            Hi there, I am Miya Dong.
                            <br></br>
                            <br></br>
                            After launching my career as a full-stack developer with a Master of Information Technology (major: AI) from UNSW, I discovered my true passion lies in financial strategy—not only in building tools but also in applying them to support data-informed decision-making.
                            <br></br>
                            <br></br> As a CPA candidate now transitioning into Financial Planning & Analysis in Toronto, I combine technical expertise in Python and BI tools with rigorous accounting training to transform complex data into strategic financial insights.
                        </div>
                        <div className="btn_set">
                            <a
                                href="/Resume_miyadong_ca.pdf"
                                download="cv"
                                target="_blank"
                            >
                                <button>DOWNLOAD RESUME / CV</button>
                            </a>
                            <a
                                href="/cover_letter.pdf"
                                download="cover_letter"
                                target="_blank"
                            >
                                <button>DOWNLOAD COVER LETTER</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutPage;
