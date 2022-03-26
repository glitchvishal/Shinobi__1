import React from 'react'
import './navBar.css'

export default function NavBar() {
    const user = false;
    return (
        <div className = "navbar">
            <div className = "topLeft">
                <img className = "Navimg"src="logo.png" alt="logo" />
                <div className = "userName">
                    <h4>userName</h4>
                </div>
            </div>
            <div className = "topCenter">
                {/* <ul className="topList"> 
                    <li className ="topListItem">HOME</li>
                    <li className ="topListItem">ABOUT</li>
                    <li className ="topListItem">{user && "LOGIN"}</li>
                </ul> */}
            </div>
            <div className = "topRight">
                <li>Login</li><span><h1>/</h1></span>
                <li>logout</li>
            </div>
        </div>
    )
}