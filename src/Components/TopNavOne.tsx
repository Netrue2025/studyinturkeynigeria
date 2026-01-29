import "../Styles/TopNavOne.css"
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { CiChat2 } from "react-icons/ci";

export function TopNavOne (){
    return(
        <div className="TopNavOne">
            <figure>
                <img src="/images/logo.jpeg" alt="logo image" />
            </figure>
            <div className="navMenu">
                <div className="info"><BsEnvelope className="envelope"/><p>info@gmail.com</p></div>
                <div className="contactUsNow"><FiPhoneCall className="phone"/><p>Contact Us Now</p></div>
                <div className="question"><CiChat2 className="chat"/><p>Questions</p></div>
            </div>
        </div>
    )
}