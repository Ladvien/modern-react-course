import React, { Component, useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        onTermSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Label</label>
                    <input
                        type="text"
                        vale={term}
                        onChange={(event) => onTermSubmit(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
