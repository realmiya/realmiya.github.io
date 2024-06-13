import "./globals.scss";

import Brands from "./components/Brands/Brands";
import Banner from "./components/Banner/Banner";

function App() {
    return (
        <>
            <div className="container--fullwidth">
                <div className="article-sec">
                    {/* <div className="name">MIYA DONG</div>
                    <div className="title">full stack developer</div>
                    <h1>INTRO</h1> */}
                    <div className="text">
                        Hi there, I am Miya Dong.
                        <br></br>I start my career as a full-stack developer
                        after graduation from UNSW with a master degree in
                        artificial inteligence. I worked in Sydney from 2021 to
                        2024, now I am in Toronto.
                    </div>
                    <h1>KEY SKILLS</h1>
                    <table className="skill-table">
                        <tbody>
                            <tr>
                                <th>
                                    <div className="skill-class">
                                        Programming Languages
                                    </div>
                                </th>
                                <td>
                                    <div className="skill-ele">
                                        Python, JS, TS, Java
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="skill-class">
                                        Full-Stack
                                    </div>
                                </th>
                                <td>
                                    <div className="skill-ele">
                                        Next.js, React, Angular, Redux, Node,
                                        Express.js, Django, Keystone6,
                                        Storyblok, MongoDB, Mongoose,
                                        PostgreSQL, MySQL, Django, D3.js,
                                        GraphQL, Prisma, axios, API, Druapl, WP,
                                        HTML, CSS, Less, SCSS, AntD, Bootstrap,
                                        Material-UI, Syncfusion, Figma, Sketch,
                                        Adobe Illustrator, Adobe Photoshop,
                                        Adobe InDesign, Adobe XD, AWS, ddev,
                                        docker, SiteGround, DeployBot,
                                        Cloudflare
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <div className="skill-class">AI & Data</div>
                                </th>
                                <td>
                                    <div className="skill-ele">
                                        OpenCV, PyTorch
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <div className="skill-class">
                                        Certifications
                                    </div>
                                </th>
                                <td>
                                    <div className="skill-ele">
                                        AWS Certified Developer, Salesforce
                                        Marketing Cloud Email Specialist,
                                        Associate Finalcial Planner, ACCA, etc.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container--fullwidth ">
                <Brands />
            </div>
            <div className="container--fullwidth ">
                <Banner
                    name="Our top picks"
                    // desc="Hand-picked baked goods that we think you’ll love."
                />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="Interested in ordering?" />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="What’s new" />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="Supplying quality baked goods." />
            </div>{" "}
            <div className="container--fullwidth ">
                <Banner name="Food Channel" />
            </div>
        </>
    );
}

export default App;
