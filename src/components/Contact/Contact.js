import React, {Component} from 'react';
import "./Contact.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,faAt,faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons"



class Contact extends Component {
    render() {
        return (
            <div name={"Contact"} className={"contact__box"}>
                <h1>Masz pytania? Napisz do mnie!</h1>
                <div className={"contact__form"}>
                <form>
                    <label>

                        <FontAwesomeIcon className='font-awesome' icon={faUser}/>
                        <input type={"name"} placeholder={"imię"}/>
                    </label>
                    <label>

                        <FontAwesomeIcon className='font-awesome' icon={faAt}/>
                        <input type={"email"} placeholder={"e-mail"}/>
                    </label>
                    <label>

                        <FontAwesomeIcon className='font-awesome' icon={faEnvelopeOpenText}/>
                        <textarea placeholder={"napisz do mnie"} />
                    </label>
                    <input type={"button"} value={"wyslij"}/>
                </form>
            </div>
            </div>
        )
    }
}


export default Contact;