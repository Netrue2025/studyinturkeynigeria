import "../Styles/hero.css"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import { RxDividerHorizontal } from "react-icons/rx";

export function Hero(){
    return(
        <div className="outer-con">
            <section className="hero-container">
                <h1>YOUR DREAM UNIVERSITY</h1>

                <div className="hero-contents">
                    <p><RxDividerHorizontal className="divider"/> Welcome to Study in Turkiye Nigeria</p>

                    <h3>Dream. Achieve.</h3>
                    <h2>Succeed.</h2>

                    <button>
                        <Link to={"/Universities"} className="btn-link">Find Your Dream University <FaArrowRightLong className="arrow-right"/></Link>
                    </button>

                    {/* Mobile Button */}
                    <button className="mobile-btn">
                        <Link to={"/"} className="btn-link">Browse Universities</Link>
                    </button>
                </div>
            
            </section>
        </div>
    )
}