import React from "react"
import GoogleLogo from "./GoogleLogo";
import GoogleSearch from "./GoogleSearch";
import Button from "./Button"
import Language from "./language";



export default function SearchBar() {
    return(
        <div className="SeachBar">
             <GoogleLogo />
             <GoogleSearch />
             <div className="button">
                <Button text="Google Search"/>
                <Button text="I'm Feeling Lucky"/>
            </div>
            <Language />
        </div>

    )
}