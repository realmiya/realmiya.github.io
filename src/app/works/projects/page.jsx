import React from "react";
import { projects } from "./projects";

const page = () => {
    return (
        <>
            <div className="work_sec">
                <div className="blobs">
                    <div className="blob blob-pink" />
                    <div className="blob blob-green" />
                </div>
                <div className="timeline_container w-10/12 md:w-7/12 lg:6/12 mx-auto relative">
                    <div className="border-l-2 mt-10">
                        {projects
                            .slice()
                            .reverse()
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-fuchsia-800 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
                                >
                                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                    <div className="w-5 h-5 bg-fuchsia-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                    {/* <!-- Line that connecting the box with the vertical line --> */}
                                    <div className="w-10 h-1 bg-white absolute -left-10 z-0"></div>
                                    <div className="flex-auto">
                                        <div className="first-line first-sec">
                                            <div className="text-xl font-bol">
                                                {item.project_name}
                                            </div>
                                            <div className="time_period text-base font-bol text-white ">
                                                {item.time_period}
                                            </div>
                                        </div>

                                        <div className="first-sec">
                                            <a
                                                href={item.website_link1}
                                                className="hover:text-gray-300"
                                            >
                                                {item.website_link1}
                                            </a>
                                        </div>
                                        <div className="first-sec">
                                            <a
                                                href={item.website_link2}
                                                className="hover:text-gray-300"
                                            >
                                                {item.website_link2}
                                            </a>
                                        </div>

                                        <div className="first-sec">
                                            {item.description}
                                        </div>

                                        <div className="text-lg first-sec">
                                            My Duty:{` ${item.my_duty}`}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default page;
