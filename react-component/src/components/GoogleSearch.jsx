import React, { useState } from "react";
import "../styles/searchBar.css";


export default function SearchBar(){
    const [value, setValue] = useState("")

    const [input, updatedInput] = useState("")
    const onChangeHandler = event => {
    setValue(event.target.value);
    };
    const handleKeyPress = event => {
        if(event.key === "Enter")
        updatedInput(value)
    };
 return (
        <div className="searchcomponents">
            <div className="searchbar">
                <input
                    type="search"
                    name="name"
                    onChange={onChangeHandler}
                    onKeyDown = {handleKeyPress}
                    value={value}
                />
            </div>
            <p>{input}</p>
        </div>
    )
}