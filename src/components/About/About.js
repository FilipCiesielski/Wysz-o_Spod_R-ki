import React, {Component} from 'react';
import "./About.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebookSquare} from '@fortawesome/fontawesome-free-brands'


class About extends Component {
    render() {
        return (
            <div name="About" className={"about__box"}>
                <div className={"about__text"}>
                    <h1>O mnie</h1>
                    <p>Kilka słów o zajawce. Lorem ipsum dolor sit amet mauris.
                        Praesent pretium. Vestibulum quam placerat nec, molestie justo ipsum dolor urna, eu neque quis
                        pede id nulla dictum libero, posuere arcu. Nam scelerisque lorem.</p>
                </div>
                <div className={"about__columnBox"}>
                    <div className={"about__photo"}></div>
                    <div className={"about__logos"}>
                        <div className={"about__logo"}> <a target={"_blank"} href='#'>
                            <FontAwesomeIcon className='font-awesome' icon={faInstagram}/>
                        </a> </div>
                        <div className={"about__logo"}><a target={"_blank"} href='#'>
                            <FontAwesomeIcon className='font-awesome' icon={faFacebookSquare}/>
                        </a></div>
                    </div>
                </div>

            </div>
        )
    }
}


export default About;