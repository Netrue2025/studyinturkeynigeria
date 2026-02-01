import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import "../Styles/TopNavTwo.css"
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";



export function TopNavTwo(){
    return(
        <div className="tntwo">
            <section className="top-nav-two">
                <div className="list-menu">
                    <ul>
                        <Link to="/" className="home"><li>Home</li></Link>
                        <Link to="/Universities" className="universities"><li>Universities</li></Link>
                        <Link to="/ProgrameFinder" className="programe-finder"><li>Programe Finder</li></Link>
                        <Link to="/ContactUs" className="contact-us"><li>Contact Us</li><IoIosArrowDown className="arrow-down"/></Link>
                        <Link to="" className="join-us"><li>Join Us</li><IoIosArrowDown className="arrow-down"/></Link>
                        
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