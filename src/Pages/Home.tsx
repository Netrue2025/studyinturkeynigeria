import { Link } from "react-router-dom"
import { TopNavOne } from "../Components/TopNavOne"

export function Home() {
  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <div className="contents-container">
          <h1>Home</h1>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/Universities"><li>Universities</li></Link>
            <Link to="/ProgrameFinder"><li>Programe Finder</li></Link>
            <Link to="/ContactUs"><li>Contact Us</li></Link>
            <Link to="/SetUpMeetingStudent"><li>Setup a Meeting - Student </li></Link>
            <Link to="/BecomeAnAgent"><li>Become an Agent</li></Link>
            <Link to="/SetUpMeetingAgent"><li>Setup a Meeting - Agent</li></Link>
            <Link to="/BecomeAPartnerUniversity"><li>Become a Partner University</li></Link>
            
          </ul>
        </div>
      </div>
    </>
  )
}

