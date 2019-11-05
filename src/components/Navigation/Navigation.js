import React, {Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"

const styleActive = {
    color: "ghostwhite",
    textDecoration: "none",
    fontSize: "1.5rem"
}
const styleNo = {
    textDecoration: "none",
    color: "#3498db",
    fontSize: "1.5rem"

}

function Navigation() {

    return (
        <div className={"navigation__bar"} >
                <ul className={"navigation__elements"}>
                    <li>Home</li>
                    <li>O mnie</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>

                </ul>


        </div>
    )
}


export default Navigation;