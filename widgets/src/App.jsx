import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const showAccordion = () => {
    if (window.location.pathname === "/") {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if (window.location.pathname === "/list") {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === "/translate") {
        return <Translate />;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
