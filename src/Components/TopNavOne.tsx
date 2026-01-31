import "../Styles/TopNavOne.css"
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { CiChat2 } from "react-icons/ci";
import { RiMenuLine } from "react-icons/ri";

export function TopNavOne (){
    return(
        <div>
            {/* Mobile menu */}
            <div className="mobile-menu-container">
                <div className="email"><BsEnvelope className="envelope"/></div>
                <div className="phone"><FiPhoneCall className="phone-icon"/></div>
                <div className="message"><CiChat2 className="chat"/></div>
            </div>

            {/* Destop */}
            <div className="TopNavOne">
                <figure>
                    <img src="/images/logo.jpeg" alt="logo image" />
                </figure>
                <div className="mobile-menu"><RiMenuLine className="menu-icon"/></div>
                <div className="navMenu">
                    <div className="info">
                        <BsEnvelope className="envelope"/>
                        <div className="info-text">
                            <span>INFO</span>
                            <h3>@STUDYTURKEYNIGERIA.COM</h3>
                        </div>
                    </div>
                    <div className="contactUsNow">
                        <FiPhoneCall className="phone"/>
                        <div className="contact-text">
                            <span>CALL US NOW</span>
                            <h3>+90 536 323 3366</h3>
                        </div>
                    </div>
                    <div className="question">
                        <CiChat2 className="chat"/>
                        <div className="chat-text">
                            <span>QUESTIONS?</span>
                            <h3>CONTACT US</h3>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}