import React from "react";
import { jobs } from "./jobs";

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
                        {jobs.map((item, index) => (
                            <div
                                key={index}
                                className={`${item.type} transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-fuchsia-800 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}
                            >
                                {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                <div className="w-5 h-5 bg-fuchsia-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                {/* <!-- Line that connecting the box with the vertical line --> */}
                                <div className="w-10 h-1 bg-white absolute -left-10 z-0"></div>
                                <div className="flex-auto">
                                    <div className="first-line first-sec">
                                        <div className="text-xl font-bol">
                                            {item.employer}
                                        </div>
                                        <div className="time_period text-xl font-bol text-white ">
                                            {item.period}
                                        </div>
                                    </div>
                                    <div className="first-line  first-sec">
                                        <div className="text-sm font-medium">
                                            {item.jobTitle}
                                        </div>
                                        <div className="time_period text-sm font-medium">
                                            {item.location}
                                        </div>
                                    </div>
                                    {item.jobDuty.map((item, idx) => (
                                        <ul
                                            className="list-disc text-base  first-sec"
                                            key={idx}
                                        >
                                            <li>{item}</li>
                                        </ul>
                                    ))}
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
