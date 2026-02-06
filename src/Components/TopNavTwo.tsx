import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import "../Styles/TopNavTwo.css"
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";


export function TopNavTwo(){
     const [open, setOpen] = useState(false);
     const [joinus, setJoinus] = useState(false);

    return(
        <div className="tntwo"


        >
            <section className="top-nav-two">
                <div className="list-menu">
                    <ul
                        className="relative inline-block"
                      
                    >
                        <li><Link to="/" className="home">Home</Link></li>
                        <li><Link to="/Universities" className="universities">Universities</Link></li>
                        <li><Link to="/ProgrameFinder" className="programe-finder">Programe Finder</Link></li>
                        <li 
                            onFocus={() => setOpen(true)}
                            onBlur={() => setOpen(false)}
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        ><Link to={"#"} className="contact-us">Contact Us<IoIosArrowDown className="arrow-down"/></Link>
                        {open && (
                            <ul className="dropdown">
                                <li><Link to={"/ContactUs"}>Contact Us</Link></li>
                                <li><Link to={"/SetUpMeetingStudent"}>Setup a Meeting - Students</Link></li>
                            </ul>
                        )}
                        </li>
                        <li
                            onFocus={() => setOpen(true)}
                            onBlur={() => setJoinus(false)}
                            onMouseEnter={() => setJoinus(true)}
                            onMouseLeave={() => setJoinus(false)}
                        ><Link to="" className="join-us">Join Us<IoIosArrowDown className="arrow-down"/></Link>
                            {joinus && (
                                <ul className="dropdown">
                                    <li><Link to={"/BecomeAnAgent"}>Become and Agent</Link></li>
                                    <li><Link to={"/SetUpAMeetingAgent"}>Setup a Meeting - Agents</Link></li>
                                    <li><Link to={"/BecomeAPartnerUniversity"}>Become a Partner University</Link></li>
                                </ul>
                            )}
                        </li> 
                    </ul>
                    <search>
                        <GoSearch />
                    </search>
                </div>
                <div className="other-details">
                    <span>Mon - Fri 10:00am - 6:00pm</span>
                    <button>
                        <h3>Apply Today</h3>
                        <FaArrowRight className="btn-arrow"/>
                    </button>
                </div>
            </section>
     

        </div>
    )
}