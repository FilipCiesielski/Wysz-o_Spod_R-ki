import React, {Component} from 'react';
import "./Navigation.scss"

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
                    <li><Link activeClass="active"  to="MainLogo" spy={true} smooth={true} duration={500} >Home</Link></li>
                    <li><Link activeClass="active"  to="About" spy={true} smooth={true} duration={500} >O mnie</Link></li>
                    <li><Link activeClass="active"  to="PhotoGallery" spy={true} smooth={true} duration={500} >Galeria</Link></li>
                    <li><Link activeClass="active"  to="Contact" spy={true} smooth={true} duration={500} >Kontakt</Link></li>


                </ul>


        </div>
    )
}


export default Navigation;