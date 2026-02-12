import { Nationalities } from "../Components/nationalities"
import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

export function Programes(){

   const { state } = useLocation();
const program = state?.program;

if (!program) return null;

    return(
        <div>
            <header>
                <h1>
                    {program.PROGRAMES}
                </h1>
            </header>
            <section>
                <div>
                    <aside><h3>KEY INFORMATION</h3></aside>
                    <div className="inset">
                        <div className="language"><h3>Turkish</h3></div>
                        <div className="year"><h3>1 Year</h3></div>
                        <div className="duration"><h3>Full-Time</h3></div>
                    </div>
                    <h2><span>Program</span>Available</h2>
                    <div className="tution"><h2>Tution: <span>$350 Per level</span></h2></div>
                    <div className="discounted"><h2>Discounted Tution: <span>$350 Per level</span></h2></div>
                </div>
                <div>
                    <h1>Applying is as easy as filling this form...</h1>
                    <form action="">
                        <div>
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="firstname" id="firstname"  placeholder="Name"/>
                            <label htmlFor="name">Last Name</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
                        </div>
                        <div>
                            <label htmlFor="name">Email</label>er
                            <input type="email" name="email" id="email"  placeholder="Email"/>
                            <label htmlFor="name">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="+XX"/>
                        </div>
                        <Nationalities />
                        <div>
                            <label htmlFor="program">Programe</label>
                            <input type="text" />
                        </div>
                        <div>
                            <div className="program-level">
                                <h4>Program Level</h4>
                                <p>TOMER</p>
                                <p>Associate</p>
                                <p>Bachelor</p>
                                <p>Master</p>
                                <p>PHD/Doctorate</p>
                            </div>
                            <div className="language-of-instruction">
                                <h4>Language of Instruction</h4>
                                <p>English</p>
                                <p>Turkish</p>

                            </div>
                        </div>
                    </form>
                    <button><p>Submit</p></button>
                </div>
                
            </section>
        </div>
    )
}