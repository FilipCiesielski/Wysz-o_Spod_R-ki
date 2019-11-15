import React, {Component} from 'react';
import "./Navigation.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { Link} from 'react-scroll'
import {faBars} from "@fortawesome/free-solid-svg-icons";



class Navigation extends Component{
    state={
        menuOff:"none",
         };

    handleOnClick=()=>{
        if(this.state.menuOff==="none"){
        this.setState({menuOff:"flex"})

        }else{
            this.setState({menuOff:"none"})
        }};
render() {


    return (
        <>

            <div className={"navigation__mobileIcon"}> <FontAwesomeIcon className='font-awesome' icon={faBars} onClick={this.handleOnClick}/></div>
            <div className={"navigation__elements"} >

                <Link activeClass="active" to="MainLogo" spy={true} smooth={true} duration={500}>Home</Link>
                    <Link activeClass="active" to="About" spy={true} smooth={true} duration={500}>O mnie</Link>
                    <Link activeClass="active" to="PhotoGallery" spy={true} smooth={true} duration={500}>Galeria</Link>
                    <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</Link>
        </div>
            <div className={"navigation__mobileElements"} style={{display:this.state.menuOff} }>

                <Link activeClass="active" to="MainLogo" spy={true} smooth={true} duration={500}>Home</Link>
                <Link activeClass="active" to="About" spy={true} smooth={true} duration={500}>O mnie</Link>
                <Link activeClass="active" to="PhotoGallery" spy={true} smooth={true} duration={500}>Galeria</Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</Link>
            </div>


</>

    )
}}


export default Navigation;