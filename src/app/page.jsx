import "./globals.scss";

import Brands from "./components/Brands/Brands";
import Banner from "./components/Banner/Banner";
import { GoCodeReview } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { GoMortarBoard } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import MasonryGrid from "./components/MasonryGrid/MasonryGrid";
import { grid_images } from "./assets/inputData/gridData";

// import { useEffect, useState } from "react";

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function App() {
    return (
        <>
            <div className="container--fullwidth">
                <div className="article-sec">
                    <div className="name-sec">
                        <img src="md/md.jpg"></img>

                        <div className="second_line">developer/ designer</div>
                    </div>

                    <div className="flexbox">
                        <div className="flex-row">
                            <div className="flexitem one">
                                <div className="img-container">
                                    <GoCodeReview />
                                </div>
                                <div className="text-container">
                                    <b>Programming Languages</b>
                                    <br></br>Python, JS, TS, Java
                                </div>
                            </div>
                            <div className="flexitem two">
                                <div className="img-container">
                                    <GoLightBulb />
                                </div>
                                <div className="text-container">
                                    <b>Data & AI</b>
                                    <br></br>Pandas, OpenCV, PyTorch, NumPy, R,
                                    matplotlib
                                </div>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flexitem three">
                                <div className="img-container">
                                    <GoCodespaces />
                                </div>
                                <div className="text-container">
                                    <b>Full-Stack</b>
                                    <br></br>Next.js, React, Angular, Redux,
                                    Node, Express.js, Django, Keystone6,
                                    Storyblok, MongoDB, Mongoose, PostgreSQL,
                                    MySQL, Django, D3.js, GraphQL, Prisma,
                                    axios, API, Druapl, WP, HTML, CSS, Less,
                                    SCSS, AntD, Bootstrap, Material-UI,
                                    Syncfusion, Figma, Sketch, Adobe
                                    Illustrator, Adobe Photoshop, Adobe
                                    InDesign, Adobe XD, AWS, ddev, docker,
                                    SiteGround, DeployBot, Cloudflare
                                </div>
                            </div>
                            <div className="flexitem four">
                                <div className="img-container">
                                    <GoMortarBoard />
                                </div>
                                <div className="text-container">
                                    <b>Certifications</b>
                                    <br></br>AWS Certified Developer, Salesforce
                                    Marketing Cloud Email Specialist, Associate
                                    Finalcial Planner, ACCA, etc.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container--fullwidth ">
                <Brands />
            </div> */}
            <div className="container--fullwidth">
                <Banner
                    name="WORK"
                    // desc="Hand-picked baked goods that we think you’ll love."
                />
            </div>
            <div className="container--fullwidth grid">
                <MasonryGrid />
            </div>
        </>
    );
}

export default App;
