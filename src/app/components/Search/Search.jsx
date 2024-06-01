"use client";
import React from "react";
import { useState, useRef } from "react";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import "./search.scss";

const Search = () => {
    const [expand, setExpand] = useState(false);
    const [onblur, setOnblur] = useState("onblur");
    const ref = useRef(null);

    function handleFocus() {
        setExpand(true);
        setOnblur("onfocus");
    }
    function handleBlur() {
        setOnblur("onblur");
        // console.log('onblur');
    }
    function handleClick() {
        setExpand(true);
        ref.current.focus();
    }
    function handleClickClose() {
        setExpand(false);
    }

    return (
        <>
            <form action="">
                <FaSearch
                    className="searchIcon inset-y-0 my-auto border-r border-transparent"
                    style={{
                        color: "#55565a",
                    }}
                    onClick={(e) => handleClick()}
                />
                <input
                    ref={ref}
                    className={
                        expand +
                        " " +
                        onblur +
                        " text-[#55565a] peer cursor-pointer rounded bg-transparent outline-none focus:cursor-text"
                    }
                    placeholder="Search"
                    type="search"
                    onFocus={(e) => handleFocus()}
                    onBlur={(e) => handleBlur()}
                    onClick={(e) => handleClick()}
                />
                <ImCross
                    className="closeSearchBtn"
                    onClick={(e) => handleClickClose()}
                />
            </form>
        </>
    );
};

export default Search;
