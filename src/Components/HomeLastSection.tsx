import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../Styles/HomeLastSection.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export function HomeLastSection(){
    return(
        <div className="last-section-cointainer">
            <section className="last-section">
                <div className="part-one">
                    <h1>Setup a <span>Meeting</span> </h1>
                    <p>Whether you're exploring study options or representing an agency/institution, we're here to help. Set up a meeting and start turning plans into progress.</p>
                    <button>
                        <Link to={"/ContactUs"}>Or Contact Us Instead</Link>
                    </button>
                </div>
                <div className="part-two">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="motion"
                    >
                        <div className="card-one">
                            <figure>
                                <CiUser className="user"/>
                            </figure>
                            <h2>Meetings for Students</h2>
                            <p>
                                Planning to study in Türkiye? Discuss your options by scheduling a meeting with a representative today.
                            </p>
                            <button>
                                <Link to={"/SetUpMeetingStudent"} className="link">Setup A Meeting <FaArrowRightLong className="arrow-right"/></Link>
                            </button>
                        </div>                    
                        <div className="card-two">
                            <figure>
                                <CiUser className="user"/>
                            </figure>
                            <h2>Meetings for Agents</h2>
                            <p>
                                Partner with confidence. Schedule a meeting to discuss opportunities, collaboration, and support.
                            </p>
                            <button>
                                <Link to={"/SetupMeetingAgent"} className="link">Setup A Meeting <FaArrowRightLong className="arrow-right"/></Link>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}