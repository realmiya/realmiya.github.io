import "./globals.scss";
import Banner from "./components/Banner/Banner";
import { GoCodeReview } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { GoMortarBoard } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import MasonryGrid from "./components/MasonryGrid/MasonryGrid";
import Image from "next/image";

function App() {
    return (
        <>
            <div className="top">
                <div className="download">
                    <div className="text_button">
                        <div className="text">
                            Hi there, I am Miya Dong.
                            <br></br>I started my career as a full-stack
                            developer after graduating from UNSW<br></br>with a
                            Master's Degree in Artificial Intelligence.<br></br>
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
            <div className="ribbon"></div>

            <div className="article-sec">
                <div className="name-sec">
                    <div className="md-container">
                        <Image src="/md/md.jpg" fill="true" alt="md" />
                    </div>
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
                                <br></br>Next.js, React, Angular, Redux, Node,
                                Express.js, Django, Keystone6, Storyblok,
                                MongoDB, Mongoose, bash, PostgreSQL, MySQL,
                                Django, D3.js, GraphQL, Prisma, axios, API,
                                Druapl, WP, HTML, CSS, Less, SCSS, AntD,
                                Bootstrap, Material-UI, Syncfusion, Figma,
                                Sketch, Adobe Illustrator, Adobe Photoshop,
                                Adobe InDesign, Adobe XD, AWS, ddev, docker,
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
            <div className="ribbon"></div>
            <Banner name="WORK" desc="some works I made" />
            {/* </div> */}
            <div className="grid">
                <MasonryGrid />
            </div>
        </>
    );
}

export default App;
