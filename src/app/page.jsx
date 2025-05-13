import "./globals.scss";
import Banner from "./components/Banner/Banner";
import ExpandableButton from "./components/ExpandableButton/ExpandingButton";
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
                            <br></br> As a CPA candidate now transitioning into Financial Planning & Analysis in Toronto, I combine technical expertise in Advanced Excel, Python and BI tools with rigorous accounting training to transform complex data into strategic financial insights.
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
            <div className="ribbon"></div>

            <div className="article-sec">
                <div className="name-sec">
                    <div className="md-container">
                        <Image src="/md/md.jpg" fill="true" alt="md" />
                    </div>
                    {/* <div className="second_line">developer/ designer</div> */}
                    <div className="second_line">An aspiring Financial | Tech professional</div>
             </div>

<ExpandableButton title="Financial Skills">
                    <div className="flexbox">
                        <div className="flex-row">
                            <div className="flexitem one">
                                <div className="img-container">
                                    <GoCodeReview />
                                </div>
                                <div className="text-container">
                                    <b>Financial & Accounting Skills</b>
                                    <br></br>Financial Planning & Analysis (FP&A), Financial Modeling, Month-End Reporting, NPV Analysis, Budgeting & Forecasting, Business Case Development, Variance Analysis, US GAAP Compliance, Financial Statement Analysis
                                </div>
                            </div>
                            <div className="flexitem two">
                                <div className="img-container">
                                    <GoLightBulb />
                                </div>
                                <div className="text-container">
                                    <b>Data & Tech</b>
                                    <br></br>Advanced MS Excel (VBA, PivotTables, Macros), SQL, Power BI, Tableau, Pandas, R, Data Visualization, Financial Reporting Automation, Proficient in QuickBooks, G Suite, Salesforce Marketing Cloud, Database Management and CRM solutions
                                </div>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flexitem three">
                                <div className="img-container">
                                    <GoCodespaces />
                                </div>
                                <div className="text-container">
                                    <b>Education</b>
                                    <br></br>Bachelor of Management (Major: Accounting & Auditing), Graduate Certificate in Professional Accounting, Advanced Diploma in Accounting and Business(ACCA), Master of Information Technology (Major: AI, Distinction GPA: 3.7)
                                </div>
                            </div>
                            <div className="flexitem four">
                                <div className="img-container">
                                    <GoMortarBoard />
                                </div>
                                <div className="text-container">
                                    <b>Certifications</b>
                                    <br></br>Currently pursuing CPA Canada designation (9/14 core preparation courses completed), US CPA candidate, ACCA (13 exams passed), Certified Associate Financial Planner (CAFP), Salesforce
                                    Marketing Cloud Email Specialist, ACCA, etc.
                                </div>
                            </div>
                    </div>
                </div>
</ExpandableButton>



            <ExpandableButton title="Full-Stack Development Skills">
                <div className="flexbox">
                    <div className="flex-row">
                        <div className="flexitem one">
                            <div className="img-container">
                                <GoCodeReview />
                            </div>
                            <div className="text-container">
                                <b>Programming Languages</b>
                                <br></br>Python, JS, TS, Go, Java, PHP
                            </div>
                        </div>
                        <div className="flexitem two">
                            <div className="img-container">
                                <GoLightBulb />
                            </div>
                            <div className="text-container">
                                <b>Data & AI</b>
                                <br></br>Power BI, Pandas, OpenCV, PyTorch, NumPy, R, matplotlib
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
                                <br></br>Next.js, React, React Native, Nest.js,
                                Redux, Node, Express.js, Django, Keystone,
                                Storyblok, WP, MongoDB, Mongoose, PostgreSQL,
                                MySQL, Django, D3.js, GraphQL, Prisma, axios,
                                API, Druapl, WP, HTML, CSS, Less, SCSS, Figma, Sketch, UX/UI, Adobe Illustrator, Adobe
                                Photoshop, Adobe InDesign, Adobe XD, AWS, ddev,
                                docker, SiteGround, DeployBot, Cloudflare
                            </div>
                        </div>
                        <div className="flexitem four">
                            <div className="img-container">
                                <GoMortarBoard />
                            </div>
                            <div className="text-container">
                                <b>Certifications</b>
                                <br></br>AWS Certified Developer, Salesforce
                                Marketing Cloud Email Specialist, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </ExpandableButton>



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
