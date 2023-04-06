import React from "react"
import AppsLauncher from "./AppLauncher"
import MenuItem from "./menuItem"
import Avatar from "./Avatar"
import "../styles/header.css";


export default function Header() {
    return(
        <div className="header">
             <div className="header-menu">
                <MenuItem title={"Gmail"} /> 
                <MenuItem title={"Images"} />
                <AppsLauncher />
                <Avatar />
            </div>
        </div>

    )
}