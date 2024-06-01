"use client"; // This is a client component
import React from "react";
import "./dropDownButton.scss";
import { useState } from "react";
import Link from "next/link";

const DropDownButton = (props) => {
    const { menuItems, menuType } = props;

    let initialState = {};
    const [expanded, setExpanded] = useState(initialState);

    if (menuType == "main") {
        initialState = { 0: false, 1: false, 2: false, 3: false };
    } else {
        initialState = { 0: false, 1: false };
    }

    const handleHover = (index) => {
        Object.keys(initialState).forEach((key) => {
            initialState[key] = false;
        });
        for (const [indexKey, value] of Object.entries(initialState)) {
            if (indexKey == index) {
                initialState[indexKey] = true;
            }
        }
        setExpanded(initialState);
        // console.log(expanded);
    };

    const handleMouseLeave = () => {
        Object.keys(initialState).forEach((key) => {
            initialState[key] = false;
        });
        setExpanded(initialState);
        // console.log(expanded);
    };

    return (
        <>
            {Object.keys(menuItems).map((item, index) => (
                <div
                    className={`menu ${menuType}`}
                    key={index.toString()}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <button className={"dropbtn ele" + index.toString()}>
                        <Link href={menuItems[item][0].path}>
                            {menuItems[item][0].title}
                        </Link>
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
                                            menuItems[item].slice(1).length - 1
                                                ? "none"
                                                : ""
                                        }
                                    ></hr>
                                </a>
                            ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default DropDownButton;
