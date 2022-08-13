import React from "react";
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton> 
                <PersonIcon fontSize="large" />
            </IconButton>

            <img  className="header_logo" src={"/tinder_logo.png"} alt="logo"/>
        
            <IconButton>
                <ForumIcon fontSize="large"/>
            </IconButton>

        </div>

    )
}


export default Header;