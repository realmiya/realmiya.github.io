"use client";
import React from "react";
import { Chrono } from "react-chrono";
import dynamic from "next/dynamic";

export const ChronoConstant = dynamic(
    () => import("react-chrono").then((lib) => lib.Chrono),
    {
        ssr: false,
    }
);
