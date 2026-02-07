import { InlineWidget } from "react-calendly";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import "../Styles/SetupMeetingAgent.css"
import { motion } from "framer-motion";

export function SetUpMeetingStudent() {


  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <TopNavTwo />

        <div className="contents-container">
          <div className="header-section">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <div className="part-one">
                <figure >
                  <img src="/images/logo.png" alt="Company Logo"/>
                </figure>
          
                  <h2>Setup a Meeting! - Students</h2>
                
              </div>
            </motion.div>
         
              <div className="part-two">
                <p>If you’re a student with questions or points you would like to discuss, please schedule a meeting with a representative today.</p>
              </div>
            
          </div>

          <div style={{ height: "700px" }}>
            <InlineWidget url="https://calendly.com/netrue-info/30min" />
          </div>
        </div>
          
      </div>
    </>
  )
}