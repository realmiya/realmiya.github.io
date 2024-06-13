"use client"; // This is a client component
import React from "react";
import "./mainNav.scss";
import { useState } from "react";
import { menuItems } from "./menuItemsData";

const MainNav = () => {
    const initialState = { 0: false, 1: false, 2: false, 3: false };
    const [expanded, setExpanded] = useState(initialState);
    const handleHover = (index) => {
        // console.log(index);
        // console.log(initialState);
        const initialState = { 0: false, 1: false, 2: false, 3: false };
        for (const [indexKey, value] of Object.entries(initialState)) {
            if (indexKey == index) {
                initialState[indexKey] = true;
            }
        }
        setExpanded(initialState);
        console.log(expanded);
    };

    const handleMouseLeave = () => {
        const initialState = { 0: false, 1: false, 2: false, 3: false };
        setExpanded(initialState);
        console.log(expanded);
    };

    return (
        <>
            <div>
                <div className="dropdown">
                    {Object.keys(menuItems).map((item, index) => (
                        <div
                            className="menu"
                            key={index.toString()}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <button
                                href={menuItems[item][0].path}
                                className={"dropbtn ele" + index.toString()}
                            >
                                {menuItems[item][0].title}
                            </button>
                            <div
                                className={
                                    "dropdown-content" +
                                    (expanded[index] ? " expanded" : " closed")
                                }
                            >
                                {menuItems[item]
                                    .slice(1)
                                    .map((dropDownItem, newindex) => (
                                        <a
                                            key={newindex.toString()}
                                            href={dropDownItem.path}
                                        >
                                            {dropDownItem.title}
                                            <hr
                                                className={
                                                    newindex ===
                                                    menuItems[item].slice(1)
                                                        .length -
                                                        1
                                                        ? "none"
                                                        : ""
                                                }
                                            ></hr>
                                        </a>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainNav;
