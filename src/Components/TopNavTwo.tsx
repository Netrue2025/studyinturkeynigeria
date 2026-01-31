import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import "../Styles/TopNavTwo.css"
import { FaArrowRight } from "react-icons/fa";

export function TopNavTwo(){
    return(
        <div>
            <section className="top-nav-two">
                <div className="list-menu">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/Universities"><li>Universities</li></Link>
                        <Link to="/ProgrameFinder"><li>Programe Finder</li></Link>
                        <Link to="/ContactUs"><li>Contact Us</li></Link>
                        <Link to=""><li>Join Us</li></Link>
                        
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