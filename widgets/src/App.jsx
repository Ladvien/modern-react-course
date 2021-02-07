import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is React?",
        content: "React is a frontend framework.",
    },
    {
        title: "Why use React?",
        content: "It favorite library among engineers.",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components.",
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Blue",
        value: "blue",
    },
    {
        label: "The Color Green",
        value: "green",
    },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <Translate></Translate>
        </div>
    );
};
