import { HashRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./Pages/Home"
import { BecomeAnAgent } from "./Pages/BecomAnAgent"
import { BecomeAPartnerUniversity } from "./Pages/BecomeAPartnerUniversity"
import { ContactUs } from "./Pages/ContactUs"
import { ProgrameFinder } from "./Pages/ProgrameFinder"
import { SetUpMeetingAgent } from "./Pages/SetUpAMeetingAgent"
import { SetUpMeetingStudent } from "./Pages/SetUpaMeetingStudent"
import { Universities } from "./Pages/Universities"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/BecomeAnAgent" element={<BecomeAnAgent />}></Route>
          <Route path="/BecomeAPartnerUniversity" element={<BecomeAPartnerUniversity />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/ProgrameFinder" element={<ProgrameFinder />}></Route>
          <Route path="/SetUpMeetingAgent" element={<SetUpMeetingAgent />}></Route>
          <Route path="/SetUpMeetingStudent" element={<SetUpMeetingStudent />}></Route>
          <Route path="/Universities" element={<Universities />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
